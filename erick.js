var b = document.querySelector(".no");
b.addEventListener("click", change);
function change(){
    var i = Math.floor(Math.random()*400)+1;
    var j = Math.floor(Math.random()*400)+1;
    b.style.left = i+"px";
    b.style.top = j+"px";
}
