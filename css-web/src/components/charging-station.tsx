import React from 'react'
import { ChargingStationSimulator } from '@yellowgarbagebag/css-lib'

interface IState {}

interface IProps {
  css: ChargingStationSimulator | undefined
}

class ChargingStationComp extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.onBtnSendBootNotificationClick = this.onBtnSendBootNotificationClick.bind(this)
    this.onBtnSendHeartbeatClick = this.onBtnSendHeartbeatClick.bind(this)
  }

  public render(): JSX.Element {
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <button type="button" onClick={this.onBtnSendBootNotificationClick} disabled={!this.props.css}>
            Send BootNotification
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" onClick={this.onBtnSendHeartbeatClick} disabled={!this.props.css}>
            Send Heartbeat
          </button>
        </li>
      </ul>
    )
  }

  private onBtnSendBootNotificationClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()
    const css = this.props.css

    if (css) {
      css.send(css.sendBootNotificationRequest())
    }
  }

  private onBtnSendHeartbeatClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()
    const css = this.props.css

    if (css) {
      css.send(css.sendHeartbeatRequest())
    }
  }
}

export default ChargingStationComp
