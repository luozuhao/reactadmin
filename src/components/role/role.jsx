import React, {Component} from 'react';
import {Button, Card, Table} from "antd";

class Role extends Component {
    constructor(props) {
        super(props)
        this.state = {
            roleData: [],
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
        }
    }

    formatTima = (time) => {
        let date = new Date(time)
        let year = date.getFullYear()
        let month = date.getMonth()
        let day = date.getDate()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        let newTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
        console.log('newTime', newTime);
        return newTime
    }

    getRoleTime = () => {
        const role = [
            {
                "menus": [
                    "/role",
                    "/charts/bar",
                    "/home",
                    "/category"
                ],
                "_id": "5ca9eaa1b49ef916541160d3",
                "name": "测试",
                "create_time": 1554639521749,
                "__v": 0,
                "auth_time": 1558679920395,
                "auth_name": "test007",
                "key": 0
            },
            {
                "menus": [
                    "/role",
                    "/charts/bar",
                    "/home",
                    "/charts/line",
                    "/category",
                    "/product",
                    "/products"
                ],
                "_id": "5ca9eab0b49ef916541160d4",
                "name": "经理",
                "create_time": 1554639536419,
                "__v": 0,
                "auth_time": 1558506990798,
                "auth_name": "test008",
                "key": 1
            },
            {
                "menus": [
                    "/home",
                    "/products",
                    "/category",
                    "/product",
                    "/role"
                ],
                "_id": "5ca9eac0b49ef916541160d5",
                "name": "角色1",
                "create_time": 1554639552758,
                "__v": 0,
                "auth_time": 1557630307021,
                "auth_name": "admin",
                "key": 2
            }
        ]
        role.map((item) => {
            item.create_time = this.formatTima(item.create_time)
            item.auth_time = this.formatTima(item.auth_time)
        })
        console.log('role', role);
        return role
    }
    getRoleData = () => {
        const roleArr = this.getRoleTime()
        this.setState({
            roleData: roleArr
        })
    }
    start = () => {
        this.setState({loading: true});
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    };
    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({selectedRowKeys});
    };
    onRow = (record, index) => {
        return {
            onClick: event => {
                console.log('record', record)
                let recordArr = []
                recordArr.push(record)
                this.setState({
                    selectedRowKeys: recordArr
                })
            }, // 点击行
        }
    }
    selectRowKeys = () => {
        const { selectedRowKeys} = this.state;
        let selectArr = []
        if (selectedRowKeys.length > 0) {
            if (selectedRowKeys[0]._id) {
                selectArr.push(selectedRowKeys[0]._id)
            } else {
                selectArr = selectedRowKeys
            }

        } else {
            selectArr = []
        }
        return selectArr
    }

    componentDidMount() {
        this.getRoleData()
        this.formatTima(50)
    }

    render() {
        const {loading} = this.state;
        const selectArr = this.selectRowKeys()
        const rowSelection = {
            selectedRowKeys: selectArr,
            onChange: this.onSelectChange
        };
        const hasSelected = selectArr.length > 0;
        const columns = [
            {
                title: '角色名称',
                dataIndex: 'name'
            }, {
                title: '创建时间',
                dataIndex: 'create_time'
            }, {
                title: '授权时间',
                dataIndex: 'auth_time'
            }, {
                title: '授权人',
                dataIndex: 'auth_name'
            }
        ]
        const title = (
            <div>
                <Button type="primary">创建角色</Button>
                <Button type="primary"
                        style={{marginLeft: 8}}
                        disabled={!hasSelected}
                        onClick={this.start}
                        loading={loading}>
                    Reload
                </Button>
                <span style={{marginLeft: 8}}>
                    {hasSelected ? `Selected ${selectArr.length} items` : ''}
                 </span>
            </div>

        )
        return (
            <div className='role'>
                <Card title={title}>
                    <div className="table">
                        <Table
                            rowSelection={
                                {
                                    type: "radio",
                                    ...rowSelection
                                }
                            }
                            rowKey='_id'
                            columns={columns}
                            dataSource={this.state.roleData}
                            pagination={
                                {pageSize: 2}
                            }
                            onRow={this.onRow}
                            bordered
                        />,
                    </div>
                </Card>
            </div>
        );
    }
}

export default Role;
