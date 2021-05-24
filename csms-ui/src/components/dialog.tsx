import React from 'react'
import { DialogButtonEnum } from './dialog-button.enum'

interface IState {}

interface IProps {
  title: string
  dialogCloseCallback: (name: DialogButtonEnum) => void
  showBtnYes?: boolean
  showBtnNo?: boolean
  showBtnSave?: boolean
  showBtnOk?: boolean
  showBtnAbort?: boolean
  large?: boolean
}

class Dialog extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.onBtnYesClick = this.onBtnYesClick.bind(this)
    this.onBtnNoClick = this.onBtnNoClick.bind(this)
    this.onBtnSaveClick = this.onBtnSaveClick.bind(this)
    this.onBtnOkClick = this.onBtnOkClick.bind(this)
    this.onBtnAbortClick = this.onBtnAbortClick.bind(this)
  }

  public render(): JSX.Element {
    let modalClassName = 'modal-dialog'
    if (this.props.large || true) {
      modalClassName += ' modal-lg'
    }
    modalClassName += ' modal-dialog-centered'

    return (
      <div
        className="modal fade show"
        style={{
          display: 'block',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
        tabIndex={-1}
        role="dialog"
      >
        <div className={modalClassName} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.title}</h5>
            </div>
            <div className="modal-body">{this.props.children}</div>
            <div className="modal-footer">
              {this.props.showBtnYes && (
                <button key="yes" type="button" className="btn btn-success" onClick={this.onBtnYesClick}>
                  Yes
                </button>
              )}
              {this.props.showBtnNo && (
                <button key="no" type="button" className="btn btn-danger" onClick={this.onBtnNoClick}>
                  No
                </button>
              )}
              {this.props.showBtnSave && (
                <button key="save" type="button" className="btn btn-success" onClick={this.onBtnSaveClick}>
                  Save
                </button>
              )}
              {this.props.showBtnOk && (
                <button key="abort" type="button" className="btn btn-success" onClick={this.onBtnOkClick}>
                  Ok
                </button>
              )}
              {this.props.showBtnAbort && (
                <button key="abort" type="button" className="btn btn-danger" onClick={this.onBtnAbortClick}>
                  Abort
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  private onBtnYesClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault()
    this.close(DialogButtonEnum.yes)
  }

  private onBtnNoClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault()
    this.close(DialogButtonEnum.no)
  }

  private onBtnOkClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault()
    this.close(DialogButtonEnum.ok)
  }

  private onBtnSaveClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault()
    this.close(DialogButtonEnum.save)
  }

  private onBtnAbortClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault()
    this.close(DialogButtonEnum.abort)
  }

  private close(name: DialogButtonEnum): void {
    this.props.dialogCloseCallback(name)
  }
}

export default Dialog
