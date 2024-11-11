document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');

    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
});
//abrir menu nav

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
window.onload = function() {
    // pra verificar se o popup já foi mostrado
    if (!localStorage.getItem("popupShown")) {
        document.getElementById('popup').style.display = 'flex'; 
        localStorage.setItem("popupShown", "true"); 
    }
};
//popup