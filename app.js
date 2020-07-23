const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

//Play and pause the video
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

//Update play/pause icon
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = "<img src=\"./img/pause.svg\" alt=\"pause-button\">";
    } else {
        play.innerHTML = "<img src=\"./img/play.svg\" alt=\"play-button\">"
    }
}

//Update progress and timestamp
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    //Get minutes
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }

    //Get seconds
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = mins + ':' + secs;
}

//Set video time to progress
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

//Stop the video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

//Event Listener
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);
video.addEventListener("keypress", event => {
    if (event.keyCode === 37) {
        video.currentTime -= 5;
    } else if (event.keyCode === 39) {
        video.currentTime += 5;
    }
});

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
