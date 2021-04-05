import Glide from "@glidejs/glide";

export default class RecommendedProducts {
    init() {
        const sliders = document.querySelectorAll(".js-app-product-carousel");

        for (let i = 0; i < sliders.length; i++) {
            const glide = new Glide(sliders[i], {
                type: "carousel",
                perView: 4,
                gap: 32,
                breakpoints: {
                    1023: {
                        perView: 3,
                    },
                    767: {
                        perView: 2,
                    },
                    480: {
                        perView: 1,
                    },
                },
            });

            glide.mount();
        }
    }
}
