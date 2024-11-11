import Image from "next/image";
import buy from "../../img/buy.png";

export default function Buy() {
  return (
    <div>
      <Image layout="fill" src={buy} alt=""></Image>
    </div>
  );
}
