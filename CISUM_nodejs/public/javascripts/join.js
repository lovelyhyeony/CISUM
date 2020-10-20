document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("#login_body").style.display =  "none";
    document.querySelector("nav ul li a.fas.fa-check").addEventListener("click",function(){
        alert("로그인폼"); // 응 여기안됌~
        document.querySelector("#login_body").style.display =  "block";
    })
})