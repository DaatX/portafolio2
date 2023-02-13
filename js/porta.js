function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const sidebar = document.querySelector('.sidebar');
    menuToggle.classList.toggle('active')
    sidebar.classList.toggle('active')
}

// document.querySelectorAll('.trabajo_caja .img_caja img').forEach(image => {
//     image.onclick = () => {
//         document.querySelector('.popup-img').style.display = 'block';
//         document.querySelector('.popup-img img').src = image.getAttribute('src');
//     }
// });

// document.querySelector('.popup-img span').onclick = () => {
//     document.querySelector('.popup-img').style.display = 'none';
// }