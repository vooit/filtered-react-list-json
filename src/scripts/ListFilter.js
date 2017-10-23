import React from 'react';
import PropTypes from 'prop-types';

class ListComponent extends React.Component {
    constructor(props) {
        super(props);

        this.list = ['Sri Lanka', 'Japan', 'America', 'Australia', 'Canada', 'Russia'];
        this.state = {
            searchString: "",
            data: this.list
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            searchString: e.target.value,
            data: this.filterList(e.target.value, this.list)
        })
    }
    filterList(str, data) {
        return data.filter(element => element.toLowerCase().match(str));
    }

   
    render() {
        return (
            <div className="page-header">
                <h1>{this.props.text}</h1>
                <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here"/>
                <ul>{ this.state.data.map( (item, k)=>
                       <li key={k}>{item}</li>
                    ) }
                </ul>
            </div>
        );
    }
}

ListComponent.defaultProps = {
    text: 'Filter Place'
};
ListComponent.propTypes = {
    text: PropTypes.string.isRequired
};
export default ListComponent;

