
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id^='sec-']");
  const navItems = document.querySelectorAll("aside li");

  function onScroll() {
      let current = "";

      sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
              current = section.id;
          }
      });

      navItems.forEach(li => {
          li.classList.remove("active");
          const link = li.querySelector("a");
          if (link && link.getAttribute("href") === "#" + current) {
              li.classList.add("active");
          }
      });
  }

  window.addEventListener("scroll", onScroll);
  onScroll();
});