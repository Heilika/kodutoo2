import Linn from './Linn';
import pariisPilt from './pildid/pariis-pilt.jpeg';
import dubaiPilt from './pildid/dubai-pilt.jpeg';
import londonPilt from './pildid/london.jpeg';

import './App.css';

const LINNAD = [
  {
    nimi: 'Pariis',
    kirjeldus: "Pariis (prantsuse keeles Paris) on Prantsusmaa pealinn ja Île-de-France'i piirkonna halduskeskus ning Prantsusmaa ainus vald-departemang.",
    pilt: pariisPilt
  },
  {
    nimi: 'Dubai',
    kirjeldus: "Dubai (araabia keeles دبيّ) on Araabia Ühendemiraatidesse (AÜE) kuuluva Dubai emiraadi haldus-, kaubandus- ja rahanduskeskus, ühtlasi kõige suurem linn Pärsia lahe ääres.",
    pilt: dubaiPilt
  },
  {
    nimi: 'London',
    kirjeldus: "London on Suurbritannia ja Inglismaa pealinn, Suurbritannia saare suurim linn ning Rahvaste Ühenduse keskus. London on Moskva järel Euroopa suuruselt teine linn, Rotterdami järel Euroopa suuruselt teine sadamalinn ning New Yorgi järel maailma tähtsuselt teine rahandus- ja kaubanduskeskus. ",
    pilt: londonPilt
  }
];

const App = () => (
  <div className='App'>
    {LINNAD.map(linn => (
      <Linn key={linn.nimi} andmed={linn} />
    ))}
  </div>
);

export default App;
