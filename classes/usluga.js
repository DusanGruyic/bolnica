export class Usluga {
  constructor(
    nazivUsluge,
    cena,
    datumUsluge = new Date().toLocaleDateString()
  ) {
    this.nazivUsluge = nazivUsluge;
    this.cena = cena;
    this.datumUsluge = datumUsluge;
  }

  prikaziPodatkeUsluge() {
    console.log(`Naziv usluge: ${this.nazivUsluge}`);
    console.log(`Cena usluge: ${this.cena}`);
    console.log(`Datum usluge: ${this.datumUsluge}`);
  }
}
