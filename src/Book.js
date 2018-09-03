export class BookItem {
    constructor(item) {
        this.info = {};
        this.info.name = item.name;
        this.info.type = item.type;
        this.info.id = item.id;
    }
}

export default class Book {
    constructor() {
        this.allBooks = []; //所有书籍集
        this.searchResult = []; // 查询结果集
        this.filtType = 0; // 筛选类型
        this.searchKey = ''; //查询key
    }

    _filtBook(filtType) {
        this.filtType = filtType;
        switch(parseInt(filtType)) {
            case 0:
                this.searchResult = this.allBooks;
                break;
            case 1:
                this.searchResult = this.allBooks.filter(item => {
                    return item.info.type == 1;
                });
                break;
            case 2:
                this.searchResult = this.allBooks.filter(item => {
                    return item.info.type == 2;
                });
                break;
            case 3:
                this.searchResult = this.allBooks.filter(item => {
                    return item.info.type == 3;
                });
                break;
            case 4:
                this.searchResult = this.allBooks.filter(item => {
                    return item.info.type == 4;
                });
                break;
        }
    }

    filtBook(filtType) {
        this._filtBook(filtType);
        return this;
    }

    addBooks(allBooks) {
        this.allBooks = allBooks;
        return this;
    }
}