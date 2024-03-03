import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const {id} = useParams();
  const hero = getHeroById(id);
  
  if(!hero) return <Navigate to="/"/>;
 
  return (
    <div className="container-md">
      <h1 className="mt-3">Hero Page</h1>
      <hr/>
      <div className="row">
        <div className="col-4">
          <img 
            src={`../assets/heroes/${hero.id}.jpg`}
            alt={hero.superhero}
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />
        </div>
        <div className="col-8 bg-transparent">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush border rounded ">
            <li className="list-group-item bg-transparent text-white"><b>Alter ego:</b> {hero.alter_ego}</li>
            <li className="list-group-item bg-transparent text-white"><b>Publisher:</b> {hero.publisher}</li>
            <li className="list-group-item bg-transparent text-white"><b>First appearance:</b> {hero.first_appearance}</li>
          </ul>
          <h5 className="mt-3">Characters</h5>
          <p>{hero.characters}</p>
          <button 
            className="btn btn-outline-info"
            onClick={() => {
              window.history.back();
            }}
          >
            Return
          </button>
        </div>
      </div>
    </div>
  )
}

