import React, {Component} from 'react';
import {Button, Card, Table} from "antd";
import {getUserList} from '../../api/home'
import './user.less'
class User extends Component {
    constructor(props){
        super(props)
        this.state = {
            userData:[
                {
                    key: '1',
                    name: 'John Brown',
                    email:'616@qq.com',
                    phone:'188193',
                    register:'2018-4-19 19:27:30',
                    role:'经理'
                },
                {
                    key: '2',
                    name: 'Jim Green',
                    email: '44821@163.com',
                    phone:'188193',
                    register:'2018-4-19 19:27:30',
                    role:'经理'
                },
                {
                    key: '3',
                    name: 'Joe Black',
                    email:'66164474@qq.com',
                    phone:'188193',
                    register:'2018-4-19 19:27:30',
                    role:'经理'
                }
            ]
        }
    }
    getUserList = ()=>{
        getUserList((res)=>{
            console.log('用户列表',res)
        })
    }
    componentDidMount(){
        this.getUserList()
    }
    render() {
        const columns = [
            {
                title: '用户名',
                dataIndex: 'name'
            }, {
                title: '邮箱',
                dataIndex: 'email'
            }, {
                title: '电话',
                dataIndex: 'phone'
            }, {
                title: '注册时间',
                dataIndex: 'register'
            }, {
                title: '所属角色',
                dataIndex: 'role'
            },

            {
                title: '操作',
                width:200,
                render:(text =>(
                    <div className='roleInfo'>
                        <Button type = "primary">修改</Button>
                        <Button type = "primary" className='delete'>删除</Button>
                    </div>
                ))
            },
        ]
        const title = (
            <Button type = "primary">创建用户</Button>
        )
        return (
            <div className='user'>
                <Card title={title} >
                    <div className="table">
                        <Table
                            columns={columns}
                            dataSource={this.state.userData}
                            bordered
                        />,
                    </div>
                </Card>
            </div>
        );
    }
}

export default User;
