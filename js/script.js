const barbutton = document.querySelector('.slidebar-but');


barbutton.addEventListener("click", ()=>{
    document.querySelector('.bar').classList.toggle('active');
    document.querySelector('.ham').classList.toggle('ham-active');
    document.querySelector('.cross').classList.toggle('cross-active');
    document.querySelector('.bar-but').classList.toggle('bar-but-active');

})
