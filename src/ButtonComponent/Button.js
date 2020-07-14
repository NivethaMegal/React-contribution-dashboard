import React from "react";
import {Button} from "./Buttoncss"

export default function BalanceButton(props) {
  return (
      <Button>
        {props.content}  <i class="fa fa-arrow-right" aria-hidden="true"></i>
      </Button>
  );
}
