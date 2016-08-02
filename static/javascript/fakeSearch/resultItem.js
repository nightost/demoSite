import React , {Component} from 'react';
import {render} from 'react-dom';


export class SearchItem extends Component{
    render(){
        return <li data-value={this.props.value}>{this.props.value}</li>;
    }
}