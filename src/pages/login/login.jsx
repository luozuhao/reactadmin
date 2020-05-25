import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import url from 'url'
import './login.less'
// import logo from '../../view/login/images/logo.png'
class Login extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    componentDidMount(){
        console.log(this.props);
        const httpUrl = this.props.location.search;
        console.log(url.parse(httpUrl, true));
    }
    onFinish = values => {
        console.log('Received values of form: ', values);
    };
    render() {
        return (
            <div className='login'>
                <div className='head'>
                    {/*<img className='loginIcon' src={logo} alt=""/>*/}
                        React:后台管理系统
                </div>
                <div className="content">
                    <div className='form'>
                        <div>用户登录</div>
                        <div className='formCont'>
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{ remember: true }}
                                onFinish={this.onFinish}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your Username!' }]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your Password!' }]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                       登录
                                    </Button>

                                </Form.Item>
                            </Form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default connect()(Login);
