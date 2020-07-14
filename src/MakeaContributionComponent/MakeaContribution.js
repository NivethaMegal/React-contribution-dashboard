import React from 'react'
import {MakeaContributionButton} from "./MakeaContributioncss"

export default function MakeaContribution(props) {
    return (
        <MakeaContributionButton>
            {props.content}
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </MakeaContributionButton>
    )
}
