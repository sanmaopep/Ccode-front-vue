<template>
	<div class="inline field" id="startTime">
		<label class="normal-fw fz16 w100">开始日期</label>
		<select class="time-select" v-model="year" @change="yearChange">
			<option v-for="option in yearOption" :value="option">
				{{ option }}
			</option>
		</select>
		<span class="time-select-word">年</span>
		<select class="time-select" v-model="month" @change="monthChange">
			<option v-for="option in monthOption" :value="option">
				{{ option }}
			</option>
		</select>
		<span class="time-select-word">月</span>
		<select class="time-select day" v-model="day" @change="dayChange">
			<option v-for="option in dayOption" :value="option">
				{{ option }}
			</option>
		</select>
		<span class="time-select-word">日</span>
	</div>
</template>

<script>
    let data = {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate(),
        yearOption: [],
        monthOption: [],
        dayOption: [],
        beginYear: new Date().getFullYear(),
        beginMonth: new Date().getMonth() + 1,
        beginDay: new Date().getDate()
    }
    data.value = data.year + '-' + data.month + '-' + data.day + ' 00:00:00';

    /////////
    //init //
    /////////
    for (let i = 0; i < 10; i++) {
        data.yearOption.push(data.beginYear + i);
    }
    renderMonth();
    renderDay();

    ////////////////////////
    //RenderMonth and Day //
    ////////////////////////
    function renderMonth() {
        data.monthOption = [];
        let start = 1;

        if (data.year === data.beginYear) {
            start = data.beginMonth;
        }

        for (let i = start; i < 13; i++) {
            data.monthOption.push(i);
        }
        data.month = start;
    }

    function renderDay() {
        data.dayOption = [];
        let start = 1;
        let end = 30;

        //判断是不是开始的年开始的月
        if (data.year === data.beginYear && data.month === data.beginMonth) {
            start = data.beginDay;
        }
        //获取选择月的日子上限
        end = getDayByMonthYear(data.month, data.year);

        for (let i = start; i < end + 1; i++) {
            data.dayOption.push(i);
        }
        data.day = start;
    }



    /* Utils */
    //是否是闰年
    function Isrunnian(year) {
        if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) return 1;
        else return 0;
    }

    //根据month和year获取一个月有几天
    function getDayByMonthYear(month, year) {
        var monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (Isrunnian(year) && month == 2) {
            return 29;
        } else {
            return monthDay[month - 1];
        }
    }

    // 输出
    export default {
        // props:['value'],
        data() {
            return data;
        },
        // TODO 用mount启动emit会被后来的value给覆盖
        created() {
            data.value = data.year + '-' + data.month + '-' + data.day + ' 00:00:00';
            this.$emit('input', data.value);
        },
        methods: {
            yearChange() {
                // 如果是当前日期
                renderMonth();
                renderDay();
                data.value = data.year + '-' + data.month + '-' + data.day + ' 00:00:00';
                this.$emit('input', data.value);
            },
            monthChange() {
                renderDay();
                data.value = data.year + '-' + data.month + '-' + data.day + ' 00:00:00';
                this.$emit('input', data.value);
            },
            dayChange() {
                data.value = data.year + '-' + data.month + '-' + data.day + ' 00:00:00';
                this.$emit('input', data.value);
            }
        }
    }
</script>

<style>

</style>