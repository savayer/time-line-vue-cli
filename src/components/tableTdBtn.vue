<template>
    <td :title="eventDate">
        <button class="btn btn-info mybtn morning" :title="titleM" ></button>
        <button class="btn btn-primary mybtn day" :title="titleD" ></button>
        <button class="btn btn-secondary mybtn evening" :title="titleE" ></button>
    </td>
</template>

<script>
export default {
    props: {
        titleD: {
            type: String
        },
        titleM: {
            type: String
        },
        titleE: {
            type: String
        },
        eventDate: {
            type: String
        }
    }
};
</script>

<style>
    
</style>
