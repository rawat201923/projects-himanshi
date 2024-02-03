const buttons= document.querySelectorAll('.btn');
const body= document.querySelector("body");

buttons.forEach(function(button){
    console.log(button);
    // constvalue.addEventListener("event",function(e){
     //console.log(e);
    // })
    button.addEventListener("click",function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==='gray'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='pink'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='green'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='red'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='purple'){
            body.style.backgroundColor=e.target.id;
        }
    })
})