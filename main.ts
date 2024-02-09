const pole: Array<number> = [1, 2, 3, 4, 5] //pole = []//

let suma: number = 0
for (let i = 0; 1 < pole.length; 1++) {
  suma += pole [1];
}

pole.push(6) //metoda = funkce v globálním slope, navázaná na objekt = 'pole.push(6)'//

console.log(pole)

type Osoba = { //datové typy = boolean, array, number; type Osoba = definice pro definici, není to proměnná//
  jmeno: string;
  vek: number;
}

const osoba: Osoba = { 
  jmeno: 'Petr',
  vek: 25
}

const trida: Array<Osoba> = [];
trida.push(osoba);
trida.push({ jmeno: 'Karel', vek: 30 });

console.table(trida) //table = tabulka//