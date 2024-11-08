
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

let posts = JSON.parse(localStorage.getItem('posts')) || [];
const post = posts.find(post => post.id == postId);

if (post) {
   
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-content').textContent = post.content;

    const postImage = document.getElementById('post-image');
    if (post.image) {
        postImage.src = post.image;
        postImage.style.display = 'block';
    }
} 


document.getElementById('delete-button').addEventListener('click', function() {
   
 
        posts.splice(postId, 1);
        localStorage.setItem('posts', JSON.stringify(posts));

    
        window.location.href = 'index.html';
    });
