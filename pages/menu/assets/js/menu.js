const dropButton = document.querySelector('#toggle-button');
const dropContent = document.querySelector('.dropContent');
const footerMobile = document.querySelector('#footer');



dropButton.addEventListener('click', () => {
    if (dropContent.style.display === 'flex') {
        dropContent.style.display = 'none';
        dropButton.style.transform = 'rotate(0deg) translateZ(0)';
        dropButton.classList.remove('transform2')
        dropButton.classList.remove('transform1')
        return;
    } else {
        dropContent.style.display = 'flex';
        dropButton.style.transform = 'rotate(-90deg) translateZ(0)';
        dropButton.classList.add('transform2')
        dropButton.classList.add('transform1')
        return;
    }
})


window.addEventListener('load', () => {
    console.log("Page loaded")
})