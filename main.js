let checkbox = document.querySelector('input[type="checkbox"]');
let lightImage = document.querySelector('.light-img'); 
function turn (){
    if (checkbox.checked) {
        lightImage.src = "./lightoff.jpg";
    } else {
        lightImage.src = "./lighton.jpg";
    }
}
checkbox.addEventListener('change', turn);
