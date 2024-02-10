import React, { Component } from 'react'
import Body from './Body'
import Header from './Header'
import Footer from './Footer'

export default class BaiTapLayoutComponent extends Component {
    render() {
        return (
            <div className="LayOutBaiTap">
                <Header></Header>
                <Body></Body>
                <Footer></Footer>
            </div>
        )
    }
}
