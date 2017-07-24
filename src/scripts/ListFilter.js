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

    // componentWillMount () {
    //     $.getJSON('https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json', function(result) {
    //         console.log('json received');
    //         this.setState({data: result.Reggae});
    //     }.bind(this));
    // }
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

//
// var ListComp = React.createClass({
//     getInitialState: function () {
//         return {
//             search: '',
//             data: []
//         }
//     },
//     iterate: function(array) {
//         return array.map(function(arrayItem) {
//             return <li>{arrayItem}</li>;
//         });
//     },
//     handleSearch: function(e) {
//         this.setState({search: e.target.value});
//     },
//     render: function () {
//
//         var list = this.props.data;
//         var searchStr = this.state.search.trim().toLowerCase();
//
//         if ( searchStr.length > 0 ) {
//             list = list.filter(function(letter) {
//                 return letter.toLowerCase().match(searchStr);
//             });
//
//         }
//         return (
//             <div>
//                 <h3>Search:</h3>
//                 <input type="text" value={this.state.search} onChange={this.handleSearch} placeholder="Search the list with React" />
//                 <ul>{this.iterate(list)}</ul>
//             </div>
//         )
//     }
// });
//
//
// var Content = React.createClass({
//     getInitialState: function () {
//         return {
//             data: []
//         }
//     },
//     componentWillMount () {
//         $.getJSON('https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json', function(result) {
//             console.log('json received');
//             this.setState({data: result.Reggae});
//         }.bind(this));
//     },
//     render: function () {
//         return (
//             <div className="container">
//                 <div className="header">
//                     <h1>React Search!</h1>
//                     <p className="about">Here is a list of Reggae artists rendered from a JSON object</p>
//                 </div>
//                 <ListComp data={this.state.data}/>
//             </div>
//         )
//     }
// });
//
// ReactDOM.render(<Content />, document.getElementById('main'));