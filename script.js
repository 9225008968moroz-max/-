document.addEventListener("DOMContentLoaded", () => {

const hero = document.querySelector(".hero-content");

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/45;
const y=(window.innerHeight/2-e.clientY)/45;

hero.style.transform=`rotateY(${x}deg) rotateX(${-y}deg)`;

});

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},{threshold:.2});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(70px)";

card.style.transition="all .8s ease";

observer.observe(card);

});

});
