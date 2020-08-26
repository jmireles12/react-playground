import React from 'react';
import Tabs from '../state/Tabs';

class Accordion extends React.Component {
    static defaultProps = {sections: []};

    state = {
        currentSecIndex: 0
    }

    handleButton(index) {
        this.setState({ currentSecIndex: index })
    }

    renderButtons() {
        return this.props.sections.map((section, index) => (
            <li key={index}>
                <button key={index} onClick={() => this.handleButton(index)}>
                    <p>{section.title}</p>
                </button>
            </li>
        ))
    }

    renderContent() {
        const currentSec = this.props.sections[this.state.currentSecIndex]
        return (
            <div className='content'>
                {currentSec.content}
            </div>
        )
    }

    render() {
        const buttons = this.props.sections.map((section, index) => (
            <button key={index}>
                {section.name}
            </button>
        ))
        const currentSec = this.props.sections[0]
        return (
            <ul>
                {this.renderButtons()}
                {!!this.props.sections.length && this.renderContent()}
            </ul>
        )
    }
}

export default Accordion;