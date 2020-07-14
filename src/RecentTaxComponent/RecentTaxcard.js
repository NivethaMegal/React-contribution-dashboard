import React from 'react'
import {TaxDate,TaxNo,A,Taxcard} from "./RecentTaxcss"

export default function RecentTaxcard(props) {
    return (
        props.TaxData.map(data=>(
            <Taxcard>
             <TaxDate>{data.Date}</TaxDate>
             <TaxNo>Tax Receipt {data.TaxNo}</TaxNo>
             <A>View</A>
             <A>Download</A>
            </Taxcard>
        ))
    )
}
