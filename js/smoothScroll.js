const smoothScroll = () => {
  gsap.registerPlugin(ScrollToPlugin);

  const page = document.querySelector(".l-page");

  page.addEventListener("click", event => {
    const targetAnchor = event.target.closest("a.js-anchor");
    if (!targetAnchor) return;

    event.preventDefault();
    gsap.to(window, {
      duration: 1.5,
      scrollTo: targetAnchor.href.substring(targetAnchor.href.lastIndexOf("#")),
    });
  });
};
