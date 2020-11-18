const smoothScroll = () => {
  gsap.registerPlugin(ScrollToPlugin);

  const page = document.querySelector(".l-page");

  page.addEventListener("click", event => {
    const targetAnchor = event.target.closest("a.js-anchor");
    if (!targetAnchor) return;

    event.preventDefault();

    const targetSection = targetAnchor.href.substring(targetAnchor.href.lastIndexOf("#"));
    if (targetSection.length < 2) return;

    gsap.to(window, { duration: 1.5, scrollTo: targetSection, ease: "power2.inOut" });
  });
};
