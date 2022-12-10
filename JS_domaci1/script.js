function statistika(e) {
  e.preventDefault();

  let poruka = document.getElementById("poruka").value;

  let charCount = poruka.split("").filter((slovo) => slovo !== " ");

  const wordCount = poruka.split(" ").filter((word) => word !== "");
  console.log(wordCount);
  console.log(charCount);
  document.getElementById(
    "statistika"
  ).innerHTML += ` broj riječi: ${wordCount.length}, broj znakova (bez razmaka): ${charCount.length}`;
}
