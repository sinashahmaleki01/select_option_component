//=============|variables|===============// 
let selected_container = document.querySelector(".selected-container")
let selected_value = document.getElementById('selected');
let list_options = document.querySelectorAll(".option");
let icon = document.getElementById("icon")

//================|addEvent Listener for selected container
selected_container.addEventListener("click", function () {
    toggleList()
})


//================|loop through list options and replace content when click on options
list_options.forEach(option => {
    option.addEventListener("click", function () {
        selected_value.innerText = option.innerText
        toggleList()
    })
})
//================|function: toggle List options
function toggleList() {
    $('.list-options').slideToggle(300);
    icon.classList.toggle("angle-up")

}

//================|close the list if click outside of the list or selected container
document.addEventListener("click", function(event) {

    if (!selected_container.contains(event.target) && !document.querySelector('.list-options').contains(event.target)) {
        $('.list-options').slideUp(300)
        icon.classList.remove("angle-up")
    }
    
});