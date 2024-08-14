// Select the textarea and span elements for updating character counts
const textarea = document.querySelector('.textarea');
const totalCharsSpan = document.querySelector('.changes span:nth-of-type(1) span');
const remainingCharsSpan = document.querySelector('.changes span:nth-of-type(2) span');

// Set the maximum number of characters allowed
const maxChars = 50;

// Function to update character counts and enforce character limit
function updateCharCounts() {
    let text = textarea.value;
    const totalChars = text.length;

    if (totalChars > maxChars) {
        // Trim the text to maxChars if it exceeds the limit
        text = text.substring(0, maxChars);
        textarea.value = text;
    }

    const remainingChars = maxChars - text.length;

    // Update the displayed character counts
    totalCharsSpan.textContent = text.length;
    remainingCharsSpan.textContent = remainingChars;
}

// Add event listener to the textarea to call updateCharCounts on input
textarea.addEventListener('input', updateCharCounts);

// Initial call to set the counts on page load
updateCharCounts();
