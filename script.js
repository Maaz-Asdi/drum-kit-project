// JavaScript Drum Kit App

{
	const playingClass = 'playing',
		crashRide = document.getElementById('crash-ride'),
		hiHatTop = document.getElementById('hihat-top');

	const animateCrashOrRide = () => {
		crashRide.style.transform = 'rotate(0deg) scale(1.5)';
	};

	const animateHiHatClosed = () => {
		hiHatTop.style.top = '171px';
	};
    // ".top" it moves the hiHatTop element 171 pixels down from the top of
    //  its container, positioning it at a specific location on the page
	

	const playSound = e => {
		const keyCode = e.keyCode,
        // This accesses the keyCode property of the
        //  event object e. The keyCode property returns
        //  a numerical code representing the key pressed on the keyboard.
			keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

		if(!keyElement) return;
        // if key element is false then return  without  further proceeding

		const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
		audioElement.currentTime = 0;
		audioElement.play();
        // play() is a method that starts playing the audio file.

		switch(keyCode) {
			case 69:
			case 82:
				animateCrashOrRide();
				break;
			case 75:
				animateHiHatClosed();
				break;
		}
// key codes are standardized by the browser and are consistent across
//  different keyboards and devices. 
		keyElement.classList.add(playingClass);
	};

	const removeCrashRideTransition = e => {
		if(e.propertyName !== 'transform') return;
// curly braces are not given because the line is only of one line
		e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
	};

	const removeHiHatTopTransition = e => {
		if(e.propertyName !== 'top') return;

		e.target.style.top = '166px';
	};	

	const removeKeyTransition = e => {
		if(e.propertyName !== 'transform') return;

		e.target.classList.remove(playingClass)
	};

	const drumKeys = Array.from(document.querySelectorAll('.key'));
    // - Array.from(): This converts the NodeList returned by querySelectorAll 
    // into a true array.


	drumKeys.forEach(key => {
		key.addEventListener('transitionend', removeKeyTransition);
	});
	// here only the fundtion is passed as an argument so there is no need to call it 
	// actually

	crashRide.addEventListener('transitionend', removeCrashRideTransition);
	hiHatTop.addEventListener('transitionend', removeHiHatTopTransition);
    // 'transitionend': This is the event type being listened for, which is triggered 
    // when a CSS transition completes.
// function that will be called when the transitionend event is triggered.
// yeh click ki tarah aik event hh so can be used
	window.addEventListener('keydown', playSound);
    // when the key is pressed on the keyboard
}
