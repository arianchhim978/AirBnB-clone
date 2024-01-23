const b = document.getElementById("box3")
const c = document.getElementById("click")

c.addEventListener("click",toggleBox3)
function toggleBox3() {
    if (b.style.display === "none" || b.style.display === "") {
        b.style.display = "block"; // Display box3 if it's currently hidden
    } else {
        b.style.display = "none"; // Hide box3 if it's currently displayed
    }
}


