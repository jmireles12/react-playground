import React from 'react';

class Bomb extends React.Component {
    state = {
        count: 0,
        result: ('')
    }
    
    componentDidMount() {
        this.interval = setInterval(() => {
            const even = this.state.count % 2 === 0;
            const odd = this.state.count % 2 !== 0;
            const boom = this.state.count >= 8;
            if(this.state.count === 8){
                clearInterval(this.interval)
            }
            this.setState({
                count: this.state.count + 1,
                result: even || (odd && boom)
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        if(this.state.count >= 8) {
            this.state.result = 'BOOM!!!!';
        }
        else if (this.state.result === false) {
            this.state.result = 'tick';
        }
        else {
            this.state.result = 'tock';
        }
        
        return (
            <div>
                <p>{this.state.count} {this.state.result}</p>
            </div>
        )
    }
}

export default Bomb;