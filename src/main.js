import { langSwitcher } from "./js/languageSwitcher";
import { notification } from "./js/izitoast";
import { sendMessageToEmail } from "./js/sendMessage"; 


window.addEventListener('DOMContentLoaded', async () => {
    langSwitcher();
    notification()
    sendMessageToEmail()
});