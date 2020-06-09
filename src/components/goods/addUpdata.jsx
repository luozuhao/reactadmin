import React, {Component,createRef} from 'react';
import {Card, Table, Button, Select, Input,Form,Cascader} from 'antd';
import UploadImg from './upload'
import TextEditor from './text-editor'
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import './addproduct.less'
const {Option} = Select
const { TextArea } = Input;
class AddUpdata extends Component {
    constructor(props){
        super(props)
        this.state = {
            options:[
                {
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    children: [
                        {
                            value: 'hangzhou',
                            label: 'Hangzhou',
                            children: [
                                {
                                    value: 'xihu',
                                    label: 'West Lake',
                                },
                            ],
                        },
                    ],
                },
                {
                    value: 'jiangsu',
                    label: 'Jiangsu',
                    children: [
                        {
                            value: 'nanjing',
                            label: 'Nanjing',
                            children: [
                                {
                                    value: 'zhonghuamen',
                                    label: 'Zhong Hua Men',
                                },
                            ],
                        },
                    ],
                },
            ]

        }
        this.editor = createRef()
    }
    onChange = ()=>{
        console.log('改变')
    }
    onFinish = (value)=>{
        console.log("value",value);
        const detail = this.editor.current.getDetail()
        console.log('editor',detail);
    }
    price = (rule, value) =>{
        return new Promise((resolve, reject)=>{
            let price = parseFloat(value)
            if (price > 0) {
                if (value.indexOf('.') > -1 ){
                    let priceArr = value.slice(value.indexOf('.')+1)
                    console.log('priceArr',priceArr);
                    if (priceArr.length >2){
                        reject('价格只能填写大于0，并且小数点小于2位数')
                    }
                }
                if (value.slice(0,1) === 0) {
                    reject('价格只能填写大于0，并且小数点小于2位数')
                }
                resolve()
            }else{
                reject('价格只能填写大于0，并且小数点小于2位数')
            }
            resolve()
        })
    }
    render() {
        const title = (
            <div>
                <ArrowLeftOutlined className = "arrowIcon"/>
                添加商品
            </div>
        )
        return (
            <div className='addproduct'>
                <Card  title={title} >
                    <Form name="control-ref" onFinish={this.onFinish}>
                        <Form.Item
                            name="name"
                            label="商品名称"
                            rules={[
                                {
                                    required: true,
                                    message: "请输入商品名称"
                                },
                            ]}
                        >
                            <Input placeholder = '请输入商品名称' />
                        </Form.Item>
                        <Form.Item
                            name="describe"
                            label="商品描述"
                            rules={[
                                {
                                    required: true,
                                    message:'请输入商品描述'
                                },
                            ]}
                        >
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item
                            name="price"
                            label="商品价格"
                            validateFirst = 'true'
                            rules={[
                                {
                                    required: true,
                                    message:'请输入商品价格'
                                },
                                {
                                    validator:this.price
                                }
                            ]}
                        >
                            <Input type='number' placeholder='请输入商品价格' addonAfter='元'/>
                        </Form.Item>
                        <Form.Item
                            name="sort"
                            label="商品分类"
                            rules={[
                                {
                                    required: true,
                                    message: '必须指定商品分类'
                                },
                            ]}
                        >
                            <Cascader options={this.state.options} onChange={this.onChange} placeholder="Please select" />
                        </Form.Item>
                        <Form.Item
                            label="商品图片"
                        >
                            <UploadImg></UploadImg>
                        </Form.Item>
                        <Form.Item
                            label="商品详情"

                        >
                            <TextEditor ref={ this.editor}></TextEditor>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                提交
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default AddUpdata;
