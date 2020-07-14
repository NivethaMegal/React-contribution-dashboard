import React from "react";
import { Heading } from "./Balancecss";
import {BalanceCard} from "./Balancecss";
import {Icon} from "./Balancecss";
import {Amount} from "./Balancecss"
import BalanceButton from "../ButtonComponent/Button"

export default function Balance(props) {
  return props.BalanceData.map(data => (
    <BalanceCard>
      <Heading>{data.Heading}</Heading>
      <Icon><i class="fa fa-info-circle" aria-hidden="true"></i></Icon> 
      <Amount>${data.Amount}</Amount>
      {data.Summary === true ? 
        <BalanceButton content="VIEW TRANSACTION SUMMARY"/>
       : null}
    </BalanceCard>
  ));
}
