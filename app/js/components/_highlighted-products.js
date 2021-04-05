import Glide from "@glidejs/glide";

export default class HighlightedProducts {
    init() {
        const sliders = document.querySelectorAll(".js-app-product-highlighted");

        for (let i = 0; i < sliders.length; i++) {
            const glide = new Glide(sliders[i], {
                type: "carousel",
                perView: 1,
                gap: 32,
                autoplay: 3000,
            });

            glide.mount();
        }
    }
}
