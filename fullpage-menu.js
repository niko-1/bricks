
/* This is to make the menu sync with the FullPage navigation in Bricks.
https://www.facebook.com/groups/brickscommunity/posts/997755410888979?comment_id=997779477553239&reply_comment_id=997801490884371 */

const menuItems = document.querySelectorAll('#myfpmenu > li > a');
for(let i = 0; i<menuItems.length; i++){
menuItems[i].addEventListener('click', (event) =>{
event.preventDefault();
let menuUrl = event.target.getAttribute("href");
window.location = menuUrl;
});
};
