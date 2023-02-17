import { useParams } from "react-router-dom";
import Description from "../components/Description";
import FundAllocaion from "../components/FundAllocation";
import Invest from "../components/Invest";
import { funds } from "../constant";

export default function AssetPage() {
  const { address } = useParams();
  let fundDetails;
  let aumchange, change;
  funds.forEach((fund) => {
    if (fund.fundAddress === address) {
      fundDetails = fund;
      change = fundDetails.change;
      console.log(change);
      aumchange = fundDetails.aumChange;
    }
  });
  return (
    <div>
      <Invest fundDetails={fundDetails} change={change} aumchange={aumchange} />
      <FundAllocaion allocation={fundDetails.allocation} />
      <Description description={fundDetails.description} />
    </div>
  );
}
