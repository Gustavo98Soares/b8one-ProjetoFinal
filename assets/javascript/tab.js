
let tabs = document.querySelectorAll(".tab__button"),
contents = document.querySelectorAll(".tab-container"),
tabLi = document.querySelectorAll(".tab__list__item")

tabs.forEach((tab,index)=>{
    tab.addEventListener('click', () =>{
        contents.forEach((content) =>{
            content.classList.remove('display--block')
        });
        tabs.forEach((tab)=>{
            tab.classList.remove('display--block')
        });
        tabLi.forEach((li)=>{
            li.classList.remove('display--block')
        });
        contents[index].classList.add('display--block')
        tabs[index].classList.add('display--block')
        tabLi[index].classList.add('display--block')
    })
})



