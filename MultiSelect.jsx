import React from 'react'
import { Custom } from 'react-simple-chatbot'

class MultiSelect extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedOptions: [],
      checkboxes: {},
    }
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }

  handleCheckboxChange(event) {
    const checkboxId = event.target.value
    const checkboxState = event.target.checked
    this.setState((prevState) => ({
      checkboxes: {
        ...prevState.checkboxes,
        [checkboxId]: checkboxState,
      },
    }))
  }
  handleChange = (option) => {
    const { triggerNextStep } = this.props
    const { selectedOptions } = this.state
    const optionIndex = selectedOptions.indexOf(option.value)

    if (optionIndex === -1) {
      selectedOptions.push(option.value)
    } else {
      selectedOptions.splice(optionIndex, 1)
    }

    this.setState({ selectedOptions })
  }

  handleNext = () => {
    const { triggerNextStep, trigger } = this.props
    const { selectedOptions } = this.state

    if (selectedOptions.length > 0) {
      triggerNextStep({ value: selectedOptions, trigger: trigger })
    }
  }

  render() {
    const { steps, options } = this.props
    const { selectedOptions } = this.state

    return (
      <div className="multi-select-options">
        {options.map((option) => (
          <label className="multiselect" key={option.value}>
            <input
              type="checkbox"
              value={option.value}
              id={option.id}
              checked={selectedOptions.indexOf(option.value) !== -1}
              onChange={(e) => {
                this.handleCheckboxChange(e)
                this.handleChange(option)
              }}
            />
            <span className={this.state.checkboxes[option.value] ? 'bold' : ''}>
              {option.label}
            </span>
          </label>
        ))}
        <br />
        <button onClick={this.handleNext}>
          Continue{' '}
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 500 500"
          >
            <g>
              <g>
                <polygon points="0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75"></polygon>
              </g>
            </g>
          </svg>
        </button>
      </div>
    )
  }
}

export default MultiSelect
