import VazirFont from "@/utils/customFont";
import { ReactNode } from "react";


interface productCard {
  side: "left" | "right";
  cardName: ReactNode;
}

const SectionCard = ({ cardName, side }: productCard) => {
  const rightBtn = <button>خرید -</button>;
  const leftBtn = <button> - خرید</button>;

  return (
    <div className="w-[25vw] h-[25vh] p-6">
      <p className="text-3xl">{cardName}</p> 
      {side === "right" ? rightBtn : leftBtn}
      <div className="text-2xl">سبل بیذیب سلشجو جلئجی</div> 
    </div>
  );
};

export default SectionCard;
