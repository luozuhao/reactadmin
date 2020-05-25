import React, {Component} from 'react'
// import emitter from '../../util/events'

class Barrner extends Component {
    constructor(props){
        super(props)
        this.state = {
            message:'barrner组件的数据'
        }
    }
    changeSwiper() {
        // emitter.emit('changeS',this.state.message)
    }
    render() {
        return (
            <div>
                    bar
                <button onClick={this.changeSwiper.bind(this)}>点击改变swiper 组件的message数据</button>
            </div>
        );
    }
}

export default Barrner;
