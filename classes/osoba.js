export class Osoba {
  constructor(ime, prezime, datumRodjenja, brojTelefona) {
    this.ime = ime;
    this.prezime = prezime;
    this.datumRodjenja = datumRodjenja;
    this.brojTelefona = brojTelefona;
  }

  prikaziPodatke() {
    console.log(`Ime: ${this.ime}`);
    console.log(`Prezime: ${this.prezime}`);
    console.log(`Datum rođenja: ${this.datumRodjenja}`);
    console.log(`Broj telefona: ${this.brojTelefona}`);
    console.log(`Istorija bolesti: ${this.istorijaBolesti}`);
    console.log(`Alergije: ${this.alergije}`);
    console.log(`Trenutno stanje: ${this.trenutnoStanje}`);
    console.log(`Specijalizacija: ${this.specijalizacija}`);
  }
}
