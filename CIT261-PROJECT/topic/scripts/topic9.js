var boxOne = document.getElementsByClassName('box')[0];

document.getElementsByClassName('toggleButton')[0].onclick = function() {
  if(this.innerHTML === 'Play') 
  { 
    this.innerHTML = 'Stop';
    boxOne.classList.add('horizTranslate');
  } else {
    this.innerHTML = 'Play';
    boxOne.classList.remove('horizTranslate');    
  }  
}


function ChangeBody(setMe){

    document.body.style.backgroundColor = "#F5F6CE";

    //var para = document.createElement("p");
    //var node = document.createTextNode("This is new.");
    //para.appendChild(node); 
    //var element = document.getElementById("div1");
    //element.appendChild(para);

}


var boxOne2 = document.getElementsByClassName('box2')[0];

document.getElementsByClassName('toggleButton2')[0].ondblclick = function() {
  if(this.innerHTML === 'PLAY - double click me!') 
  { 
    this.innerHTML = 'STOP - double click me!';
    boxOne2.classList.add('horizTranslate2');
  } else {
    this.innerHTML = 'PLAY - double click me!';
    boxOne2.classList.remove('horizTranslate2');    
  }  
}

//Example 05
// Save the square into a variable to change their properties.
var boxColor = document.getElementById("box");
document.getElementById("touch5").addEventListener("touchstart", changeColor5);
function changeColor5() {
   boxColor.style.backgroundColor = "#FF0000";
}
document.getElementById("touch6").addEventListener("touchstart", changeColor6);
function changeColor6() {
   boxColor.style.backgroundColor = "#00FF00";
}
document.getElementById("touch7").addEventListener("touchstart", changeColor7);
function changeColor7() {
   boxColor.style.backgroundColor = "#0000FF";
}
document.getElementById("touch8").addEventListener("touchstart", changeColor8);
function changeColor8() {
   boxColor.style.backgroundColor = "#FFFF00";
}
document.getElementById("touch9").addEventListener("touchstart", changeColor9);
function changeColor9() {
   boxColor.style.backgroundColor = "#CCEEFF";
}
document.getElementById("touch10").addEventListener("touchstart", changeColor10);
function changeColor10() {
   boxColor.style.backgroundColor = "black";
}
document.getElementById("touch11").addEventListener("touchstart", changeColor11);
function changeColor11() {
   boxColor.style.backgroundColor = "white";
}

////////////////////////////////////////////////////////////////////////////

//Example 6
document.getElementById("box").addEventListener("touchend", leaveThisBox);
function leaveThisBox() {
   document.getElementById("box").style.WebkitTransform = "rotate(20deg)";
   document.getElementById("box").style.msTransform = "rotate(20deg)"; 
   document.getElementById("box").style.transform = "rotate(20deg)"; 
}



document.getElementById("touch1").addEventListener("click", backgroundPage);
function backgroundPage() {
   document.body.style.backgroundColor = "coral";
}

document.getElementById("touch2").addEventListener("click", backgroundPage2);
function backgroundPage2() {
   document.body.style.backgroundColor = "beige";
}

document.getElementById("touch3").addEventListener("click", backgroundPage3);
function backgroundPage3() {
   document.body.style.backgroundColor = "cadetblue";
}

document.getElementById("touch4").addEventListener("click", backgroundPage4);
function backgroundPage4() {
   document.body.style.backgroundColor = "azure";
}

