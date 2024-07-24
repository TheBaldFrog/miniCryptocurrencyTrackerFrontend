import React, {useEffect, useState} from 'react';
// import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import {Menu, Spin} from 'antd';
import axios from "axios";
import CryptocurrencyCard from "./components/CryptocurrencyCard.jsx";
// import * as r from "autoprefixer";


const App = () => {
    const [currencies, setCurrencies] = useState([])
    const [currencyId, setCurrencyId] = useState(1)
    const [currencyData, setCurrencyData] = useState(null)

    const fetchCurrencies = () => {
        axios.get("http://44.211.162.169:8000/cryptocurrencies/").then((response) => {
            const currenciesResponse = response.data
            const menuItems = [
                {
                    key: 'g1',
                    label: 'List cryptocurrency',
                    type: 'group',
                    children: currenciesResponse.map(c => ({label: c.name, key: c.id}))

                }
            ]
            setCurrencies(menuItems)
            console.log(currenciesResponse)
        })
    }

    const fetchCurrency = () => {
        axios.get(`http://44.211.162.169:8000/cryptocurrencies/${currencyId}`).then((response) => {
            setCurrencyData(response.data)
            console.log(response.data)
        })
    }

    useEffect(() => {
        fetchCurrencies()
    }, []);

    useEffect(() => {
        setCurrencyData(null)
        fetchCurrency()
    }, [currencyId]);

    const onClick = (e) => {
        console.log('click ', e);
        setCurrencyId(e.key)
    };
    return (
        <div className="flex">
            <Menu
                onClick={onClick}
                style={{
                    width: 256,
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={currencies}
                className="h-screen overflow-scroll"
            />
            <div className="mx-auto my-auto">
                {currencyData ? <CryptocurrencyCard currency={currencyData}/> : <Spin size="large"/>}
            </div>
        </div>
    );
};
export default App;