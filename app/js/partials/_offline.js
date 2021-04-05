export default class Offline {
    init() {
        const refresh = document.querySelector(".js-refresh-page");

        if (refresh) {
            refresh.addEventListener("click", () => {
                window.location.reload();
            });
        }

        window.addEventListener("online", () => {
            window.location.reload();
        });
    }
}
