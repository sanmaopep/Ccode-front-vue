<template>
    <div>
        <section class="ui container mt20">
			<div class="ui segment">
				<h2 class="ui header tac normal-fw" style="margin-bottom: 30px;">用时分析</h2>
				<div class="ui two column grid" style="height: 400px;">
					<div class="column" id="lanChart"></div>
                    <div class="column" id="ideChart"></div>
                    <!--<div class="column" id="dateChart"></div>-->
				</div>
                <div class="ui one column grid" style="height: 400px;">
                    <div class="column" id="dateChart"></div>
				</div>
                <div class="ui one column grid" style="height: 400px;">
                    <div class="column" id="halfYearChart"></div>
				</div>
			</div>
		</section>
		<!--<section class="ui container mt20">
			<div class="ui segment">
				<h2 class="ui header tac normal-fw">编程语言用时</h2>
				<div class="ui five statistics">
					<div class="statistic" v-for="(item,index) in lanTimeList">
						<div class="label">	{{ item.name }}</div>
						<div class="value" style="font-size: 3rem;">{{ item.time }}</div>
					</div>
				</div>
			</div>
		</section>
		<section class="ui container mt20">
			<div class="ui segment">
				<h2 class="ui header tac normal-fw">IDE用时</h2>
				<div class="ui five statistics">
					<div class="statistic" v-for="(item,index) in lanIDEList">
						<div class="label">{{item.name}}</div>
						<div class="value" style="font-size: 3rem;">{{item.time}}</div>
					</div>
				</div>
			</div>
		</section>

		<section class="ui container mt20">
			<div class="ui segment">
				<h2 class="ui header tac normal-fw">近日编程用时</h2>
				<div class="ui five statistics">
					<div class="statistic" v-for="(item,index) in lanDateList">
						<div class="label">{{item.name}}</div>
						<div class="value" style="font-size: 3rem;">{{item.time}}</div>
					</div>
				</div>
			</div>
		</section>-->
    </div>
</template>
<script>
    import assessment from '../../services/assessment.js'
    import echarts from 'echarts'
    import Util from '../../services/util.js'

    export default {
        props: ['mID'],
        data() {
            return {
                lanTimeList: [],
                lanIDEList: [],
                lanDateList: [],
                lanHalfYearList: []
            };
        },
        mounted() {
            let self = this;
            self.loadTopLan();
            self.loadTopIDE();
            self.loadFiveDays();
            self.loadHalfYear();

            // let lanChart = echarts.init(document.getElementById("lanChart"));
        },
        methods: {
            // 获取top语言
            loadTopLan() {
                let self = this;
                assessment.getLan(self.mID).then((data) => {
                    // 获取成功
                    self.lanTimeList = data;
                    // 绘制图表
                    let lanChart = echarts.init(document.getElementById("lanChart"));

                    lanChart.setOption({
                        title: {
                            text: '语言种类',
                            left: 'center'
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: (params) => {
                                let time = self.lanTimeList[params.dataIndex].time;
                                return params.name + ":" + time;
                            }
                        },
                        series: [{
                            name: '语言种类',
                            type: 'pie',
                            radius: '55%',
                            data: self.lanTimeList
                        }]
                    });


                }, () => {
                    // 失败
                });
            },
            //获取topIDE
            loadTopIDE() {
                let self = this;
                assessment.getIDE(self.mID).then((data) => {
                    // 获取成功
                    self.lanIDEList = data;
                    console.log(data);

                    // 绘制图表
                    let ideChart = echarts.init(document.getElementById("ideChart"));

                    ideChart.setOption({
                        title: {
                            text: '使用IDE',
                            left: 'center'
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: (params) => {
                                let time = self.lanIDEList[params.dataIndex].time;
                                return params.name + ":" + time;
                            }
                        },
                        series: [{
                            name: '使用IDE',
                            type: 'pie',
                            radius: '55%',
                            data: self.lanIDEList
                        }]
                    });

                }, () => {
                    // 失败

                });
            },
            //获取最近五天
            loadFiveDays() {
                let self = this;
                assessment.getFiveDays(self.mID).then((data) => {
                    // 获取成功
                    self.lanDateList = data;

                    // 绘制图表
                    let dateChart = echarts.init(document.getElementById("dateChart"));

                    dateChart.setOption({
                        title: {
                            text: '最近用时(min)',
                            left: 'center'
                        },
                        xAxis: {
                            data: self.lanDateList.map(function(item) {
                                return item.name;
                            })
                        },
                        yAxis: {
                            splitLine: {
                                show: false
                            }
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: (params) => {
                                let time = self.lanDateList[params.dataIndex].time;
                                return params.name + " : " + time;
                            }
                        },
                        series: [{
                            name: '每日用时',
                            type: 'line',
                            data: self.lanDateList
                        }]
                    });

                }, () => {
                    // 失败
                });
            },
            //获取半年的热度
            loadHalfYear() {
                let self = this;
                assessment.getHalfYear(self.mID).then((data) => {
                    // 获取成功
                    self.lanHalfYearList = data;
                    // 绘制图表
                    let dateChart = echarts.init(document.getElementById("halfYearChart"));
                    let WeekArray = ['Sat', 'Fri', 'Thur', 'Wed', 'Tue', 'Mon', 'Sun'];
                    let WeekIndexArray = [];
                    const weekNum = 30;
                    let todayMonth = new Date().getMonth();
                    let monthIndex = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    for (let i = 1; i <= weekNum; i++) {
                        if ((30 - i) % 4 === 1) {
                            let monthNum = todayMonth - Math.floor((30 - i) / 4);
                            while (monthNum < 0) {
                                monthNum += 12;
                            }
                            WeekIndexArray.push(monthIndex[monthNum]);
                        } else {
                            WeekIndexArray.push("");
                        }

                    }

                    let chartData = Util.decodeCordinateArrayOfDate(self.lanHalfYearList, weekNum);
                    chartData.unshift([29, 0, 0]);
                    chartData.unshift([0, 0, 0]);


                    dateChart.setOption({
                        title: {
                            text: '半年活跃度分布',
                            left: 'center'
                        },
                        grid: {
                            height: '50%',
                            y: '10%'
                        },
                        xAxis: {
                            type: 'category',
                            data: WeekIndexArray,
                            boundaryGap: true,
                            axisLabel: {
                                interval: 0
                            },
                            splitArea: {
                                show: false
                            },
                            splitLine: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'category',
                            data: WeekArray,
                            axisLabel: {
                                interval: 0
                            },
                            splitArea: {
                                show: false
                            },
                            splitLine: {
                                show: true
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        },
                        tooltip: {
                            position: 'top',
                            formatter: (params) => {
                                let time = chartData[params.dataIndex].label.time;
                                return chartData[params.dataIndex].label.name + " : " + time;
                            }
                        },
                        visualMap: {
                            pieces: [{
                                min: 200,
                                label: 'Most'
                            }, {
                                min: 150,
                                max: 200,
                                label: 'More'
                            }, {
                                min: 100,
                                max: 150,
                                label: 'Mid'
                            }, {
                                min: 50,
                                max: 100,
                                label: 'Less'
                            }, {
                                min: 1,
                                max: 50,
                                label: 'Least'
                            }],
                            type: 'piecewise',
                            orient: 'horizontal',
                            color: ["#34495E", "#A4E4D7"],
                            left: 'center',
                            bottom: '15%',
                            padding: [5, 10]
                        },
                        series: [{
                            type: 'heatmap',
                            data: chartData,
                            label: {
                                normal: {
                                    show: false
                                }
                            },
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }]
                    });

                }, () => {
                    // 失败
                });
            }
        }
    }
</script>