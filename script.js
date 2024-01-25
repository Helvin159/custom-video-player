const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progressBar = document.getElementById('progress');
const timeStmp = document.getElementById('timestamp');

const toggleVideoStatus = () => {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
};

const updatePlayIcon = () => {
	if (video.paused) {
		playBtn.innerHTML = '<i class="fa fa-play fa-2x"></i>';
	} else {
		playBtn.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
	}
};

const updateProgress = () => {
	progressBar.value = (video.currentTime / video.duration) * 100;

	let mins = Math.floor(video.currentTime / 60);

	if (mins < 10) {
		mins = '0' + String(mins);
	}

	let secs = Math.floor(video.currentTime % 60);

	if (secs < 10) {
		secs = '0' + String(secs);
	}

	timeStmp.innerHTML = `${mins}:${secs}`;
};

const setVideoProgress = () => {
	video.currentTime = (+progressBar.value * video.duration) / 100;
};

const stopVideo = () => {
	video.currentTime = 0;
	video.pause();
};

// **Event Listeners
// **
// Toggle Video Status
video.addEventListener('click', toggleVideoStatus);

// Play
video.addEventListener('play', updatePlayIcon);

// Pause
video.addEventListener('pause', updatePlayIcon);

// Update video progress
video.addEventListener('timeupdate', updateProgress);

// Play Btn Click Event
playBtn.addEventListener('click', toggleVideoStatus);

// Stop Btn Click Event
stopBtn.addEventListener('click', stopVideo);

//
progressBar.addEventListener('change', setVideoProgress);
