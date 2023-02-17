import { Link } from "react-router-dom";

export default function Funds({ funds }) {
  return (
    <div className="mt-[80px]">
      <div>
        <h2 className="text-5xl mb-[10px] font-bold text-[#ca6800d2]">
          Explore Funds
        </h2>
        <p className="text-white text-[18px] text-medium">
          Select a fund that fits your risk profile and invest with just a few
          clicks.
        </p>
      </div>
      <div className="mt-[50px] outline-none bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60  p-4 rounded-lg ">
        <h4
          className="text-2xl my-[14px] font-bold   bg-gradient-to-r bg-clip-text  text-transparent 
            from-white via-[#ca6900] to-[#2aa6e0] animate-text"
        >
          Curated asset Baskets
        </h4>
        {funds.map((fund) => (
          <Link to={`/invest/${fund.fundAddress}`}>
            {" "}
            <div className="bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60  p-4 my-[8px] rounded-lg flex flex-row justify-between">
              <div>
                <p className="text-black text-bold text-[20px]">
                  {fund.fundName}
                </p>
                <p className="text-gray-100 text-[16px]">{fund.fundAddress}</p>
              </div>
              <div>
                {fund.change.startsWith("+") ? (
                  <p className="text-bold text-[20px] text-green-300">
                    {fund.change}
                  </p>
                ) : (
                  <p className="text-red-500 text-bold text-[20px]">
                    {fund.change}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
