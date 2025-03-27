const notesContainer = document.querySelector(".notes-container")
const createBtn = document.querySelector(".btn")


function showNotes(){
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
}

function updateStorage(){
  localStorage.setItem("notes", notesContainer.innerHTML)
}

createBtn.addEventListener("click", ()=>{
let inputBox =  document.createElement('p')
let img = document.createElement("img")
inputBox.className = "input-box"
inputBox.setAttribute("contenteditable", "true")
img.src = "./delete.png"
notesContainer.appendChild(inputBox).appendChild(img)
})

notesContainer.addEventListener("click", (e)=>{
  if(e.target.tagName === 'IMG'){
    e.target.parentElement.remove()
    updateStorage()
  }
})

notesContainer.addEventListener("keyup", (e) => {
  if (e.target.classList.contains('input-box')) {
    updateStorage();
  }
});

document.addEventListener("keydown", (e)=>{
  if(e.key === 'Enter'){
    document.execCommand("insertLineBreak")
    e.preventDefault()
  }
})

showNotes()