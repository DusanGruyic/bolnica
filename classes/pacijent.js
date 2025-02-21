import { Osoba } from "./osoba.js";

export class Pacijent extends Osoba {
  constructor(
    ime,
    prezime,
    datumRodjenja,
    brojTelefona,
    istorija_bolesti = [],
    alergije = [],
    trenutnoStanje
  ) {
    super(ime, prezime, datumRodjenja, brojTelefona);
    this.istorija_bolesti = istorija_bolesti;
    this.alergije = alergije;
    this.trenutnoStanje = trenutnoStanje;
  }

  zakaziPregled(lekar, usluga) {
    const postojeciPregled = this.istorija_bolesti.find(
      (pregled) => pregled.lekar === lekar && pregled.usluga === usluga
    );

    if (postojeciPregled) {
      console.log(
        `Pregled kod Dr. ${lekar.ime} ${lekar.prezime} za uslugu: ${usluga.nazivUsluge} već postoji.`
      );
      return;
    }
    const pregled = {
      datum: new Date().toISOString(),
      lekar: lekar,
      usluga: usluga,
      stanje: this.trenutnoStanje,
    };

    this.istorija_bolesti.push(pregled);
    console.log(
      `Zakazan pregled kod Dr. ${lekar.ime} ${lekar.prezime} za uslugu: ${usluga.nazivUsluge}`
    );
  }

  zakaziPregledKodViseLekara(lekari, usluga) {
    lekari.forEach((lekar) => {
      this.zakazi_pregled(lekar, usluga);
    });
  }

  otkaziPregled(lekar, usluga) {
    this.istorija_bolesti = this.istorija_bolesti.filter(
      (pregled) => pregled.lekar !== lekar || pregled.usluga !== usluga
    );
    console.log(
      `Otkazan pregled kod Dr. ${lekar.ime} ${lekar.prezime} za uslugu: ${usluga.nazivUsluge}`
    );
  }

  prikaziIstorijuBolesti() {
    console.log(this.istorija_bolesti);
  }

  prikaziPodatkePacijenta() {
    const podaci = `
    Ime: ${this.ime}
    Prezime: ${this.prezime}
    Datum rođenja: ${this.datumRodjenja}
    Broj telefona: ${this.brojTelefona}
    Istorija bolesti: ${this.istorija_bolesti.join(", ")}
    Alergije: ${this.alergije.join(", ")}
    Trenutno stanje: ${this.trenutnoStanje}
  `;
    console.log(podaci);
  }
}
