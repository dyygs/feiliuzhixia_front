import React, {Component} from 'react';
import './App.css';
import http from './server/server'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {provinceName: '', citys: []};
    }

    async getCitys(provinceName) {

        const res = await http.get('/city/getCity', {provinceName:provinceName})
        console.log(res.data);
        this.setState({
            provinceName: provinceName,
            citys: res.data
        });
    }

    handleChange(inputValue) {
        this.setState({
            provinceName: inputValue
        });
    }


    componentDidMount() {
        this.getCitys();
    }

    render() {
        var inputValue = '';
        return (
            <div>
                <h1>省份：{this.state.provinceName}</h1>
                <input type="text"/>
                <button onClick={this.getCitys(this.state.provinceName)}>查看包含市:</button>
                <ul>
                    {
                        this.state.citys.map((city,index) => {
                            return (
                                <li key={index}>{city.cityName}</li>
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
