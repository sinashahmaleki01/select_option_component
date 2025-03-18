
(function () {
    //================|

    let container = document.querySelector('.container')

    let select_container = document.createElement("div")

    select_container.setAttribute("class", "select-container")

    container.append(select_container)

    select_container.innerHTML = `<div id = "selected">Select an option</div><i class="fa fa-angle-down" id="icon"></i>`

    let selected_value = document.getElementById('selected');

    //================|addEvent Listener for selected container
    select_container.addEventListener("click", toggleList)

    let list_options = [
        "Mac Computers",
        "Wearables and Accessories",
        "AirPods & Audio Products",
        "iCloud & iCloud+",
        "Apple Pay & Apple Card",
        "Apple Fitness+",
        "Magic Keyboard, Magic Mouse",
        "Apple TV HD (Discontinued)"
    ]

    let ul = document.createElement("ul")

    ul.setAttribute("class", "options-container")

    container.append(ul)

    list_options.forEach((option) => {
        ul.innerHTML += `<li>${option}</li>`

    })

    let options = document.querySelectorAll(".options-container li");

    options.forEach((item) => {
        item.addEventListener("click", function () {
            selected_value.innerText = item.innerText
            toggleList()
        })
    })

    let icon = document.getElementById("icon")

    //================|function: toggle List options
    function toggleList() {
        $('.options-container').slideToggle(300);
        icon.classList.toggle("angle-up")
    }

    // //================|close the list if click outside of the list or selected container
    document.addEventListener("click", function (event) {

        if (!select_container.contains(event.target) && !document.querySelector('.options-container li').contains(event.target)) {
            $('.options-container').slideUp(300)
            icon.classList.remove("angle-up")
        }

    });
})()

