import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Start typing here'
    };
    this.updateNoteState = this.updateNoteState.bind(this);
  }

  updateNoteState(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    alert('You saved your note!')
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Note:
          <textarea value={this.state.value} onChange={this.updateNoteState}>
        </label>
      </form>
    )
  }
}
