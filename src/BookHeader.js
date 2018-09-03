import React from 'react';

class BookHeader extends React.Component{

    //按技术方向筛选
    handleIdChange() {
        let selElement = React.findDomNode(this.refs.selId);
        let selValue = selElement.options[selElement.selectedIndex].value;
        this.props.sortBook(selValue);
    }

    render() {
        return (
            <div>
                <h3>技术典藏书籍</h3>
                <table>
                    <tr>
                        <td>
                            <input placeholder="请输入书名"/>
                        </td>
                        <td>
                            <label>技术方向筛选</label>
                            <select id= 'idSelect' ref='selId' onChange={this.handleIdChange.bind(this)}>
                                <option value="0">全部</option>
                                <option value="1">前端</option>
                                <option value="2">后端</option>
                                <option value="3">客户端</option>
                                <option value="4">计算机网络</option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }

}

export default BookHeader;