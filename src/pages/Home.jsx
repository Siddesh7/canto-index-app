import Funds from "../components/Funds";
import Navbar from "../components/Navbar";
import { funds } from "../constant";

export default function Home() {
  return (
    <div className="w-[95%] m-auto">
      <Funds funds={funds} />
    </div>
  );
}
