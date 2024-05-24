
let inpTemp1 = document.querySelector("#inputTemp");
let inpTemp2 = document.querySelector("#outputTemp");

inpTemp1.addEventListener('input', function(){
    inpTemp2.value = ((this.value * 9/5)+ 32).toFixed(1);
});
inpTemp2.addEventListener('input', function(){
    inpTemp1.value = ((this.value - 32)* 5/9).toFixed(4);
});
