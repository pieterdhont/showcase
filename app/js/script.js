console.log("javascript is awesome!");

// Event listener for each widget
document.querySelectorAll(".grid__widget").forEach((widget) => {
  widget.addEventListener("click", () => {
    console.log("Widget clicked");
  });
});

// Event listener for 'View Code' links inside widgets
document.querySelectorAll(".grid__widget .code-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevents the default action of the link
    event.stopPropagation(); // Prevents the widget click event from firing
    console.log("View Code link clicked");
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById("year");
  yearElement.textContent = currentYear;
});

document.addEventListener("DOMContentLoaded", (event) => {
  const toggleButton = document.getElementById("toggle-button");
  const doorsContainer = document.getElementById("sliding-doors-container");
  const content = doorsContainer.querySelector("#content");
  const developerSpan = document.querySelector(".developer");
  const frontEndSpan = document.querySelector(".front-end");
  const backEndSpan = document.querySelector(".back-end");
  const scrumSpan = document.querySelector(".scrum");
  const entrySpan = document.querySelector(".entry");
  let doorsAreOpening = false;

  function showAnnotations() {
    // Clear any existing annotations
    if (window.developerAnnotation) {
      window.developerAnnotation.remove();
    }
    if (window.frontEndAnnotation) {
      window.frontEndAnnotation.remove();
    }
    if (window.backEndAnnotation) {
      window.backEndAnnotation.remove();
    }
    if (window.scrumAnnotation) {
      window.scrumAnnotation.remove();
    }
    if (window.entryAnnotation) {
      window.entryAnnotation.remove();
    }
    // Create the first annotation
    window.developerAnnotation = RoughNotation.annotate(developerSpan, {
      type: "box",
      color: "#62c6bc",
      animationDuration: 1000,
      padding: 0,
    });

    // Create the second annotation
    window.frontEndAnnotation = RoughNotation.annotate(frontEndSpan, {
      type: "highlight",
      color: "#ff7847",
      animationDuration: 800,
      padding: 0,
    });

    // Create the third annotation
    window.backEndAnnotation = RoughNotation.annotate(backEndSpan, {
      type: "highlight",
      color: "#ff7847",
      animationDuration: 800,
      padding: 0,
    });

    // Create the fourth annotation
    window.scrumAnnotation = RoughNotation.annotate(scrumSpan, {
      type: "circle",
      color: "#62c6bc",
      animationDuration: 800,
      padding: 5,
    });

    // Create the fifth annotation
    window.entryAnnotation = RoughNotation.annotate(entrySpan, {
      type: "underline",
      color: "#62c6bc",
      animationDuration: 800,
      padding: 0,
    });

    // Show the first annotation
    window.developerAnnotation.show();

    // Delay the second annotation
    setTimeout(() => {
      window.frontEndAnnotation.show();
    }, 600);

    // Delay the third annotation
    setTimeout(() => {
      window.backEndAnnotation.show();
    }, 1100);

    // Delay the fourth annotation
    setTimeout(() => {
      window.scrumAnnotation.show();
    }, 1700);

    // Delay the fifth annotation
    setTimeout(() => {
      window.entryAnnotation.show();
    }, 2300);
  }

  function toggleDoors() {
    doorsContainer.classList.toggle("doors-open");
    doorsAreOpening = doorsContainer.classList.contains("doors-open");

    if (doorsAreOpening) {
      content.style.display = "block"; // Show content when doors are opening
      showAnnotations(); // Show annotations
    } else {
      content.style.display = "none"; // Hide content only when doors are fully closed
    }
  }

  // Event listeners
  toggleButton.addEventListener("click", toggleDoors);
  doorsContainer
    .querySelectorAll(".door")
    .forEach((door) => door.addEventListener("click", toggleDoors));

  doorsContainer.addEventListener("mouseover", () => {
    if (!doorsContainer.classList.contains("doors-open")) {
      doorsContainer.classList.add("hovered");
    }
  });

  doorsContainer.addEventListener("mouseout", () => {
    doorsContainer.classList.remove("hovered");
  });
});
