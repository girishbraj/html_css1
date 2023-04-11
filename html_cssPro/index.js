let userName=document.getElementById("userName")
let password=document.getElementById("password")
let btn=document.getElementById("btn")
let emoji=document.getElementById('emoji')

//validation credential
btn.addEventListener('click',(e)=>{
    e.preventDefault() // prevents the page from reloading
    if(userName.value=='girish123' && password.value=='grs123'){
        //redirect page
        window.location.href="BMS.html"
    }else{
        // alert('Inavlid credential')
        emoji.style.display='block'
        userName.style.color='red'
        password.style.color='red'
    }

    
})