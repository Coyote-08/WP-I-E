export default function sortByHealth(items) {
    return [...items].sort((a, b) => b.health - a.health);
}