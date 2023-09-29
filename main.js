noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550, 500);
    canvas.position(560, 150);

    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses)
}

function draw(){
    background("#ff3526");
    text_input=document.getElementById("text_input").value
    fill("#2427ff");
    stroke("black");
    textSize(difference);
    text(text_input, noseX, noseY);
    document.getElementById("span1").innerHTML="Size of the text = " + difference + "px";
}

function modelLoaded(){
    console.log("Model Loaded");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }

}


