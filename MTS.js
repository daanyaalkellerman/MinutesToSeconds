let insert = document.querySelector('[data-puttingin]')
let outsert= document.querySelector('[data-puttingout]')
let calsert = document.querySelector('[data-cal]').addEventListener('click',minToSec)

function minToSec(){
    outsert.innerText=  insert.value*60;
}