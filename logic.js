let v = document.querySelector("input");
let b = document.querySelector("button");
let c =document.getElementById("rem");
let flag=0;
b.addEventListener('click',function(event){
  if(v.value!=""){
    let li=document.createElement("li");
    let div=document.createElement("div");
    let g=document.createTextNode(v.value);
    li.appendChild(g);
    document.querySelector("ul").appendChild(div).appendChild(li);
    v.value=""; flag++;
  }
});
c.addEventListener('click', function(e){
 if(flag!=0){
  document.querySelector("ul").lastChild.remove();
  flag--;
 }
});