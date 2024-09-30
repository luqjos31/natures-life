function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

function formatBlogPostsCollections(posts,{

filterOutDrafts = true,
filterOutFuturePosts =true,
sortByDate = true,
limit = undefined

} ={}){


const filteredPosts = posts.reduce((acc,post) => {

  // Replace frontmatter by .data

  const {date,draft} = post.data;
  //filterOutDrafts if true
  if(filterOutDrafts && draft) return acc

  // filterOutFuturePosts if true
  if (filterOutFuturePosts && new Date(date) > new Date ())
  return acc

  // add post to acc
  acc.push(post);

  return acc
},[]);

// sort by date or randomize

if (sortByDate)
{
filteredPosts.sort((a,b) => new Date (b.data.date)- new Date(a.data.date));

}
else {
filteredPosts.sort(() => Math.random() - 0.5);
}

// limit if number is passed

if (typeof limit === "number")
return filteredPosts.slice(0,limit)

return filteredPosts;



}

export { formatBlogPostsCollections as f, slugify as s };
