import React, {Component} from 'react';
import { Layout } from 'antd';
import {Redirect} from 'react-router-dom'
import './home.less'
import Leftnav from '../../components/leftNav/leftNav'
import Header from '../../components/header/header'
const {  Footer, Sider, Content } = Layout;
class HomeView extends Component {
    constructor(props){
        super(props)
        this.state = {
            openkey:'',
            userInfo:{}
        }
    }
    getChilddata = (data)=>{
        console.log('leftData',data)
        let pathN = this.props.location.pathname
        if (pathN === "/home/goods/addupdata"){
            pathN = "/home/goodscategory"
        }
        console.log('this props',data.current)
        data.current.props.children.map((item) =>{
             if (item.props.children){
                item.props.children.map(itemChild =>{
                    if (itemChild.key === pathN){
                        console.log('itemkey',item.key)
                        this.setState({
                            openkey:item.key
                        })
                    }
                    return true
                })
            }
            return true
        })
    }

    componentDidMount(){
        console.log('openkey',this.state.openkey);
        this.getUserInfo()
    }
    componentDidUpdate(prevProps,prevState){
        console.log('openkey1',this.state.openkey);
        if (this.state.openkey !== prevState.openkey){
            this.setState({
                openkey:this.state.openkey
            })
        }
    }
    getUserInfo(){
        let userInfo = JSON.parse(localStorage.getItem('userInfo'))
        if (!userInfo || !userInfo._id){
            console.log('没有登录')
            this.props.history.replace({
                pathname:'/login'
            })
        }else {
            this.setState({
                userInfo:userInfo
            })
        }
    }
    render() {
        // const userInfo =  JSON.parse(localStorage.getItem('userInfo'))
        // console.log('user',userInfo);
        //     if (!userInfo || !userInfo._id){
        //         return  <Redirect to={'/login'}/>
        //     }
        return (
            <div className='home' >
                <Layout style={{minHeight:"100vh"}}>
                    <Sider >
                        <Leftnav openkey={this.state.openkey} fun = {this.getChilddata}/>
                    </Sider>
                    <Layout>
                        <Header style={{background:'#fff'}} userInfo = {this.state.userInfo}>Header</Header>
                        <Content className='cont'>
                            {this.props.children}
                        </Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default HomeView;
