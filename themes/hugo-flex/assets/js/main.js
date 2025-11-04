function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    const wrapper = document.querySelector(".mobile-wrapper");
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");

    menu.classList.toggle("show");
    wrapper.classList.toggle("menu-open");

    // Toggle button visibility
    const isMenuOpen = menu.classList.contains("show");
    openBtn.style.display = isMenuOpen ? "none" : "block";
    closeBtn.style.display = isMenuOpen ? "block" : "none";
  }

  function toggleMobileSubmenu(event, parent) {
    if (window.innerWidth > 1024) return;
    if (!parent.classList.contains("has-submenu")) return;
    const submenu = parent.querySelector(".mobile-submenu");
    if (!submenu) return;

    if (event.target.tagName === "A" && !parent.classList.contains("active")) {
      event.preventDefault();
    }

    document.querySelectorAll(".mobile-item.active").forEach((el) => {
      if (el !== parent) {
        el.classList.remove("active");
        el.querySelector(".mobile-submenu")?.classList.remove("show");
      }
    });

    submenu.classList.toggle("show");
    parent.classList.toggle("active");
  }

  document.addEventListener("DOMContentLoaded", function() {
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");
    closeBtn.style.display = "none"; // hide close button initially

    const currentUrl = window.location.pathname;
    function markActiveLinks(links, parentSelector, parentLinkClass) {
      links.forEach(link => {
        const linkUrl = new URL(link.href, window.location.origin).pathname;
        if (linkUrl === currentUrl) {
          link.classList.add("active");
          const parentItem = link.closest(parentSelector)?.querySelector(parentLinkClass);
          if (parentItem) parentItem.classList.add("active");
        }
      });
    }

    const desktopLinks = document.querySelectorAll(".Banner-link");
    markActiveLinks(desktopLinks, ".has-submenu", ".Banner-link");

    const mobileLinks = document.querySelectorAll("#mobileMenu a");
    markActiveLinks(mobileLinks, ".has-submenu", ".parent-link");
  });