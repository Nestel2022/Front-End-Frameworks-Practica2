import React from 'react';

import {spells } from './data/spells';
import {classSpells} from './data/spells-by-class';
import {classSpellsCard} from './data/class-spell';

import SpellClassFilter from './components/SpellClassFiler';
import './styles.css';

const App: React.FC = () => {
  return (
    <div className="app">      
      <SpellClassFilter spells={spells} classSpells={classSpells} classSpellsCards={classSpellsCard} />
    </div>   
  );
};

export default App;