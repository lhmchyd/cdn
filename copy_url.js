// Function to copy the current URL to clipboard
function copyCurrentUrl() {
  var currentUrl = window.location.href; // Get the current URL
  navigator.clipboard.writeText(currentUrl); // Copy URL to clipboard

  // Optionally, provide some user feedback
  alert("Copied to clipboard: " + currentUrl);
}

// Attach the copyCurrentUrl function to the element with ID 'menu-copyUrl'
document.getElementById('menu-copyUrl').onclick = copyCurrentUrl;
