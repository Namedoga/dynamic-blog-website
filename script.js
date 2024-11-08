const blogPosts = [
    {
        title: "Blog # 1",
        content: "Full content."
    },

    {
        title: "Blog # 2",
        content: "Full content."
    },


    {
        title: "Blog # 2",
        content: "Full content."
    },
]


localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    function loadBlogPosts() {
        const postsContainer = document.getElementById('blog-posts');
        const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || []


    } 
