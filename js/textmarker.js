console.log("test");
const MARKER = document.querySelectorAll("mark"); //wählt das element 'mark' aus, findet alle marker 
console.log(MARKER);
const COLOR = [`255, 191, 0`]; //array mit farben 

const random = (min, max) => {  //gibt der Funktion die Werte min und max 
  return Math.round(Math.random() * (max - min) + min); //gibt mit den Werten max - min + min eine Zahl aus und Rundet diese auf eine ganze Zahl
};

const addBorderRadius = marker => { //kreiert mithilfe der Random Zahl für das HTML Dokument einen Style = "borderRadius: " und fügt ihr die vier Random Werte hinzu um so eine Border zu erstellen
  marker.style.borderRadius = `${random(2, 10)}px ${random(2, 10)}px ${random(2, 10)}px ${random(2, 10)}px `; //gibt eine Random Zahl zwischen 2 und 10 wieder, hier werden 4 Random Zahlen erstellt, für oben Links, oben Rechts, unten Links und unten Rechts um den Marker Strich zu simulieren
};

const addPadding = marker => {
  marker.style.padding = `${random(0, 3)}px ${random(0, 8)}px`;
};

const createGradientParth = () => {
  const COLORSTOPS = random(2, 10);
  const COLORSELECTED = COLOR[random(0, COLOR.length - 1)];
  let stops = '';

  for (let i = 0; i < COLORSTOPS; i++) {
    stops = stops + `rgba(${COLORSELECTED}, ${random(50, 90) / 100}),`;
  }

  stops = stops.substring(0, stops.length - 1);
  return stops;
};

const addGradient = marker => { //diese Funktion fügt dem HTML Tag "marker" einen Padding Style hinzu
  marker.style.backgroundImage = `linear-gradient(to ${random(0, 1) === 1 ? `left` : `right`}, ${createGradientParth()})`;
};

MARKER.forEach(marker => {  //fügt jedem MARKER den Border aus der addBorderRadius funktion hinzu 
  addBorderRadius(marker); //fügt BorderRadius mithilfe der Funktion addBorderRadius mit dem Wert (marker); hinzu
  addPadding(marker);       //fügt Padding mithilfe der addPadding Funktion mit dem Wert (marker); hinzu
  addGradient(marker);
});

