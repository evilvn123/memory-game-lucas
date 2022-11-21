import _ from "lodash";
import { GameCard } from "../interfaces/GameCard";
import images from "./images";

export const getRandomCards = (): GameCard[] => {
  //Shuffle the basic images array and get the first 10
  const allCards: GameCard[] = _.shuffle(images)
    .slice(0, 10)
    .flatMap((image, index) => {
      return [
        {
          image: image,
          id: `${image}-first`,
          status: "close",
          cardName: `${index}`,
        },
        {
          image: image,
          id: `${image}-second`,
          status: "close",
          cardName: `${index}`,
        },
      ];
    });
  return _.shuffle(allCards);
};
