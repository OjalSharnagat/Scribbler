// Function to parse URL parameters
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  // Get the URL parameters
  const content = getParameterByName('content');
  const index = getParameterByName('index');

  // Extract the individual values
  const author = content.match(/Author: (.*?)\n/)[1];
  const title = content.match(/Title: (.*?)\n/)[1];
  const para = content.replace(/Author: .*?\n\nTitle: .*?\n\n/, '');

  // Display the values in their respective divs
  document.getElementById('author').innerText = author;
  document.getElementById('title').innerText = title;
  document.getElementById('para').innerText = para;


  
  document.addEventListener('DOMContentLoaded', function() {
    // Get the necessary elements
    const likeButton = document.querySelector('.like-btn');
    const likeStatement = document.querySelector('.like-statement');
  
    // Variable to keep track of the number of likes
    let likeCount = 0;
  
    // Function to update the like statement
    function updateLikeStatement() {
      if (likeCount === 0) {
        likeStatement.textContent = "Be the first one to like this!";
      } else if (likeCount === 1) {
        likeStatement.textContent = "1 person likes this!";
      } else {
        likeStatement.textContent = `${likeCount} people like this!`;
      }
    }
  
    // Function to handle the like button click
    function handleLikeClick() {
      likeCount++;
      updateLikeStatement();
      likeButton.textContent = "Liked";
    }
  
    // Attach event listener to the like button
    likeButton.addEventListener('click', handleLikeClick);
  });
  

  // --------------DISPLAYING COMMENTS--------------
  
  // Wait for the DOM to load
  document.addEventListener("DOMContentLoaded", function () {
    // Get references to relevant elements
    const commentBox = document.querySelector(".comment-box");
    const commentBtn = document.querySelector(".comment-btn");
    const allCommentsSection = document.querySelector(".all-comments");

    // Add click event listener to the comment button
    commentBtn.addEventListener("click", function () {
      // Get the user's typed comment from the comment box
      const commentText = commentBox.value.trim();

      // Check if the comment is not empty
      if (commentText !== "") {
        // Create a new paragraph element to display the comment
        const commentParagraph = document.createElement("p");
        commentParagraph.textContent = commentText;
        commentParagraph.classList.add("comment-text");

        // Append the comment paragraph to the "All Comments" section
        allCommentsSection.appendChild(commentParagraph);

        // Clear the comment box after the comment is added
        commentBox.value = "";
      }
    });
  });

