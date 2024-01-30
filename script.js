const funnyButton = document.getElementById("funnyButton");

funnyButton.addEventListener("click", () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Generate random coordinates within screen boundaries
  const randomX = Math.random() * (screenWidth - funnyButton.offsetWidth);
  const randomY = Math.random() * (screenHeight - funnyButton.offsetHeight);

  // Move the button to the new position
  funnyButton.style.left = randomX + "px";
  funnyButton.style.top = randomY + "px";
});
