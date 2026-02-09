import { CardOrganizer } from "./CardOrganizer";
import { Card } from "./Card";

export function newRecentMistakesFirstSorter(): CardOrganizer {
  return {
    organize(cards: Card[]): Card[] {
      const mistakes: Card[] = [];
      const correct: Card[] = [];

      for (const c of cards) {
        if (!c.wasCorrectInLastRound) {
          mistakes.push(c);
        } else {
          correct.push(c);
        }
      }

      return mistakes.concat(correct);
    }
  };
}