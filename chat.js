// Function to close the chat and show the chat icon
function closeChat() {
    const chatBox = document.querySelector('.chat');
    const chatIcon = document.querySelector('.chat-icon');
    const minimizedButton = document.querySelector('.minimized');
    
    if (chatBox) chatBox.classList.add('hidden');  // Hide the chat box
    if (chatIcon) chatIcon.classList.remove('hidden');  // Show the chat icon
    if (minimizedButton) minimizedButton.classList.remove('hidden'); // Show minimize button
}

// Function to restore the chat box and hide the chat icon
function restoreChat() {
    const chatBox = document.querySelector('.chat');
    const chatIcon = document.querySelector('.chat-icon');
    const minimizedButton = document.querySelector('.minimized');
    
    if (chatBox) chatBox.classList.remove('hidden');  // Show the chat box
    if (chatIcon) chatIcon.classList.add('hidden');  // Hide the chat icon
    if (minimizedButton) minimizedButton.classList.add('hidden'); // Hide minimize button
}
