export type GameCardStatus = "open" | "close" | "done";
export interface GameCard {
  id: string;
  cardName: string;
  image: string;
  status: GameCardStatus;
}
