console.log('this script is runing');

let icon1 = document.getElementById('icon1')
let icon2 = document.getElementById('icon2')
let mobileNav = document.getElementById('mobilenav')
console.log(mobileNav);
icon1.addEventListener('click',(e)=>{
   
 mobileNav.style.display = 'none'
icon1.style.display = 'none'
icon2.style.display = 'block'
})


icon2.addEventListener('click',(e)=>{
    
    mobileNav.style.display = 'block'
    icon2.style.display = 'none'
    icon1.style.display = 'block'
})

// media quary
function myFunction(x) {
    if (x.matches) { // If media query matches
        icon1.style.display = 'bleck'
        icon2.style.display = 'block'
    } else {
        icon1.style.display = 'none'
        icon2.style.display = 'none'
    }
}
  

  let x = window.matchMedia("(max-width: 700px)")

  myFunction(x);    
  
  x.addEventListener("change",()=>{
    myFunction(x);
  });