const imgContainers = document.querySelectorAll('.img-container');
const imgTexts = document.querySelectorAll('.img-text-1, .img-text-2, .img-text-3, .img-text-4, .img-text-5');

imgContainers.forEach((container, index) => {
    container.addEventListener('mouseenter', () => {
        container.querySelector('.photos').style.opacity = '1';
    });

    container.addEventListener('mouseleave', () => {
        container.querySelector('.photos').style.opacity = '0.8';
    });

    imgTexts[index].addEventListener('mouseenter', () => {
        container.querySelector('.photos').style.opacity = '1';
    });

    imgTexts[index].addEventListener('mouseleave', () => {
        container.querySelector('.photos').style.opacity = '0.8';
    });

    container.addEventListener('click', () => {
        // Define the target HTML file for each image
        const targetFiles = ['Cancalanog.html', 'Simala.html', 'Otaku.html', 'bon.html', 'sonder.html'];

        // Check if the current index is within the range of targetFiles
        if (index < targetFiles.length) {
            const targetFile = targetFiles[index];
            window.location.href = targetFile;
        }
    });

    imgTexts[index].addEventListener('click', () => {
        // Define the target HTML file for each image
        const targetFiles = ['Cancalanog.html', 'Simala.html', 'Otaku.html', 'bon.html', 'sonder.html'];

        // Check if the current index is within the range of targetFiles
        if (index < targetFiles.length) {
            const targetFile = targetFiles[index];
            window.location.href = targetFile;
        }
    });
});

function copyToClipboard(text) {
    var tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

document.addEventListener("DOMContentLoaded", function() {
    var emailLink = document.getElementById("email-link");

    emailLink.addEventListener("click", function(event) {
        event.preventDefault();
        copyToClipboard('coleuyan55@gmail.com');
    });
});