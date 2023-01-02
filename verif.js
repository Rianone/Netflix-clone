var email = document.getElementById("email");
var subs = document.getElementById("get");
var para = document.getElementById("invalid");

var email2 = document.getElementById("email2");
var subs2 = document.getElementById("get2");
var para2 = document.getElementById("invalid2");

const subs3 = document.querySelector('.sign-in-btn');
const email3 = document.getElementById('email-login');
const para3 = document.querySelector('.invalide-login');


var regEmail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;


subs.addEventListener("click",function(e)
{
    if(regEmail.test(email.value))
    {
        para.innerHTML = "Thanks for your subscribtion !";
        para.style.display = "block";
        para.style.color= "white";
    }
    else{
        para.innerHTML = "Invalid email address !!!";
        para.style.display = "block";
        para.style.color= "#f73100";
        e.preventDefault();
    }
},false);

subs2.addEventListener("click",function(e)
{
    if(regEmail.test(email2.value))
    {
        subs2.type = "submit";
        para2.innerHTML = "Thanks for your subscribtion !";
        para2.style.display = "block";
        para2.style.color= "white";
    }
    else{
        para2.innerHTML = "Invalid email address !!!";
        para2.style.display = "block";
        para2.style.color= "#f73100";
        e.preventDefault();
    }
},false);


subs3.addEventListener("click",function(e)
{
    if(regEmail.test(email3.value))
    {
        subs3.type = "submit";
        para3.innerHTML = "Thanks for your subscribtion !";
        para3.style.display = "block";
        para3.style.color= "white";
    }
    else{
        para3.innerHTML = "Invalid email address !!!";
        para3.style.display = "block";
        para3.style.color= "#f73100";
        e.preventDefault();
    }
},false);