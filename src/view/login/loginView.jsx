import React, {Component} from 'react';
import logo from '../../assets/image/logo.png'
import './login.less'
import {
    Form,
    Input,
    Button,
    message
} from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import RegExp from '../../assets/RegExp'
import {login} from '../../api/home'
import memoryUtils from '../../util/memoryUtils'
// const { Option } = Select;
class LoginView extends Component {
    formRef = React.createRef();
    handleSubmit = (event) => {
        console.log('完成', event)
        const {username,password} = event
        login({
            username:username,
            password:password
        },(res)=>{
            console.log('login',res)
            if (res.data.status === 0 ){
                memoryUtils.user = res.data.data
                localStorage.setItem('userInfo',JSON.stringify(res.data.data))
                message.success('登录成功')
                this.props.history.replace({
                    pathname: '/home'
                })
            }else {
                message.error('登录失败')
            }
        })
    }
    onGenderChange = (value) => {
        console.log('value', value);
        this.formRef.current.setFieldsValue({
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
        console.log(this.formRef.current.getFieldValue())
    };
    validatePwd = (rule, value) => {
        console.log('valuePwd', value)
        return new Promise((resolve, reject) => {
            if (value.length < 4) {
                reject('密码长度不能小于4位')
            } else if (value.length > 12) {
                reject('密码长度不能大于12位')
            } else if (!RegExp.password.test(value)) {
                reject('密码必须是英文、数字或下划线组成')
            } else {
                resolve() // 验证通过
            }
        })

    }

    componentDidMount() {
        // request('/manage/user/list', 'get', {
        //     params: {},
        //     header: {}
        // }).then((res) => {
        //     console.log('login数据', res)
        // }).catch((error) => {
        //     console.log('login错误信息', error)
        // })

    }

    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>React项目: 后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登陆</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        ref={this.formRef}
                        onFinish={this.handleSubmit}

                    >
                        <Form.Item
                            /*
                          用户名/密码的的合法性要求
                            1). 必须输入
                            2). 必须大于等于4位
                            3). 必须小于等于12位
                            4). 必须是英文、数字或下划线组成
                           */
                            name="username"
                            validateFirst="true"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名',
                                },
                                {
                                    min: 4,
                                    max: 10,
                                    message: '用户名最少4位，最多10位'
                                },
                                {
                                    pattern: RegExp.username,
                                    message: '用户名必须是英文、数字或下划线组成'
                                }

                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="用户名"/>
                        </Form.Item>
                        {/*<Form.Item name="gender" label="Gender" rules={[{ required: true }]}>*/}
                        {/*<Select*/}
                        {/*placeholder="Select a option and change input text above"*/}
                        {/*onChange={this.onGenderChange}*/}
                        {/*allowClear*/}
                        {/*>*/}
                        {/*<Option value="male">male</Option>*/}
                        {/*<Option value="female">female</Option>*/}
                        {/*<Option value="other">other</Option>*/}
                        {/*</Select>*/}
                        {/*</Form.Item>*/}
                        <Form.Item
                            name="password"
                            validateFirst="true"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码!',
                                },
                                {
                                    validator: this.validatePwd
                                }
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        );
    }
}


export default LoginView
