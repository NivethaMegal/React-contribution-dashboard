import React from "react";
import {
  TransId,
  Contentname,
  Usercontent,
  List,
  Contentdiv,
  Contributioncard,
  UserName,
  UserNameContent
} from "./CompletedContributioncss";

export default function CompletedList(props) {
  return props.Contributions.map(data => (
    <Contributioncard>
      <TransId>Transaction Id:{data.TransactionId}</TransId>
      <div>
        <UserNameContent>User Name</UserNameContent>
        <UserName>{data.UserName}</UserName>
      </div>
      <List>
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
    </Contributioncard>
  ));
}
