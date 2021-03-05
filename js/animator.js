/**********************************************************************
    Project           : ParticlesAnimation
    File name         : animator.js
    Author            : Rilegis
    Credits           : Idea from particles.js
    Date created      : 23/10/2019
    Purpose           : This file contains the code needed to animate
                        the dots and lines.

    Revision History  :
    Date        Author      Ref     Revision
    22/12/2019  Rilegis     1       Added file header.
**********************************************************************/

// Get canvas properties
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var screenWidth = canvas.parentElement.clientWidth;
var screenHeight = canvas.parentElement.clientHeight;
// Set canvas size to screen size
canvas.width = screenWidth;
canvas.height = screenHeight;

// Get sliders elements
var fpsValue = document.getElementById("fpsValue");
var particlesAmount = document.getElementById("particlesAmount");
var particlesSpeed = document.getElementById("speedValue");
var pointsRadius = document.getElementById("radiusValue");
var linesWidth = document.getElementById("linesWidthValue");

// General
var points = [];
var x, y, radius, speed; // Points properties
var fps, fpsInterval, startTime, then, now, elapsed; // Rendering properties
const rad = Math.PI / 180;

// Point class
class Point
{
    constructor(x, y, radius, speed)
    {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.speedX = speed;
        this.speedY = speed;
    }

    draw()
    {
        context.beginPath();
        context.fillStyle = "rgba(0,0,0,0.5)";
        context.arc(this.x, this.y, this.radius, 0, 360 * rad);
        context.fill();
    }

    update()
    {
        // Move point
        this.x += this.speedX;
        this.y += this.speedY;

        // If point reached screen border mirror movement direction
        if ((this.x + this.radius >= screenWidth) || (this.x - this.radius <= 0)) this.speedX = -this.speedX;
        if ((this.y + this.radius >= screenHeight) || (this.y - this.radius <= 0)) this.speedY = -this.speedY;
        this.draw();
    }
}

// Handles the connection between points
function connectPoints(point, pointsArray)
{
    var strokeOpacity = 0;
    var minimumDistance = 180;

    for(var i = 0; i < pointsArray.length; i++)
    {
        var pointX = point.x;
        var pointY = point.y;

        var currentDistance = getCurrentDistance(pointX, pointY, pointsArray[i].x, pointsArray[i].y);
        strokeOpacity = 1 - (currentDistance / minimumDistance);

        if (currentDistance <= minimumDistance)
        {
            context.beginPath();
            context.lineWidth = linesWidth.innerText;
            context.strokeStyle = `rgba(0,0,0,${strokeOpacity})`;
            context.moveTo(pointX, pointY);
            context.lineTo(pointsArray[i].x, pointsArray[i].y);
            context.closePath();
            context.stroke();
        }
    }
}

// Formula for distance between 2 points
function getCurrentDistance(x1, y1, x2, y2)
{
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

/* Rendering section */
function startAnimating(fps)
{
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval)
    {
        then = now - (elapsed % fpsInterval);

        context.clearRect(0, 0, screenWidth, screenHeight);

        points.forEach(point => {
            point.update();
            connectPoints(point, points);
        });
    }
}

// INIT function
function init()
{
    for (var i = 0; i < particlesAmount.innerText; i++)
    {
        radius = parseInt(pointsRadius.innerText, 10);
        x = Math.random() * (screenWidth - radius * 2) + radius;
        y = Math.random() * (screenHeight - radius * 2) + radius;
        speed = (Math.random() - 0.5) * parseInt(particlesSpeed.innerText, 10); // Speed determines direction
        if (speed > 0) speed += 0.15;
        else if (speed < 0) speed -= 0.15;
        //console.log("New point -> x:" + this.x + " y:" + this.y + " speed:" + this.speed); // Debug-only
        points.push(new Point(x, y, radius, speed));
    }
}

// On sliders values change
function onValueChange()
{
    context.clearRect(0, 0, screenWidth, screenHeight);
    points = [];
    init();
    startAnimating(fpsValue.innerText);
}

// Then run and animate as soon as the page loaded
init();
startAnimating(fpsValue.innerText);