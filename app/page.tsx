import Image from "next/image";
import login from "../img/login.png";

export default function Login() {
  return (
    <div className="bg-blue-950 ">
      <Image className="z-50" layout="fill" src={login} alt=""></Image>
    </div>
  );
}
