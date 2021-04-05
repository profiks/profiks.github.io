export default class FullBleedBanner {
    init() {
        const self = this;
        const scrollAnchors = document.querySelectorAll(".js-scroll-to-section");

        [].forEach.call(scrollAnchors, (anchor) => {
            anchor.addEventListener("click", (ev) => {
                ev.preventDefault();
                const $targetEl = anchor.getAttribute("data-target");
                const { offsetTop } = document.querySelector($targetEl);

                scroll({
                    top: offsetTop - 70,
                    behavior: "smooth",
                });
            });
        });

        window.addEventListener("scroll", () => {
            self.parallaxAnimateScroll();
        }, { passive: true });
    }

    parallaxAnimateScroll() {
        const parallaxElements = document.querySelectorAll(".js-scroll-animate-logo");

        [].forEach.call(parallaxElements, (element) => {
            const position = window.pageYOffset * element.getAttribute("data-rate");
            const limit = element.getAttribute("data-limit");

            element.style.transform = `translate3d(0, ${position}px, 0)`;

            if (position <= limit) {
                element.style.opacity = 1 - position / limit;
            }
        });
    }
}
