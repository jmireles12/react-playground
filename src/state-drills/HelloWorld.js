import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: (""),
    }

    worldButton = () => {
        console.log('world')
        this.setState({
            who: 'world!'
        })
    }

    friendButton = () => {
        console.log('friend')
        this.setState({
            who: 'friend!'
        })
    }

    reactButton = () => {
        console.log('react')
        this.setState({
            who: 'React!'
        })
    }

    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.worldButton}>World</button>
                <button onClick={this.friendButton}>Friend</button>
                <button onClick={this.reactButton}>React</button>
            </div>
        )
    }
}

export default HelloWorld;