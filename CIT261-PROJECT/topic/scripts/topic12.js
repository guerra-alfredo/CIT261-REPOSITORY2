 function checkRotate2D() {
                var op1 = document.getElementById("op1").checked;
                var op2 = document.getElementById("op2").checked;
                var op3 = document.getElementById("op3").checked;
                var op4 = document.getElementById("op4").checked;
                var op5 = document.getElementById("op5").checked;
                var op6 = document.getElementById("op6").checked;


                switch(true) {
                case op1:  
                    document.getElementById("rotateMe").style.backgroundColor = "#00FF40";
                    document.getElementById("rotateMe").style.webkitTransform = "rotate(90deg)";
                    document.getElementById("rotateMe").style.mozTransform = "rotate(90deg)";
                    document.getElementById("rotateMe").style.msTransform = "rotate(90deg)";
                    document.getElementById("rotateMe").style.transform = "rotate(90deg)";
                    break;
                case op2:
                    document.getElementById("rotateMe").style.backgroundColor = "#FFBF00";
                    document.getElementById("rotateMe").style.webkitTransform = "rotate(180deg)";
                    document.getElementById("rotateMe").style.mozTransform = "rotate(180deg)";
                    document.getElementById("rotateMe").style.msTransform = "rotate(180deg)";
                    document.getElementById("rotateMe").style.transform = "rotate(180deg)";
                  break;
                case op3:
                    document.getElementById("rotateMe").style.backgroundColor = "#FE2EF7";
                    document.getElementById("rotateMe").style.webkitTransform = "rotate(360deg)";
                    document.getElementById("rotateMe").style.mozTransform = "rotate(360deg)";
                    document.getElementById("rotateMe").style.msTransform = "rotate(360deg)";
                    document.getElementById("rotateMe").style.transform = "rotate(360deg)";
                  break;
                case op4:
                    document.getElementById("rotateMe").style.backgroundColor = "#9F81F7";
                    document.getElementById("rotateMe").style.webkitTransform = "rotate(-90deg)";
                    document.getElementById("rotateMe").style.mozTransform = "rotate(-90deg)";
                    document.getElementById("rotateMe").style.msTransform = "rotate(-90deg)";
                    document.getElementById("rotateMe").style.transform = "rotate(-90deg)";
                  break;
                case op5:
                    document.getElementById("rotateMe").style.backgroundColor = "#00FFFF";
                    document.getElementById("rotateMe").style.webkitTransform = "rotate(-180deg)";
                    document.getElementById("rotateMe").style.mozTransform = "rotate(-180deg)";
                    document.getElementById("rotateMe").style.msTransform = "rotate(-180deg)";
                    document.getElementById("rotateMe").style.transform = "rotate(-180deg)";
                  break;
                case op6:
                    document.getElementById("rotateMe").style.backgroundColor = "#FFFF00";
                    document.getElementById("rotateMe").style.webkitTransform = "rotate(-360deg)";
                    document.getElementById("rotateMe").style.mozTransform = "rotate(-360deg)";
                    document.getElementById("rotateMe").style.msTransform = "rotate(-360deg)";
                    document.getElementById("rotateMe").style.transform = "rotate(-360deg)";
                  break;

              }

            }
//END ROTATE 2D


//translate
            function checkTranslate() {
                var opp1 = document.getElementById("opp1").checked;
                var opp2 = document.getElementById("opp2").checked;
                var opp3 = document.getElementById("opp3").checked;



                switch(true) {
                case opp1:  
                    document.getElementById("moveMe").style.backgroundColor = "#00FF40";
                    document.getElementById("name").innerHTML = "200px X-axis"; 
                    document.getElementById("moveMe").style.webkitTransform = "translate(200px,0px)";
                    document.getElementById("moveMe").style.mozTransform = "translate(200px,0px)";
                    document.getElementById("moveMe").style.msTransform = "translate(200px,0px)";
                    document.getElementById("moveMe").style.transform = "translate(200px,0px)";
                    break;
                case opp2:
                    document.getElementById("moveMe").style.backgroundColor = "#FFBF00";
                    document.getElementById("name").innerHTML = "200px X-Y axis";
                    document.getElementById("moveMe").style.webkitTransform = "translate(200px,200px)";
                    document.getElementById("moveMe").style.mozTransform = "translate(200px,200px)";
                    document.getElementById("moveMe").style.msTransform = "translate(200px,200px)";
                    document.getElementById("moveMe").style.transform = "translate(200px,200px)";
                  break;
                case opp3:
                    document.getElementById("moveMe").style.backgroundColor = "#FFBF00";
                    document.getElementById("name").innerHTML = "0px X-Y axis";
                    document.getElementById("moveMe").style.webkitTransform = "translate(0px,0px)";
                    document.getElementById("moveMe").style.mozTransform = "translate(0px,0px)";
                    document.getElementById("moveMe").style.msTransform = "translate(0px,0px)";
                    document.getElementById("moveMe").style.transform = "translate(0px,0px)";
                  break;
              }

            }
//End translate


//Scale
            function checkScale() {
                var oppp1 = document.getElementById("oppp1").checked;
                var oppp2 = document.getElementById("oppp2").checked;
                var oppp3 = document.getElementById("oppp3").checked;



                switch(true) {
                case oppp1: 

                    document.getElementById("scaleMe").style.backgroundColor = "#00FF40";
                    document.getElementById("scaleMe").style.webkitTransform = "scale(1,2)";
                    document.getElementById("scaleMe").style.mozTransform = "scale(1,2)";
                    document.getElementById("scaleMe").style.msTransform = "scale(1,2)";
                    document.getElementById("scaleMe").style.transform = "scale(1,2)";

                    break;
                case oppp2:
                    document.getElementById("scaleMe").style.backgroundColor = "#FFBF00";
                    document.getElementById("scaleMe").style.webkitTransform = "scale(3,2)";
                    document.getElementById("scaleMe").style.mozTransform = "scale(3,2)";
                    document.getElementById("scaleMe").style.msTransform = "scale(3,2)";
                    document.getElementById("scaleMe").style.transform = "scale(3,2)";
                  break;
                case oppp3:
                    document.getElementById("scaleMe").style.backgroundColor = "#FFBF00";   
                    document.getElementById("scaleMe").style.webkitTransform = "scale(2,2)";
                    document.getElementById("scaleMe").style.mozTransform = "scale(2,2)";
                    document.getElementById("scaleMe").style.msTransform = "scale(2,2)";
                    document.getElementById("scaleMe").style.transform = "scale(2,2)";
                  break;
              }

            }
//End Scale

//ROTATE 3D
            function checkRotate3D() {
                var opppp1 = document.getElementById("opppp1").checked;
                var opppp2 = document.getElementById("opppp2").checked;
                var opppp3 = document.getElementById("opppp3").checked;
            
                switch(true) {
                case opppp1:    
                        
                    document.getElementById("rotateBall").style.webkitTransition = "6s";
                    document.getElementById("rotateBall").style.mozTransition = "6s";
                    document.getElementById("rotateBall").style.msTransition = "6s";
                    document.getElementById("rotateBall").style.transition = "6s";
                        
                    document.getElementById("rotateBall").style.webkitTransform = "rotateZ(360deg)";
                    document.getElementById("rotateBall").style.mozTransform = "rotateZ(360deg)";
                    document.getElementById("rotateBall").style.msTransform = "rotateZ(360deg)";
                    document.getElementById("rotateBall").style.transform = "rotateZ(360deg)";
            
                        
                    
                    break;
                case opppp2:
                        
                    document.getElementById("rotateBall").style.webkitTransition = "6s";
                    document.getElementById("rotateBall").style.mozTransition = "6s";
                    document.getElementById("rotateBall").style.msTransition = "6s";
                    document.getElementById("rotateBall").style.transition = "6s";
                        
                    document.getElementById("rotateBall").style.webkitTransform = "rotateY(360deg)";
                    document.getElementById("rotateBall").style.mozTransform = "rotateY(360deg)";
                    document.getElementById("rotateBall").style.msTransform = "rotateY(360deg)";
                    document.getElementById("rotateBall").style.transform = "rotateY(360deg)";
                    
                    
                  break;
                case opppp3:
                        
                    document.getElementById("rotateBall").style.webkitTransition = "6s";
                    document.getElementById("rotateBall").style.mozTransition = "6s";
                    document.getElementById("rotateBall").style.msTransition = "6s";
                    document.getElementById("rotateBall").style.transition = "6s";
                    
                    document.getElementById("rotateBall").style.webkitTransform = "rotateX(360deg)";
                    document.getElementById("rotateBall").style.mozTransform = "rotateX(360deg)";
                    document.getElementById("rotateBall").style.msTransform = "rotateX(360deg)";
                    document.getElementById("rotateBall").style.transform = "rotateX(360deg)";
                      
                   
                  break;
              }

            }
//END ROTATE 3D

            function checkRotate31D() {
                    document.getElementById("rotateBall").style.webkitTransition = "6s";
                    document.getElementById("rotateBall").style.mozTransition = "6s";
                    document.getElementById("rotateBall").style.msTransition = "6s";
                    document.getElementById("rotateBall").style.transition = "6s";
                        
                    document.getElementById("rotateBall").style.webkitTransform = "rotateZ(360deg)";
                    document.getElementById("rotateBall").style.mozTransform = "rotateZ(360deg)";
                    document.getElementById("rotateBall").style.msTransform = "rotateZ(360deg)";
                    document.getElementById("rotateBall").style.transform = "rotateZ(360deg)";
                }
            
            function checkRotate32D() {
                    document.getElementById("rotateBall2").style.webkitTransition = "6s";
                    document.getElementById("rotateBall2").style.mozTransition = "6s";
                    document.getElementById("rotateBall2").style.msTransition = "6s";
                    document.getElementById("rotateBall2").style.transition = "6s";
                        
                    document.getElementById("rotateBall2").style.webkitTransform = "rotateY(360deg)";
                    document.getElementById("rotateBall2").style.mozTransform = "rotateY(360deg)";
                    document.getElementById("rotateBall2").style.msTransform = "rotateY(360deg)";
                    document.getElementById("rotateBall2").style.transform = "rotateY(360deg)";
                }
            
            function checkRotate33D() {
                    document.getElementById("rotateBall3").style.webkitTransition = "6s";
                    document.getElementById("rotateBall3").style.mozTransition = "6s";
                    document.getElementById("rotateBall3").style.msTransition = "6s";
                    document.getElementById("rotateBall3").style.transition = "6s";
                    
                    document.getElementById("rotateBall3").style.webkitTransform = "rotateX(360deg)";
                    document.getElementById("rotateBall3").style.mozTransform = "rotateX(360deg)";
                    document.getElementById("rotateBall3").style.msTransform = "rotateX(360deg)";
                    document.getElementById("rotateBall3").style.transform = "rotateX(360deg)";
                }
            
            
            function moveMe(moveImg){  
                moveImg.style.webkitTransform = "translate(160px)";  /* Safari 3-8 */
                moveImg.style.mozTransform = "translateX(160px)";
                moveImg.style.msTransform = "translateX(160px)";  //Internet Explorer 9 supports the -ms-transform property
                moveImg.style.transform = "translateX(160px)"; //IE10+ support the transform property (do not need the ms prefix)
            }