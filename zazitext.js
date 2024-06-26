// Function to save text to local storage
function saveText() {
    const textToSave = document.getElementById('editor').value;
    localStorage.setItem('savedText', textToSave);
    alert('Text saved successfully!');
}

// Function to load text from local storage
function loadText() {
    const savedText = localStorage.getItem('savedText');
    if (savedText) {
        document.getElementById('editor').value = savedText;
        alert('Text loaded successfully!');
    } else {
        alert('No saved text found.');
    }
}

// Function to clear the text area
function clearText() {
    document.getElementById('editor').value = '';
}
