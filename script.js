const header = document.querySelector(".header")
const menuIcone = header.querySelector('.menu-icon')

menuIcone.addEventListener('click', function() {
    header.classList.toggle("header--mobile")
})

menuIcone.addEventListener('click', () => {
    menuIcone.classList.toggle('menu-icon--active')
});



