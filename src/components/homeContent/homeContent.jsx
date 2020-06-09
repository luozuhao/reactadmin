import React, {Component} from 'react';
import echarts from 'echarts'
import './homeContent.less'

class HomeContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: '2020年6月1-11时13分2秒',
            yearData: [
                {
                    year: '2020',  // 年份
                    data: [  // 两个数组是因为有两条线
                        [24, 40, 101, 120, 230, 210, 120],
                        [40, 64, 310, 213, 180, 200, 180]
                    ]
                },
                {
                    year: '2021',  // 年份
                    data: [  // 两个数组是因为有两条线
                        [123, 67, 98, 43, 64, 76, 38],
                        [143, 165, 123, 178, 21, 82, 34]
                    ]
                }
            ],
            initData: [
                [120, 132, 101, 134, 90, 230, 210],
                [220, 182, 191, 234, 290, 330, 310]
            ]
        }
    }

    getTimes = () => {
        let date = new Date()
        let Year = date.getFullYear()
        let Month = date.getMonth() + 1
        let day = date.getDate()
        let Hours = date.getHours()
        let Minutes = date.getMinutes()
        let Seconds = date.getSeconds()
        let times = `${Year}年${Month}月${day}-${Hours}时${Minutes}分${Seconds}秒`
        this.setState({
            time: times
        })
        console.log('定时器')
        this.Timer = setTimeout(this.getTimes, 1000)
    }
    employmentChart = () => {

// 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.querySelector('.bar .chart'));
// 绘制图表
        let option = {
            color: [' #2f89cf'],
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    // 坐标轴指示器，坐标轴触发有效
                    type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            xAxis: {
                type: 'category',
                data: [
                    "旅游行业",
                    "教育培训",
                    "游戏行业",
                    "医疗行业",
                    "电商行业",
                    "社交行业",
                    "金融行业"
                ],
                axisLabel: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: "12"
                },
                axisLine: {
                    show: false
                }
            },
            grid: {
                left: "0%",
                top: "10px",
                right: "0%",
                bottom: "4%",
                containLabel: true
            },
            yAxis: {
                axisLabel: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: "12"
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        // width: 1,
                        // type: "solid"
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            },
            series: [{
                name: '访问量',
                type: 'bar',
                data: [200, 300, 300, 900, 1500, 1200, 600],
                barWidth: '40%',
                itemStyle: {
                    barBorderRadius: 5
                }
            }]
        }
        myChart.setOption(option);
    }
    skillsChart = () => {

// 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.querySelector('.bar1 .chart'));
        let data = [70, 34, 60, 78, 69];
        let titlename = ["HTML5", "CSS3", "javascript", "VUE", "NODE"];
        let valdata = [702, 350, 610, 793, 664];
        let myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
        let option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                top: "10%",
                left: "3%",
                right: "4%",
                bottom: "3%",
                show: true,
                borderColor: "#012f4a",
                containLabel: true
            },
            xAxis: {
                show: false
            },
            yAxis: [
                {
                    type: 'category',
                    inverse: true,
                    data: titlename,
                    axisLabel: {
                        color: 'rgba(255,255,255,.6)',
                        fontSize: "12"
                    }
                },
                {
                    type: 'category',
                    inverse: true,
                    data: valdata,
                    axisLabel: {
                        color: 'rgba(255,255,255,.6)',
                        fontSize: "12"
                    }
                }
            ],
            series: [
                {
                    name: '条',
                    type: 'bar',
                    data: data,
                    yAxisIndex: 0,
                    itemStyle: {
                        barBorderRadius: 5,
                        color: function (params) {
                            return myColor[params.dataIndex]
                        }
                    },
                    barWidth: 15,
                    barCategoryGap: 30,
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '{c}%',
                        fontSize: 10
                    }
                },
                {
                    name: '条',
                    type: 'bar',
                    yAxisIndex: 1,
                    data: [100, 100, 100, 100, 100],
                    itemStyle: {
                        barBorderRadius: 5,
                        color: 'none',
                        borderColor: "#00c1de",
                        borderWidth: 3,
                    },
                    barWidth: 15,
                    barCategoryGap: 30,
                }
            ]
        };
        myChart.setOption(option);
    }
    lineChart = () => {

        let myChart = echarts.init(document.querySelector('.line .chart'))
        let option = {
            color: ["#00f2f1", "#ed3f35"],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                textStyle: {
                    color: "#fff",
                    fontSize: '10'
                }
            },
            grid: {
                left: '1%',
                right: '4%',
                bottom: '1%',
                top: '35',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                axisLabel: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: "12"
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: "12"
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            },
            series: [
                {
                    name: '新增粉丝',
                    type: 'line',
                    data: this.state.initData[0],
                    smooth: true
                },
                {
                    name: '新增游客',
                    type: 'line',
                    data: this.state.initData[1],
                    smooth: true
                }
            ]
        };
        myChart.setOption(option)

    }
    tabData = async (index, e) => {
        let initD = this.state.yearData[index].data
        await this.setState({
            initData: initD
        })
        this.lineChart()
    }
    linePileChart = () => {
        let myChart = echarts.init(document.querySelector('.line1 .chart'))
        let option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['播放量', '转发量'],
                textStyle: {
                    color: 'rgba(255,255,255,.7)',
                    fontSize: '10'
                }
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top:'19%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data:  [ "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17",
                        "18","19","20","21","22","23","24","25","26","26","28","29","30"],
                    axisLabel: {
                        color: '#fff',
                        fontSize: '12'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        color: '#fff',
                        fontSize: '12'
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,.1)'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,.1)'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '播放量',
                    type: 'line',
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    },
                    lineStyle: {
                        color: '#0184d5',
                    },
                    smooth: true,
                    data: [ 80, 40, 40, 90,20, 40, 90,100,50, 70, 90,
                        40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 20,60,50, 40],
                    symbol:'circle',
                    symbolSize: 5,
                    itemStyle: {
                        color: "#0184d5",
                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    },
                    showSymbol: false,
                },
                {
                    name: '转发量',
                    type: 'line',
                    lineStyle: {
                        normal: {
                            color: "#00d887",
                            width: 2
                        }
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    },
                    smooth: true,
                    symbol:'circle',
                    symbolSize: 5,
                    itemStyle: {
                        color: "#00d887",
                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    },
                    showSymbol: false,
                    data:[ 130, 10, 20, 40,30, 40, 80,60,20, 40, 90, 40,20,
                        140,30, 40, 130,20,20, 40, 80, 70, 30, 40,30, 120, 20,99,50, 20]
                }
            ]
        };
        myChart.setOption(option)
    }
    pieChart = ()=>{
        let myChart = echarts.init(document.querySelector('.pie .chart'))
        let option = {
            color: [
                "#065aab",
                "#066eab",
                "#0682ab",
                "#0696ab",
                "#06a0ab",
            ],
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'horizontal',
                bottom:'0%',
                data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
                textStyle:{
                    color:'rgba(255,255,255,.5)',
                    fontSize:'12'
                },
                itemWidth: 10,
                itemHeight: 10,
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    center: ["50%", "35%"],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center',
                        fontSize:'12'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '18',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 1, name: "0岁以下" },
                        { value: 4, name: "20-29岁" },
                        { value: 2, name: "30-39岁" },
                        { value: 2, name: "40-49岁" },
                        { value: 1, name: "50岁以上" }
                    ]
                }
            ]
        };
        myChart.setOption(option)
    }
    pieRangChart = () =>{
        let myChart = echarts.init(document.querySelector('.pie1 .chart'))
        let option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                left: 'center',
                top: 'bottom',
                data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            series: [
                {
                    name: '面积模式',
                    type: 'pie',
                    radius: [30, 110],
                    center: ['75%', '50%'],
                    roseType: 'area',
                    data: [
                        {value: 10, name: 'rose1'},
                        {value: 5, name: 'rose2'},
                        {value: 15, name: 'rose3'},
                        {value: 25, name: 'rose4'},
                        {value: 20, name: 'rose5'},
                        {value: 35, name: 'rose6'},
                        {value: 30, name: 'rose7'},
                        {value: 40, name: 'rose8'}
                    ]
                }
            ]
        }
        myChart.setOption(option)
    }
    initOption = () => {
        this.getTimes()
        this.skillsChart()
        this.employmentChart()
        this.lineChart()
        this.linePileChart()
        this.pieChart()
        this.pieRangChart()
    }

    componentDidMount() {
        this.initOption()
    }

    componentWillUnmount() {
        clearTimeout(this.Timer)
    }

    render() {
        return (
            <div className='home'>
                <header>
                    <h1>可视化展板-ECharts</h1>
                    <div className="showTime">当前时间：{this.state.time}</div>
                </header>
                <section className="mainbox">
                    <div className="column">
                        <div className="panel bar">
                            <h2>
                                柱状图-就业行业
                                <span>2019</span>
                                <span>2020</span>
                            </h2>
                            <div className="chart"></div>
                            <div className="panel-footer"></div>
                        </div>
                        <div className="panel line">
                            <h2 className='lineH2'>
                                折线图-人员变化
                                <span>
                                   {
                                       [2019, 2020].map((item, index) => {
                                           return (
                                               <span
                                                   onClick={(e) => {
                                                       this.tabData(index, e)
                                                   }}
                                                   key={index}
                                               >{item}
                                               </span>
                                           )
                                       })
                                   }
                               </span>
                            </h2>
                            <div className="chart"></div>
                            <div className="panel-footer"></div>
                        </div>
                        <div className="panel pie">
                            <h2>饼形图-年龄分布</h2>
                            <div className="chart"></div>
                            <div className="panel-footer"></div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="no">
                            <div className="no-hd">
                                <ul>
                                    <li>125811</li>
                                    <li>104563</li>
                                </ul>
                            </div>
                            <div className="no-bd">
                                <ul>
                                    <li>前端需求人数</li>
                                    <li>市场供应人数</li>
                                </ul>
                            </div>
                        </div>
                        <div className="map">
                            <div className="chart"></div>
                            <div className="map1"></div>
                            <div className="map2"></div>
                            <div className="map3"></div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="panel bar1">
                            <h2>柱状图-技能掌握</h2>
                            <div className="chart"></div>
                            <div className="panel-footer"></div>
                        </div>
                        <div className="panel line1">
                            <h2>折线图-播放量</h2>
                            <div className="chart"></div>
                            <div className="panel-footer"></div>
                        </div>
                        <div className="panel pie1">
                            <h2>饼形图-地区分布</h2>
                            <div className="chart"></div>
                            <div className="panel-footer"></div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default HomeContent;
