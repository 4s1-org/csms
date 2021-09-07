import { ChargingStationModel, UiToCsmsCmdEnum, UiToCsmsCsSubCmdEnum, UiToCsmsMsg } from '@4s1/csms-lib'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlus, faThumbsDown, faThumbsUp, faToggleOff, faToggleOn, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Dialog from '../dialog'
import ChargingStationEdit from './charging-station-edit'
import { DialogButtonEnum } from '../dialog-button.enum'
import { hashPassword } from '@4s1/common-lib'
import { v4 as uuid } from 'uuid'

interface IState {
  showDeleteDialog: boolean
  showAddDialog: boolean
  showEditDialog: boolean
  selectedModel: ChargingStationModel | null
}

interface IProps {
  models: ChargingStationModel[]
  send: (msg: UiToCsmsMsg) => void
}

class MainChargingStations extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      selectedModel: null,
      showDeleteDialog: false,
      showAddDialog: false,
      showEditDialog: false,
    }

    this.onDeleteDialogClose = this.onDeleteDialogClose.bind(this)
    this.onEditDialogClose = this.onEditDialogClose.bind(this)
    this.onAddDialogClose = this.onAddDialogClose.bind(this)

    this.onBtnAddClick = this.onBtnAddClick.bind(this)
    this.onBtnEnableClick = this.onBtnEnableClick.bind(this)
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
              <th style={{ width: '30%' }}>Unique identifier</th>
              <th style={{ width: '30%' }}>Username</th>
              <th style={{ width: '10%' }}>Has password</th>
              <th style={{ width: '10%' }}>Invalid logins</th>
              <th style={{ width: '10%' }}>Enabled</th>
              <th style={{ width: '10%' }}></th>
            </tr>
          </thead>
          <tbody>
            {this.props.models.map((model) => (
              <tr key={model.uniqueIdentifier}>
                <td className="tdtext">{model.uniqueIdentifier}</td>
                <td className="tdtext">{model.username}</td>
                <td className="tdtext">
                  {model.passwordHash ? <FontAwesomeIcon icon={faThumbsUp} /> : <FontAwesomeIcon icon={faThumbsDown} />}
                </td>
                <td className="tdtext">{model.failedLogins}</td>
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
            title={`Delete - ${this.state.selectedModel.uniqueIdentifier}`}
            dialogCloseCallback={this.onDeleteDialogClose}
            showBtnYes={true}
            showBtnNo={true}
          >
            Are you sure?
          </Dialog>
        )}
        {this.state.showEditDialog && this.state.selectedModel && (
          <Dialog
            title={`Edit - ${this.state.selectedModel.uniqueIdentifier}`}
            dialogCloseCallback={this.onEditDialogClose}
            showBtnSave={true}
            showBtnAbort={true}
          >
            <ChargingStationEdit model={this.state.selectedModel} />
          </Dialog>
        )}
        {this.state.showAddDialog && this.state.selectedModel && (
          <Dialog title="Add" dialogCloseCallback={this.onAddDialogClose} showBtnSave={true} showBtnAbort={true}>
            <ChargingStationEdit model={this.state.selectedModel} />
          </Dialog>
        )}
      </div>
    )
  }

  private async onBtnAddClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()

    const model = new ChargingStationModel()
    model.id = uuid()

    this.setState({
      ...this.state,
      selectedModel: model,
      showAddDialog: true,
    })
  }

  private onBtnEnableClick(model: ChargingStationModel, e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()

    model.enabled = !model.enabled
    this.props.send(new UiToCsmsMsg(UiToCsmsCmdEnum.csCmd, UiToCsmsCsSubCmdEnum.edit, model))

    this.setState({ ...this.state })
  }

  private onBtnDeleteClick(model: ChargingStationModel, e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()

    this.setState({
      ...this.state,
      selectedModel: model,
      showDeleteDialog: true,
    })
  }

  private onBtnEditClick(model: ChargingStationModel, e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()
    const modelClone = Object.assign({}, model)
    modelClone.passwordHash = ''

    this.setState({
      ...this.state,
      selectedModel: modelClone,
      showEditDialog: true,
    })
  }

  private async onEditDialogClose(btn: DialogButtonEnum): Promise<void> {
    if (this.state.selectedModel && btn === DialogButtonEnum.save) {
      if (this.state.selectedModel.passwordHash) {
        this.state.selectedModel.passwordHash = hashPassword(this.state.selectedModel.passwordHash)
      }
      this.props.send(new UiToCsmsMsg(UiToCsmsCmdEnum.csCmd, UiToCsmsCsSubCmdEnum.edit, this.state.selectedModel))
    }
    this.setState({
      ...this.state,
      selectedModel: null,
      showEditDialog: false,
    })
  }

  private async onAddDialogClose(btn: DialogButtonEnum): Promise<void> {
    if (this.state.selectedModel && btn === DialogButtonEnum.save) {
      if (this.state.selectedModel.passwordHash) {
        this.state.selectedModel.passwordHash = hashPassword(this.state.selectedModel.passwordHash)
      }
      this.props.send(new UiToCsmsMsg(UiToCsmsCmdEnum.csCmd, UiToCsmsCsSubCmdEnum.add, this.state.selectedModel))
    }

    this.setState({
      ...this.state,
      selectedModel: null,
      showAddDialog: false,
    })
  }

  private async onDeleteDialogClose(btn: DialogButtonEnum): Promise<void> {
    if (this.state.selectedModel && btn === DialogButtonEnum.yes) {
      this.props.send(new UiToCsmsMsg(UiToCsmsCmdEnum.csCmd, UiToCsmsCsSubCmdEnum.delete, this.state.selectedModel))
    }

    this.setState({
      ...this.state,
      selectedModel: null,
      showDeleteDialog: false,
    })
  }
}

export default MainChargingStations
