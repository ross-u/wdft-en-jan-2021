import React, { Component } from 'react'

class Search extends Component {
    state = {
        search: ""
    }

    handleInput = (event) => {
        let {value} = event.target;
        this.state.search = value;
        this.setState({search: this.state.search})
        this.props.search(value);
    }
    
    render() {
        return (
            <div>
                <input type="text" name="search" value={this.state.search} onChange={this.handleInput} />
            </div>
        )
    }
}

export default Search;