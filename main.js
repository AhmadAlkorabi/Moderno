let icon = document.querySelector('.nav i ')
let bord = document.querySelector('.nav .bord ')

icon.onclick=() => {
bord.classList.toggle("active")

}
let xIcon = document.querySelector(".project-viewer i ") 
let projectViewer=  document.querySelector(".project-viewer  ")
let projectImage = document.querySelector(" .project-viewer  img ") 
 xIcon.onclick = () =>{

    projectViewer.style.display = "none"


 }
 let boxImage = document.querySelectorAll(".img-album .box")

 boxImage.forEach((e)=> {
    e.onclick =() =>{
       let srcImage = e.children[0].src
       projectImage.src = srcImage;
       projectViewer.style.display = "flex"
    }
 } )