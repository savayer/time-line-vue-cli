<template>
    <td>
        <button @click="sendPushData(nowDate, 0, country)" class="btn btn-info mybtn morning" :title="getTitle(dayData.morning)" :data-busy="isTitle(dayData.morning)"></button>
        <button @click="sendPushData(nowDate, 1, country)" class="btn btn-primary mybtn day" :title="getTitle(dayData.day)" :data-busy="isTitle(dayData.day)"></button>
        <button @click="sendPushData(nowDate, 2, country)" class="btn btn-secondary mybtn evening" :title="getTitle(dayData.evening)" :data-busy="isTitle(dayData.evening)"></button>
    </td>
</template>

<script>
    export default {
        props: {
          dayData: {
            required: false,
            type: Object,
            default () {
              return {
                morning: {},
                day: {},
                evening: {}
              }
            }
          },
          nowDate: {
            required: true,
            type: String
          },
          country: {
            required: true,
            type: String
          }
        },
        methods: {
          getTitle(event = {}) {
            return event.title === undefined ? 'Свободно' : event.title;
          },
          isTitle(event = {}) {
            return event.title === undefined ? 0 : 1;
          },
          sendPushData(date, timeOfDay, country) {
            let timeOfDays = ['morning', 'day', 'evening'];
            let result = confirm(`Зарегистрировать отправку уведомлений для ${country} на ${timeOfDays[timeOfDay]} ${date}?`);
            //if (!result) alert('Отменено'); else alert('Типа отправлено');
          }

        }
    }
</script>