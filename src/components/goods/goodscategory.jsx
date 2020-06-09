import React, {Component} from 'react';
import {Card, Table, Button, Select, Input} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import './goodscategory.less'
import {product} from '../../api/home'
const {Option} = Select;

class Goodscategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchName: '',
            products:[],
            pageNum:2,
            pageSize:10
        }
    }

    handleChange = (value) => {
        console.log('value', value)
    }
    onChange = (event) => {
        console.log(event.target.value)
    }
    getProduct(){
        const {pageNum ,pageSize} = this.state
        product({
            pageNum:pageNum,
            pageSize:pageSize
        },(res)=>{
            console.log('商品列表',res)
        })
    }
    initColumns = () => {
        this.columns = [
            {
                title: '商品名称',
                dataIndex: 'name',
            },
            {
                title: '商品描述',
                dataIndex: 'desc',
            },
            {
                title: '价格',
                dataIndex: 'price',
                render: (price) => '¥' + price  // 当前指定了对应的属性, 传入的是对应的属性值
            },
            {
                width: 100,
                title: '状态',
                // dataIndex: 'status',
            },
            {
                width: 100,
                title: '操作'
            },
        ];
    }
    addproduct = ()=>{
        this.props.history.push({
            pathname:'/home/goods/addupdata'
        })
    }
    onFinish = ()=>{
        console.log('完成')
    }
    componentDidMount() {
        this.getProduct()
    }

    render() {
        this.initColumns()
        const title = (
            <div>
                <Select defaultValue="按名称搜索" style={{width: 150}} onChange={this.handleChange}>
                    <Option value="productName">按名称搜索</Option>
                    <Option value="productDesc">按描述搜索</Option>
                </Select>
                <Input
                    placeholder='关键字'
                    style={{width: 150, margin: '0 15px'}}
                    onChange={this.onChange}
                />
                <Button type='primary'>搜索</Button>
            </div>
        )
        const extra = (
            <Button type='primary' onClick={this.addproduct}>
                <PlusOutlined/>
                添加商品
            </Button>
        )
        return (
            <div className='product'>
                <Card title={title} extra={extra} >
                    <div className="table" >
                        <Table
                            columns={this.columns}
                            dataSource={this.state.products}
                            bordered
                        />
                    </div>
                </Card>
            </div>
        );
    }
}

export default Goodscategory;
