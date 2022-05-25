// Toggle : permettant le menu deroulant.

function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const sideBar = document.querySelector('.sideBar');
    menuToggle.classList.toggle('active')
    sideBar.classList.toggle('active')
}

// Toggle-Menu : permettant de faire les arrows :

let marker = document.querySelector('#marker');
let item = document.querySelectorAll('ul li a');

function indicator(e){
    marker.style.top = e.offsetTop+'px';
    marker.style.width = e.offsetWidth+'px';
}

item.forEach(link => {
    link.addEventListener('mousemove',(e) => {
        indicator(e.target);
    })
})