import Image from "next/image";
import home from "../../img/home.png";

export default function Other() {
  return (
    <div>
      <Image layout="fill" src={home} alt=""></Image>
    </div>
  );
}
