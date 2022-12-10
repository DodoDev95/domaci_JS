let utrkaElementi = {
  nadimak: document.getElementById("nadimak"),
  nadimak2: document.getElementById("nadimak2"),
  boja: document.getElementById("colorpicker"),
  boja2: document.getElementById("colorpicker2"),
  brzina: document.getElementById("brzina"),
  brzina2: document.getElementById("brzina2"),
  duljinaStaze: document.getElementById("duljina"),
  rezultati: document.getElementById("rezultati"),
};

let utrkaValues = {};

function stvoriSve() {
  utrkaValues.duljina = utrkaElementi.duljinaStaze.value;

  utrkaValues.auto1 = {
    nadimak: utrkaElementi.nadimak.value,
    boja: utrkaElementi.boja.value,
    brzina: utrkaElementi.brzina.value,
    vrijeme: utrkaValues.duljina / utrkaElementi.brzina.value,
  };
  utrkaValues.auto2 = {
    nadimak: utrkaElementi.nadimak2.value,
    boja: utrkaElementi.boja2.value,
    brzina: utrkaElementi.brzina2.value,
    vrijeme: utrkaValues.duljina / utrkaElementi.brzina2.value,
  };
}
function rokaj(e) {
  e.preventDefault();
  stvoriSve();
  if (
    utrkaValues.auto1.brzina &&
    utrkaValues.auto2.brzina &&
    utrkaValues.duljina
  ) {
    if (utrkaValues.auto1.vrijeme > utrkaValues.auto2.vrijeme) {
      utrkaElementi.rezultati.innerHTML = `<p style="color:${utrkaValues.auto3.boja}">${utrkaValues.auto2.nadimak} je pobijedio! Prosao je stazu za ${utrkaValues.auto2.vrijeme} sati.`;
    } else if (utrkaValues.auto1.vrijeme < utrkaValues.auto2.vrijeme) {
      utrkaElementi.rezultati.innerHTML = `<p style="color:${utrkaValues.auto1.boja}">${utrkaValues.auto1.nadimak} je pobijedio! Prosao je stazu za ${utrkaValues.auto1.vrijeme} sati.</p>`;
    } else {
      utrkaElementi.rezultati.innerHTML = `<p>Stigli su do cilja u isto vrijeme!</p>`;
    }
  } else {
    utrkaElementi.rezultati.innerHTML = `<p>Molimo unesite brzine!</p>`;
  }
}
