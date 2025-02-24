import { Osoba } from "./osoba.js";

export class Pacijent extends Osoba {
  constructor(ime, prezime, datumRodjenja, brojTelefona, alergije = []) {
    super(ime, prezime, datumRodjenja, brojTelefona);

    this.alergije = alergije;
  }
  istorijaBolesti = [];
  trenutnoStanje;

  trenutno_stanje() {
    return this.trenutnoStanje;
  }

  zakaziPregled(lekar, usluga) {
    const postojeciPregled = this.istorijaBolesti.find(
      (pregled) => pregled.lekar === lekar && pregled.usluga === usluga
    );

    if (postojeciPregled) {
      console.log(
        `Pregled kod Dr. ${lekar.ime} ${lekar.prezime} za uslugu: ${usluga.nazivUsluge} već postoji.`
      );
      return;
    }

    console.log(
      `Zakazan pregled kod Dr. ${lekar.ime} ${lekar.prezime} za uslugu: ${usluga.nazivUsluge}`
    );
  }

  upisiDijagnozu(dijagnoza) {
    this.istorijaBolesti.push(dijagnoza);
    this.trenutnoStanje = dijagnoza.nazivDijagnoze;
  }

  zakaziPregledKodViseLekara(lekari, usluga) {
    lekari.forEach((lekar) => {
      this.zakaziPregled(lekar, usluga);
    });
  }

  otkaziPregled(lekar, usluga) {
    this.istorijaBolesti = this.istorijaBolesti.filter(
      (pregled) => pregled.lekar !== lekar || pregled.usluga !== usluga
    );
    console.log(
      `Otkazan pregled kod Dr. ${lekar.ime} ${lekar.prezime} za uslugu: ${usluga.nazivUsluge}`
    );
  }

  prikaziIstorijuBolesti() {
    const istorijaBolesti = this.istorijaBolesti.map((pregled) => pregled);
    console.log(`Istorija bolesti pacijenta ${istorijaBolesti}`);
  }

  prikaziPodatkePacijenta() {
    const podaci = `
    Ime: ${this.ime}
    Prezime: ${this.prezime}
    Datum rođenja: ${this.datumRodjenja}
    Broj telefona: ${this.brojTelefona}
    Istorija bolesti: ${this.istorijaBolesti}
    Alergije: ${this.alergije.join(", ")}
    Trenutno stanje: ${this.trenutnoStanje}
  `;
    console.log(podaci);
  }
}
