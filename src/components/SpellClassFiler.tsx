import { useState } from 'react';
import { IClassSpellList, ISpell, IClassSpell } from '../interfaces/index';
import SpellList from '../components/SpellList';

type ClassName = 'bard' | 'cleric' | 'druid' | 'sorcerer' | 'warlock' | 'wizard';

interface ISpellClassFilterProps {
  spells: ISpell[];
  classSpells: IClassSpellList;
  classSpellsCards: Record<ClassName, IClassSpell>;
}
  
  export default function SpellClassFilter({spells, classSpells, classSpellsCards}: ISpellClassFilterProps) {

  const [selectedClass, setSelectedClass] = useState<string>('all');


  // Obtener todas las clases disponibles
  const availableClasses = Object.keys(classSpells);
  

  // Filtrar hechizos basados en la clase seleccionada y término de búsqueda
  const filteredSpells = spells.filter((spell: ISpell) => {
    // Filtro por clase
    const classMatch = selectedClass === 'all' || 
      (classSpells as IClassSpellList)[selectedClass]?.includes(spell.id);
    
  
    return classMatch
  });


const classImg: IClassSpell | undefined = classSpellsCards[selectedClass as ClassName];
  return (    
    <div className="spell-class-filter">       
       <div className='header-spells'>
        {classImg && (
          <img src={classImg.image} alt={`${selectedClass} class`} className="class-image" />
        )}
        <h2>Hechizos de {selectedClass === 'all' ? 'todas las clases' : selectedClass.charAt(0).toUpperCase() + selectedClass.slice(1)}</h2>
       </div>        
      <div className="filter-controls">
        {/* Selector de clase */}
        <div className="class-selector">
          <label htmlFor="class-select">Clase de Hechizo: </label>
          <select
            id="class-select"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="all">Todas las clases</option>
            {availableClasses.map((cls) => (
              <option key={cls} value={cls}>
                {cls.charAt(0).toUpperCase() + cls.slice(1)}
              </option>
            ))}
          </select>
        </div>        
      </div>
       <div>   
            <SpellList spells= {filteredSpells} spellColor={classImg} />
        </div>      
    </div>
  );
};

