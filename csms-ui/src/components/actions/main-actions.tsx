import React from 'react'
import SendActionComp from './send-action'
import { ChargingStationModel, UiToCsmsMsg } from '@4s1/csms-lib'

interface IState {}

interface IProps {
  models: ChargingStationModel[]
  send: (msg: UiToCsmsMsg) => void
}

class MainActionsComp extends React.Component<IProps, IState> {
  public render(): JSX.Element {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.props.models.map((model) => (
            <SendActionComp key={model.uniqueIdentifier} model={model} send={this.props.send}></SendActionComp>
          ))}
        </div>
      </div>
    )
  }
}

export default MainActionsComp
