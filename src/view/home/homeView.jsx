import React, {Component} from 'react';
import { Layout } from 'antd';
import './home.less'
import Leftnav from '../../components/leftNav/leftNav'
const { Header, Footer, Sider, Content } = Layout;
class HomeView extends Component {
    render() {
        return (
            <div className='home'>
                <Layout style={{minHeight:"100%"}}>
                    <Sider>
                        <Leftnav />
                    </Sider>
                    <Layout>
                        <Header style={{background:'#fff'}}>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default HomeView;
