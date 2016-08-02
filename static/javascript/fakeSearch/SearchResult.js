import {Component} from 'React';
export default class SearchResult extends Component{
    constructor(props){
        super(props);
    }
    render(){
        var createItem = function (item) {
            //react 建议遍历的子com 加上唯一的key
            return <li key={item.value}>{item.value}</li>;
        };
        return (
            <ul>
                {this.props.items.map(createItem)}
            </ul>
        );
    }
}