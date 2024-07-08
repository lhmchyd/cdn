// Function to search Google for selected text
function searchGoogleForSelectedText() {
    // Get the selected text
    var selectedText = window.getSelection().toString();
    
    // Check if any text is selected
    if (selectedText.length > 0) {
        var searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(selectedText); // Create Google search URL
        window.open(searchUrl, '_blank'); // Open the search URL in a new tab
    } else {
        console.log('No text selected');
        utils.snackbarShow('No text selected to search for', true, 2000); // Show snackbar for no selection
    }
}

// Attach the searchGoogleForSelectedText function to the element with ID 'menu-searchGoogle'
document.getElementById('menu-searchGoogle').onclick = searchGoogleForSelectedText;
