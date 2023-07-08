
const cursor = document.querySelector('.cursor');

window.addEventListener("mousemove",(e)=>{
    console.log(e);
    cursor.style.top= `${e.pageY-15}px`;
    cursor.style.left= `${e.pageX-15}px`;
})