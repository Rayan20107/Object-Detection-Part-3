wardrobeimage="";

function draw()
{
    image(wardrobeimage, 0, 0, 340, 340);
}

function preload()
{
   wardrobeimage=loadImage("Wardrobe.jfif");
}

function setup()
{
    canvas=createCanvas(340, 340);
    canvas.center();
    document.getElementById("status").innerHTML="Object Detecting"

    objectdetector=ml5.objectDetector("cocossd", modelLoaded);
}

function back()
{
    window.location="index.html"
}

function modelLoaded()
{
    console.log("Model Loaded");
    objectdetector.detect(wardrobeimage, gotResults());
}

function gotResults(results, error)
{
    if (error)
    {
       console.log(error); 
    }

    if(results)
    {
        console.log(results)
    }
}