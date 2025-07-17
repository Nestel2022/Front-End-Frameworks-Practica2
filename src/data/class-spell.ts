import {IClassSpell} from '../interfaces/index'

export const classSpellsCard: Record<string, IClassSpell> = 
 {
  bard: {
    name: 'Bard',
    image: 'src/assets/spells-class/bard.png',
    color: '#ff5722'
  },
  cleric: {
    name: 'Cleric',
    image: 'src/assets/spells-class/cleric.png',
    color: '#4caf50'
  },
  druid: {
    name: 'Druid',
    image: 'src/assets/spells-class/druid.png',
    color: '#2196f3'
  },      
  sorcerer: {
    name: 'Sorcerer',
    image: 'src/assets/spells-class/sorcerer.png',
    color: '#9c27b0'        
  },
  warlock: {                
    name: 'Warlock',
    image: 'src/assets/spells-class/warlock.png',
    color: '#ff9800'
  },      
  wizard: {
    name: 'Wizard',
    image: 'src/assets/spells-class/wizard.png',
    color: '#673ab7'
  }
};