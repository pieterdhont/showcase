console.log('javascript is awesome!');

// Event listener for each widget
document.querySelectorAll('.grid__widget').forEach(widget => {
  widget.addEventListener('click', () => {
    console.log('Widget clicked');
  });
});

// Event listener for 'View Code' links inside widgets
document.querySelectorAll('.grid__widget .code-link').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevents the default action of the link
    event.stopPropagation(); // Prevents the widget click event from firing
    console.log('View Code link clicked');
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById('year');
  yearElement.textContent = currentYear;
});



document.addEventListener('DOMContentLoaded', (event) => {
  const toggleButton = document.getElementById('toggle-button');
  const doorsContainer = document.getElementById('sliding-doors-container');
  const doors = doorsContainer.querySelectorAll('.door');

  // Function to toggle doors open and closed
  function toggleDoors() {
    doorsContainer.classList.toggle('doors-open');
  }

  // Click event listener for the toggle button and doors
  toggleButton.addEventListener('click', toggleDoors);
  doors.forEach(door => door.addEventListener('click', toggleDoors));

  // Hover event listeners for the doors container
  doorsContainer.addEventListener('mouseover', () => {
    // Only add the hovered class if the doors are not open
    if (!doorsContainer.classList.contains('doors-open')) {
      doorsContainer.classList.add('hovered');
    }
  });

  doorsContainer.addEventListener('mouseout', () => {
    doorsContainer.classList.remove('hovered');
  });

  // Listen for the end of the transform transition on the doors
  doorsContainer.addEventListener('transitionend', (event) => {
    if (event.propertyName === 'transform' && doorsContainer.classList.contains('doors-open')) {
      // When doors are open, ensure the hovered class is not present
      doorsContainer.classList.remove('hovered');
    }
  });
});




    