import { UiToCsmsCmdEnum, UiToCsmsCsSubCmdEnum, UiToCsmsMsg, RfidCardModel, ChargingItem } from '@yellowgarbagebag/csms-lib'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faInfo, faPlus, faToggleOff, faToggleOn, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Dialog from '../dialog'
import RfidEdit from './rfid-edit'
import { DialogButtonEnum } from '../dialog-button.enum'
import { v4 as uuid } from 'uuid'
import UsageDetailsComp from './usage-details'

interface IState {
  showDeleteDialog: boolean
  showAddDialog: boolean
  showEditDialog: boolean
  showUsageDetailsDialog: boolean
  selectedModel: RfidCardModel | null
}

interface IProps {
  models: RfidCardModel[]
  send: (msg: UiToCsmsMsg) => void
}

class MainRfids extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      selectedModel: null,
      showDeleteDialog: false,
      showAddDialog: false,
      showUsageDetailsDialog: false,
      showEditDialog: false,
    }

    this.onDeleteDialogClose = this.onDeleteDialogClose.bind(this)
    this.onEditDialogClose = this.onEditDialogClose.bind(this)
    this.onAddDialogClose = this.onAddDialogClose.bind(this)
    this.onShowUsageDetailsDialogClose = this.onShowUsageDetailsDialogClose.bind(this)

    this.onBtnAddClick = this.onBtnAddClick.bind(this)
    this.onBtnEnableClick = this.onBtnEnableClick.bind(this)
    this.onBtnShowUsageDetailsClick = this.onBtnShowUsageDetailsClick.bind(this)

    this.sumUsage = this.sumUsage.bind(this)
  }

  public render(): JSX.Element {
    return (
      <div className="container-fluid">
        <div className="float-right">
          <button type="button" className="btn btn-success" onClick={this.onBtnAddClick}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th style={{ width: '25%' }}>RFID</th>
              <th style={{ width: '35%' }}>Description</th>
              <th style={{ width: '15%' }}>Usage</th>
              <th style={{ width: '5%' }}></th>
              <th style={{ width: '10%' }}>Enabled</th>
              <th style={{ width: '10%' }}></th>
            </tr>
          </thead>
          <tbody>
            {this.props.models.map((model) => (
              <tr key={model.rfid}>
                <td className="tdtext">{model.rfid}</td>
                <td className="tdtext">{model.description}</td>
                <td className="tdtext">{this.sumUsage(model.chargingItems)} kWh</td>
                <td className="tdtext">
                  <button type="button" className={'btn btn-info'} onClick={this.onBtnShowUsageDetailsClick.bind(this, model)}>
                    <FontAwesomeIcon icon={faInfo} />
                  </button>
                </td>
                <td className="tdtext">
                  <div className="btn-group" role="group">
                    <button
                      type="button"
                      className={'btn ' + (model.enabled ? 'btn-success' : 'btn-danger')}
                      onClick={this.onBtnEnableClick.bind(this, model)}
                    >
                      {model.enabled ? <FontAwesomeIcon icon={faToggleOn} /> : <FontAwesomeIcon icon={faToggleOff} />}
                    </button>
                  </div>
                </td>
                <td className="text-right">
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-secondary" onClick={this.onBtnEditClick.bind(this, model)}>
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button type="button" className="btn btn-danger" onClick={this.onBtnDeleteClick.bind(this, model)}>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.state.showDeleteDialog && this.state.selectedModel && (
          <Dialog
            title={`Delete - ${this.state.selectedModel.rfid}`}
            dialogCloseCallback={this.onDeleteDialogClose}
            showBtnYes={true}
            showBtnNo={true}
          >
            Are you sure?
          </Dialog>
        )}
        {this.state.showEditDialog && this.state.selectedModel && (
          <Dialog
            title={`Edit - ${this.state.selectedModel.rfid}`}
            dialogCloseCallback={this.onEditDialogClose}
            showBtnSave={true}
            showBtnAbort={true}
          >
            <RfidEdit model={this.state.selectedModel} />
          </Dialog>
        )}
        {this.state.showAddDialog && this.state.selectedModel && (
          <Dialog title="Add" dialogCloseCallback={this.onAddDialogClose} showBtnSave={true} showBtnAbort={true}>
            <RfidEdit model={this.state.selectedModel} />
          </Dialog>
        )}
        {this.state.showUsageDetailsDialog && this.state.selectedModel && (
          <Dialog title="Usage" dialogCloseCallback={this.onShowUsageDetailsDialogClose} showBtnOk={true} large={true}>
            <UsageDetailsComp model={this.state.selectedModel} />
          </Dialog>
        )}
      </div>
    )
  }

  private sumUsage(chargingItems: ChargingItem[]): number {
    let result = 0
    if (!chargingItems) {
      return result
    }

    for (const chargingItem of chargingItems) {
      result += chargingItem.wattHours
    }

    return result
  }

  private async onBtnAddClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()

    const model = new RfidCardModel()
    model.id = uuid()

    this.setState({
      ...this.state,
      selectedModel: model,
      showAddDialog: true,
    })
  }

  private onBtnEnableClick(model: RfidCardModel, e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()

    model.enabled = !model.enabled
    this.props.send(new UiToCsmsMsg(UiToCsmsCmdEnum.rfidCmd, UiToCsmsCsSubCmdEnum.edit, model))

    this.setState({ ...this.state })
  }

  private onBtnShowUsageDetailsClick(model: RfidCardModel, e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()

    this.setState({
      ...this.state,
      selectedModel: model,
      showUsageDetailsDialog: true,
    })
  }

  private onBtnDeleteClick(model: RfidCardModel, e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()

    this.setState({
      ...this.state,
      selectedModel: model,
      showDeleteDialog: true,
    })
  }

  private onBtnEditClick(model: RfidCardModel, e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()

    this.setState({
      ...this.state,
      selectedModel: Object.assign({}, model),
      showEditDialog: true,
    })
  }

  private async onEditDialogClose(btn: DialogButtonEnum): Promise<void> {
    if (this.state.selectedModel && btn === DialogButtonEnum.save) {
      this.props.send(new UiToCsmsMsg(UiToCsmsCmdEnum.rfidCmd, UiToCsmsCsSubCmdEnum.edit, this.state.selectedModel))
    }
    this.setState({
      ...this.state,
      selectedModel: null,
      showEditDialog: false,
    })
  }

  private async onAddDialogClose(btn: DialogButtonEnum): Promise<void> {
    if (this.state.selectedModel && btn === DialogButtonEnum.save) {
      this.props.send(new UiToCsmsMsg(UiToCsmsCmdEnum.rfidCmd, UiToCsmsCsSubCmdEnum.add, this.state.selectedModel))
    }

    this.setState({
      ...this.state,
      selectedModel: null,
      showAddDialog: false,
    })
  }

  private async onShowUsageDetailsDialogClose(btn: DialogButtonEnum): Promise<void> {
    this.setState({
      ...this.state,
      selectedModel: null,
      showUsageDetailsDialog: false,
    })
  }

  private async onDeleteDialogClose(btn: DialogButtonEnum): Promise<void> {
    if (this.state.selectedModel && btn === DialogButtonEnum.yes) {
      this.props.send(new UiToCsmsMsg(UiToCsmsCmdEnum.rfidCmd, UiToCsmsCsSubCmdEnum.delete, this.state.selectedModel))
    }

    this.setState({
      ...this.state,
      selectedModel: null,
      showDeleteDialog: false,
    })
  }
}

export default MainRfids
