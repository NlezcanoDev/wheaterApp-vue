<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { getWeatherIcon } from '../utils/getWeatherIcon'

import PrimeCard from 'primevue/card'
import { IListDaysWeather } from '../api/types/dto/IListDaysWeather'
const props = defineProps({
    weather: {
        type: Object as PropType<IListDaysWeather>,
        required: true,
    },
})

const date = computed(() => {
    const date = new Date(props.weather.dt_txt)
    return date.toLocaleTimeString('es').split(':').slice(0, 2).join(':')
})
</script>

<template>
    <PrimeCard>
        <template #content>
            <div class="w-card">
                <div class="w-card-info">
                    <p>{{ date }}</p>
                    <i :class="getWeatherIcon(weather.weather[0].icon)"></i>
                </div>
                <div>
                    <p>
                        <span>{{ weather.main.temp.toFixed(0) }}°C</span>
                    </p>
                </div>
            </div>
        </template>
    </PrimeCard>
</template>

<style scoped lang="css">
.w-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;

    .w-card-info {
        display: flex;
        align-items: center;
        column-gap: 20px;

        i {
            font-size: 36px;
        }
    }
}
</style>
