<template>
	<div id="app">
        <div class="wrapper" id="vm">
            <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th rowspan="2"></th>
                        <th class="prevMonthTh">
                            <button id="prevMonth" class="btn btn-warning" @click="setPrevMonth(currentMonth, currentYear)">
                                    <span class="glyphicon glyphicon-chevron-left"></span>
                            </button>
                        </th>
                        <th id="currentMonth" :colspan="countDaysOfMonth-2" > {{ currentMonth }} {{ currentYear }} </th>
                        <th class="nextMonthTh">
                            <button id="nextMonth" class="btn btn-warning" @click="setNextMonth(currentMonth, currentYear)">
                                    <span class="glyphicon glyphicon-chevron-right"></span>
                            </button>
                        </th>
                    </tr>
                    <tr class="daysCell">
                        <th v-for="num in countDaysOfMonth" :key="num">{{ num }}</th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow v-for="(countryData, countryKey) in parseData" :key="countryKey" :country-data="countryData" :country="countryKey" 
                              :count-days="countDaysOfMonth" />                    
                </tbody>
            </table>
		</div>

	</div>
</template>

<script>
import TableRow from "./components/tableRow.vue";

export default {
  name: "app",
  components: {
    TableRow
  },
  data() {
    return {
      monthsArray: "January, February, March, April, May, June, July, August, September, October, November, December".split(
        ", "
      ),
      currentMonth: "",
      currentYear: 2018,
      countDaysOfMonth: 0,
      parseData: db
    };
  },
  created: function() {
    this.currentMonth = this.getCurrentMonth();
    this.countDaysOfMonth = this.getCountDaysOfCurrentMonth();
  },
  methods: {
    getCurrentMonth() {
      let now = new Date();
      this.currentYear = now.getFullYear();
      return this.monthsArray[now.getMonth()];
    },
    getCountDaysOfCurrentMonth() {
      let now = new Date();
      now.setDate(0); //вернется количетсво дней в месяце
      return now.getDate();
    },
    setPrevMonth(currentMonth, currentYear) {
      let d = new Date(currentYear, this.monthsArray.indexOf(currentMonth), 0);
      this.countDaysOfMonth = d.getDate();
      this.currentYear = d.getFullYear();
      this.currentMonth = this.monthsArray[d.getMonth()];
    },
    setNextMonth(currentMonth, currentYear) {
      let d = new Date(
        currentYear,
        this.monthsArray.indexOf(currentMonth) + 2,
        0
      );
      this.countDaysOfMonth = d.getDate();
      this.currentYear = d.getFullYear();
      this.currentMonth = this.monthsArray[d.getMonth()];
    }
  }
};
</script>

<style>
@import url(./assets/css/bootstrap.min.css);

html,
body {
  margin: 0;
  padding: 0;
}

.wrapper {
  width: 100%;
  padding: 10px;
}
.wrapper table {
  width: 100%;
  box-shadow: 0 0 50px #ccc;
  font-size: 16px;
}
.wrapper table th {
  text-align: center;
}
.wrapper table tr > td:first-child {
  vertical-align: middle;
}
.wrapper table .prevMonthTh {
  border-right: none;
}
.wrapper table .nextMonthTh {
  border-left: none;
}

.btn-light {
  width: 100%;
}

#currentMonth {
  text-transform: uppercase;
  letter-spacing: 2px;
  border-left: none;
  border-right: none;
}

.mybtn {
  display: block;
  padding: 0;
  margin: 0 auto;
  border-radius: unset;
  width: 25px;
  height: 15px;
  font-size: 0;
  text-align: center;
  transition: 0.2s;
}
.mybtn:hover {
  background: #2dd42d !important;
  transform: scale(1.2);
}

.mybtn[title=""] {
  background: red;
}

.mybtn:active {
  background: #24c224 !important;
  transform: scale(1.2);
}
</style>
