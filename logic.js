var v = document.querySelector("input");
let b = document.querySelector("button");
b.addEventListener('click',function(event){

  if(v.value!=""){
    let li=document.createElement("li");
    let div=document.createElement("div");
    let g=document.createTextNode(v.value);
    li.appendChild(g);
    document.querySelector("ul").appendChild(div).appendChild(li);
    v.value="";
  }

});