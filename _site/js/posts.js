var posts=[];
 
var index = lunr(function () {
    this.field('title', {boost: 10})
    this.field('excerpt')
    this.field('url')
    this.field('thumbnail')
    this.ref('id')
});

for(var i=0;i<posts.length;i++) {
    var post=posts[i];
    if(post.title.search(/workshop/i)==-1) {
        index.add({
            id: i,
            title: post.title,
            excerpt: post.excerpt,
            url: post.url
        });
    }
}
