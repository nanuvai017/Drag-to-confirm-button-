const slider = document.getElementById('slider');
const dropZone = document.getElementById('drop-zone');
const status = document.getElementById('status');
const dragContainer = document.getElementById('drag-container');

// Add drag events to the slider
slider.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', '');
});

slider.addEventListener('drag', (e) => {
    if (e.clientX > dragContainer.offsetLeft && e.clientX < dragContainer.offsetLeft + dragContainer.offsetWidth) {
        slider.style.left = `${e.clientX - dragContainer.offsetLeft - slider.offsetWidth / 2}px`;
    }
});

slider.addEventListener('dragend', () => {
    const sliderPosition = slider.offsetLeft + slider.offsetWidth / 2;
    const dropZonePosition = dropZone.offsetLeft + dropZone.offsetWidth / 2;

    if (sliderPosition >= dropZonePosition - 10 && sliderPosition <= dropZonePosition + 10) {
        status.textContent = "Confirmed!";
        dropZone.style.display = "flex";  // Show confirmation message
    } else {
        slider.style.left = '0px'; // Reset slider position
        status.textContent = ""; // Clear the status
        dropZone.style.display = "none";  // Hide confirmation message
    }
});
  
