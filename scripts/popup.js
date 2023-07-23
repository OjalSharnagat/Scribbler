// Get all trash icons
const trashIcons = document.querySelectorAll(".fa-trash");

// Get the popup window and buttons
const popupWindow = document.querySelector(".pop-up-window");
const yesButton = document.querySelector(".pop-up-action button:first-child");
const noButton = document.querySelector(".pop-up-action button:last-child");

// Function to show the popup window
function showPopup() {
  popupWindow.style.display = "block";
}

// Function to hide the popup window
function hidePopup() {
  popupWindow.style.display = "none";
}

// Function to delete the selected post card
function deletePostCard() {
  if (selectedPostCard) {
    selectedPostCard.remove();
    hidePopup();

    // Reassign centered-card class to the next post card in line
    const remainingCards = document.querySelectorAll(".postCard");
    if (remainingCards.length > 0) {
      remainingCards[0].classList.add("centered-card");
      remainingCards[0].classList.remove("postCard");
    }
  }
}

// Add click event listener to each trash icon
trashIcons.forEach((trashIcon) => {
  trashIcon.addEventListener("click", () => {
    selectedPostCard = trashIcon.closest(".postCard, .centered-card");
    showPopup();
  });
});

// Add click event listeners to the Yes and No buttons
yesButton.addEventListener("click", deletePostCard);
noButton.addEventListener("click", hidePopup);
