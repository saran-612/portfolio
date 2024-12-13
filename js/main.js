const proPht = document.querySelector('.pro_pht');

let isMouseDown = false;
let startX;
let scrollLeft;

proPht.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - proPht.offsetLeft;
    scrollLeft = proPht.scrollLeft;
    proPht.style.cursor = 'grabbing';
});

proPht.addEventListener('mouseleave', () => {
    isMouseDown = false;
    proPht.style.cursor = 'grab';
});

proPht.addEventListener('mouseup', () => {
    isMouseDown = false;
    proPht.style.cursor = 'grab';
});

proPht.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - proPht.offsetLeft;
    const walk = (x - startX) * 2;
    proPht.scrollLeft = scrollLeft - walk;
});
