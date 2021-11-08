fanimage="";

function draw()
{
    image(fanimage, 0, 0, 340, 340);
}

function preload()
{
    fanimage=loadImage("Fan.jfif");
}

function setup()
{
    canvas=createCanvas(340, 340);
    canvas.center();
    document.getElementById("status").innerHTML="Object Detecting"

    objectdetector=ml5.objectDetector("cocossd", modelLoaded);
}

function modelLoaded()
{
    console.log("Model Loaded");
    objectdetector.detect(fanimage, gotResults());
}

function back()
{
    window.location="index.html"
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