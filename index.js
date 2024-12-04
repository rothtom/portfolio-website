function copyEmail() {
    // deklariert die e-Mail addresse
    const EMAIL = 't.roth11@icloud.com';
    console.log(EMAIL);
    // kopiert die email-addresse in die Zwischenablage
    navigator.clipboard.writeText(EMAIL);
    // zeigt, dass die email-addresse in die zwischenablage kopiert wurde
    alert('copied E-Mail to clipboard');
}

// wird asgeführt, nachdem alle elemente der Websiete geladen sind
document.addEventListener("DOMContentLoaded", (e) => {
    // fügt jedem element mit der Klasse nav-item eine Funktion hunzu, die beim Anklicken asugeführt wird und überschreibt deren default wert
    document.querySelectorAll(".nav-item").forEach((element) => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(element.getAttribute('href'));
            const scroll_id = element.getAttribute('href');
            // wenn das element das home nav ding ist, soll man ganz nach oben scrollen
            if (scroll_id === "#") {
                scrollTo(0,0);
                return;
            }
            // erhält die absolute Höhe des elemennts, unabhängig von dem sichtbaren fenster
            const new_element_pos = document.querySelector(scroll_id).getBoundingClientRect().top + document.documentElement.scrollTop;
            // enthält die höhe der nav-bar
            const navbar_height = document.querySelector(".navbar").getBoundingClientRect().height;
            console.log(new_element_pos);
            console.log(navbar_height);
            // das element muss zei seiner position gescrollt werden, um ganz oben zu sein. und im die Höhe der nav-bar im nicht dahinter zu sein.
            const new_scroll = new_element_pos - navbar_height;
            console.log(new_scroll)
            // scrllt dann dort hin
            scrollTo(0, new_scroll);
        });
    });
});
