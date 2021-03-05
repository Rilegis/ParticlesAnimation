/**********************************************************************
    Project           : ParticlesAnimation
    File name         : optionsButton.js
    Author            : Rilegis
    Date created      : 23/10/2019
    Purpose           : This file contains the code needed to toggle
                        options screen.

    Revision History  :
    Date        Author      Ref     Revision
    22/12/2019  Rilegis     1       Added file header.
**********************************************************************/

optionsTab.style.display = "none"

function toggleOptions()
{
    var optionsTab = document.getElementById("optionsTab");
    var canvas = document.getElementById("canvas");
    var sourceCodeButton = document.getElementById("sourceCodeButton");

    if (optionsTab.style.display === "none")
    {
        canvas.style.filter = "blur(8px)"
        optionsTab.style.display = "block";
        sourceCodeButton.style.display = "none";
    }
    else
    {
        optionsTab.style.display = "none";
        canvas.style.filter = "none";
        sourceCodeButton.style.display = "block";
    }
}