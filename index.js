const DIV_BY_FOR_MOVE = 250
const MAX_DIST = 7
let textPoints = [
    [
        [0.44, 0.55],
        [0.448, 0.55],
        [0.454, 0.58],
        [0.454, 0.69],
        [0.452, 0.71],
        [0.446, 0.74],
        [0.442, 0.74],
        [0.438, 0.73],
        [0.434, 0.71],
        [0.434, 0.68],
        [0.432, 0.67],
        [0.432, 0.64],
        [0.434, 0.63],
        [0.434, 0.59]
    ],
    [
        [0.21, 0.55],
        [0.218, 0.55],
        [0.224, 0.58],
        [0.224, 0.69],
        [0.222, 0.71],
        [0.216, 0.74],
        [0.212, 0.74],
        [0.208, 0.73],
        [0.204, 0.71],
        [0.204, 0.68],
        [0.202, 0.67],
        [0.202, 0.64],
        [0.204, 0.63],
        [0.204, 0.59]
    ],
    [
        [0.158, 0.55],
        [0.166, 0.55],
        [0.172, 0.58],
        [0.172, 0.69],
        [0.17, 0.71],
        [0.164, 0.74],
        [0.16, 0.74],
        [0.156, 0.73],
        [0.152, 0.71],
        [0.152, 0.68],
        [0.15, 0.67],
        [0.15, 0.64],
        [0.152, 0.63],
        [0.152, 0.59]
    ],
    [
        [0.486, 0.58],
        [0.488, 0.57],
        [0.488, 0.56],
        [0.492, 0.54],
        [0.498, 0.54],
        [0.502, 0.56],
        [0.502, 0.57],
        [0.504, 0.58],
        [0.504, 0.61],
        [0.502, 0.62],
        [0.488, 0.62],
        [0.486, 0.61]
    ],
    [
        [0.306, 0.58],
        [0.308, 0.57],
        [0.308, 0.56],
        [0.312, 0.54],
        [0.318, 0.54],
        [0.322, 0.56],
        [0.322, 0.57],
        [0.324, 0.58],
        [0.324, 0.61],
        [0.322, 0.62],
        [0.308, 0.62],
        [0.306, 0.61]
    ],
    [
        [0.696, 0.49],
        [0.698, 0.75],
        [0.706, 0.79],
        [0.724, 0.77],
        [0.726, 0.8],
        [0.738, 0.8],
        [0.738, 0.49],
        [0.726, 0.49],
        [0.726, 0.71],
        [0.72, 0.73],
        [0.708, 0.7],
        [0.708, 0.49]
    ],
    [
        [0.536, 0.48],
        [0.526, 0.52],
        [0.524, 0.59],
        [0.536, 0.65],
        [0.546, 0.66],
        [0.552, 0.71],
        [0.548, 0.73],
        [0.538, 0.73],
        [0.53, 0.7],
        [0.524, 0.76],
        [0.536, 0.79],
        [0.55, 0.79],
        [0.562, 0.75],
        [0.564, 0.67],
        [0.556, 0.63],
        [0.54, 0.6],
        [0.536, 0.56],
        [0.54, 0.54],
        [0.558, 0.56],
        [0.562, 0.51],
        [0.55, 0.48]
    ],
    [
        [0.49, 0.48],
        [0.476, 0.55],
        [0.474, 0.7],
        [0.482, 0.78],
        [0.49, 0.8],
        [0.502, 0.8],
        [0.512, 0.77],
        [0.508, 0.72],
        [0.502, 0.74],
        [0.492, 0.74],
        [0.486, 0.68],
        [0.514, 0.66],
        [0.514, 0.57],
        [0.508, 0.5],
        [0.5, 0.48]
    ],
    [
        [0.448, 0.48],
        [0.434, 0.49],
        [0.426, 0.53],
        [0.422, 0.58],
        [0.422, 0.72],
        [0.43, 0.78],
        [0.442, 0.8],
        [0.456, 0.78],
        [0.462, 0.75],
        [0.466, 0.68],
        [0.466, 0.6],
        [0.462, 0.52]
    ],
    [
        [0.31, 0.48],
        [0.296, 0.55],
        [0.294, 0.7],
        [0.302, 0.78],
        [0.31, 0.8],
        [0.322, 0.8],
        [0.332, 0.77],
        [0.328, 0.72],
        [0.322, 0.74],
        [0.312, 0.74],
        [0.306, 0.68],
        [0.334, 0.66],
        [0.334, 0.57],
        [0.328, 0.5],
        [0.32, 0.48]
    ],
    [
        [0.256, 0.48],
        [0.246, 0.52],
        [0.244, 0.59],
        [0.256, 0.65],
        [0.266, 0.66],
        [0.272, 0.71],
        [0.268, 0.73],
        [0.258, 0.73],
        [0.25, 0.7],
        [0.244, 0.76],
        [0.256, 0.79],
        [0.27, 0.79],
        [0.282, 0.75],
        [0.284, 0.67],
        [0.276, 0.63],
        [0.26, 0.6],
        [0.256, 0.56],
        [0.26, 0.54],
        [0.278, 0.56],
        [0.282, 0.51],
        [0.27, 0.48]
    ],
    [
        [0.218, 0.48],
        [0.204, 0.49],
        [0.196, 0.53],
        [0.192, 0.58],
        [0.192, 0.72],
        [0.2, 0.78],
        [0.212, 0.8],
        [0.226, 0.78],
        [0.232, 0.75],
        [0.236, 0.68],
        [0.236, 0.6],
        [0.232, 0.52]
    ],
    [
        [0.166, 0.48],
        [0.152, 0.49],
        [0.144, 0.53],
        [0.14, 0.58],
        [0.14, 0.72],
        [0.148, 0.78],
        [0.16, 0.8],
        [0.174, 0.78],
        [0.18, 0.75],
        [0.184, 0.68],
        [0.184, 0.6],
        [0.18, 0.52]
    ],
    [
        [0.382, 0.42],
        [0.39, 0.43],
        [0.398, 0.47],
        [0.4, 0.54],
        [0.402, 0.55],
        [0.4, 0.64],
        [0.388, 0.71],
        [0.382, 0.71],
        [0.38, 0.7],
        [0.38, 0.43]
    ],
    [
        [0.83, 0.37],
        [0.81, 0.39],
        [0.804, 0.45],
        [0.804, 0.5],
        [0.794, 0.51],
        [0.794, 0.56],
        [0.804, 0.57],
        [0.804, 0.79],
        [0.816, 0.78],
        [0.816, 0.57],
        [0.83, 0.55],
        [0.83, 0.5],
        [0.818, 0.51],
        [0.816, 0.46],
        [0.822, 0.43],
        [0.83, 0.43]
    ],
    [
        [0.784, 0.37],
        [0.764, 0.39],
        [0.758, 0.45],
        [0.758, 0.5],
        [0.748, 0.51],
        [0.748, 0.56],
        [0.758, 0.57],
        [0.758, 0.79],
        [0.77, 0.78],
        [0.77, 0.57],
        [0.784, 0.55],
        [0.784, 0.5],
        [0.772, 0.51],
        [0.77, 0.46],
        [0.776, 0.43],
        [0.784, 0.43]
    ],
    [
        [0.634, 0.37],
        [0.612, 0.37],
        [0.6, 0.43],
        [0.598, 0.5],
        [0.602, 0.56],
        [0.63, 0.67],
        [0.628, 0.72],
        [0.62, 0.74],
        [0.604, 0.71],
        [0.598, 0.76],
        [0.6, 0.78],
        [0.616, 0.8],
        [0.63, 0.79],
        [0.642, 0.73],
        [0.644, 0.67],
        [0.638, 0.6],
        [0.612, 0.51],
        [0.612, 0.46],
        [0.618, 0.43],
        [0.638, 0.45],
        [0.642, 0.4]
    ],
    [
        [0.368, 0.37],
        [0.368, 0.78],
        [0.382, 0.78],
        [0.398, 0.75],
        [0.408, 0.7],
        [0.414, 0.62],
        [0.414, 0.52],
        [0.41, 0.44],
        [0.402, 0.39],
        [0.392, 0.37]
    ],
    [
        [0.674, 0.36],
        [0.66, 0.38],
        [0.66, 0.48],
        [0.652, 0.49],
        [0.652, 0.54],
        [0.66, 0.55],
        [0.662, 0.76],
        [0.67, 0.79],
        [0.684, 0.79],
        [0.686, 0.74],
        [0.678, 0.74],
        [0.672, 0.7],
        [0.672, 0.54],
        [0.686, 0.53],
        [0.686, 0.48],
        [0.672, 0.47]
    ],
    [
        [0.104, 0.36],
        [0.088, 0.43],
        [0.084, 0.66],
        [0.096, 0.78],
        [0.114, 0.79],
        [0.128, 0.72],
        [0.13, 0.56],
        [0.106, 0.57],
        [0.106, 0.62],
        [0.116, 0.62],
        [0.118, 0.68],
        [0.11, 0.73],
        [0.104, 0.73],
        [0.096, 0.68],
        [0.096, 0.5],
        [0.108, 0.43],
        [0.124, 0.45],
        [0.128, 0.38]
    ]
];
let canvas = document.getElementById('gooseOnTheWebCanvas');
canvas.width = window.innerWidth;
canvas.height = 100;
let mouseX
let mouseY
document.onmousemove = (event) => {
    mouseX = event.clientY
    mouseY = event.clientX
}
function dist(x0, y0, x1, y1) {
	return Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2))
}
function pauseExecution(milliseconds) {
    let startTime = new Date();
    while ((new Date()) - startTime <= milliseconds);
}
let context = canvas.getContext('2d');
for (let shape of textPoints) {
    context.beginPath();
    for (let point of shape) {
        context.lineTo(point[0] * canvas.width, point[1] * canvas.height);
        //pauseExecution(Math.random()*100)
    }
    context.fill()
}

function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function mmToRGB(wavelength) {
    let Gamma = 0.80,
        IntensityMax = 255,
        factor, red, green, blue;
    if ((wavelength >= 380) && (wavelength < 440)) {
        red = -(wavelength - 440) / (440 - 380);
        green = 0.0;
        blue = 1.0;
    } else if ((wavelength >= 440) && (wavelength < 490)) {
        red = 0.0;
        green = (wavelength - 440) / (490 - 440);
        blue = 1.0;
    } else if ((wavelength >= 490) && (wavelength < 510)) {
        red = 0.0;
        green = 1.0;
        blue = -(wavelength - 510) / (510 - 490);
    } else if ((wavelength >= 510) && (wavelength < 580)) {
        red = (wavelength - 510) / (580 - 510);
        green = 1.0;
        blue = 0.0;
    } else if ((wavelength >= 580) && (wavelength < 645)) {
        red = 1.0;
        green = -(wavelength - 645) / (645 - 580);
        blue = 0.0;
    } else if ((wavelength >= 645) && (wavelength < 781)) {
        red = 1.0;
        green = 0.0;
        blue = 0.0;
    } else {
        red = 0.0;
        green = 0.0;
        blue = 0.0;
    }
    // Let the intensity fall off near the vision limits
    if ((wavelength >= 380) && (wavelength < 420)) {
        factor = 0.3 + 0.7 * (wavelength - 380) / (420 - 380);
    } else if ((wavelength >= 420) && (wavelength < 701)) {
        factor = 1.0;
    } else if ((wavelength >= 701) && (wavelength < 781)) {
        factor = 0.3 + 0.7 * (780 - wavelength) / (780 - 700);
    } else {
        factor = 0.0;
    }
    if (red !== 0) {
        red = Math.round(IntensityMax * Math.pow(red * factor, Gamma));
    }
    if (green !== 0) {
        green = Math.round(IntensityMax * Math.pow(green * factor, Gamma));
    }
    if (blue !== 0) {
        blue = Math.round(IntensityMax * Math.pow(blue * factor, Gamma));
    }
    return rgbToHex(red, green, blue);
}
let i = 0;
setInterval(function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth / 5;
    context = canvas.getContext('2d');
    context.fillStyle = mmToRGB((((Math.sin(i / 100) + 1) / 2) * 370) + 380)
    context.clearRect(0, 0, canvas.width, canvas.height)
    for (let shape of textPoints) {
        context.beginPath()
        for (let point of shape) {
			let pointX = (point[0] + (Math.random() / DIV_BY_FOR_MOVE)) * canvas.width
			let pointY = (point[1] + (Math.random() / DIV_BY_FOR_MOVE)) * canvas.height
			//let distMousePoint = dist(pointX, pointY, mouseX, mouseY)
			/*if(Math.abs(distMousePoint) < MAX_DIST) {
				console.log(distMousePoint)
				if(distMousePoint <= -1) {
					pointX += Math.abs(distMousePoint) / 2
					pointY += Math.abs(distMousePoint) / 2
				} else {
					pointX -= Math.abs(distMousePoint) / 2
					pointY -= Math.abs(distMousePoint) / 2
				}
			}*/
            context.lineTo(pointX, pointY)
            //pauseExecution(Math.random()/100)
        }
        context.fill()
        context.closePath()
    }
    i++
}, 100)
let click = 0
function ductapeClick() {
    if(click ++=== 4) {
        //alert("e")
        document.getElementById("screenshot").src = "ductapeshell.png"
    }
}
//Opens a BA'!
function openBA(ba) {
  window.open(`https://devhonk.github.io/ba/${ba}.html`)
}
