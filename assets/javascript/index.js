/*-------- Hamburguer --------*/

var hamburguerBtn = document.getElementById("hamburguer__button");


hamburguerBtn.addEventListener("click",function(){
    var sidebar = document.getElementById("sidebar")
    var mainContent = document.getElementById("main-content")
    sidebar.classList.toggle("display--block")
    mainContent.classList.toggle("display--none")
})

/* Calendar */

let calendar = document.querySelectorAll(".resume__calendar__button")
calendar.forEach((cal,index)=>{
    cal.addEventListener('click',()=>{
        calendar.forEach((content)=>{
            content.classList.remove('calendar__button--active')
        });
        calendar[index].classList.add('calendar__button--active')
    })
})


/*Menu Dropdown*/

let dropdownOne= document.querySelector('.nav__block__dropdown');
let icon = document.querySelector('.nav__link--arrow-down');


icon.addEventListener("click", function(){
    if(dropdownOne.style.display === "none"){
        dropdownOne.style.display = "block";
        
    } else {
        dropdownOne.style.display = "none";
        
    }
});








