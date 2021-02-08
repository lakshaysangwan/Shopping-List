var button= document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");

function createList(){
    var li=document.createElement("li");
    var button=document.createElement("button");
    button.setAttribute("id","delete");
    button.setAttribute("onclick","chrome(this)")
    button.innerText = "Delete";
    li.appendChild(document.createTextNode(input.value));
    li.innerHTML += button.outerHTML;
    ul.appendChild(li);
    input.value="";        
}

button.addEventListener("click",function(){
    if(input.value.length>0){
    createList();
    }
})

input.addEventListener("keypress",function(event){
     if(input.value.length>0 && event.keyCode===13){
        createList();
     }
})

function chrome(hello){
    var x = hello.parentElement;
    x.setAttribute("id","itemToBeDeleted");
    document.getElementById("itemToBeDeleted").remove();
}