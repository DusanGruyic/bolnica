import { Osoba } from "./osoba.js";

export class Lekar extends Osoba {
  constructor(ime, prezime, specijalizacija, datumRodjenja, brojTelefona) {
    super(ime, prezime, datumRodjenja, brojTelefona);
    this.specijalizacija = specijalizacija;
  }
  listaPacijenata = [];

  postaviDijagnozu(pacijent, nazivDijagnoze) {
    pacijent.upisiDijagnozu(pacijent, nazivDijagnoze);
    console.log(
      `Dijagnoza "${nazivDijagnoze}" postavljena pacijentu ${pacijent.ime} ${pacijent.prezime} `
    );
  }

  prikaziPacijente() {
    console.log(this.listaPacijenata);
  }

  dodajPacijenta(pacijent) {
    this.listaPacijenata.push(pacijent);

    console.log(
      `Pacijent ${pacijent.ime} ${pacijent.prezime} je dodat u listu pacijenata.`
    );
  }

  dodeliAlergiju(pacijent, alergija) {
    pacijent.alergije.push(alergija);
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
    console.log(`Datum rodjenjda ${this.datumRodjenja}`);
    console.log(`Broj telefona ${this.brojTelefona}`);
  }
}
