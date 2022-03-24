
async function user (){
    
    const response = await fetch ("https://test-final.b8one.academy/user");   
    const userData = await response.json(); 
    return userData
}
user()

async function populateUser(){
    const dataUser = await user();

    const username = document.getElementById("user__name")
    username.innerHTML = dataUser.username;  
    
    const organization = document.getElementById("my-company__text")
    organization.innerHTML = dataUser.organization;
    
    const userAvatar = document.getElementById("user__avatar")  
    userAvatar.src = dataUser.photo;   
    
    /*Adiciona o nome no Pop-Up*/

    const usernamePop = document.getElementById("pop-up__user-name")
    const firstName = dataUser.username.split(" ", 1)        
    usernamePop.innerHTML = "Olá, "+firstName +" 👋";   
}
populateUser();



