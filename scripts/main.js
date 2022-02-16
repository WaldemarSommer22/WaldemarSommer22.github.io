var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if (mySrc ==='images/Life_is_simple.jpg'){
        myImage.setAttribute('src','images/pic_stage_2col_a_0084262_int.jpg');
    } else {
            myImage.setAttribute('src','images/Life_is_simple.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Bitte geben Sie ihren Namen ein');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hamburg ist eine schöne Stadt, ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hamburg ist eine schöne Stadt, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}