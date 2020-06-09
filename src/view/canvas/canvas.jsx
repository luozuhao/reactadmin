import React, {Component} from 'react';
import './canvas.less'
import imgBg from './bg.jpg'
import image from './head.jpg'
class Canvas extends Component {
    constructor(props){
        super(props)
        this.state = {
            canvasW:0,
            canvasH:0
        }
    }
    getClient = ()=>{
        let windowW = document.body.clientWidth
        let clientW = document.documentElement.clientWidth
        let windowH = document.body.clientHeight
        let clientH = document.documentElement.clientHeight
        let clientWidth = Math.max(windowW,clientW)
        let clientHeight = Math.max(windowH,clientH)
        this.setState({
            canvasW:clientWidth,
            canvasH:clientHeight
        })
        console.log(windowW,clientW,windowH,clientH)
    }
    canvasShould = async ()=>{
        await this.getClient()
        let canvas = document.getElementById('canvas')
        let ctx = canvas.getContext('2d')
        let img = new Image()
        img.src = imgBg
        img.onload = ()=>{
            ctx.drawImage(img,0,0,this.state.canvasW,this.state.canvasH)
            let img2 = new Image()
                img2.src = image
            img2.onload = ()=>{
                ctx.save()
                let arcX = this.state.canvasW/2
                let arcY = 50
                let arc = 40
                ctx.arc(arcX,arcY,arc,0,2*Math.PI)
                ctx.clip()
                ctx.drawImage(img2,arcX-40,10,80,80)
                ctx.restore();
                ctx.fillStyle ='#FFFFFF';               //前面是设置文字 属性设为居中
                ctx.fillText("你叫神马名字",75,220);     //文字 这里是写死的 实际中多传个参数就ok
            }
        }
    }
    componentDidMount(){
        this.canvasShould()
    }
    render() {
        return (
            <div className = 'canvasCont'>
                    <canvas id='canvas'
                            width={this.state.canvasW}
                            height={this.state.canvasH}
                    >
                    </canvas>
            </div>
        );
    }
}

export default Canvas;
