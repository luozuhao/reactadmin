import React, {Component} from 'react';
// import emitter from '../../util/events'
class Swiper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inf:'woshishui',
            childData:'子组件数据',
            msg:'swiper数据'
        }
    }
    getSwiperProps = ()=>{
        // emitter.addListener('changeS',(data) =>{
        //     console.log('changS',data);
        // })
    }
    componentDidMount(){
        // this.getSwiperProps()
    }
    componentWillUnmount(){
        // emitter.removeListener(this.getSwiperProps)
    }
    render() {
        return (
            <div className='swiper'>
                swiper 组件内容
                {this.props.info.name}
                <div>
                    <button onClick={this.props.fun.bind(this,this.state.childData)}>点击发送子组件数据给父组件</button>
                </div>
                <div>{this.state.msg}</div>
            </div>
        );
    }
}
Swiper.defaultProps = {
    name:'xie'

}
export default Swiper;
