/**********************************************************************
    Project           : ParticlesAnimation
    File name         : sliders.js
    Author            : Rilegis
    Date created      : 23/10/2019
    Purpose           : This file contains the code needed to change
                        sliders values.
    Revision History  :
    Date        Author      Ref     Revision
    22/12/2019  Rilegis     1       Added file header.
**********************************************************************/

/* FPS slider */
var fpsSlider = document.getElementById("fpsSlider");
var fpsValue = document.getElementById("fpsValue");
fpsValue.innerHTML = fpsSlider.value; // Display the default slider value
// Update slider value
fpsSlider.oninput = function () {
    fpsValue.innerHTML = this.value;
}

/* Particles slider */
var particlesSlider = document.getElementById("particlesSlider");
var particlesAmount = document.getElementById("particlesAmount");
particlesAmount.innerHTML = particlesSlider.value; // Display the default slider value
// Update slider value
particlesSlider.oninput = function () {
    particlesAmount.innerHTML = this.value;
}

/* Speed slider */
var speedSlider = document.getElementById("speedSlider");
var speedValue = document.getElementById("speedValue");
speedValue.innerHTML = speedSlider.value; // Display the default slider value
// Update slider value
speedSlider.oninput = function () {
    speedValue.innerHTML = this.value;
}

/* Radius slider */
var radiusSlider = document.getElementById("radiusSlider");
var radiusValue = document.getElementById("radiusValue");
radiusValue.innerHTML = radiusSlider.value; // Display the default slider value
// Update slider value
radiusSlider.oninput = function () {
    radiusValue.innerHTML = this.value;
}

/* Lines width slider */
var linesWidthSlider = document.getElementById("linesWidthSlider");
var linesWidthValue = document.getElementById("linesWidthValue");
linesWidthValue.innerHTML = linesWidthSlider.value / 10; // Display the default slider value
// Update slider value
linesWidthSlider.oninput = function () {
    linesWidthValue.innerHTML = this.value / 10;
}