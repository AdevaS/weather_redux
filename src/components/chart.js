import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function avarage(data) {
  return _.round(_.sum(data)/data.length)
}

export default (props) => {
  return (
    <div>
      <Sparklines data={props.data} limit={5} width={180} height={120}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>Average: {avarage(props.data)} {props.unit}</div>
    </div>
  );
}
