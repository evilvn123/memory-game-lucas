import "./styles.scss";
import { useEffect, useState } from "react";
import { getRandomCards } from "../utils/getRandomCards";
import { GameCard } from "../interfaces/GameCard";
import MemoryCard from "../components/MemoryCard";

const MainPage = () => {
  const [cardArray, setCardArray] = useState<GameCard[]>(getRandomCards());

  const handleClickCard = (cardId: string) => {
    const currentOpenCards = cardArray.filter(
      (card: GameCard) => card.status === "open"
    );
    if (currentOpenCards.length < 2) {
      setCardArray(
        cardArray.map((card: GameCard) => {
          if (card.id === cardId && card.status === "close")
            return { ...card, status: "open" };
          return card;
        })
      );
    }
  };

  useEffect(() => {
    const [firstOpenCard, secondOpenCard] = cardArray.filter(
      (card: GameCard) => card.status === "open"
    );
    if (!firstOpenCard || !secondOpenCard) return;
    setTimeout(() => {
      setCardArray(
        cardArray.map((card: GameCard) => {
          return {
            ...card,
            status:
              card.status === "open"
                ? firstOpenCard.cardName === secondOpenCard.cardName
                  ? "done"
                  : "close"
                : card.status,
          };
        })
      );
    }, 750);
  }, [cardArray]);

  return (
    <div className="main-page">
      <div className="ninjaGame">
        <>NINJA MEMORY GAME</>
      </div>
      <div className="cards">
        {cardArray.map((card: GameCard) => {
          return (
            <MemoryCard
              key={`${card.id}`}
              card={card}
              onClick={handleClickCard}
            />
          );
        })}
      </div>
    </div>
  );
};
export default MainPage;
