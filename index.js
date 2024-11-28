function copyEmail() {
    const EMAIL = 't.roth11@icloud.com';
    console.log(EMAIL);
    alert('copied E-Mail to clipboard');
    navigator.clipboard.writeText(EMAIL);
}