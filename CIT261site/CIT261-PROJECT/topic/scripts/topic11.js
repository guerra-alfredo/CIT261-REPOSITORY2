function changeit(setDiv){
     setDiv.style.height = "100px";
     setDiv.style.width = "100%";

     //after two seconds I display the next message.
     setTimeout(function(){ 
     setDiv.style.fontSize = "3rem";
     setDiv.style.textAlign = "center";
     setDiv.innerHTML = "Thank you for changing me!"; 
     setDiv.style.backgroundColor = "#E3CEF6";}, 2500);

    }


function makeItElegant(setDiv){
     setDiv.style.opacity = "0.5";
     setDiv.style.fontSize = "4rem";
    }

function changeZiseColor(setDiv){
     setDiv.style.backgroundColor= "#0000FF";
     setDiv.style.fontSize = "3.3rem";
     setDiv.style.width = "250px";
     setDiv.style.height = "200px";
    }
