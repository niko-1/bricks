
const menuItems = document.querySelectorAll('#myfpmenu > li > a');
for(let i = 0; i<menuItems.length; i++){
menuItems[i].addEventListener('click', (event) =>{
event.preventDefault();
let menuUrl = event.target.getAttribute("href");
window.location = menuUrl;
});
};
