
let task=document.getElementById("list");
fetch("http://localhost:5500/users")
.then(function(res){
    return res.json();
})
.then(function(data){
    let List= document.getElementById("userList");
    data.forEach(function(user){
        let li=document.createElement("li");
        li.innerHTML=user.name+"-"+user.age;
        List.appendChild(li);
    });
});
function addTask(){
    let input=document.getElementById("input").value;
     if(input===""){
        return;
    }
    fetch("http://localhost:5500/todos",{method:"POST"
        ,headers:{"Content-Type":"application/json"},
        body:JSON.stringify({task:input})
    }).then(res=>res.json())
    .then(data=>{
        let list=document.getElementById("list");
    list.innerHTML="";
data.forEach(function(todo){
    let li=document.createElement("li");
    li.innerHTML=todo.task;
    list.appendChild(li);
});});
    document.getElementById("input").value="";
     let button=document.createElement("button");
     button.innerHTML="delete";
   
    let li=document.createElement("li");
    li.innerHTML=(input);
    task.appendChild(li);
    li.appendChild(button);
//  button.onclick = function(event) {
//     event.stopPropagation(); // stops li click
//     li.remove();
// }
// li.onclick=function(){
//    button.style.textDecoration="none";
//    li.style.textDecoration = "line-through";
//    li.style.color = "green";
   
// }
}

