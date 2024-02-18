const frm = document.querySelector("#form-tableJaleco");
const tbJaleco = document.getElementById("tableJaleco");
const sairButton = document.getElementById("removeTable-button");

function referencia() {
  const ref = document.getElementById("refJaleco-table");
  ref.innerText = `Referência: ${frm.refJaleco.value}`;
}
function busto() {
  const baseBusto = document.getElementById("bustoJaleco");
  const bustoPp = document.getElementById("busto-ppJaleco");
  const bustoP = document.getElementById("busto-pJaleco");
  const bustoM = document.getElementById("busto-mJaleco");
  const bustoG = document.getElementById("busto-gJaleco");
  const bustoGg = document.getElementById("busto-ggJaleco");

  if (baseBusto.value !== null) {
    bustoPp.innerText = baseBusto.value - 5;
    bustoP.innerText = baseBusto.value;
    bustoM.innerText = baseBusto.value++ + 5;
    bustoG.innerText = baseBusto.value++ + 11.5;
    bustoGg.innerText = baseBusto.value++ + 16.5;
  }
}

function cintura() {
  const baseCint = document.getElementById("cintJaleco");
  const cintPp = document.getElementById("cintura-ppJaleco");
  const cintP = document.getElementById("cintura-pJaleco");
  const cintM = document.getElementById("cintura-mJaleco");
  const cintG = document.getElementById("cintura-gJaleco");
  const cintGg = document.getElementById("cintura-ggJaleco");

  cintPp.innerText = baseCint.value - 5;
  cintP.innerText = baseCint.value;
  cintM.innerText = baseCint.value++ + 5;
  cintG.innerText = baseCint.value++ + 11.5;
  cintGg.innerText = baseCint.value++ + 16.5;
}

function comprimento() {
  const baseComp = document.getElementById("compJaleco");
  const compPp = document.getElementById("comprimento-ppJaleco");
  const compP = document.getElementById("comprimento-pJaleco");
  const compM = document.getElementById("comprimento-mJaleco");
  const compG = document.getElementById("comprimento-gJaleco");
  const compGg = document.getElementById("comprimento-ggJaleco");

  compPp.innerText = baseComp.value - 1.5;
  compP.innerText = baseComp.value;
  compM.innerText = baseComp.value++ + 1.5;
  compG.innerText = baseComp.value++ + 3;
  compGg.innerText = baseComp.value++ + 4.5;
}

function compManga() {
  const baseCompManga = document.getElementById("compManga");
  const compMangaPp = document.getElementById("compManga-ppJaleco");
  const compMangaP = document.getElementById("compManga-pJaleco");
  const compMangaM = document.getElementById("compManga-mJaleco");
  const compMangaG = document.getElementById("compManga-gJaleco");
  const compMangaGg = document.getElementById("compManga-ggJaleco");

  compMangaPp.innerText = baseCompManga.value - 0.5;
  compMangaP.innerText = baseCompManga.value;
  compMangaM.innerText = baseCompManga.value++ + 0.5;
  compMangaG.innerText = baseCompManga.value++ + 1;
  compMangaGg.innerText = baseCompManga.value++ + 1.5;
}

frm.addEventListener("submit", (ev) => {
  tbJaleco.classList.add("show");
  frm.classList.remove("show");
  referencia();
  busto();
  cintura();
  comprimento();
  compManga();
  frm.refJaleco.value = "";
  frm.bustoJaleco.value = "";
  frm.cintJaleco.value = "";
  frm.compJaleco.value = "";
  frm.compManga.value = "";
  ev.preventDefault();
});

sairButton.addEventListener("click", () => {
  tbJaleco.classList.remove("show");
  frm.classList.add("show");
});
