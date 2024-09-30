import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { r as removeBase, i as isRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_pkTuGmSk.mjs';
import { c as createComponent, h as renderUniqueStylesheet, i as renderScriptElement, j as createHeadAndContent, r as renderTemplate, d as renderComponent, u as unescapeHTML } from './astro/server_Bb6plhSS.mjs';
import 'kleur/colors';
import * as devalue from 'devalue';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/47-plantas-caps.md": () => import('./47-plantas-caps_Dcnmah_3.mjs'),"/src/content/blog/47-plantas-liq.md": () => import('./47-plantas-liq_Bh8LRWLv.mjs'),"/src/content/blog/asthma-bronq-liq.md": () => import('./asthma-bronq-liq_BPuSk5pf.mjs'),"/src/content/blog/berro-liquido.md": () => import('./berro-liquido_DqjyHXCO.mjs'),"/src/content/blog/castano-indias-caps.md": () => import('./castano-indias-caps_z4l2WHat.mjs'),"/src/content/blog/centella-asiatica-caps.md": () => import('./centella-asiatica-caps_CU_r0lL-.mjs'),"/src/content/blog/chancapiedra-caps.md": () => import('./chancapiedra-caps_8gD5LyHJ.mjs'),"/src/content/blog/colageno-caps.md": () => import('./colageno-caps_o6Wgx_up.mjs'),"/src/content/blog/colon-plus-caps.md": () => import('./colon-plus-caps_D9zFulUq.mjs'),"/src/content/blog/colon-plus-liq.md": () => import('./colon-plus-liq_Css2cdO7.mjs'),"/src/content/blog/colon-saludable-caps.md": () => import('./colon-saludable-caps_DJDgLUai.mjs'),"/src/content/blog/colon-saludable-liq.md": () => import('./colon-saludable-liq_DcGLlHVM.mjs'),"/src/content/blog/daflonx-caps.md": () => import('./daflonx-caps_CddECUVa.mjs'),"/src/content/blog/diabet-forte-caps.md": () => import('./diabet-forte-caps_DLTUFml-.mjs'),"/src/content/blog/elixir-antinervioso-caps.md": () => import('./elixir-antinervioso-caps_BGuLHiTL.mjs'),"/src/content/blog/elixir-antinervioso-liq.md": () => import('./elixir-antinervioso-liq_CX6Lj2UT.mjs'),"/src/content/blog/elixir-ginecologico-caps.md": () => import('./elixir-ginecologico-caps_D3gPYPfq.mjs'),"/src/content/blog/elixir-ginecologico-liq.md": () => import('./elixir-ginecologico-liq_By4FDYeg.mjs'),"/src/content/blog/escoba-carnicero-caps.md": () => import('./escoba-carnicero-caps_Dbwy6Rxl.mjs'),"/src/content/blog/ginkgo-biloba-caps.md": () => import('./ginkgo-biloba-caps_DEZtXLsp.mjs'),"/src/content/blog/hemorroids-caps.md": () => import('./hemorroids-caps_u0f_b0fX.mjs'),"/src/content/blog/higado-graso-caps.md": () => import('./higado-graso-caps_Dexvf1O5.mjs'),"/src/content/blog/higado-graso-liquido.md": () => import('./higado-graso-liquido_DR9ZGZgC.mjs'),"/src/content/blog/lochita-caps.md": () => import('./lochita-caps_CBLAxCR8.mjs'),"/src/content/blog/name-salvaje-caps.md": () => import('./name-salvaje-caps_BTKsBUjH.mjs'),"/src/content/blog/palo-arco-caps.md": () => import('./palo-arco-caps_Dk_x7sxq.mjs'),"/src/content/blog/pierda-barriga-caps.md": () => import('./pierda-barriga-caps_CQAtjUwZ.mjs'),"/src/content/blog/prostavid-caps.md": () => import('./prostavid-caps_DF4fqVoM.mjs'),"/src/content/blog/prostavid-liq.md": () => import('./prostavid-liq_BuDdodjH.mjs'),"/src/content/blog/rinonex-liquido-liq.md": () => import('./rinonex-liquido-liq_e15bPG_m.mjs'),"/src/content/blog/sangre-toro-liq.md": () => import('./sangre-toro-liq_DJiyBXcV.mjs'),"/src/content/blog/saw-palmetto-caps.md": () => import('./saw-palmetto-caps_CdTS3eBf.mjs'),"/src/content/blog/siempre-joven-liq.md": () => import('./siempre-joven-liq_ayKXX3wC.mjs'),"/src/content/blog/totumo-liq.md": () => import('./totumo-liq_B2cEL1da.mjs'),"/src/content/blog/vida-mujer-caps.md": () => import('./vida-mujer-caps_V8LIOgqy.mjs'),"/src/content/blog/vino-potencial-caps.md": () => import('./vino-potencial-caps_D9nLM6AW.mjs'),"/src/content/blog/vino-potencial-liq.md": () => import('./vino-potencial-liq_BBpjyh7d.mjs'),"/src/content/blog/zarzaparrilla-caps.md": () => import('./zarzaparrilla-caps_Bo--KLpI.mjs'),"/src/content/blog/zarzaparrilla-liq.md": () => import('./zarzaparrilla-liq_PnK622rh.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"47-plantas-caps":"/src/content/blog/47-plantas-caps.md","47-plantas-liq":"/src/content/blog/47-plantas-liq.md","asthma-bronq-liq":"/src/content/blog/asthma-bronq-liq.md","berro-liquido":"/src/content/blog/berro-liquido.md","castano-indias-caps":"/src/content/blog/castano-indias-caps.md","centella-asiatica-caps":"/src/content/blog/centella-asiatica-caps.md","chancapiedra-caps":"/src/content/blog/chancapiedra-caps.md","colageno-caps":"/src/content/blog/colageno-caps.md","colon-plus-caps":"/src/content/blog/colon-plus-caps.md","colon-plus-liq":"/src/content/blog/colon-plus-liq.md","colon-saludable-caps":"/src/content/blog/colon-saludable-caps.md","colon-saludable-liq":"/src/content/blog/colon-saludable-liq.md","daflonx-caps":"/src/content/blog/daflonx-caps.md","diabet-forte-caps":"/src/content/blog/diabet-forte-caps.md","elixir-antinervioso-caps":"/src/content/blog/elixir-antinervioso-caps.md","elixir-antinervioso-liq":"/src/content/blog/elixir-antinervioso-liq.md","elixir-ginecologico-caps":"/src/content/blog/elixir-ginecologico-caps.md","elixir-ginecologico-liq":"/src/content/blog/elixir-ginecologico-liq.md","escoba-carnicero-caps":"/src/content/blog/escoba-carnicero-caps.md","ginkgo-biloba-caps":"/src/content/blog/ginkgo-biloba-caps.md","hemorroids-caps":"/src/content/blog/hemorroids-caps.md","higado-graso-caps":"/src/content/blog/higado-graso-caps.md","higado-graso-liquido":"/src/content/blog/higado-graso-liquido.md","lochita-caps":"/src/content/blog/lochita-caps.md","name-salvaje-caps":"/src/content/blog/name-salvaje-caps.md","palo-arco-caps":"/src/content/blog/palo-arco-caps.md","pierda-barriga-caps":"/src/content/blog/pierda-barriga-caps.md","prostavid-liq":"/src/content/blog/prostavid-liq.md","prostavid-caps":"/src/content/blog/prostavid-caps.md","rinonex-liquido-liq":"/src/content/blog/rinonex-liquido-liq.md","saw-palmetto-caps":"/src/content/blog/saw-palmetto-caps.md","sangre-toro-liq":"/src/content/blog/sangre-toro-liq.md","siempre-joven-liq":"/src/content/blog/siempre-joven-liq.md","totumo-liq":"/src/content/blog/totumo-liq.md","vida-mujer-caps":"/src/content/blog/vida-mujer-caps.md","vino-potencial-caps":"/src/content/blog/vino-potencial-caps.md","vino-potencial-liq":"/src/content/blog/vino-potencial-liq.md","zarzaparrilla-caps":"/src/content/blog/zarzaparrilla-caps.md","zarzaparrilla-liq":"/src/content/blog/zarzaparrilla-liq.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/47-plantas-caps.md": () => import('./47-plantas-caps_BOM0IPGG.mjs'),"/src/content/blog/47-plantas-liq.md": () => import('./47-plantas-liq_B8gvaUVo.mjs'),"/src/content/blog/asthma-bronq-liq.md": () => import('./asthma-bronq-liq_Dc2HWDxp.mjs'),"/src/content/blog/berro-liquido.md": () => import('./berro-liquido_Dp4d6Guf.mjs'),"/src/content/blog/castano-indias-caps.md": () => import('./castano-indias-caps_B5XZq6Y7.mjs'),"/src/content/blog/centella-asiatica-caps.md": () => import('./centella-asiatica-caps_XT2dxQCI.mjs'),"/src/content/blog/chancapiedra-caps.md": () => import('./chancapiedra-caps_CnINhdUE.mjs'),"/src/content/blog/colageno-caps.md": () => import('./colageno-caps_BHh6ZQJ9.mjs'),"/src/content/blog/colon-plus-caps.md": () => import('./colon-plus-caps_CWz6ew5i.mjs'),"/src/content/blog/colon-plus-liq.md": () => import('./colon-plus-liq_4Da2Bylz.mjs'),"/src/content/blog/colon-saludable-caps.md": () => import('./colon-saludable-caps_DWLkaPwW.mjs'),"/src/content/blog/colon-saludable-liq.md": () => import('./colon-saludable-liq_B5mzXhqO.mjs'),"/src/content/blog/daflonx-caps.md": () => import('./daflonx-caps_CQtYyc5q.mjs'),"/src/content/blog/diabet-forte-caps.md": () => import('./diabet-forte-caps_Ckm9NmGb.mjs'),"/src/content/blog/elixir-antinervioso-caps.md": () => import('./elixir-antinervioso-caps_C9_OqrWq.mjs'),"/src/content/blog/elixir-antinervioso-liq.md": () => import('./elixir-antinervioso-liq_C0hsyavj.mjs'),"/src/content/blog/elixir-ginecologico-caps.md": () => import('./elixir-ginecologico-caps_DyT9H85k.mjs'),"/src/content/blog/elixir-ginecologico-liq.md": () => import('./elixir-ginecologico-liq_Cd7QV9w8.mjs'),"/src/content/blog/escoba-carnicero-caps.md": () => import('./escoba-carnicero-caps_Xvt7WTv_.mjs'),"/src/content/blog/ginkgo-biloba-caps.md": () => import('./ginkgo-biloba-caps_C345wcl-.mjs'),"/src/content/blog/hemorroids-caps.md": () => import('./hemorroids-caps_CeB4bW0K.mjs'),"/src/content/blog/higado-graso-caps.md": () => import('./higado-graso-caps_B08ZS6aq.mjs'),"/src/content/blog/higado-graso-liquido.md": () => import('./higado-graso-liquido_FrCHMk1k.mjs'),"/src/content/blog/lochita-caps.md": () => import('./lochita-caps_BKTogd0z.mjs'),"/src/content/blog/name-salvaje-caps.md": () => import('./name-salvaje-caps_BRxx45TQ.mjs'),"/src/content/blog/palo-arco-caps.md": () => import('./palo-arco-caps_REMzkHpH.mjs'),"/src/content/blog/pierda-barriga-caps.md": () => import('./pierda-barriga-caps_CBQPsbYM.mjs'),"/src/content/blog/prostavid-caps.md": () => import('./prostavid-caps_BkHqfr4W.mjs'),"/src/content/blog/prostavid-liq.md": () => import('./prostavid-liq_CxcE2THo.mjs'),"/src/content/blog/rinonex-liquido-liq.md": () => import('./rinonex-liquido-liq_Uwqp_v9X.mjs'),"/src/content/blog/sangre-toro-liq.md": () => import('./sangre-toro-liq_DxmeClsh.mjs'),"/src/content/blog/saw-palmetto-caps.md": () => import('./saw-palmetto-caps_BGv8h5Dv.mjs'),"/src/content/blog/siempre-joven-liq.md": () => import('./siempre-joven-liq_B46KnZtF.mjs'),"/src/content/blog/totumo-liq.md": () => import('./totumo-liq_DSZJq6FR.mjs'),"/src/content/blog/vida-mujer-caps.md": () => import('./vida-mujer-caps_DbI2Ne4L.mjs'),"/src/content/blog/vino-potencial-caps.md": () => import('./vino-potencial-caps_BXHSPMen.mjs'),"/src/content/blog/vino-potencial-liq.md": () => import('./vino-potencial-liq_Byyhze_L.mjs'),"/src/content/blog/zarzaparrilla-caps.md": () => import('./zarzaparrilla-caps_COSL7B2t.mjs'),"/src/content/blog/zarzaparrilla-liq.md": () => import('./zarzaparrilla-liq_Dv5W6f_B.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { getCollection as g };
