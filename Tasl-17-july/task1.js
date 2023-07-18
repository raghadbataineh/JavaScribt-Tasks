// on input, get value and save it as 'storedValue'
function change() { 
  var userColor = document.getElementById('colorPick').value;
//   key,value 
let x=document.body.style.backgroundColor = userColor
  sessionStorage.setItem('storedValue',x);
}

