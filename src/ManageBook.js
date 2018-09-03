import React, {Component} from 'react';
import $ from 'jquery';
import BookHeader from "./BookHeader";
import BookItemPanel from "./BookItemPanel";
import Book, {BookItem} from "./Book";

var getAllBookUrl = 'http://localhost:8080/book/getAllBooks';

class ManageBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: new Book()
        }
        ;
    }

    componentWillMount() {
        this._getBookFromServer();
    }

    _getBookFromServer() {
        const _this = this;
        $.ajax({
            type:'get',
            url: getAllBookUrl,
            success:function(res){
                let items = [];
                res.forEach(item=> {
                    items.push(new BookItem(item));
                });
                _this.setState({
                    books:_this.state.books.addBooks(items)
                });
                console.log('success');
            },
            error:function(result){
                alert("error" + result);
            }
        })
    }



    render() {
        return (
            <div>
                <h1>展示所有已收藏的图书</h1>
                <BookHeader/>
                {console.log(this.state.books)}
                <BookItemPanel items={this.state.books.allBooks}/>
            </div>
        );
    }
}

export default ManageBook;