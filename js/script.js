const bodyTag = document.querySelector('body');
const hamBtnContainer = document.querySelector('#ham-btn-container');
const hamlineOne = document.querySelector('#hamlineOne');
const hamlineTwo = document.querySelector('#hamlineTwo');
const hamlineThree = document.querySelector('#hamlineThree');
const navBtnContainerDrop = document.querySelector('#nav-btn-container-secondSpace');
hamBtnContainer.addEventListener('click',()=>{
if(hamBtnContainer.title==='open')
{
    hamlineOne.style.top='9px';
    hamlineOne.style.transform='rotate(42deg)';
    hamlineTwo.style.visibility='hidden';
    hamlineThree.style.transform='rotate(-42deg)';
    hamlineThree.style.top='-9px';
    hamBtnContainer.title='close';
    navBtnContainerDrop.style.display='flex';
    navBtnContainerDrop.style.height='210px';
    navBtnContainerDrop.style.paddingTop='15px';
}
else 
{
    hamlineOne.style.top='';
    hamlineOne.style.transform='';
    setTimeout(()=>{hamlineTwo.style.visibility='';},100);
    hamlineThree.style.transform='';
    hamlineThree.style.top='';
    hamBtnContainer.title='open';
    navBtnContainerDrop.style.display='';
    navBtnContainerDrop.style.height='';
    navBtnContainerDrop.style.paddingTop='0';
}
});
// link object here
const link =
[
    'https://sarsmm.com/',
    'https://www.facebook.com/sarsmmbd',
    'https://www.youtube.com/channel/UCmtm4ygbPC2temlm8hB0qYg',
    'https://wa.me/message/ZHUM7RNBS3WSJ1',
    '../app/sarsmm.apk'
]

linkFunc=(val)=>
{window.open(val,'_blank');}

// get year js
const yearGetfooter = document.querySelector('#yearGetfooter');
const d = new Date();
let year = d.getFullYear();
yearGetfooter.innerHTML=year;
// scroll button js
let topBtn = document.getElementById("topBtn");
let navContainer = document.querySelector('#nav-container');
let navLogo = document.querySelector('#nav-logo');
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
topBtn.style.right='20px';
navContainer.style.padding='5px 10px';
navLogo.style.width='130px';
navLogo.style.height='50px';
} else {
topBtn.style.right='';
navContainer.style.padding='';
navLogo.style.width='';
navLogo.style.height='';
}
}
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
// content loaded
const popupModelContainer = document.querySelector('#popup-model-container');
const popupModelRow = document.querySelectorAll('.popup-model-row');
addEventListener('DOMContentLoaded',()=>{
setTimeout(()=>{popupModelContainer.style.display='flex',
bodyTag.style.overflow='hidden';
},2900);
setTimeout(()=>{popupModelOpen()},3000);
});
popupModelOpen =()=>
{
for(let i=0;i < popupModelRow.length;i++)
{popupModelRow[i].style.transform='scale(1)';}
}
popupModelClose =()=>
{
for(let i=0;i < popupModelRow.length;i++)
{setTimeout(()=>{popupModelRow[i].style.transform='scale(0)'},10)}
setTimeout(()=>{popupModelContainer.style.display='none',
bodyTag.style.overflow='';
},100);
}