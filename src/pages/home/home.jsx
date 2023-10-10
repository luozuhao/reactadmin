import React, {Component, createRef} from 'react';
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Swiper, Barrner} from '../../components/comIndex'
import {add, redument, redumentAysync} from '../../redux/actions/cart'
import {setNum} from '../../redux/actions/order'
import './home.css'
import {todos} from '../../api/home'
import {Button, Pagination} from 'antd'

class Home extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            value:'默认值',
            num: 0,
            age: 12,
            info: {
                name: 'woshi',
                age: 23
            },
            infoData: '',
            userId: '12',
            active: 0,
            todos: [
                {
                    id: 1,
                    name: 'luo'
                },
                {
                    id: 2,
                    name: 'zu'
                },
                {
                    id: 3,
                    name: 'hao'
                }
            ],
            element: '<div>wooshi <icon>标题</icon></div>>',
            isShow: true,
            isSButton: 'button'
        }
        this.inputDom = createRef()
        console.log("挂载")
    }

    toMind(option, event) {
        console.log('options', option)
        console.log('event', event)
        this.setState({
            num: 333
        })
    }

    getTodos() {
        todos((data) => {
            console.log('todos数据', data)
        })
    }

    keyupClick(e) {
        console.log('e', e.keyCode)
        console.log('ref', this.inputDom.current)
    }

    getChildData = (data) => {
        console.log('子组件数据', data)
        this.setState({
            infoData: data
        })
    }

    toOrderW() {
        this.props.history.push({
            pathname: `/order/${this.state.userId}`,
            query: {
                name: 'luozuhao',
                age: '23'
            },
            search: '?keyword = "sdf',
            state: {
                name: 'luo',
                age: 13
            }
        })
    }

    toLogin() {

    }

    renderButton() {
        const isShow = this.state.isShow;
        if (isShow) {
            return (<div>组件一</div>);
        }
        else {
            return (<div>组件二</div>);
        }
    }
    onSubmit(e){
        e.preventDefault()
        console.log('canshu',e)
    }
    onChange = (e) =>{
        e.preventDefault()
        this.setState({
            value:e.target.value
        })
    }
    render() {
        const isShow = this.state.isShow ? <div>组件一ffff</div> : <div>组件二</div>
        return (
            <div>
                {

                    this.state.isShow ? <Button type="primary">button</Button> : ""

                }
                {
                    this.state.isShow && <div>&&运算符渲染</div>
                }
                {
                    todos.length > 0 ? <div>宣言数据</div> : <div>数据加载中</div>

                }
                {
                    isShow
                }
                {
                    this.renderButton()
                }
                <div className='form'>
                    <form onSubmit={this.onSubmit}>
                        <input type="text" value={this.state.value} onChange={this.onChange}/>
                        <input type="submit" value='提交'/>
                    </form>
                </div>
                <Pagination showQuickJumper defaultCurrent={2} total={500}/>
                <div className='keyup'>
                    <input type="text" onKeyUp={this.keyupClick.bind(this)} ref={this.inputDom}/>
                </div>
                `
                home---{this.state.num}
                age ----{this.state.age}
                <div onClick={this.toMind.bind(this, this.state.age)}>点 击</div>
                <div>
                    <Swiper
                        info={this.state.info}
                        fun={this.getChildData}
                    >
                    </Swiper>
                    <Barrner></Barrner>
                </div>
                <div>
                    {this.props.children}
                </div>
                <div className='ele'>
                    <div dangerouslySetInnerHTML={{__html: this.state.element}}></div>
                </div>
                <div>
                    {this.state.infoData}login
                </div>
                <div className="toOrder">
                    <Link to={
                        {
                            pathname: `/order/${this.state.userId}`,
                            query: JSON.stringify(this.state.info),
                            search: '?name = "luozuha"&keyword = "111"',
                            state: {
                                data: "这是传递参数数据"
                            }
                        }
                    }>
                        orderLink
                    </Link>
                </div>
                <div className='toOrderR' onClick={this.toOrderW.bind(this)}>
                    toOrder
                </div>
                <div>
                    <Link to='/login?keyword="ss"&name = "我是谁"'>toLoginLink</Link>
                </div>
                <div className='toLogin' onClick={this.toLogin.bind(this)}>
                    toLogin
                </div>

                <div className='yangshi'>
                    <ol>
                        <li style={{color: "#000", fontSize: '20px'}}>内联样式</li>
                    </ol>
                    <ol>
                        <li className='classN classM'>className样式</li>
                    </ol>
                    <ol>
                        <li className={`conCla ${this.state.active === 0 ? 'classM' : ""}`}>动态修改样式</li>
                    </ol>
                </div>
                <div className='cList'></div>
                <div className='forItem'>
                    {
                        this.state.todos.map((item, index) => {
                            return <div key={item.id}>
                                <ul>
                                    <li>{item.id}</li>
                                    <li>{index}</li>
                                </ul>
                            </div>
                        })}
                </div>
            </div>
        );
    }

    componentDidMount() {
        console.log('dom挂载完成')
        this.getTodos()
        this.props.add(1)
        console.log('homeProps', this.props)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('组件更新之前调用', prevState)
        return "111"
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('prevProps', snapshot);
    }

    componentWillUnmount() {
        console.log('组件销毁')
    }
}

Home.defalutProps = {}
Home.propTypes = {
    info: PropTypes.object
}
const mapStateToProps = (state) => {
    console.log('mapstate', state)
    return {
        cartList: state.cart,
        orderList: state.order
    }
}
// const mapDispatchToProps = (dispatch)=>{
//     return {
//         add:(id)=>{dispatch(add(id))},
//         redument:(id) =>{dispatch(redument(id))},
//         setNum:()=>{dispatch(setNum())}
//     }
// }
const mapDispatchToProps = {
    add,
    redument,
    setNum,
    redumentAysync
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
