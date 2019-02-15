
// document.querySelector('html').onclick = function(){
//     alert('别戳我，怕疼');
// }

let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/we.jpeg') {
        myImage.setAttribute('src', 'images/riyixia.jpeg');
      } else {
        myImage.setAttribute('src', 'images/we.jpeg');
      }
}

function setHeading(name){
    let myHeading = document.querySelector('h1');
    myHeading.textContent = '亲爱的' + name + '!';
}

function setUserName(){
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name',myName);
    setHeading(myName);
}

let storedName = localStorage.getItem('name');
if(!storedName){
    setUserName();
}else{
    setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;