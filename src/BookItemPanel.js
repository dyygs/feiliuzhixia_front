import React from 'react';
import BookItemView from './BookItemView';

export default class BookItemPanel extends React.Component {


    render() {
        let items = [];
        if(this.props.items.length == 0) {
            items.push(<tr><th colSpan="5" className="tempEmpty">暂无书籍</th></tr>);
        }else {
            this.props.items.forEach(item => {
                items.push(<BookItemView item={item}/>);
            });
        }
        return (
            <table>
                <thead>
                    <th className='itemTd'>书名</th>
                    <th className='itemTd'>类别</th>
                </thead>
                <tbody>
                {items}
                </tbody>
            </table>
        );
    }

}