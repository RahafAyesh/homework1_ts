import { Card } from "./Card.ts";
import { newRecentMistakesFirstSorter } from "./newRecentMistakesFirstSorter.ts";

const cards: Card[] = [
  new Card("1", false),
  new Card("2", true),
  new Card("3", false),
  new Card("4", true),
];

console.log("Before sorting:");
cards.forEach(c => console.log(c.toString()));

const sorter = newRecentMistakesFirstSorter();
const sorted = sorter.organize(cards);

console.log("\nAfter sorting:");
sorted.forEach(c => console.log(c.toString()));
