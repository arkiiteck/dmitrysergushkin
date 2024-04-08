let listContainer=document.querySelector(".list")
let projectView=document.querySelector(".project-view")

function cursorUpdate(event) {
  var x=event.clientX-listContainer.offsetLeft
  var y=event.clientY
  projectView.style.left=x+'px'
  projectView.style.top=y+'px'
}

listContainer.addEventListener('mousemove', cursorUpdate);