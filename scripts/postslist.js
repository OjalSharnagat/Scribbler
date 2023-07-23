 // Get all the ellipsis icons inside the post cards
 const ellipsisIcons = document.querySelectorAll('.card-ellipsis i');

 // Add click event listener to each ellipsis icon
 ellipsisIcons.forEach((icon, index) => {
   icon.addEventListener('click', (event) => {
     // Stop the default click behavior of the ellipsis icon (optional)
     event.preventDefault();

     // Get the parent post card element
     const card = icon.closest('.postCard, .centered-card');

     // Extract the content from the parent post card
     const author = card.querySelector('.postCard-left p').innerText;
     const title = card.querySelector('.card-title p').innerText;
     const para = card.querySelector('.card-para').innerText;

     // Generate the complete content as a string
     const content = `Author: ${author}\n\nTitle: ${title}\n\n${para}`;

     // Open a new tab and navigate to the post.html page with content as URL parameters
     const newTab = window.open(`post.html?content=${encodeURIComponent(content)}&index=${index}`);
   });
 });

 