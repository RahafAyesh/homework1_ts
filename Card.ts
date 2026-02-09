export class Card { 
  constructor( public question: string, public wasCorrectInLastRound: boolean )
   {}
toString(): string 
{ return `${this.wasCorrectInLastRound ? "[correct]" : "[incorrect]"} Question: ${this.question}`; } }
