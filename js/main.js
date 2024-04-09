let listContainer=document.querySelector(".list")
let projectView=document.querySelector(".project-view")
let projectsGallery=document.querySelector(".projects-gallery")
let projectsRow1=document.querySelector(".projects-row-1")
let projectsRow2=document.querySelector(".projects-row-2")
let projectsRow3=document.querySelector(".projects-row-3")
let projectsGalleryButton=document.querySelector(".projects-gallery-button")
function cursorUpdate(event) {
  var x=event.clientX-listContainer.offsetLeft
  var y=event.clientY
  projectView.style.left=x+'px'
  projectView.style.top=y+'px'
}
listContainer.addEventListener('mousemove', cursorUpdate);
projectsGallery.addEventListener('mousemove',(event)=>{
  var x=event.clientX
  var y=event.clientY
  projectsRow1.style.marginLeft=`${((window.innerWidth-1650)/2)-(x/15)}px`
  projectsRow2.style.marginLeft=`${((window.innerWidth-1650)/2)+(x/15)}px`
  projectsRow3.style.marginLeft=`${((window.innerWidth-1650)/2)-(x/15)}px`
  projectsGalleryButton.style.left=x+'px'
  projectsGalleryButton.style.top=y+'px'
})