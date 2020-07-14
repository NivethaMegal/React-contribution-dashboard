import React from "react";
import {
  Contributionlist,
  TransId,
  Contentname,
  Usercontent,
  List,
  Contentdiv
} from "./Contributioncss";

export default function Contributionslist(props) {
  return props.Contribution.map(data => (
    <Contributionlist>
      <TransId>Transaction Id:{data.TransactionId}</TransId>
      <p>Vangaurd New Jersy Long-Term Tax-Exempt Fund Admiral Shares.</p>
      <List>
        <Contentdiv>
          <Contentname>User Name:</Contentname>
          <Usercontent>{data.UserName}</Usercontent>
        </Contentdiv>
        <Contentdiv>
          <Contentname>Entered date:</Contentname>
          <Usercontent>{data.EnteredDate}</Usercontent>
        </Contentdiv>
        <Contentdiv>
          <Contentname>Received date:</Contentname>
          <Usercontent>{data.ReceivedDate}</Usercontent>
        </Contentdiv>
        <Contentdiv>
          <Contentname>Number of shares:</Contentname>
          <Usercontent>{data.NoofShares}</Usercontent>
        </Contentdiv>
      </List>
      <List>
        <Contentdiv>
          <Contentname>Type:</Contentname>
          <Usercontent>{data.Type}</Usercontent>
        </Contentdiv>
        <Contentdiv>
          <Contentname>Amount:</Contentname>
          <Usercontent>{data.Amount}</Usercontent>
        </Contentdiv>
        <Contentdiv>
          <Contentname>Status:</Contentname>
          <Usercontent>{data.Status}</Usercontent>
        </Contentdiv>
      </List>
    </Contributionlist>
  ));
}
