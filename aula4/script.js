function changeLabel() {
    const button = document.getElementById("myButton");
    if(button.getAttribute("aria-label") === "Submit Form"){
        button.setAttribute("aria-label", "Resubmit Form");
        button.textContent = "Resubmit";
    }
    button.classList.toggle("clicked");
}