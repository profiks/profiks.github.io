import barba from "@barba/core";
import RecommendedProducts from "./components/_recommended-products";
import TopDeals from "./components/_top-deals";
import FullBleedBanner from "./components/_full-bleed-banner";
import HighlightedProducts from "./components/_highlighted-products";
import Loader from "./partials/_loader";
import Offline from "./partials/_offline";

const loader = new Loader();
const offline = new Offline();
const fullBleedBanner = new FullBleedBanner();
const recommendedProducts = new RecommendedProducts();
const topDeals = new TopDeals();
const highlightedProducts = new HighlightedProducts();

loader.init();
offline.init();
fullBleedBanner.init();
recommendedProducts.init();
topDeals.init();
highlightedProducts.init();

barba.hooks.enter(() => {
    window.scrollTo(0, 0);
});

barba.hooks.before(() => {
    document.querySelector("html").classList.add("is-transitioning");
});

barba.hooks.after(() => {
    document.querySelector("html").classList.remove("is-transitioning");

    offline.init();
    fullBleedBanner.init();
    recommendedProducts.init();
    topDeals.init();
    highlightedProducts.init();
});

barba.init({
    sync: false,
    transitions: [{
        leave() {
            const done = this.async();
            loader.getPageTransitionOut();

            setTimeout(() => {
                done();
            }, 800);
        },
        enter() {
            loader.getPgeTransitionIn();
        },
        once() {
            loader.getPgeTransitionIn();
        },
    }],
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("../sw.js")
            .then()
            .catch();
    });
}
