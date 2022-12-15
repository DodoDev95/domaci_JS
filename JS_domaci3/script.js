const sviElementi = {
  highScore: document.getElementById("highScore"),
  tvojBroj: document.getElementById("odaberiBroj"),
  giveHint: document.getElementById("infoBox"),
  brojPokusaja: document.getElementById("brojPokusaja"),
};

let rNG = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

console.log(rNG);

let pokusaji = 1;

function brojiPokusaje() {
  Number(sviElementi.tvojBroj.value) !== rNG
    ? (sviElementi.brojPokusaja.innerHTML = `Broj pokusaja: ${pokusaji++}`)
    : (sviElementi.brojPokusaja.innerHTML = `Broj pokusaja: ${pokusaji}`);
}

function pogodiBroj(e) {
  e.preventDefault();
  brojiPokusaje();

  if (sviElementi.tvojBroj.value) {
    if (sviElementi.tvojBroj.value < rNG) {
      sviElementi.giveHint.innerHTML = `hmmm...tvoj broj je manji od traženog`;
    } else if (sviElementi.tvojBroj.value > rNG) {
      sviElementi.giveHint.innerHTML = `hmmm...tvoj broj je veći od traženog`;
    } else {
      sviElementi.giveHint.innerHTML = `POGODAK!`;
    }
  } else {
    sviElementi.giveHint.innerHTML = `Molim te odaberi broj između 1 i 100...`;
  }
}
