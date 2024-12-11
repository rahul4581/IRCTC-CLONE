n=new Date();
var d=n.getDate();
var m=n.getMonth();
var y=n.getFullYear();
var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var t=n.getTime();
document.querySelector(".a1").innerHTML=d+"-"+months[m]+"-"+y;
var button = document.querySelector(".but");
var list = document.querySelector(".dd1");
var ul;

button.addEventListener("click", function() {
    ul = document.createElement("ul");
    ul.innerHTML = `
      <li><a href="t-1.html" style="color:rgb(220, 224, 227);">Sailent Features</a></li>
      <li><a href="" style="color:rgb(220, 224, 227);">Ticket Cancelation & Rules</a></li>
      <li><a href="" style="color:rgb(220, 224, 227);">Foreign Tourists</a></li>
      <li><a href="" style="color:rgb(220, 224, 227);">Group Booking</a></li>
      <li><a href="" style="color:rgb(220, 224, 227);">Travel Insurence Claim Process</a></li>
    `;
    if(list.innerHTML==""){
        list.append(ul);
    }
    else{
        list.innerHTML="";
    }
    list.style.color = "rgb(220, 224, 227)";
});

document.querySelector(".home").addEventListener("click",function (){
    history.go(0);
});
document.querySelector(".contact")