import React, {Component} from 'react';

class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Id:''
        }
    }
    componentDidMount(){
        console.log("order",this.props)
    }
    render() {
        return (
            <div>
                order 页面 commmit fff
                <div>

                </div>
            </div>

        );
    }
}

export default Order;
