import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Invest from "./components/Invest";
import Navbar from "./components/Navbar";
import "./App.css";
import AssetPage from "./pages/AssetPage";
const client = createClient(
  getDefaultClient({
    appName: "Canto Index",
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
