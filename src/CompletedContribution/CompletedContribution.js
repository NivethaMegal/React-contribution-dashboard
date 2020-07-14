import React from 'react'
import CompletedList from "./CompletedList.js";
import {CompletedHeading,CompletedCard} from "./CompletedContributioncss"

export default function CompletedContribution(props) {
    return (
        <div>
            <CompletedHeading>Completed Contributions</CompletedHeading>
            <CompletedCard> <CompletedList Contributions={props.Contributions}/></CompletedCard>
        </div>
    )
}
