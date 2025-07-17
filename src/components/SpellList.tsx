import { ISpell, IClassSpell } from '../interfaces/index';
import SpellCard from '../components/SpellCard';

interface ISpellListProps {
  spells: ISpell[];
  spellColor: IClassSpell;
}
 export default function SpellList({spells , spellColor}: ISpellListProps) {
     return (
    <div className="spell-list">
      {spells.map(spell => (
        <SpellCard key={spell.id} spell={spell} spellColor={spellColor} />
      ))}
    </div>
  );
 };