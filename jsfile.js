window.onload = function(){
    let lg = document.getElementById("login");
    let disdiv = document.getElementById("dis");
    
    let vali = document.getElementById("vl");
    let resu = document.getElementById("res");
    
    function genOtp(){
        return Math.floor(Math.random()*9999);
    }
    
    function lgClick(){
        otp = genOtp();
        alert(otp);
        disdiv.style.display = "block";
        
    }
    
    function checkotp(){
        let coldt = document.getElementById("coldata");
        if(coldt.value == otp){
           resu.innerHTML = "form submitted"; 
            resu.style.color = "green";
        }
        else{
            resu.innerHTML = "wrong otp"
             resu.style.color = "red";
        }
    }
    
    
    lg.addEventListener("click",lgClick);
    
    vali.addEventListener("click",checkotp);
}