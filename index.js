function copyEmail() {
    const EMAIL = 't.roth11@icloud.com';
    console.log(EMAIL);
    alert('copied E-Mail to clipboard');
    navigator.clipboard.writeText(EMAIL);
}

document.addEventListener("DOMContentLoaded", (e) => {
    document.querySelectorAll(".nav-item").forEach((element) => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(element.getAttribute('href'));
            const scroll_id = element.getAttribute('href');
            if (scroll_id === "#") {
                scrollTo(0,0);
                return;
            }
            const new_element_pos = document.querySelector(scroll_id).getBoundingClientRect().top + document.documentElement.scrollTop;
            const navbar_height = document.querySelector(".navbar").getBoundingClientRect().height;
            console.log(new_element_pos);
            console.log(navbar_height);
            const new_scroll = new_element_pos - navbar_height;
            console.log(new_scroll)
            scrollTo(0, new_scroll)
            document.getElementById('main').scrollTop = new_scroll
        });
    })
}) 
