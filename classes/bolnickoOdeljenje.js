export class BolnickoOdeljenje {
  constructor(nazivOdeljenja, listaPacijenata = [], listaLekara = []) {
    this.nazivOdeljenja = nazivOdeljenja;
    this.listaPacijenata = listaPacijenata;
    this.listaLekara = listaLekara;
  }

  prijemPacijenta(pacijent) {
    this.listaPacijenata.push(pacijent);
    console.log(
      `Pacijent ${pacijent.ime} ${pacijent.prezime} je primljen na odeljenje ${this.nazivOdeljenja}`
    );
  }

  dodajLekara(lekar) {
    this.listaLekara.push(lekar);
    console.log(
      `Lekar ${lekar.ime} ${lekar.prezime} je dodat na odeljenje ${this.nazivOdeljenja}`
    );
  }

  prikaziPodatkeOdeljenja() {
    const pacijenti = this.listaPacijenata.map(
      (pacijent) => `${pacijent.ime} ${pacijent.prezime}`
    );
    const lekari = this.listaLekara.map(
      (lekar) => `${lekar.ime} ${lekar.prezime}`
    );
    console.log(`Naziv odeljenja: ${this.nazivOdeljenja}`);
    console.log(`Lista pacijenata: ${pacijenti}`);
    console.log(`Lista lekara: ${lekari}`);
  }
}
