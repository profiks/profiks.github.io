import gsap from "gsap";

export default class Loader {
    constructor() {
        this.loader = document.querySelector(".js-loader");
    }

    init() {
        gsap.set(this.loader, {
            scaleX: 0,
            transformOrigin: "left center",
            autoAlpha: 1,
        });

        window.gsap = gsap;
    }

    getPageTransitionOut() {
        return gsap.fromTo(this.loader,
            {
                scaleX: 0,
                xPercent: 0,
            },
            {
                duration: 0.5,
                xPercent: 0,
                scaleX: 1,
                ease: "Power4.inOut",
                transformOrigin: "left center",
            });
    }

    getPgeTransitionIn() {
        return gsap.to(this.loader, {
            duration: 0.8,
            scaleX: 0,
            xPercent: 0,
            transformOrigin: "right center",
            ease: "Power4.inOut",
        });
    }
}
