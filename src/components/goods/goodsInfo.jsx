import React, {Component} from 'react';
import {Card, Button, Table, Tag, Space} from 'antd';
import {
    PlusOutlined
} from '@ant-design/icons';
import { category } from '../../api/home'
import './goodsInfo.less'
const {Column, ColumnGroup} = Table;

class GoodsInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    category(){
        category({
            parentId:0
        },(res) =>{
            console.log('列表',res)
        })
    }
    componentDidMount(){
        this.category()
    }
    render() {
        const columns = [
            {
                title: '分类名称',
                dataIndex: 'name'
            },
            {
                title: '操作',
                width:300,
                render:(text =>(
                    <div className='lineInfo'>
                        <Button type = "primary">修改分类</Button>
                        <Button type = "primary" className='buttonstyle'>查看子分类</Button>
                    </div>
                ))
            },
        ];

        const data = [
            {
                key: '1',
                name: 'John Brown',
                money: '￥300,000.00',
                address: 'New York No. 1 Lake Park',
            },
            {
                key: '2',
                name: 'Jim Green',
                money: '￥1,256,000.00',
                address: 'London No. 1 Lake Park',
            },
            {
                key: '3',
                name: 'Joe Black',
                money: '￥120,000.00',
                address: 'Sidney No. 1 Lake Park',
            },
        ];
        const extra = (
            <Button type='primary' onClick={this.showAdd}>
                <PlusOutlined/>添加
            </Button>
        )
        return (
            <div className='goodsInfo'>
                <Card title="一级分类列表" extra={extra}>
                    <div className="table">
                        <Table
                            columns={columns}
                            dataSource={data}
                            bordered
                        />,
                    </div>
                </Card>

            </div>
        );
    }
}

export default GoodsInfo;
