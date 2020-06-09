import React, {Component} from 'react';
import {Upload, Modal,message} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {reqDeleteImg} from '../../api/home'

class UploadImg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            previewVisible: false,
            previewImage: '',
            previewTitle: '',
            fileList: []
        }
    }

    getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
    handleCancel = () => {
        console.log('上传')
        this.setState({previewVisible: false});
    }

    handlePreview = async file => {
        console.log('file', file);
        if (!file.url && !file.preview) {
            file.preview = await this.getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };
    getImageList = ()=>{
        
    }
    handleChange = ({file, fileList}) => {

        // 一旦上传成功, 将当前上传的file的信息修正(name, url)
        if (file.status === 'done') {
            const result = file.response  // {status: 0, data: {name: 'xxx.jpg', url: '图片地址'}}
            if (result.status === 0) {
                message.success('上传图片成功!')
                const {name, url} = result.data
                file = fileList[fileList.length - 1]
                file.name = name
                file.url = url

            } else {
                message.error('上传图片失败')
            }
        } else if (file.status === 'removed') { // 删除图片
            console.log('fileList', file)
            reqDeleteImg({
                name: file.name
            }, (result) => {
                if (result.data.status === 0) {
                    message.success('删除图片成功!')
                } else {
                    message.error('删除图片失败!')
                }
            })

        }
        this.setState({fileList})

    };

    render() {
        const {previewVisible, previewImage, fileList, previewTitle} = this.state;
        console.log('previewTitle', previewTitle);
        const uploadButton = (
            <div>
                <PlusOutlined/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div className="clearfix">
                <Upload
                    action="/manage/img/upload"
                    accept='image/*'  /*只接收图片格式*/
                    name='image' /*请求参数名*/
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    onCancel={this.handleCancel}
                >
                    <img alt="example" style={{width: '100%'}} src={previewImage}/>
                </Modal>
            </div>
        )
    }
}

export default UploadImg;
