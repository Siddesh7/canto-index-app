import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Invest from "./components/Invest";
import Navbar from "./components/Navbar";
import "./App.css";
import AssetPage from "./pages/AssetPage";
import { Chain } from "wagmi";

export const canto = {
  id: 740,
  name: "Canto Testnet",
  network: "Canto Testnet`",
  nativeCurrency: {
    decimals: 18,
    name: "Canto",
    symbol: "CANTO",
  },
  rpcUrls: {
    public: { http: ["https://eth.plexnode.wtf"] },
    default: { http: ["https://eth.plexnode.wtf"] },
  },
  blockExplorers: {
    etherscan: {
      name: "Canto",
      url: "https://testnet-explorer.canto.neobase.one/",
    },
    default: {
      name: "Canto",
      url: "https://testnet-explorer.canto.neobase.one/",
    },
  },
};
const chains = [canto];
const client = createClient(
  getDefaultClient({
    appName: "Canto Index",
    chains,
  })
);

const App = () => {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/invest/:address" element={<AssetPage />} />
          </Routes>
        </BrowserRouter>
      </ConnectKitProvider>
    </WagmiConfig>
  );
};
export default App;
