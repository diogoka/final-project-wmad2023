const loader = document.querySelector('.loader-wrapper');
const lines = document.querySelector('.lines');


window.addEventListener('load', () => {
    loader.style.display = 'flex';
    setTimeout(() => {
        loader.style.display = 'none';
        document.querySelector("body").classList.remove("no-transition");
    }, 1000);

})