function imgSlider(anything) {
    document.querySelector('.strabucks').src = anything
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    const but_bk_color = document.querySelector('.but_bk_color');
    const hid_color = document.querySelector('.hid_color');
    const so_soical = document.querySelector('.sci');
    circle.style.backgroundColor = color;
    // but_bk_color.style.backgroundColor = color ;
    // hid_color.style.color = color ;
    // so_soical.style.backgroundColor = color;
}
function toggleMenu(){
    let menuToggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active') 
    navigation.classList.toggle('active') 
}

let i=0;

function read(){
    if(!i){
        document.getElementById("more").style.display="inline";
        document.getElementById("dots").style.display="none";
        document.getElementById("read").innerHTML="Read Less";
        i=1;
    }
    else{
        document.getElementById("more").style.display="none";
        document.getElementById("dots").style.display="inline";
        document.getElementById("read").innerHTML="Read More";
        i=0;
    }
}

// function chang_parg(){
//     let parg = document.querySelector('.parg');
//     parg.innerHTML=
//     ""}
// function chang_but(){
//     let parg = document.querySelector('.but');
//     parg.innerHTML="Read Less"; 
//     parg.classList.toggle('read_less'); 

// }

// window.transitionToPage = function (href) {
    //     document.querySelector('body').style.opacity = 0
    //     setTimeout(function () { window.location.href = href } , 500)
    // }
    
    // document.addEventListener('DOMContentLoaded', 
    // function (event) {
        //     document.querySelector('body').style.opacity = 1
        // })


        // function facebook(linkFB) {
        //     // window.location.linkFB = linkFB
        //     window.location.linkFB = "https:/"+ linkFB ;
        // }