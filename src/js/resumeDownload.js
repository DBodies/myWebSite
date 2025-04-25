export default function downloadResume() {
    const link = document.createElement('a')
    link.href = '/resume/resume.pdf'
    link.download = 'Denis_Kovalevskiy_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}