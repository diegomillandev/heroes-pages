import { CardHero } from "./CardHero";
import './HeroList.css';

export const HeroList = ({ publisher, action }) => {

    const heroes = action(publisher);
    
    return (
        <ul className="wrapper-card">
            { heroes.map(hero => (
                    <CardHero {...hero} key={hero.id}/>
            ))}
        </ul>
    )
}
