import React from 'react'
import {Graphbutton,ViewRange,ButtonContent} from "./TimelineActivitycss"
export default function GraphButton() {
    return (
        <ButtonContent>
            <ViewRange>View Range</ViewRange>
            <Graphbutton>1M</Graphbutton>
            <Graphbutton>3M</Graphbutton>
            <Graphbutton>6M</Graphbutton>
            <Graphbutton>1Y</Graphbutton>
            <Graphbutton>3Y</Graphbutton>
            <Graphbutton>5Y</Graphbutton>
        </ButtonContent>
    )
}
