<template>
    <tr>
        <td> {{ country }} </td>
        <TableTdBtn v-for="n in countDays" :event-date="parseCountryData(countryData, n, indexKeyOfObject)" 
        :key="n" :morning="titleM" :day="titleD" :evening="titleE" />
    </tr>
</template>

<script>
import TableTdBtn from './tableTdBtn.vue';

export default {
    components: {
        TableTdBtn
    },
    data() {
        return {
            indexKeyOfObject: 0,
            titleM: '',
            titleD: '',
            titleE: ''
        }
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
    methods: {
        parseCountryData(obj, indexDay, indexKey) {
            let eventsCurrentDate = {},
                firstKey = Object.keys(obj)[indexKey], //firstKey = дата
                dateOfThisEvent; 
            if (!firstKey) {
              //  console.log(`indexDay = ${indexDay}, firstKey = ${firstKey}`);
                return '';
            }
            else {
                dateOfThisEvent = firstKey.split('-'); //dateOfThisEvent[2] = число, dateOfThisEvent[1] = месяц, dateOfThisEvent[0] = год
                if (dateOfThisEvent[2] > indexDay) { //по идее это условие необязательно, ибо firstKey !== undefined
                   // console.log(`indexDay = ${indexDay}, dateOfThisEvent[2] = ${dateOfThisEvent[2]}`);
                    return '';
                } else if (dateOfThisEvent[2] == indexDay) {
                    eventsCurrentDate[firstKey] = obj[ firstKey ];
                    this.indexKeyOfObject++; //когда дата в обьекте равна дате отрисованному TD, мы переходим к следюущему ключу обьекта, то есть к следующей дате                    
                    
                    /* дошло, что обьект передевать не варинт, ибо реактивность в данном случае ломает что нужно, поэтому созданы свойства
                    
                    а нет, один чёрт*/
                    this.titleM = eventsCurrentDate[firstKey].morning.title === undefined ? '' : eventsCurrentDate[firstKey].morning.title;
                    // this.titleD = this.isUndefined(eventsCurrentDate[firstKey].day.title);
                    // this.titleE = this.isUndefined(eventsCurrentDate[firstKey].evening.title);                    
                    //console.log(this.titleM);
                }
            }
            return eventsCurrentDate;
        }
    }
}
</script>

<style>


</style>
