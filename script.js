function makeSmall() {
    const textBox = document.getElementById('textBox');
    textBox.value = textBox.value.toLowerCase();
}

function makeBig() {
    const textBox = document.getElementById('textBox');
    textBox.value = textBox.value.toUpperCase();
}

async function copyToClipboard() {
    const textBox = document.getElementById('textBox');
    if (navigator.clipboard.writeText) { // if the new method to copy to clipboard is available...
	try {
	    await navigator.clipboard.writeText(textBox.value); // use the new method for copying to clipboard
	    textBox.value = ''; // clear text box to give feedback to user
        } catch (err) {
	    console.error('Failed to copy: ',err);
	}
    } else {
	try {
	    textBox.select();
	    await document.execCommand('copy'); // old method for copying to clipboard
	    textBox.value = '';
	} catch (err) {
	    console.error('Fallback copy failed: ', err);
	}
    }
}
