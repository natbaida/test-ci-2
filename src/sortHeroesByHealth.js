export default function sortHeroesByHealth(heroes) {
    const result = heroes.slice();
    result.sort((a, b) => b.health - a.health);
    return result;
};