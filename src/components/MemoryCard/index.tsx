import { GameCard } from "../../interfaces/GameCard";
import { CommonCard } from "../CommonCard";
import "./styles.scss";

interface Props {
  card: GameCard;
  onClick: (cardId: string) => void;
}

const MemoryCard = ({ card, onClick }: Props) => {
  return (
    <span
      onClick={() => {
        onClick(card.id);
      }}
      data-testid="memoryCard"
    >
      <CommonCard
        customClassName="memory-card"
        open={card.status === "open" || card.status === "done"}
        frontNode={<div data-testid="front" className="front"></div>}
        backNode={
          <div
            data-testid="back"
            className="back"
            style={{ backgroundImage: `url(${card.image})` }}
          ></div>
        }
      />
    </span>
  );
};

export default MemoryCard;
