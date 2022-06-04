noseX=0;
noseY=0;

function preload(){
  clown_nose = loadImage('https://i.postimg.cc/7LwqJ9jn/8-87313-red-nose-transparent-background-image-red-sphere-png-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 500, 500);
    image(clown_nose, noseX, noseY, 40, 40);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x -10;
        noseY = results[0].pose.nose.y -10;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

