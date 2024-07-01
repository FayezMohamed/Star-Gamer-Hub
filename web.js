document.addEventListener("DOMContentLoaded", function() {
  // Get all buttons inside the slides container
  const buttons = document.querySelectorAll('.slides button');

  // Check the current URL to determine the current page
  let match = window.location.pathname.match(/part (\d+)\.html/);
  if (!match) {
    console.error('URL does not match the expected pattern');
  } else {
    let currentPage = parseInt(match[1]);

    // Highlight the corresponding button
    buttons.forEach(button => {
      let pageNumber = parseInt(button.textContent);
      if (pageNumber === currentPage) {
        button.classList.add('active'); // Add a class for highlighting
      }
    });
  }
});
