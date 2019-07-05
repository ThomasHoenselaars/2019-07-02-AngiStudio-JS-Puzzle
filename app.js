// GEDACHTENPROCES
// Start coordinaten 0,0 met gezicht naar het NOORDEN
// Bord zegt.. L of R + getal
// Windrichtingen als een klok, dan:
// L = -1
// R = +1

// Kijkrichting & Current Kijkrichting
// 0 = Noord, 1 = Oost, 2 = Zuid, 3 = West

// updaten van currentKijkRichting = kijkRichting[currentKijkRichting +/- 1];

// Array met N,O,Z,W / 0, 1, 2, 3
//  R = kijkRichting[current +1]
//  L = kijkRichting[current -1]
// Als Current = 0  && Bord = L
//  -> Kijkrichting[3], naar einde van array
// Als Current = 3  && Bord = R
//  -> Kijkrichting[0], terug naar begin van array

// ALS Kijkrichting = N -> y ++ met aantal stappen
// ALS Kijkrichting = Z -> y -- met aantal stappen
// ALS Kijkrichting = O -> x ++ met aantal stappen
// ALS Kijkrichting = W -> x -- met aantal stappen

const borden = [
  "R2",
  "L3",
  "R2",
  "R4",
  "L2",
  "L1",
  "R2",
  "R4",
  "R1",
  "L4",
  "L5",
  "R5",
  "R5",
  "R2",
  "R2",
  "R1",
  "L2",
  "L3",
  "L2",
  "L1",
  "R3",
  "L5",
  "R187",
  "R1",
  "R4",
  "L1",
  "R5",
  "L3",
  "L4",
  "R50",
  "L4",
  "R2",
  "R70",
  "L3",
  "L2",
  "R4",
  "R3",
  "R194",
  "L3",
  "L4",
  "L4",
  "L3",
  "L4",
  "R4",
  "R5",
  "L1",
  "L5",
  "L4",
  "R1",
  "L2",
  "R4",
  "L5",
  "L3",
  "R4",
  "L5",
  "L5",
  "R5",
  "R3",
  "R5",
  "L2",
  "L4",
  "R4",
  "L1",
  "R3",
  "R1",
  "L1",
  "L2",
  "R2",
  "R2",
  "L3",
  "R3",
  "R2",
  "R5",
  "R2",
  "R5",
  "L3",
  "R2",
  "L5",
  "R1",
  "R2",
  "R2",
  "L4",
  "L5",
  "L1",
  "L4",
  "R4",
  "R3",
  "R1",
  "R2",
  "L1",
  "L2",
  "R4",
  "R5",
  "L2",
  "R3",
  "L4",
  "L5",
  "L5",
  "L4",
  "R4",
  "L2",
  "R1",
  "R1",
  "L2",
  "L3",
  "L2",
  "R2",
  "L4",
  "R3",
  "R2",
  "L1",
  "L3",
  "L2",
  "L4",
  "L4",
  "R2",
  "L3",
  "L3",
  "R2",
  "L4",
  "L3",
  "R4",
  "R3",
  "L2",
  "L1",
  "L4",
  "R4",
  "R2",
  "L4",
  "L4",
  "L5",
  "L1",
  "R2",
  "L5",
  "L2",
  "L3",
  "R2",
  "L2"
];

// Testarray's om te controleren of het programma klopt
// const borden = ["L2", "L2", "L2"];
// const borden = ["R5", "L5", "R5", "R3"];

console.log(borden);

const kijkRichting = [0, 1, 2, 3];
let currentKijkRichting = kijkRichting[0];

console.log(currentKijkRichting);

let x = 0;
let y = 0;

borden.forEach(bord => {
  let richting = bord.charAt(0);
  let stappen = parseInt(bord.substr(1, 3));

  if (richting === "R" && currentKijkRichting < 3) {
    currentKijkRichting = kijkRichting[currentKijkRichting + 1];

    if (currentKijkRichting === 0) {
      y = y + stappen;
    } else if (currentKijkRichting === 1) {
      x = x + stappen;
    } else if (currentKijkRichting === 2) {
      y = y - stappen;
    } else if (currentKijkRichting === 3) {
      x = x - stappen;
    }

    console.log(currentKijkRichting);
  } else if (richting === "R" && currentKijkRichting === 3) {
    currentKijkRichting = kijkRichting[0];

    y = y + stappen;

    console.log(currentKijkRichting);
  } else if (richting === "L" && currentKijkRichting > 0) {
    currentKijkRichting = kijkRichting[currentKijkRichting - 1];

    if (currentKijkRichting === 0) {
      y = y + stappen;
    } else if (currentKijkRichting === 1) {
      x = x + stappen;
    } else if (currentKijkRichting === 2) {
      y = y - stappen;
    } else if (currentKijkRichting === 3) {
      x = x - stappen;
    }

    console.log(currentKijkRichting);
  } else if (richting === "L" && currentKijkRichting === 0) {
    currentKijkRichting = kijkRichting[3];

    x = x - stappen;

    console.log(currentKijkRichting);
  }
  console.log(x, y);
});

// Antwoord coordinaten na laatste foreach: -123,-123 = 246 blokken verwijderd
