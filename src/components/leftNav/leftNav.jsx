import React, {Component,createContext} from 'react';
import {Link, withRouter} from 'react-router-dom'
import {Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

import logo from '../../assets/image/logo.png'
import './leftNav.less'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const context = createContext()

class LeftNav extends Component {
    constructor(props){
        super(props)
        this.state = {
            collapsed: false,
        }
    }
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    componentDidMount(){
        console.log('props',context)
    }
    render() {
        return (
            <div className="left-nav">
                <Link to='/' className="left-nav-header" style={{ textDecoration:'none'}}>
                    <img src={logo} alt="logo"/>
                    <h1>硅谷后台</h1>
                </Link>
                <div className="menu">
                    <Layout style={{ minHeight: '100vh' }}>
                        <Sider
                            collapsed={this.state.collapsed}
                            onCollapse={this.onCollapse}
                            style={{
                                overflow: 'auto',
                                height: '100vh',
                                position: 'fixed',
                                left: 0,
                            }}
                        >
                            <div className="logo" />
                            <Menu theme="dark" defaultSelectedKeys={['home']} mode="inline">
                                <Menu.Item key="home" icon={<PieChartOutlined />}>
                                    首页
                                </Menu.Item>
                                <SubMenu key="goods" icon={<UserOutlined />} title="商品">
                                    <Menu.Item key="Category">品类管理</Menu.Item>
                                    <Menu.Item key="goodCate">商品管理</Menu.Item>
                                </SubMenu>
                                <Menu.Item key="userGl" icon={<PieChartOutlined />}>
                                    用户管理
                                </Menu.Item>
                                <Menu.Item key="roleGl" icon={<PieChartOutlined />}>
                                    角色管理
                                </Menu.Item>
                                <SubMenu key="grap" icon={<TeamOutlined />} title="图形图表">
                                    <Menu.Item key="Graphics1">柱形图</Menu.Item>
                                    <Menu.Item key="Graphics2">折线图</Menu.Item>
                                </SubMenu>
                                <Menu.Item key="user" icon={<PieChartOutlined />}>
                                    订单管理
                                </Menu.Item>
                            </Menu>
                        </Sider>
                    </Layout>
                </div>
            </div>
        );
    }
}

export default withRouter(LeftNav);
