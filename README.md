# Translation Tool API Web

Welcome to the Translation Tool API Web repository. This project provides a simple web-based translation tool that allows users to translate text between various languages using Google Translate API.

## Features

- **Language Translation**: Supports translation between English, Hindi, Russian, Chinese, Japanese, French, Tamil, Telugu, Sanskrit, Bengali, Nepali, Marathi, Gujarati, Urdu, Arabic, Afrikaans, German, Italian, and Kannada.
- **Theme Switching**: Includes a dark mode and light mode feature.
- **AutoDetect Language**: Automatically detects the language of the input text.
- **Responsive Design**: Compatible with various devices and screen sizes.

## Getting Started

To get started with this project, you need to have a basic understanding of HTML, CSS, and JavaScript. Follow the steps below to run the project locally:

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Safari)
- Internet connection

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/harshitj183/Translation-Tool-APIWEB.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Translation-Tool-APIWEB
    ```

3. Open `index.html` in your preferred web browser.

### Usage

1. **Enter Text**: Type or paste the text you want to translate into the text area.
2. **Select Languages**: Choose the source and destination languages from the dropdown menus.
3. **Translate**: Click the "Translate" button to perform the translation.
4. **Change Theme**: Click the theme switcher button to toggle between light and dark modes.

### API Details

The translation functionality uses the Google Translate API. The endpoint used for translation is:

https://translate.googleapis.com/translate_a/single?client=gtx&sl=${srcLanguage}&tl=${destLanguage}&dt=t&q=${encodeURIComponent(text)}




### Customization

- **CSS**: Modify `style.css` to change the appearance and themes.
- **JavaScript**: Update `script.js` to modify or enhance the functionality.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Contact

For any questions or feedback, feel free to reach out to me at [harshitj183@gmail.com](mailto:harshitj183@gmail.com).

---

Thank you for checking out this project!
