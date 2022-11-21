import { CSSProperties, PropsWithChildren, ReactNode } from "react";
import "./styles.scss";

interface Props {
  customStyle?: CSSProperties;
  customClassName?: string;
  open: boolean;
  frontNode?: ReactNode;
  backNode?: ReactNode;
}

export const CommonCard = ({
  customStyle,
  open,
  customClassName,
  frontNode,
  backNode,
}: PropsWithChildren<Props>) => {
  return (
    <div
      data-testid="common-card"
      className={`common-card ${customClassName ? customClassName : ""}`}
      style={customStyle}
    >
      <div data-testid="inner" className={`inner ${open ? "open" : ""}`}>
        <Front>{frontNode}</Front>
        <Back>{backNode}</Back>
      </div>
    </div>
  );
};

export const Front = ({ children }: PropsWithChildren) => {
  return (
    <div data-testid="common-card-front" className="common-card-front">
      {children}
    </div>
  );
};

export const Back = ({ children }: PropsWithChildren) => {
  return (
    <div data-testid="common-card-back" className="common-card-back">
      {children}
    </div>
  );
};
