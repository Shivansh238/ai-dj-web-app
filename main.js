song = " ";
song_2 = " ";
leftWrist_x = 0;
leftWrist_y = 0;

rightWrist_x = 0;
rightWrist_y = 0;
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,moldLoaded);
    poseNet.on("pose",gotPose);
}

function draw(){
    image(video,0,0,600,500);
}

function preload(){
   song  = loadSound("music.mp3");
   song_2 = loadSound("music2.mp3");
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function moldLoaded(){
    console.log("Model is loaded");
}

function gotPose(results){
    if (results.length>0){
        console.log(results);
        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist X: " + leftWrist_x + "leftWrist Y: " + leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist X: " + rightWrist_x + "rightWrist Y: " + rightWrist_y);
    }
}

