    		function allowDrop(ev) {
				ev.preventDefault();
			}

			function drag(ev) {
				ev.dataTransfer.setData("text", ev.target.id);
				//to set the original atributes.
				document.getElementById("div1").style.backgroundColor = "#f1f1f1";
				document.getElementById("div2").style.backgroundColor = "#f1f1f1";
				document.getElementById("div1").style.height = "80px";
				document.getElementById("div2").style.height = "80px";
				document.getElementById("changeColor").style.color = "black";
				document.getElementById("changeColor2").style.color = "black";
				
			}

			function drop(ev) {
				ev.preventDefault();
				var data = ev.dataTransfer.getData("text");
				ev.target.appendChild(document.getElementById(data));
				document.getElementById("div1").style.backgroundColor = "#00FF40";
				document.getElementById("div1").style.height = "130px";
				document.getElementById("changeColor").style.color = "darkblue";
				
			}
			
			function drop2(ev) {
				ev.preventDefault();
				var data = ev.dataTransfer.getData("text");
				ev.target.appendChild(document.getElementById(data));
				document.getElementById("div2").style.backgroundColor = "#FE2E2E";
				document.getElementById("div2").style.height = "130px";
				document.getElementById("changeColor2").style.color = "yellow";
			}
            
            
            function rotate() {
                
                document.getElementById("imagen").style.webkitTransform = "rotateY(360deg)";
				document.getElementById("imagen").style.MozTransform = "rotateY(360deg)";
                document.getElementById("imagen").style.webkitTransition = "3s";
                
                
                setTimeout(function(){ document.getElementById("imagen").src = "images/topic7/house.jpg"; }, 1200);

    
                
               
                //Good Code.
                //var x = 100;
                //var y = 0;
                //setInterval(function(){
                    //x += 1;
                    //y += 1;
                    //var element = document.getElementById('imagen');
                    //element.style.webkitTransform = "translateZ(-100px) rotateY("+x+"deg) rotateX("+y+"deg)"; //for safari and chrome
                    //element.style.MozTransform = "translateZ(-100px) rotateY("+x+"deg) rotateX("+y+"deg)"; //for firefox
                //},50);
                //for other browsers use:   "msTransform",    "OTransform",    "transform"
            }
            
        	function changeit(setDiv){
			  		document.getElementById("changeMe").style.color = "white";
			  		document.getElementById("changeMe").style.fontSize = "3rem";
			  		document.getElementById("changeMe").style.textTransform = "uppercase";
			  		setDiv.style.background = "black";
		  	}
			
			function changeAgain(setDiv){
					setDiv.innerHTML = "thank you for changing me, have a nice trip!"; 
			  		setDiv.style.color = "white";
			  		setDiv.style.fontSize = "3rem";
			  		setDiv.style.textTransform = "uppercase";
			  		setDiv.style.background = "darkblue";
		  	}
		
			function hideIt(){
				document.getElementById("img3").style.display = "none";
			}
			
			function showIt(){
				document.getElementById("img3").style.display = "block";
			}
			
			
        //https://www.w3schools.com/jsref/met_win_settimeout.asp
