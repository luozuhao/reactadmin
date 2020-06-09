import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import mulList from '../../util/mulInfo'
import './header.less'
import { weather } from '../../api/home'
import { Modal } from 'antd';
const { confirm } = Modal;
class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:'',
            currentTime :"",
            weather:"",
            dayPictureUrl:''
        }
    }
    logout = ()=>{
        let that = this;
        confirm({
            title:'确定退出吗？',
            onOk() {
                localStorage.removeItem('userInfo')
                setTimeout(() =>{
                   that.props.history.replace({
                       pathname:'/login'
                   })
               },1000)
            },
            onCancel() {},
        });
    }
    getTitle = ()=> {
        const path = this.props.location.pathname
        let title
        mulList.map((item)=>{
            if (item.key === path) {
                title = item.title
            }
            return true
        })
        return title
    }
    getweather = async ()=>{
        const data = await weather('广州')
        console.log('数据相信',data)
    }
    componentDidMount(){
        this.getweather()
    }
    render() {
        const title = this.getTitle()
        return (
                <div className="header">
                <div className="header-top">
                    <span>欢迎, {this.props.userInfo.username}</span>
                    <button onClick={this.logout} className='link-button '>退出</button>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">{title}</div>
                {/*    <div className="header-bottom-right">
                        <span>{this.state.currentTime}</span>
                        <img src={this.state.dayPictureUrl} alt="weather"/>
                        <span>{this.state.weather}</span>
                    </div>*/}
                </div>
            </div>
        );
    }
}

export default withRouter(Header);
