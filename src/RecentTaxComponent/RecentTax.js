import React from "react";
import { RecentHeading,RecentTaxList,A,ViewallButton } from "./RecentTaxcss";
import RecentTaxcard from "./RecentTaxcard";

export default function RecentTax(props) {
  return (
    <div>
      <RecentTaxList>
        <RecentHeading>Recent tax receipts</RecentHeading>
        <RecentTaxcard TaxData={props.TaxData}/>
        <ViewallButton>
        <A>VIEW ALL</A>
        </ViewallButton>
      </RecentTaxList>
    </div>
  );
}
