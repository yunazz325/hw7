var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video = document.getElementById("player1")

	video.autoplay = false;
	video.loop = false;
	video.load();

	const slider = document.getElementById("slider")
	const volumeOut = document.getElementById("volume")
	const initVol = Math.min(1, Math.max(0, Number(slider.value) / 100));
	video.volume = initVol;
	volumeOut.textContent = `${Math.round(initVol * 100)}%`;



// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

	const playButton = document.getElementById("play");
	playButton.addEventListener("click", function(){
		console.log("Play Video");
		video.play();
		document.getElementById("volume").textContnt = `${Math.round(video.volume * 100)}%`;
	});

	const pauseButton = document.getElementById("pause");
	pauseButton.addEventListener("click", function(){
		console.log("Pause Video");
		video.pause();
	});

	const slowerButton = document.getElementById("slower");
	slowerButton.addEventListener("click", function() {
		console.log("Slow down, speed now:", video.playbackRate.toFixed(5));
		video.playbackRate *= 0.9;
	});

	const fasterButton = document.getElementById("faster");
	fasterButton.addEventListener("click", function() {
		console.log("Speed Up, speed now:", video.playbackRate.toFixed(5))
		video.playbackRate /= 0.9;	
	});


	const skipButton = document.getElementById("skip");
	skipButton.addEventListener("click", function() {
		const jump = 10;
		let next = video.currentTime + jump;
		if (video.duration && next > video.duration)
			next = 0;
		video.currentTime = next;
		console.log("Current time:", video.currentTime.toFixed(2), "sec");
	});

	const muteButton = document.getElementById("mute");
	muteButton.addEventListener("click", function() {
		video.muted = !video.muted;
		muteButton.textContent = video.muted ? "Unmute" : "Mute";
	});

	const sliderEl = document.getElementById("slider");
	sliderEl.addEventListener("input", function () {
		const vol = Math.min(1, Math.max(0, Number(sliderEl.value) / 100));
		video.volume = vol;
		document.getElementById("volume").textContent = `${Math.round(vol * 100)}%`;
	});

	const vintageBtn = document.getElementById("vintage");
	vintageBtn.addEventListener("click", function () {
    	video.classList.add("oldSchool");
	});

	const origBtn = document.getElementById("orig");
	origBtn.addEventListener("click", function () {
    	video.classList.remove("oldSchool");
	});
});