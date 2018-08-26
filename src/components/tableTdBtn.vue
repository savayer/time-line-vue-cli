<template>
    <td>
        <button class="btn btn-info mybtn morning" :title="objectkey" ></button>
        <button class="btn btn-primary mybtn day" title="parseEventDate(eventDate.day.title)" ></button>
        <button class="btn btn-secondary mybtn evening" title="parseEventDate(eventDate.evening.title)" ></button>
    </td>
</template>

<script>
export default {
    props: ['eventDate', 'objectkey'], //eventDate = '' or Object
    methods: {
        parseEventDate(str) {
            return str === undefined ? 'Свободно' : str;
        }
    }
};
</script>

<style>
    
</style>
