import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchResult from './SearchResult';

class FakeSearch extends Component{
    constructor(props){
        super(props);
        this.state = { 
            items : [],
            text : ''
        };
        //es 6 语法需要手动bind this
        this.keywordChange = this.keywordChange.bind(this);
    }
    keywordChange(e){
        var val = e.target.value;
        this.setState({
            text : val
        });
        this.createResultItems();
    }
    createResultItems(){
        var items;
        var mapFn = function(item){ 
            return {
                value : this.state['text'] + '' + item
            };
        }.bind(this);
        items = [1,2,3,4].map(mapFn);
        this.setState({
            items : items
        });
    }
    render(){
        return (
                <div>
                    <input 
                        type = 'text' 
                        placeholder='enterKeyword' 
                        onChange = {this.keywordChange}
                    />
                    <SearchResult 
                        items = {this.state.items}
                    />
                </div>
            );
    }
}
ReactDOM.render(<FakeSearch /> ,document.querySelector('#search-con'));