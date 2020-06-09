import React, {Component, createRef} from 'react';
import {Link, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Layout, Menu} from 'antd';
import {
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

import logo from '../../assets/image/logo.png'
import './leftNav.less'

const {Sider} = Layout;
const {SubMenu} = Menu;

class LeftNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
        }
        this.menu = createRef()
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };



    componentDidMount() {
        this.props.fun(this.menu)
        // this.getmentKey()
    }

    render() {
        let pathname = this.props.location.pathname
        if (pathname === "/home/goods/addupdata"){
            pathname = "/home/goodscategory"
        }
        return (
            <div className="left-nav"
                 key='left'
                 style={{
                     overflow: 'auto',
                     height: '100vh',
                     position: 'fixed',
                     left: 0,
                 }}
            >
                <Link to='/' className="left-nav-header" style={{textDecoration: 'none'}}>
                    <img src={logo} alt="logo"/>
                    <h1>硅谷后台</h1>
                </Link>
                <div className="menu">
                    <Layout>
                        <Sider
                            collapsed={this.state.collapsed}
                            onCollapse={this.onCollapse}
                            trigger={null}
                        >
                            <div className="logo"/>
                            <Menu
                                key={this.props.openkey}
                                theme="dark"
                                ref={this.menu}
                                defaultOpenKeys={[this.props.openkey]}
                                defaultSelectedKeys={[pathname]}
                                mode="inline"
                                forceSubMenuRender='true'
                            >
                                <Menu.Item key="/home" icon={<PieChartOutlined/>} title="首页">
                                    首页
                                    <Link to='/home'>
                                    </Link>
                                </Menu.Item>
                                <SubMenu key="goodskey" icon={<UserOutlined/>} title="商品">
                                    <Menu.Item key="/home/goodsinfo">品类管理<Link to='/home/goodsinfo'></Link></Menu.Item>
                                    <Menu.Item key="/home/goodscategory">商品管理<Link
                                        to='/home/goodscategory'></Link></Menu.Item>
                                </SubMenu>
                                <Menu.Item key="/home/user" icon={<PieChartOutlined/>} title="用户管理">
                                    用户管理<Link to='/home/user'></Link>
                                </Menu.Item>
                                <Menu.Item key="/home/role" icon={<PieChartOutlined/>} title="角色管理">
                                    角色管理<Link to='/home/role'></Link>
                                </Menu.Item>
                                <SubMenu key="grap" icon={<TeamOutlined/>} title="图形图表">
                                    <Menu.Item key="/home/charts">柱形图<Link to='/home/charts'></Link></Menu.Item>
                                    <Menu.Item key="/home/line">折线图<Link to='/home/line'></Link></Menu.Item>
                                </SubMenu>
                                <Menu.Item key="/home/order" icon={<PieChartOutlined/>} title='订单管理'>
                                    订单管理<Link to='/home/order'/>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                    </Layout>
                </div>
            </div>
        );
    }
}

LeftNav.defaultProps = {
    openkey: ''
}
LeftNav.propTypes = {
    openkey: PropTypes.string
}
export default withRouter(LeftNav);
