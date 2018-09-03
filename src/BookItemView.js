import React, {Component} from 'react';

export default class BookItemView extends Component {


    transferType2Str(type) {
        switch (parseInt(type)) {
            case 1:
                return '前端';
            case 2:
                return '后端';
            case 3:
                return '客户端';
            case 4:
                return '计算机网络';
        }
    }


    render() {
        return (
            <tr>
                <td>{this.props.item.info.name}</td>
                <td>{this.transferType2Str(this.props.item.info.type)}</td>
            </tr>
        );
    }
}