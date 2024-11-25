export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}


export function stress(text) {
  return "palabra"
  // return text

    // .toString()
    // .toUpperCase()
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", { timeZone: "UTC" });
}

export function formatBlogPostsCollections(posts,{

filterOutDrafts = true,
filterOutFuturePosts =true,
sortByDate = true,
limit = undefined

} ={}){


const filteredPosts = posts.reduce((acc,post) => {

  // Replace frontmatter by .data

  const {date,draft} = post.data
  //filterOutDrafts if true
  if(filterOutDrafts && draft) return acc

  // filterOutFuturePosts if true
  if (filterOutFuturePosts && new Date(date) > new Date ())
  return acc

  // add post to acc
  acc.push(post)

  return acc
},[])

// sort by date or randomize

if (sortByDate)
{
filteredPosts.sort((a,b) => new Date (b.data.date)- new Date(a.data.date))

}
else{
filteredPosts.sort(() => Math.random() - 0.5)
}

// limit if number is passed

if (typeof limit === "number")
return filteredPosts.slice(0,limit)

return filteredPosts;



}

export function formatBlogPosts(posts,{

filterOutDrafts = true,
filterOutFuturePosts =true,
sortByDate = true,
limit = undefined

} ={}){


const filteredPosts = posts.reduce((acc,post) => {

  const {date,draft} = post.frontmatter
  //filterOutDrafts if true
  if(filterOutDrafts && draft) return acc

  // filterOutFuturePosts if true
  if (filterOutFuturePosts && new Date(date) > new Date ())
  return acc

  // add post to acc
  acc.push(post)

  return acc
},[])

// sort by date or randomize

if (sortByDate)
{
filteredPosts.sort((a,b) => new Date (b.frontmatter.date)- new Date(a.frontmatter.date))

}
else{
filteredPosts.sort(() => Math.random() - 0.5)
}

// limit if number is passed

if (typeof limit === "number")
return filteredPosts.slice(0,limit)

return filteredPosts;

}
