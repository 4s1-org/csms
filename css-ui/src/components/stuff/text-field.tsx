import React from 'react'
interface IState {}

interface IProps {
  value: string
  placeholder: string
  onChange: (value: string) => void
}

class TextFieldComp extends React.Component<IProps, IState> {
  public render(): JSX.Element {
    return <input type="text" value={this.props.value} onChange={this.handleChange} placeholder={this.props.placeholder} />
  }

  private handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.props.onChange(e.currentTarget.value)
  }
}

export default TextFieldComp
