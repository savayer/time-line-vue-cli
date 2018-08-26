<template>
    <tr>
        <td> {{ country }} </td>
        <TableTdBtn v-for="n in countDays" :key="n" titleM="morning" titleD="day" titleE="evening" />
    </tr>
</template>

<script>
import TableTdBtn from './tableTdBtn.vue';

export default {
    components: {
        TableTdBtn
    },
    props: {
        countDays: {
            type: Number
        },
        country: {
            type: String
        },
        countryData: {
            type: Object
        }
    },
    method: {
        parseCountryData(countryData) {
            /* :events-of-day="parseCountryData(countryData)" */
            /*...*/
        }
    }
}
</script>

<style>


</style>
