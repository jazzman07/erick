var b = document.querySelector(".no");
b.addEventListener("click", change);
function change(){
    min = Math.ceil(10);
    max = Math.floor(300);
    var i = Math.floor(Math.random() * (max - min) + min);
    var j = Math.floor(Math.random() * (max - min) + min);
    b.style.left = i+"px";
    b.style.top = j+"px";
}
