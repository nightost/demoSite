import React from 'React'
import ReactDom from 'React-Dom' 
/**
 * confirm button
 */
class ConfirmBtn extends React.Component{
    render(){
        return (
            <button className='default'>{this.props.name}</button>
        )
    }
}
/**
 * render
 */
ReactDOM.render(<ConfirmBtn name = '确定'/> , document.getElementById('container'))