const buttons = document.querySelectorAll(".custom-button");

buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault(); 

        const container = button.closest(".container");
        const sectionCollapse = container.querySelector(".collapsible-section");

        sectionCollapse.classList.toggle("d-none");

        if (sectionCollapse.classList.contains("d-none")) {
            button.innerText = "Show";
        } else {
            button.innerText = "Hide";
        }
    });
});