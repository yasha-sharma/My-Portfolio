document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  const copyrightElement = document.getElementById("copyright-text");
  if (copyrightElement) {
    // Assuming you want to add a copyright notice
    copyrightElement.textContent = `© ${currentYear} Yasha Sharma. All Rights Reserved.`;
  }
});

// 1. Select ALL links with the class 'scroll-link'
const scrollLinks = document.querySelectorAll(".scroll-link");

// 2. Loop through the NodeList of links
scrollLinks.forEach((scrollLink) => {
  // 3. Add a click event listener to EACH link
  scrollLink.addEventListener("click", function (event) {
    // Prevent the default instant jump behavior of the anchor link
    event.preventDefault();

    // Get the target section's ID (e.g., "#contact-section" or "#go-to-top") from the href attribute
    const targetId = this.getAttribute("href");

    // Select the actual target section element using the ID
    const targetSection = document.querySelector(targetId);

    // Check if the target section exists before attempting to scroll
    if (targetSection) {
      // Scroll smoothly to the target section's position
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// --- Sticky Header Logic: Change color on scroll ---
const header = document.querySelector("header");
const scrollWatcher = new IntersectionObserver(
  (entries) => {
    // If the viewport is NOT intersecting with the top of the page (i.e., we have scrolled)
    if (!entries[0].isIntersecting) {
      header.classList.add("scrolled");
    } else {
      // If the viewport IS intersecting with the top (i.e., we are at the top)
      header.classList.remove("scrolled");
    }
  },
  { rootMargin: "-100px 0px 0px 0px" } // Start transition 100px from the top
);

// Target an element that starts at the very top of the page to watch
scrollWatcher.observe(document.querySelector("#go-to-top"));

// --- Go To Top Button Logic (REMOVED: Was requested to remove the button) ---

// --- Project View Button Logic ---
const viewButton = document.querySelectorAll(".btn-small");

viewButton.forEach((view) => {
  view.addEventListener("click", function (event) {
    event.preventDefault();
    const selectValue = this.getAttribute("id");

    // Existing Netlify demos (open in new tab)
    if (selectValue === "guess-my-number") {
      window.open("https://myguessnumbergame.netlify.app", "_blank");
    } else if (selectValue === "recipe") {
      window.open("https://indianreceipes.netlify.app/", "_blank");
    } else if (selectValue === "pig-game") {
      window.open("https://myamazingpiggame.netlify.app", "_blank");
    }
    // New GitHub links for Python projects (open in new tab)
    else if (selectValue === "snake-game") {
      window.open(
        "https://github.com/yasha-sharma/Python-Snake-Game",
        "_blank"
      );
    } else if (selectValue === "turtle-game") {
      window.open("https://github.com/yasha-sharma/turtle-race-game", "_blank");
    } else if (selectValue === "hirst-painting") {
      window.open(
        "https://github.com/yasha-sharma/Python-hirst-painting",
        "_blank"
      );
    } else if (selectValue === "quiz-game") {
      window.open(
        "https://github.com/yasha-sharma/Python-True-False-Quiz",
        "_blank"
      );
    }
    // Fallback for unhandled buttons
    else {
      console.error(
        `Error: Unhandled View button clicked with ID: ${selectValue}`
      );
    }
  });
});
