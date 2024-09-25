function makeSmall() {
  const textBox = document.getElementById("textBox");
  textBox.value = textBox.value.toLowerCase();
}

function makeBig() {
  const textBox = document.getElementById("textBox");
  textBox.value = textBox.value.toUpperCase();
}

async function copyToClipboard() {
  const textBox = document.getElementById("textBox");
  if (!textBox) {
    console.error("Text box element not found");
    return;
  }

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      // Use the modern clipboard API
      await navigator.clipboard.writeText(textBox.value);
    } else {
      // Fallback to the older method
      textBox.select();
      document.execCommand("copy");
    }
    textBox.value = ""; // Clear text box to give feedback to user
  } catch (err) {
    console.error("Failed to copy text to clipboard: ", err);
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === "dark-mode") {
      themeToggleBtn.innerHTML =
        '<img src="/icons/sun-solid.svg" alt="Light mode button" class="icon"> Light mode';
    }
  }

  themeToggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    let theme = "light-mode";
    if (document.body.classList.contains("dark-mode")) {
      theme = "dark-mode";
      themeToggleBtn.innerHTML =
        '<img src="/icons/sun-solid.svg" alt="Light mode button" class="icon"> Light mode';
    } else {
      themeToggleBtn.innerHTML =
        '<img src="/icons/moon-solid.svg" alt="Dark mode button" class="icon"> Dark mode';
    }
    localStorage.setItem("theme", theme);
  });
});