let checkbox = document.querySelector('input[type="checkbox"]');
let lightImage = document.querySelector('.light-img'); 
let bulb = document.querySelector('.lit');
function turn (){
    if (checkbox.checked) {
        lightImage.src = "./lightoff.png";
        lightImage.style.filter = '';
        bulb.style.display = 'none';
    } else {
        lightImage.src = "./lighton.png";
        lightImage.style.filter = 'drop-shadow(0px 0px 100px gold)';
        bulb.style.display = 'block';

    }
}
checkbox.addEventListener('change', turn);
