import React, {Component} from 'react';
import './App.css';
import $ from 'jquery';

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
        // console.log(this.state.provinceName);
        // $.get('http://192.168.6.202:8080/city/getCity?provinceName=%E6%B2%B3%E5%8D%97%E7%9C%81', function(result) {
        //     if (this.isMounted) {
        //         this.setState({
        //             provinceName: this.state.provinceName,
        //             citys: result[0].data
        //         });
        //     }
        // }.bind(this));
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
            </div>
        );
    }
}

var city = {
    id: '',
    cityName: '',
    cityId: '',
    provinceId: ''
}

export default App;
