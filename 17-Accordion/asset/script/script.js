// let box = document.querySelectorAll(".boxes")

// box.forEach(elem => {
//    elem.addEventListener("click", ()=>{
//     elem.classList.toggle("active")
//    })
// })

let boxes = document.querySelectorAll(".boxes");

boxes.forEach(box => {
    let text = box.querySelector(".text");
    box.addEventListener("click", function () {
        text.classList.toggle("active");
    });
});
