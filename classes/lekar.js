import { Osoba } from "./osoba.js";
export class Lekar extends Osoba {
  constructor(ime, prezime, specijalizacija, lista_pacijenata = []) {
    super(ime, prezime);
    this.specijalizacija = specijalizacija;
    this.lista_pacijenata = lista_pacijenata;
  }
  postavi_dijagnozu(pacijent, dijagnoza) {
    console.log(
      `Lekar ${this.ime} ${this.prezime} postavlja dijagnozu pacijentu ${pacijent.ime} ${pacijent.prezime}: ${dijagnoza}`
    );
  }

  prikazi_pacijente([]) {
    console.log(this.lista_pacijenata);
  }

  dodajPacijenta(...pacijent) {
    pacijent.forEach((pacijent) => {
      this.lista_pacijenata.push(pacijent);

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
      `Lista pacijenata: ${this.lista_pacijenata.map(
        (pacijent) => `${pacijent.ime} ${pacijent.prezime}`
      )}`
    );
  }
}
