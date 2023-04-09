const password= document.getElementById('password');
const confirmPassword = document.getElementById('confirm');
let req;
function require(a){
 if(a.value=""){
    
 }
}

function checkpassword(){
    if (confirmPassword.value != password.value){
        
        alert('password does not match')
        console.log(password.value)
        console.log(confirmPassword.value)
        return false
    }
}