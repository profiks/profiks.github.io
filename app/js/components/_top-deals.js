import Glide from "@glidejs/glide";

export default class TopDeals {
    init() {
        const sliders = document.querySelectorAll(".js-app-top-deals-carousel");

        for (let i = 0; i < sliders.length; i++) {
            const glide = new Glide(sliders[i], {
                type: "carousel",
                perView: 2,
                gap: 32,
                autoplay: 3000,
                breakpoints: {
                    767: {
                        perView: 1,
                    },
                },
            });

            glide.mount();
        }
    }
}
