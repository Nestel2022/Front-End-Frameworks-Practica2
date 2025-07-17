import { ISpell, IClassSpell } from '../interfaces/index';

interface ISpellCardProps {
  spell: ISpell;
  spellColor: IClassSpell;
}

export default function SpellCard({spell, spellColor}: ISpellCardProps) {  
 return (
    <div className="spell-card">
      <div className="spell-level-top" style={{ backgroundColor: spellColor ? spellColor.color : '' }}>      
      </div>             
      <img src={spell.icon} alt={spell.name} width="40" height="40" />
      <h3>
        <a href={spell.url} target="_blank" rel="noopener noreferrer">
          {spell.name}
        </a>
      </h3>
      <p>Level: {spell.level}</p>
      <p>Action: {spell.action}</p>
      <p>Range: {spell.range}</p>
      {spell.damage && spell.damage.length > 0 && (
        <div>
          <p>Damage:</p>
          <ul>
            {spell.damage.map((dmg, index) => (
              <li key={index}>
                {dmg.dice} {dmg.damageType}
                {dmg.weapon && " (weapon)"}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="spell-level" style={{ backgroundColor: spellColor ? spellColor.color : '' }}>
        <span> {spellColor ? spellColor.name : ''} </span>
      </div>
      
    </div>
  );

};
