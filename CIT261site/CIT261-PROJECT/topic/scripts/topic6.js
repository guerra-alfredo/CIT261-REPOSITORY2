    		function createManyElement() {
                    
                    var h = document.createElement("H3");
                    var textHeading = document.createTextNode("04.- This button created will change the background color, and will add a new image");
                    h.appendChild(textHeading);
                    document.body.appendChild(h);
                    
                    
                    var newItem = document.createElement("LI");
                    var texItem1 = document.createTextNode("ONE");
                    newItem.appendChild(texItem1);
                    document.body.appendChild(newItem);
                    
                    
                    
                    var myNumbers = document.getElementById("numbers");
                    myNumbers.insertBefore(newItem, myNumbers.childNodes[0]);
                    
                    
                    var btn = document.createElement("BUTTON");
                    var textButton = document.createTextNode("I am new Button"); //create text to the element.
                    btn.appendChild(textButton);                               //add the name to the new button.
                    
                    document.body.appendChild(btn);                             //add the button to the body. 
                    //With the new button I change all the background color. 
                    //And I loaded a new Image.
                    btn.addEventListener("click",changeColor);
                    
                    var para = document.createElement("P");
                    var text = document.createTextNode("This paragraph was added inside a Div when you did click the Create new element button, furthermore did you notice the new number inside the list!");
                    para.appendChild(text);
                    document.getElementById("newP").appendChild(para);
                    
                }
                
                //var btn = document.getElementsByTagName("button")();
                
                
                
                function changeColor(){
                    
                    var x = document.createElement("IMG");
                    x.setAttribute("src", "img/balon.png");
                    //x.setAttribute("width", "304");
                    //x.setAttribute("height", "228");
                    x.setAttribute("alt", "Futbol balon");
                    document.body.appendChild(x);
                    
                    document.body.style.background = "#EFF2FB";
                     
                }
                
                function removeItemFour()
                {
                    var i = document.getElementById("itemFour");
                    i.parentNode.removeChild(i);
                }
                
                function replaceItem()
                {
                    var changeN = document.createTextNode("1");
                    var n = document.getElementById("numbers").childNodes[0];
                    n.replaceChild(changeN, n.childNodes[0]);
                }