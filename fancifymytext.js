function makeBigger() {
  let text = document.getElementById("text");
  text.style.fontSize = "24pt";
}

function fancyStyle() {
  let text = document.getElementById("text");
  text.style.fontWeight = "bold";
  text.style.color = "blue";
  text.style.textDecoration = "underline";
}

function boringStyle() {
  let text = document.getElementById("text");
  text.style.fontWeight = "normal";
  text.style.color = "black";
  text.style.textDecoration = "none";
}

function mooText() {
  let text = document.getElementById("text");
  let upper = text.value.toUpperCase();

  let sentences = upper.split(".");
  for (let i = 0; i < sentences.length - 1; i++) {
    sentences[i] = sentences[i] + "-Moo";
  }

  text.value = sentences.join(".");
}
