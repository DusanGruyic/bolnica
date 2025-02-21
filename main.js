import { Pacijent } from "./classes/pacijent.js";
import { Lekar } from "./classes/lekar.js";
import { BolnickoOdeljenje } from "./classes/bolnickoOdeljenje.js";
import { Usluga } from "./classes/usluga.js";

const pacijent1 = new Pacijent(
  "Marko",
  "Petrović",
  "15.03.1990",
  "061-123-4567",
  [],
  ["Penicilin"],
  "Stabilno"
);

const pacijent2 = new Pacijent(
  "Jelena",
  "Jovanović",
  "20.03.1995",
  "061-765-4321",
  [],
  ["Grinje"],
  "Stabilno"
);

let lekar1 = new Lekar("Jovana", "Ilić", "Kardiolog");
let lekar2 = new Lekar("Milan", "Jovanović", "Opšta medicina");

console.log("\n--- Dodavanje pacijenata lekaru ---");
lekar1.dodajPacijenta(pacijent1, pacijent2);

let kardiologija = new BolnickoOdeljenje("Kardiologija", [], []);

console.log("\n--- Prijem pacijenata na odeljenje ---");
kardiologija.prijem_pacijenta(pacijent1, pacijent2);

console.log("\n--- Dodavanje doktora na odeljenje ---");
kardiologija.dodaj_lekara(lekar1);

let ekg = new Usluga("EKG test", 5000, new Date().toISOString());

let opstiPregled = new Usluga("Opsti pregled", 2000, new Date().toISOString());
let infuzija = new Usluga("Davanje infuzije", 3000, new Date().toISOString());
let sistematski = new Usluga(
  "Sistematski pregled",
  2000,
  new Date().toISOString()
);

console.log("\n--- Podaci usluga ---");
ekg.prikaziPodatkeUsluge();
opstiPregled.prikaziPodatkeUsluge();
infuzija.prikaziPodatkeUsluge();
sistematski.prikaziPodatkeUsluge();

console.log("\n--- Zakazivanje vise pregled kod vise lekara ---");
pacijent1.zakaziPregledKodViseLekara([lekar1, lekar2], ekg);
pacijent2.zakaziPregled(lekar1, ekg);

console.log("\n--- Otkazivanje pregleda ---");
pacijent1.otkaziPregled(lekar1, ekg);

console.log("\n--- Prikaz dijagnoze ---");
lekar1.postavi_dijagnozu(pacijent1, "Blaga aritmija");

console.log("\n--- Prikaz podataka pacijenta ---");
pacijent1.prikaziPodatkePacijenta();

console.log("\n--- Prikaz podataka lekara ---");
lekar1.prikaziPodatkeLekara();

console.log("\n--- Prikaz podataka odeljenja ---");
kardiologija.prikaziPodatkeOdeljenja();
