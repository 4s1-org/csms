import React from 'react'
import { RfidCardModel } from '@yellowgarbagebag/csms-lib'

interface IState {}

interface IProps {
  model: RfidCardModel
}

class UsageDetailsComp extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {}
  }

  public render(): JSX.Element {
    return (
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: '35%' }}>Start</th>
            <th style={{ width: '35%' }}>End</th>
            <th style={{ width: '30%' }}>Usage</th>
          </tr>
        </thead>
        <tbody>
          {(this.props.model.chargingItems || []).map((item) => (
            <tr key={item.start}>
              <td>{item.start}</td>
              <td>{item.end}</td>
              <td>{item.wattHours} kWh</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default UsageDetailsComp
