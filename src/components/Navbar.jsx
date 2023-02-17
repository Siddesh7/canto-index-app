import { ConnectKitButton } from "connectkit";
import logo from "../assets/logoci.png";
export default function Navbar() {
  return (
    <nav className="w-[95%] m-auto">
      <div className="py-[16px] flex flex-row  items-center justify-between">
        <img src={logo} alt="" className="w-[300px]" />
        <ConnectKitButton />
      </div>
    </nav>
  );
}
