var readInput = function() {
    var input = document.getElementById('input');
    console.log(input.value);
    input.value=" "
}
var btn2 = document.createElement('button');
btn2.textContent="button2";
btn2.onclick=readInput;
var test = document.getElementById('test');
test.appendChild(document.createElement('br'));
test.appendChild(btn2); 
