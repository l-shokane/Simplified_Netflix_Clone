// Description: This file contains the javascript code for the index.html file.
document.addEventListener('DOMContentLoaded', () => {
    
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const videoWrapper = event.target.closest('.video-info').previousElementSibling;
            const iframe = videoWrapper.querySelector('iframe');

            
            if (iframe.src.includes('autoplay=1')) {
                iframe.src = iframe.src.replace('autoplay=1', 'autoplay=0');
            } else {
                iframe.src += '?autoplay=1';
            }
        });
    });

    
    const videoTiles = document.querySelectorAll('.video-title');
    videoTiles.forEach(tile => {
        tile.addEventListener('click', (event) => {
            const videoTitle = event.target.innerText;

            
            showVideoDetails(videoTitle);
        });
    });
});


function showVideoDetails(title) {
    const modal = document.getElementById('videoModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    

    modalTitle.textContent = title;
    modalContent.textContent = `Geralt of Rivia, a brooding professional monster hunter for hire also known as witcher, struggles to keep his humanity in a medieval dark fantasy world ruled by corrupt kings, queens and mages, where poverty, violence and intolerance are rampant, normal humans are sometimes worse than actual monsters and most jobs that`;

    modal.style.display = 'block';
}


document.getElementById('closeModal').addEventListener('click', () => {
    const modal = document.getElementById('videoModal');
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('videoModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

