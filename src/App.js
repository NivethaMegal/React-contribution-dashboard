import React, { Component } from "react";
import Balance from "./BalanceComponent/Balance";
import { Container } from "./Appcss";
import { Overview } from "./Appcss";
import {Fundname} from "./Appcss";
import {Date} from "./Appcss"
import ValueContribution from "./ValueContributionComponent/ValueContribution";
import Contribution from "./ContributionComponent/Contribution"
import {Whitebg} from "./Appcss";
import {Greybg} from "./Appcss"
import {ContributionSection} from "./Appcss"
import CompletedContribution from "./CompletedContribution/CompletedContribution"
import RecentTax from "./RecentTaxComponent/RecentTax"
import DownloadAll from "./DownloadAllComponent/DownloadAll"
import {TaxSection} from "./Appcss"
import MakeaContribution from "./MakeaContributionComponent/MakeaContribution";
import TimelineActivity from "./TimelineActivityComponent/TimelineActivity";

export default class App extends Component {
  state = {
    BalanceData: [
      {
        Heading: "Current Balance",
        Amount: "120,000",
        Summary: false
      },
      {
        Heading: "Available Balance",
        Amount: "30,000.00",
        Summary: true
      },
      {
        Heading: "Contribution YTD",
        Amount: "60,000",
        Summary: true
      }
    ],
    PendingContribution:[
      {
        TransactionId:3341123,
        UserName:"John Adam",
        EnteredDate:"10/4/2019",
        ReceivedDate:"10/4/2019",
        NoofShares:50,
        Type:"VBS Security",
        Amount:"$50,000",
        Status:"Entered"
      },
      {
        TransactionId:3341123,
        UserName:"John Adam",
        EnteredDate:"10/4/2019",
        ReceivedDate:"10/4/2019",
        NoofShares:50,
        Type:"VBS Security",
        Amount:"$50,000",
        Status:"Entered"
      },
      {
        TransactionId:3341123,
        UserName:"John Adam",
        EnteredDate:"10/4/2019",
        ReceivedDate:"10/4/2019",
        NoofShares:50,
        Type:"VBS Security",
        Amount:"$50,000",
        Status:"Entered"
      }
    ],
      CompletedContribution:[
        {
          TransactionId:3341123,
          UserName:"John Adam",
          EnteredDate:"10/4/2019",
          ReceivedDate:"10/4/2019",
          NoofShares:50,
          Type:"VBS Security",
          Amount:"$50,000",
          Status:"Checked"
        },
        {
          TransactionId:3341123,
          UserName:"John Adam",
          EnteredDate:"10/4/2019",
          ReceivedDate:"10/4/2019",
          NoofShares:50,
          Type:"VBS Security",
          Amount:"$50,000",
          Status:"Checked"
        },
        {
          TransactionId:3341123,
          UserName:"John Adam",
          EnteredDate:"10/4/2019",
          ReceivedDate:"10/4/2019",
          NoofShares:50,
          Type:"VBS Security",
          Amount:"$50,000",
          Status:"Checked"
        }
    ],
    RecentTax:[{
      Date:"11-08-2018",
      TaxNo:"0012018Q3"
    },
    {
      Date:"11-08-2018",
      TaxNo:"0012018Q3"
    },
    {
      Date:"11-08-2018",
      TaxNo:"0012018Q3"
    },
    {
      Date:"11-08-2018",
      TaxNo:"0012018Q3"
    }]
  };
  render() {
    return (
      <div>
        <Whitebg>
        <Container>
          <Overview>Contributions Overview</Overview>
          <Fundname>The Church Fund - A 1050919</Fundname>
          <Date>Balances as of 12/12/2012</Date>
          </Container>
          </Whitebg>
          <Greybg>
          <Container>
          <ContributionSection>
          <div>
            <Balance BalanceData={this.state.BalanceData}/>
            <MakeaContribution content="MAKE A CONTRIBUTION"/>
          </div> 
          <div>
          <Contribution CompletedContribution={this.state.CompletedContribution} PendingContribution={this.state.PendingContribution}/>
          <ValueContribution/>
          </div>
          </ContributionSection>
        </Container>
        </Greybg>
        <Whitebg>
          <Container>
            <TimelineActivity/>
            <CompletedContribution Contributions={this.state.CompletedContribution}/>
          </Container>
        </Whitebg>
        <Greybg>
          <Container>
            <TaxSection>
            <RecentTax TaxData={this.state.RecentTax}/>
            <DownloadAll/>
            </TaxSection> 
          </Container>
        </Greybg>
      </div>
    );
  }
}
