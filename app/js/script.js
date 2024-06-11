console.log("javascript is awesome!");

// Event listener for each widget
document.querySelectorAll(".grid__widget").forEach((widget) => {
  widget.addEventListener("click", () => {
    // Retrieve the URL from the data-url attribute of the clicked widget
    const projectUrl = widget.getAttribute("data-url");
    // Redirect the user to the URL
    window.location.href = projectUrl;
    console.log("Widget clicked");
  });
});

// Event listener for 'View Code' links inside widgets
document.querySelectorAll(".grid__widget .code-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    // event.preventDefault(); // Prevents the default action of the link
    event.stopPropagation(); // Prevents the widget click event from firing
    console.log("View Code link clicked");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const typeWriter = document.getElementById('typewriter-text');
  const text = 'Pieter Dhont';

  typeWriter.innerHTML = text;
  typeWriter.style.setProperty('--characters', text.length);

  const annotationSettings = [
    { id: "developer", type: "box", color: "#62c6bc", delay: 0 },
    { id: "front-end", type: "highlight", color: "#ff7847", delay: 600 },
    { id: "back-end", type: "highlight", color: "#ff7847", delay: 1200 },
    { id: "scrum", type: "circle", color: "#62c6bc", delay: 1800, padding: 5 },
    { id: "entry", type: "underline", color: "#62c6bc", delay: 2400 }
  ];

  let annotations = [];

  const showAnnotations = () => {
    // Hide and remove previous annotations
    annotations.forEach(annotation => annotation.hide());
    annotations = [];

    // Create and show new annotations
    annotationSettings.forEach(({ id, type, color, delay, padding = 0 }) => {
      const span = document.querySelector(`.${id}`);
      const annotation = RoughNotation.annotate(span, { type, color, animationDuration: 800, padding });
      annotations.push(annotation);
      setTimeout(() => annotation.show(), delay);
    });
  };

  // Show annotations immediately when content is loaded
  showAnnotations();
});
