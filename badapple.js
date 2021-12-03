//Script to run Bad Apple!! on Advent of Code
//I checked and it runs from version 2015-2017-2018-2019-2020-2021(2016 won't work correctly)
//You even get something that looks like a "screen" on 2015!
//To use:
//Just place this script inside the JS tab.
//NOTE: I AM NOT RESPONSIBLE IF ANYTHING WRONG HAPPENS WITH THIS CODE
//AND YOU CAN COPY THIS FOR YOUR OWN PURPOSES, JUST MENTION ME!
//Thanks
//~ DevHONK

//Also note to Eric Wastl: You should think about doing that next year, that would be poggers so that at Christmas, we get a sort of animation(even if it's simple)!

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
function clear() {
  for(let y = 0; y < 26; y++) for(let x = 0; x < 53; x++) setPixel(x, y, " ");
}
function setPixel(x, y, chr) {

    let init = document.getElementsByClassName("calendar")[0].getElementsByTagName("a");
	let in2 = document.getElementsByClassName("calendar")[0];
    if(y < init.length) init[y].innerText = init[y].innerText.replaceAt(x, chr[0]);
    else in2.getElementsByClassName("calendar-day" + y)[0].innerText = in2.getElementsByClassName("calendar-day" + y)[0].innerText.replaceAt(x, chr[0]);

}
function getPixel(x, y) {

    let init = document.getElementsByClassName("calendar")[0].getElementsByTagName("a");
	let in2 = document.getElementsByClassName("calendar")[0];
    if(y < init.length) return init[y].innerText[x];
	return in2.getElementsByClassName("calendar-day" + y)[0].innerText[x];

}


let blob = await fetch("https://devhonk.github.io/badapple").then(r => r.blob());
let c = (await blob.text()).split("\n");
let frames = (c.length - 1) / 25;

let frame = 0;
let repeat = 0;
function animate() {
	for(let j = 0; j < 25; j++) {
		for(let k = 0; k < 53; k++) {
			if(getPixel(k, j) !== c[frame * 25 + j][k]) setPixel(k, j, c[frame * 25 + j][k]);
		}
	}
	if(frame++ >= frames) {
		clear();
		window.cancelAnimationFrame(repeat);
	}
	setTimeout(() => {
		repeat = requestAnimationFrame(animate);
	}, 1000 / (30));
}
animate()
