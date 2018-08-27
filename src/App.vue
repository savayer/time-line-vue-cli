<template>	
    <div class="wrapper">
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th rowspan="2"></th>
                    <th class="prevMonthTh">
                        <button id="prevMonth" class="btn btn-warning" @click="setPrevMonth()">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                        </button>
                    </th>
                    <th id="currentMonth" :colspan="countDaysOfMonth - 2" > {{ `${getCurrentDate().format('MMMM YYYY')}` }} </th>
                    <th class="nextMonthTh">
                        <button id="nextMonth" class="btn btn-warning" @click="setNextMonth()">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                        </button>
                    </th>
                </tr>
                <tr class="daysCell">
                    <th v-for="num in countDaysOfMonth" :key="num">{{ num }}</th>
                </tr>
            </thead>
            <tbody>
                <country-row
                        v-for="(countryData, countryKey) in parseData"
                        :key="countryKey"
                        :country="countryKey"
                        :country-data="countryData"
                        :current="current"
                />
            </tbody>
        </table>
    </div>
</template>

<script>
import CountryRow from './components/CountryRow.vue'

export default {
  name: "app",
  components: {
    CountryRow
  },
  data() {
    return {
      countDaysOfMonth: 0,
      parseData: window.db,
      current: {
        month: 1,
        year: 2018
      }
    };
  },
  created: function() {
    this.setMonth()
  },
  methods: {
    setPrevMonth() {
      let date = this.getCurrentDate().subtract(0, 'month')
      this.setMonth(date.year(), date.month())
    },
    setNextMonth() {
      let date = this.getCurrentDate().add(2, 'month')
      window.console.log(date)
      window.console.log(date.month())
      this.setMonth(date.year(), date.month())
    },
    setMonth(year = null, month = null) {
      let date = this.getCurrentDate((year || this.$moment().year()), (month || (this.$moment().month() + 1)))

      this.countDaysOfMonth = date.daysInMonth()
      this.current = {
        year: date.year(),
        month: date.format('MM')
      }
    },
    getCurrentDate(year = null, month = null) {
      return this.$moment((year || this.current.year) + '-' + (month || this.current.month), 'YYYY-MM')
    }
  }
};
</script>

<style lang="scss" src="./sass/main.scss"></style>
