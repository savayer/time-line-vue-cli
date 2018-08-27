<template>
    <tr>
        <td>{{ country }}</td>
        <day-buttons
                v-for="dayIndex in countDays"
                :key="dayIndex"
                :country="country"
                :now-date="getCurrentDate(dayIndex)._i"   
                :day-data="getDayData(dayIndex)"
        />
        <!--  -->
    </tr>
</template>

<script>
    import DayButtons from './DayButtons.vue'

    export default {
        name: 'CountryRow',
        components: {
          DayButtons
        },
        props: {
            current: {
                required: true,
                type: Object
            },
            country: {
                required: true,
                type: String
            },
            countryData: {
                required: true,
                type: Object
            }
        },
        computed: {
          countDays() {
            return this.getCurrentDate().daysInMonth()
          }
        },
        methods: {
          getDayData(dayIndex = 1) {
            return this.countryData[this.getCurrentDate(dayIndex).format('YYYY-MM-DD')]
          },
          getCurrentDate(dayIndex = 1) {
            return this.$moment(`${this.current.year}-${this.current.month}-${dayIndex}`, 'YYYY-MM-DD')
          }
        }
    }
</script>
