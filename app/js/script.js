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
  const content = doorsContainer.querySelector('#content'); // Select the content
  const developerSpan = document.querySelector('.developer');

  let doorsAreOpening = false; // To track the state of door animation

  const showRoughAnnotation = () => {
    const annotation = RoughNotation.annotate(developerSpan, { type: 'highlight', color: 'red' });
    annotation.show();
  };

  function toggleDoors() {
    doorsContainer.classList.toggle('doors-open');
    doorsAreOpening = doorsContainer.classList.contains('doors-open');

    if (doorsAreOpening) {
      content.style.display = 'block'; // Show content immediately when doors are opening
    }
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

   doorsContainer.addEventListener('transitionend', (event) => {
    if (event.propertyName === 'transform') {
      if (doorsAreOpening) {
        // Show the annotation when doors are fully opened
        showRoughAnnotation();
      } else {
        content.style.display = 'none'; // Hide content only when doors are fully closed
      }
      doorsContainer.classList.remove('hovered');
    }
  });
});




    