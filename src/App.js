import React, {Component} from 'react';
import './App.css';
import $ from 'jquery';
import Book from './ManageBook';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            provinceName: '',
            citys: []
        };
        this.getCitys = this.getCitys.bind(this);
    }

    getCitys() {
        const _this = this;
        $.ajax({
            type:'get',
            // url:'http://localhost:8080/city/getCity?provinceName=河南省',
            url:'http://localhost:8080/city/getCity?provinceName=' + this.state.provinceName,
            // dataType:'jsonp',
            success:function(res){
                _this.setState({
                    citys: res
                });
                console.log(_this.state.provinceName);
            },
            error:function(result){
                alert("error" + result);
            }
        })
    }

    handelChange(e){
        this.setState({
            provinceName:e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>根据输入的省份查看包含的市</h1>
                <input type="text" onChange={this.handelChange.bind(this)} defaultValue={this.state.provinceName}/>
                <button onClick={this.getCitys}>查看包含市:</button>
                <ul>
                    {
                        this.state.citys.map((city,index) => {
                            console.log("i am refresh");
                            var obj = eval(city);
                            return (
                                <li key={index}>{obj.cityName}</li>
                            )
                        })
                    }
                </ul>
                <Book/>
            </div>
        );
    }
}

export default App;
