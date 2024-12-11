function copyEmail() {
    // deklariert die e-Mail addresse
    const EMAIL = 't.roth11@icloud.com';
    console.log(EMAIL);
    // kopiert die email-addresse in die Zwischenablage
    navigator.clipboard.writeText(EMAIL);
    // zeigt, dass die email-addresse in die zwischenablage kopiert wurde
    alert('copied E-Mail to clipboard');
}