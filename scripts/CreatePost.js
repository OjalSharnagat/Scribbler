var PostModal = document.getElementById("createPost");

var createBtn = document.getElementById("createPostBtn");

var span = document.getElementsByClassName("closeModal")[0];

createBtn.onclick = function() {
    PostModal.style.display = "flex";
}    

span.onclick = function() {
    PostModal.style.display = "none";
}    

