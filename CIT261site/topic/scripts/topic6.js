    		function createManyElement() {
                    
                    var h = document.createElement("H3");
                    var textHeading = document.createTextNode("I am a new heading - H3");
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
                    document.body.appendChild(btn);                            //add the button to the body. 
                    
                    
                    var para = document.createElement("P");
                    var text = document.createTextNode("This paragraph was added inside a Div, furthermore did you notice the new number inside the list and this was added in his right place!");
                    para.appendChild(text);
                    document.getElementById("newP").appendChild(para);
                    
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