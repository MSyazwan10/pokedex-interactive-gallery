/**
 * Coursera: Interactivity with JavaScript
 * Peer-Graded Assignment: JavaScript Interactive Photo Gallery
 * 
 * Functions to handle mouse hover interactions for updating
 * and reverting the main photo gallery display.
 */

/**
 * Handles mouseover event on thumbnail images.
 * @param {HTMLElement} previewPic - The image element being hovered over.
 */
function upDate(previewPic) {
    // 1. Console confirmation that the event has triggered
    console.log("upDate event triggered successfully!");

    // 2. Print information about previewPic (alt text and source URL)
    console.log("Image Alt Text:", previewPic.alt);
    console.log("Image Source URL:", previewPic.src);

    // Grab reference to the target element with id of 'image'
    var imageDiv = document.getElementById('image');

    // 3. Update the text content of the #image div
    imageDiv.innerHTML = previewPic.alt;

    // 4. Update the background-image of the #image div
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/**
 * Handles mouseout event on thumbnail images.
 * Reverts the gallery frame to its original state.
 */
function undo() {
    // Grab reference to the target element with id of 'image'
    var imageDiv = document.getElementById('image');

    // 1. Reset background-image back to original empty state as per rubric Step 3.1
    imageDiv.style.backgroundImage = "url('images/pokedex-bg.png')";

    // 2. Reset text content back to original prompt as per rubric Step 3.2
    imageDiv.innerHTML = "Hover over an image below to display here.";

    console.log("undo event triggered: display restored to default.");
}
