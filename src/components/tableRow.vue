<template>
    <tr>
        <td> {{ country }} </td>
        <TableTdBtn v-for="n in countDays" :event-date="parseCountryData(countryData, n, indexKeyOfObject)" :objectkey="firstKeyAttr" :key="n" />
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
            firstKeyAttr: ''
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
                    this.firstKeyAttr = firstKey; // вспомогательный атрибут, чтобы в tableTdBtn обратиться к обьекту как eventDate[firstKeyAttr].morning.title
                    console.log(eventsCurrentDate[firstKey].morning.title);
                }
            }
            return eventsCurrentDate;
            /*
                в eventDate передан обьект вида:
                {
                    '2018-08-23': {
                        morning: {
                            title: 'бла бла'
                        },
                        day: {
                            title: 'Юзер 28: рассылок: 21'
                        }
                    }
                }
                да, такой же, но только с определенным индексом
            */ 
        }
    }
}
</script>

<style>


</style>
