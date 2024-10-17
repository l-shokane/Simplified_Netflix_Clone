// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners to play buttons
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const videoWrapper = event.target.closest('.video-info').previousElementSibling;
            const iframe = videoWrapper.querySelector('iframe');

            // Get the current iframe src and toggle between play/pause by modifying the src
            if (iframe.src.includes('autoplay=1')) {
                iframe.src = iframe.src.replace('autoplay=1', 'autoplay=0');
            } else {
                iframe.src += '?autoplay=1';
            }
        });
    });

    // Add click events on video titles or thumbnails to show modal
    const videoTiles = document.querySelectorAll('.video-title');
    videoTiles.forEach(tile => {
        tile.addEventListener('click', (event) => {
            const videoTitle = event.target.innerText;

            // Show modal and display video details
            showVideoDetails(videoTitle);
        });
    });
});

// Function to show video details in a modal
function showVideoDetails(title) {
    const modal = document.getElementById('videoModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    // Set the modal title and content based on the video clicked
  modalTitle.textContent = title;
    modalContent.textContent = `Details for ${title}...`;

    // Show modal
    modal.style.display = 'block';
}

// Close the modal when user clicks on the close button
document.getElementById('closeModal').addEventListener('click', () => {
    const modal = document.getElementById('videoModal');
    modal.style.display = 'none';
});

// Close modal if clicked outside of it
window.addEventListener('click', (event) => {
    const modal = document.getElementById('videoModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

