<template>
    <td>
        <button class="btn btn-info mybtn morning" :title="getTitle(dayData.morning)"></button>
        <button class="btn btn-primary mybtn day" :title="getTitle(dayData.day)"></button>
        <button class="btn btn-secondary mybtn evening" :title="getTitle(dayData.evening)"></button>
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
          }
        },
        methods: {
          getTitle(event = {}) {
            return event.title
          }
        }
    }
</script>
