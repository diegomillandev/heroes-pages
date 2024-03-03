import { useState } from "react";
import { HeroList } from "../components/HeroList"
import { getHeroesByPublisher } from "../helpers";

export const SearchPage = () => {
  const [search, setSearch] = useState('');

  const getSearchHeroes = () => {
    const heroes = getHeroesByPublisher('All publishers');
    const lowercaseSearch = search.toLowerCase();
    return heroes.filter(hero => 
        hero.superhero.toLowerCase().includes(lowercaseSearch) ||
        hero.publisher.toLowerCase().includes(lowercaseSearch) ||
        hero.alter_ego.toLowerCase().includes(lowercaseSearch) ||
        hero.first_appearance.toLowerCase().includes(lowercaseSearch) ||
        hero.characters.toLowerCase().includes(lowercaseSearch)
    );
}

  return (
    <>
      <header className="mt-3 d-flex align-items-center gap-2">
        <h2>SearchPage</h2>
        <div className="flex-grow-1">
          <input 
            type="text"
            placeholder="Find your hero"
            className="form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>
      <hr />
      { search.length >= 2 && (<HeroList publisher={'All publishers'} action={getSearchHeroes} />)}
    </>
  );
}
