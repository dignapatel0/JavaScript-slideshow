var current = 0;
var total = 4;
function next(){
    
    current = current + 1;
    //current += 1;
    //current++;

    if(current >= total){
        current = 0;
    }
    
    //Create a referance to all the slide divs
    var slides = document.getElementsByClassName("slide");
    //loop through the slides
    for(var i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    //Display the selected slides
    slides[current].style.display = "block";

    console.log("next");
    console.log(current);
}

function previous(){

    //Increment the current variable by one
    current = current - 1;
    //current -= 1;
    //current--;

    if(current < 0){
        current = total - 1;
    }
    
    //Create a referance to all the slide divs
    var slides = document.getElementsByClassName("slide");
    //loop through the slides
    for(var i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    //Display the selected slides
    slides[current].style.display = "block";

    console.log("next");
    console.log(current);
}