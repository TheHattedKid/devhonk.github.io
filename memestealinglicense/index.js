
let canvas = document.getElementById('memeoutput'),
    context = canvas.getContext('2d');
let curseCasual = new FontFace(
    'Curse Casual', 'url(\'https://devhonk.github.io/cursecasual.ttf\')');
curseCasual.load().then((font) => {
  document.fonts.add(font);
  console.log('Font loaded');
});
let img = new Image();
console.log(img.crossOrigin)
img.src = './template.png';

function generateMeme() {
  let name = document.getElementById('name').value;
  let gender = document.getElementById('gender').value === '' ? "Unknown" : document.getElementById('gender').value;
  let pronouns = document.getElementById('pronouns').value === '' ? "Unknown" : document.getElementById('pronouns').value;
  let shortIntro = document.getElementById('short-intro').value === '' ? "Unknown" : document.getElementById('short-intro').value;
  if (name === '') {
    alert('Please input a valid name.')
    return;
  }
  if (gender === '') {
    alert('Please input a valid gender.')
    return;
  }
  if (pronouns === '') {
    alert('Please input valid pronouns.')
    return;
  }
  if (pronouns === 'walnuts are good') {
    alert('bruh mate ill let it pass but you\'re just trolling me amirite?')
  }
  

  context.drawImage(img, 0, 0);
  context.fillStyle = "#FF0FFF"
  context.font = '22px Curse Casual';
  context.fillText(`Name: ${name}`, 16, 67);
  context.fillText(`Gender: ${gender}`, 16, 91);
  context.fillText(`Pronouns: ${pronouns}`, 16, 115);
  context.fillText(`Short intro: ${shortIntro}`, 16, 139);
}