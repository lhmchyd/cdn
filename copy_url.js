// Function to copy the current URL to clipboard
function copyCurrentUrl() {
    var currentUrl = window.location.href; // Get the current URL
    navigator.clipboard.writeText(currentUrl)
        .then(function() {
            console.log('URL copied to clipboard');
            utils.snackbarShow('URL copied to clipboard', false, 2000); // Show snackbar notification
        })
        .catch(function(err) {
            console.error('Failed to copy: ', err);
            utils.snackbarShow('Failed to copy URL to clipboard. Please try again', true, 2000); // Show snackbar for failure
        });
}

// Attach the copyCurrentUrl function to the element with ID 'menu-copyUrl'
document.getElementById('menu-copyUrl').onclick = copyCurrentUrl;
