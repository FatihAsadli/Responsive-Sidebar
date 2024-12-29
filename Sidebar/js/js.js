let toggleBtn = document.querySelector(".toggle-button")
let closeBtn = document.querySelector(".close")
let sideBar = document.querySelector(".aside")

toggleBtn.addEventListener("click",function() {
    sideBar.classList.toggle("show-aside")
})

closeBtn.addEventListener("click", function() {
    sideBar.classList.remove("show-aside")
})