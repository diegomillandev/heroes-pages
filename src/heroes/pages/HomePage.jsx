import { HeroList } from "../components/HeroList";
import { getHeroesByPublisher } from "../helpers";

export const HomePage = () => {


    return (
        <>
            <h1 className="mt-3">All Heroes</h1>
            <hr />
            <div className="">
                <HeroList publisher="All publishers" action={getHeroesByPublisher} />
            </div>
        </>
    );
};
