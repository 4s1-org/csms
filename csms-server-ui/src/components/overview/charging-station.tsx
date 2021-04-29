import React from 'react'
import { ChargingStationModel, ColorStateEnum } from '@yellowgarbagebag/csms-lib'
import './charging-station.css'
import dayjs from 'dayjs'
import EvseStateComp from './evse-state'

interface IState {}
interface IProps {
  model: ChargingStationModel
}

class ChargingStationComp extends React.Component<IProps, IState> {
  public render(): JSX.Element {
    let headerColorCss = ''
    let stateStr = ''
    switch (this.props.model.state || 0) {
      case ColorStateEnum.Yellow:
        headerColorCss = 'bg-warning'
        stateStr = 'warming up'
        break
      case ColorStateEnum.Green:
        headerColorCss = 'bg-success text-white'
        stateStr = 'online'
        break
      default:
        headerColorCss = 'bg-danger text-white'
        stateStr = 'offline'
        break
    }

    let lastContectStr = ''
    if (this.props.model.lastContact) {
      lastContectStr = `${dayjs(this.props.model.lastContact).format('DD.MM.YYYY HH:mm:ss')}`
    }

    return (
      <div className="card h-100">
        <h5 className={'card-header ' + headerColorCss}>
          {this.props.model.uniqueIdentifier}
          {!this.props.model.enabled ? ' (disabled)' : ''}
        </h5>
        <div className="card-body">
          <h6 className="card-subtitle mb-2">State: {stateStr || 'unknown'}</h6>
          <div className="card-text">Username: {this.props.model.username}</div>
          <div className="card-text">
            {this.props.model.evseList.map((evse) => (
              <EvseStateComp key={evse.id} model={evse} />
            ))}
          </div>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last action: {this.props.model.lastAction || 'unknown'}</small>
          <br />
          <small className="text-muted">Last contact: {lastContectStr || 'unknown'}</small>
        </div>
      </div>
    )
  }
}

export default ChargingStationComp
