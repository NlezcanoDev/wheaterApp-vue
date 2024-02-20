<script setup lang="ts">
import { type PropType } from 'vue'
import { IListDaysWeather } from '../api/types/dto/IListDaysWeather'
import WeatherCard from './WeatherCard.vue'

defineProps({
    days: {
        type: Array as PropType<Array<IListDaysWeather>>,
        required: true,
    },
    loading: {
        type: Boolean,
        required: true,
    },
})
</script>

<template>
    <section v-if="days.length && !loading" class="container w-card-container">
        <WeatherCard v-for="day in days" :key="day.dt_txt" :weather="day" />
    </section>
</template>

<style scoped lang="css">
.w-card-container {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
