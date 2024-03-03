import { heroes } from '../data/heroes.js';

export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ["DC Comics", "Marvel Comics", "All publishers"];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" not found`);
    }

    if (publisher === "All publishers") {
        return heroes;
    }

    return heroes.filter((hero) => hero.publisher === publisher);
}