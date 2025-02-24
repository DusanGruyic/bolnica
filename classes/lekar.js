import { Osoba } from "./osoba.js";
import { Dijagnoza } from "./dijagnoza.js";

export class Lekar extends Osoba {
  constructor(ime, prezime, specijalizacija, listaPacijenata = []) {
    super(ime, prezime);
    this.specijalizacija = specijalizacija;
    this.listaPacijenata = listaPacijenata;
  }

  postaviDijagnozu(pacijent, nazivDijagnoze) {
    pacijent.istorijaBolesti.push(nazivDijagnoze);

    console.log(
      `Dijagnoza "${nazivDijagnoze}" postavljena pacijentu ${pacijent.ime} ${pacijent.prezime} `
    );
  }

  prikaziPacijente([]) {
    console.log(this.listaPacijenata);
  }

  dodajPacijenta(...pacijent) {
    pacijent.forEach((pacijent) => {
      this.listaPacijenata.push(pacijent);

      console.log(
        `Pacijent ${pacijent.ime} ${pacijent.prezime} je dodat u listu pacijenata.`
      );
    });
  }

  prikaziPodatkeLekara() {
    console.log(`Ime: ${this.ime}`);
    console.log(`Prezime: ${this.prezime}`);
    console.log(`Specijalizacija: ${this.specijalizacija}`);
    console.log(
      `Lista pacijenata: ${this.listaPacijenata.map(
        (pacijent) => `${pacijent.ime} ${pacijent.prezime}`
      )}`
    );
  }
}
