import iziToast from "izitoast";
import i18next from "i18next";
import "izitoast/dist/css/iziToast.min.css";

export function notification() {
    const currentLang = i18next.language;

    iziToast.show({
        title: currentLang === "ua" ? "Ви можете змінити мову на Eng" : "U can change language to Ukrainian",
        position: "topRight",
        timeout: 10000,
    });
}
