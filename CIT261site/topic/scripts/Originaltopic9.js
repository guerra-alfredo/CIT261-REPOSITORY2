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


  var op1 = document.getElementById("touch1");
op1.addEventListener("click", backgroundPage);
function backgroundPage(event) {
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

