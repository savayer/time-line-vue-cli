<template>
    <td>
        <button class="btn btn-info mybtn morning" :title="morning" ></button>
        <button class="btn btn-primary mybtn day" title="parseDay(eventDate)" ></button>
        <button class="btn btn-secondary mybtn evening" title="parseEvening(eventDate)" ></button>
    </td>
</template>

<script>
export default {
    props: ['eventDate', 'morning', 'day', 'evening']
};
</script>

<style>
    
</style>
