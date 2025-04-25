import { langSwitcher } from "./js/languageSwitcher";
import { notification } from "./js/izitoast";
import { sendMessageToEmail } from "./js/sendMessage"; 
import downloadResume from "./js/resumeDownload";


window.addEventListener('DOMContentLoaded', async () => {
    langSwitcher();
    notification()
    sendMessageToEmail()
     const btn = document.getElementById('resume');
  if (btn) {
    btn.addEventListener('click', downloadResume);
  }
});