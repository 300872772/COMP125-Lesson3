/* main JavaScript file */

//global scope
//var tom = "tom";



//IIFE - Immidiately Invoked Function Expression
(function(){
    
    "use strict";
    
//code goes in here    
    //console.log ("App Started...");
    console.log("jjjj")
            //create a reference to a p element with an id of forstParagraph
    var firstPTag = document.getElementById("firstParagraph");
    
    
    firstPTag.addEventListener ("click",firstParagraphClicked);
    firstPTag.addEventListener ("mouseover",firstParagraphHovered);
   firstPTag.addEventListener ("mouseout",firstParagraphMouseout);
    var firstParagraphHovered = false;
   var firstParagraphMouseout = false;
    var firstParagraphClicked = false;
    
    
    var myFirstParagraph = "This is my forst pragraph. I am writing this for demonstration purporse" + 
    "This is third sentence of my firt paragraph.";
    
    //declare named function
    function writeToFirstParagraph() {
        //or debuging only
       console.log("executing writeToFirstParagraph");
       
       
       
       
        
        //create a reference to a p element with an id of forstParagraph
    //var firstParagraph = document.getElementById("firstParagraph");
    
    //firstParagraph.textContent = "Its Alive!!!";
       firstPTag.textContent = myFirstParagraph; 
        console.log(tom);
        
    }
    
    //Ananymus and Named function
    //enet handler for first praragraph click
    function firstParagraphClicked(){
        if (firstParagraphClicked)
        {
            firstPTag.style.color="#000000";
            firstParagraphClicked = false;
            
        }
        else{
                   firstPTag.style.color="#FF0000";
                   
                   firstParagraphClicked=true;
        }
 
        
    }
    
       //enet handler for first praragraph hover
    function firstParagraphHovered(){
        /*if (firstParagraphHovered)
        {
            firstPTag.style.color="#000000";
            firstParagraphClicked = false;
            
        }
        else{*/
                   firstPTag.style.color="#FFF700";
                   
             //      firstParagraphClicked=true;
       // }
 
        
    } 
    
    function firstParagraphMouseout(){
        /*if (firstParagraphMouseout)
        {
            firstPTag.style.color="#000000";
            firstParagraphClicked = false;
            
        }
        else{*/
                   firstPTag.style.color="#000000";
                   
                   //firstParagraphClicked=true;
        //
 
        
    } 
    /*
        //declare a variable that points to anonymous function
    var writeToFirstParagraph=function () {
        //or debuging only
       console.log("executing writeToFirstParagraph");
        
        //create a reference to a p element with an id of forstParagraph
    var firstPTag = document.getElementById("firstParagraph");
    
    firstPTag.textContent = "Its Alive!!!";
        
        console.log(tom);
        
    }
    */
    
   // var alias = writeToFirstParagraph;
    
    //execute function
    writeToFirstParagraph();
 
   // console.log(firstPTag);
})();



