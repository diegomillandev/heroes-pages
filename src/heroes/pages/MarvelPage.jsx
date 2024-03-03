import { HeroList } from "../components/HeroList";
import { getHeroesByPublisher } from "../helpers";

export const MarvelPage = () => {
    return (
        <>
            <h1 className="mt-3">Marvel Page</h1>
            <hr />
            <div className="">
                <HeroList publisher="Marvel Comics" action={getHeroesByPublisher} />
            </div>
        </>
    );
};
