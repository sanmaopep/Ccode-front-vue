<template>
	<div class="inline field" id="startTime">
		<label class="normal-fw fz16 w100">{{ label }}</label>
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
        props: ['value', 'label'],
        data() {
            return {
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
        },
        // TODO 用mount启动emit会被后来的value给覆盖
        created() {
            this.value = this.year + '-' + this.month + '-' + this.day + ' 00:00:00';
            this.$emit('input', this.value);

            /////////
            //init //
            /////////
            for (let i = 0; i < 10; i++) {
                this.yearOption.push(this.beginYear + i);
            }
            this.renderMonth();
            this.renderDay();
        },
        methods: {
            yearChange() {
                // 如果是当前日期
                this.renderMonth();
                this.renderDay();
                this.value = this.year + '-' + this.month + '-' + this.day + ' 00:00:00';
                this.$emit('input', this.value);
            },
            monthChange() {
                this.renderDay();
                this.value = this.year + '-' + this.month + '-' + this.day + ' 00:00:00';
                this.$emit('input', this.value);
            },
            dayChange() {
                this.value = this.year + '-' + this.month + '-' + this.day + ' 00:00:00';
                this.$emit('input', this.value);
            },
            ////////////////////////
            //RenderMonth and Day //
            ////////////////////////
            renderMonth() {
                this.monthOption = [];
                let start = 1;

                if (this.year === this.beginYear) {
                    start = this.beginMonth;
                }

                for (let i = start; i < 13; i++) {
                    this.monthOption.push(i);
                }
                this.month = start;
            },
            renderDay() {
                this.dayOption = [];
                let start = 1;
                let end = 30;

                //判断是不是开始的年开始的月
                if (this.year === this.beginYear && this.month === this.beginMonth) {
                    start = this.beginDay;
                }
                //获取选择月的日子上限
                end = getDayByMonthYear(this.month, this.year);

                for (let i = start; i < end + 1; i++) {
                    this.dayOption.push(i);
                }
                this.day = start;
            }
        }
    }
</script>

<style>

</style>