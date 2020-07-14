import React from "react";
import { Timeline,Heading, GraphContent,Icon} from "./TimelineActivitycss";
import Graph from "./Graph"
import GraphButton from "./GraphButton"

export default function TimelineActivity() {
  return (
    <div>
      <Timeline>Timeline</Timeline>
      <Heading>Contribution Activity</Heading>
      <Icon><i class="fa fa-info-circle" aria-hidden="true"></i></Icon> 
      <Timeline>INSTRUCTIONAL COPY, DESCRICPTION OF HOW CHART WORKS. </Timeline>
      <GraphContent>
        <GraphButton/>
        <Graph/>
      </GraphContent>
    </div>
  );
}
