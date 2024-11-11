import Image from "next/image";
import join from "../../img/join.png";

export default function Join() {
  return (
    <div>
      <Image layout="fill" src={join} alt=""></Image>
    </div>
  );
}
