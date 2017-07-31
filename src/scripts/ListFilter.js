import React from 'react';
import PropTypes from 'prop-types';

class ListComponent extends React.Component {
    constructor(props) {
        super(props);

        this.list = data;
        this.state = {
            searchString: "",
            data: this.list
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
         fetch('https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json')
            .then((response) => response.json())
            .then((json) => {
               this.setState({
                    data: json.Reggae
                });
            })
            .catch(() => {
                console.log('error');
            });
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
                <input type="text" value={this.state.searchString} onChange={this.handleChange}
                       placeholder="Type here"/>
                <ul>{ this.state.data.map((item, k) =>
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