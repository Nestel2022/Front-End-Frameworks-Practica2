interface IDamage {
  dice: string,
  damageType: string,
  weapon?: boolean
}

export interface IClassSpell {
  name: string;
  image: string;
  color: string;
}

export interface ISpell {
  id: string,
  url: string,
  name: string,
  icon: string,
  level: number,
  upcast: boolean,
  action: string,
  duration: string,
  range: string,
  type: string,
  damage?: IDamage[]
}

export interface IClassSpellList  {
  [className: string]: string[] 
}


