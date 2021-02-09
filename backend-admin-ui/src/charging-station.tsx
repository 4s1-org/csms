import React from "react";
import "./charging-station.css";

interface IState {}

interface IProps {
  name: string;
  state: string;
}

class ChargingStationComp extends React.Component<IProps, IState> {
  public render(): JSX.Element {
    return  (
      <div>
<b>        {this.props.name}</b><br/>
{this.props.state}
      </div>
    );
  }
}

export default ChargingStationComp;
