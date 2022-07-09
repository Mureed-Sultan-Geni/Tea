import getComp from 'setjs/template/component.js';
export default{
  templates:['site/home'],
  loaded:function(){
    const containerEid = document.getElementById("container-eid");
    console.log(containerEid)
     for (let i = 0; i < 99; i++) {
      console.log(i)
    let stars = document.createElement("i");
    stars.classList.add("star-blink");
    containerEid.appendChild(stars);
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let size = Math.random() * 4;
    let time = Math.random() * 2;
    stars.style.left = x + "px";
    stars.style.top = y + "px";
    stars.style.width = size + "px";
    stars.style.height = size + "px";
    stars.style.animationDirection = 2 + time + "s";
    stars.style.animationDelay = time + "s";
     }
  },
  comp:function(){
    let page = getComp('site/home');
    return page;
  }
};