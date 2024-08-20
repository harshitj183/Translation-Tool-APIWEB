// script.js

document.getElementById("themeSwitcher").addEventListener("click", function() {
    const body = document.body;
    const themeBtn = document.getElementById("themeSwitcher");

    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        themeBtn.innerHTML = '<span class="material-icons">brightness_7</span> Light Mode';

        // Apply dark mode styles to textarea
        document.querySelector('textarea').classList.add('dark-mode');
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        themeBtn.innerHTML = '<span class="material-icons">brightness_4</span> Dark Mode';

        // Remove dark mode styles from textarea
        document.querySelector('textarea').classList.remove('dark-mode');
    }
});

document.getElementById("translateForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const text = document.getElementById("textToTranslate").value;
    const srcLanguage = document.getElementById("srcLanguage").value;
    const destLanguage = document.getElementById("destLanguage").value;

    // Use Google Translate API for simplicity
    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${srcLanguage}&tl=${destLanguage}&dt=t&q=${encodeURIComponent(text)}`)
        .then(response => response.json())
        .then(data => {
            const translatedText = data[0][0][0];
            document.getElementById("translatedText").innerText = translatedText;
        })
        .catch(error => {
            console.error("Error with translation:", error);
            document.getElementById("translatedText").innerText = "Translation failed.";
        });
});
