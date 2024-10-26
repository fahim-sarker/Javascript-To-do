let input = document.getElementById("input-box");
let list = document.getElementById("todo-list");

function addbutton (){
    if(input.value === ""){
        alert("please write something")
    }else{
        let li = document.createElement("li")
        li.innerHTML = input.value
        list.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    input.value = ("")
    storedata ()
}

list.addEventListener("click",function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check")
        storedata ()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false)

function storedata (){
    localStorage.setItem("data", list.innerHTML)
}

function showdata (){
    list.innerHTML = localStorage.getItem("data")
}
showdata();