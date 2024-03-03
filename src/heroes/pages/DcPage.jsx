import { HeroList } from "../components/HeroList";
import { getHeroesByPublisher } from "../helpers";

export const DcPage = () => {
    
    return(
        <>
            <h1 className="mt-3">DC Page</h1>
            <hr />
            <div className="">
                <HeroList publisher="DC Comics" action={getHeroesByPublisher} />
            </div>
        </>
    );
};
