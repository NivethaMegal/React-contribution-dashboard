import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Contributionslist from "./Contributionslist";
import "./Contribution.css";
import BalanceButton from "../ButtonComponent/Button";
import {Button} from "./Contributioncss"

export default function Contribution(props) {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Pending Contribution</Tab>
          <Tab>Completed Contribution</Tab>
        </TabList>
        <TabPanel>
          <Contributionslist Contribution={props.PendingContribution} />
        </TabPanel>
        <TabPanel>
          <Contributionslist Contribution={props.CompletedContribution} />
        </TabPanel>
      </Tabs>
      <Button>
        <BalanceButton content="VIEW CONTRIBUTION ACTIVITY" />
      </Button>
    </div>
  );
}
