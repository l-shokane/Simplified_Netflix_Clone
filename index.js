// Description: This file contains the javascript code for the index.html file.
document.addEventListener('DOMContentLoaded', () => {
    // Get the user's email from local storage
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const videoWrapper = event.target.closest('.video-info').previousElementSibling;
            const iframe = videoWrapper.querySelector('iframe');

            // Check if the iframe src contains autoplay=1
            if (iframe.src.includes('autoplay=1')) {
                iframe.src = iframe.src.replace('autoplay=1', 'autoplay=0');
            } else {
                iframe.src += '?autoplay=1';
            }
        });
    });

    // Get the user's email from local storage
    const videoTiles = document.querySelectorAll('.video-title');
    videoTiles.forEach(tile => {
        tile.addEventListener('click', (event) => {
            const videoTitle = event.target.innerText;

            // Show the video details modal
            showVideoDetails(videoTitle);
        });
    });
});

// Function to show the video details modal
function showVideoDetails(title) {
    const modal = document.getElementById('videoModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    // Set the title and content of the modal
    modalTitle.textContent = title;
    modalContent.textContent = `Geralt of Rivia, a brooding professional monster hunter for hire also known as witcher, struggles to keep his humanity in a medieval dark fantasy world ruled by corrupt kings, queens and mages, where poverty, violence and intolerance are rampant, normal humans are sometimes worse than actual monsters and most jobs that`;

    modal.style.display = 'block';
}

// Add an event listener to the close button
document.getElementById('closeModal').addEventListener('click', () => {
    const modal = document.getElementById('videoModal');
    modal.style.display = 'none';
});
// Add an event listener to the window
window.addEventListener('click', (event) => {
    const modal = document.getElementById('videoModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

