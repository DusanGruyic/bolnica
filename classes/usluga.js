export class Usluga {
  constructor(nazivUsluge, cena, datum_usluge) {
    this.nazivUsluge = nazivUsluge;
    this.cena = cena;
    this.datum_usluge = datum_usluge;
  }
  prikaziPodatkeUsluge() {
    console.log(`Naziv usluge: ${this.nazivUsluge}`);
    console.log(`Cena usluge: ${this.cena}`);
    console.log(`Datum usluge: ${this.datum_usluge}`);
  }
}
