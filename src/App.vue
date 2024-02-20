<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import WeatherHeader from './components/WeatherHeader.vue'
import WeatherInfo from './components/WeatherInfo.vue'
import WeatherCardContainer from './components/WeatherCardContainer.vue'

import { IGeocodingDto } from './api/types/dto/IGeocodingDto'
import WeatherApi from './api/services/WeatherApi'
import { ICurrentWeatherDto } from './api/types/dto/ICurrentWeatherDto'
import { IListDaysWeather } from './api/types/dto/IListDaysWeather'

const loadingInfo = ref(true)
const city = ref<string>('')
const dataWeather = ref<ICurrentWeatherDto | null>(null)
const daysWeather = ref<Array<IListDaysWeather>>([])

onBeforeMount(async () => {
    const data = getSaveData<IGeocodingDto>('currentCity')
    if (data) {
        city.value = data.label || 'Seleccione una ubicación'
        await handleSelection(data)
    } else loadingInfo.value = false
})

const getSaveData = <T,>(item: string) => {
    const dataStorage = localStorage.getItem(item)
    let data: T | undefined
    if (dataStorage) {
        data = JSON.parse(dataStorage)
    }

    return data
}

const handleSelection = async (value: IGeocodingDto) => {
    try {
        loadingInfo.value = true
        dataWeather.value = await WeatherApi.getCurrentWeather({
            lat: value.lat,
            lon: value.lon,
        })

        const dataDays = await WeatherApi.getNextDays({ lat: value.lat, lon: value.lon })
        daysWeather.value = dataDays.list
    } catch (e) {
        dataWeather.value = null
        daysWeather.value = []
    } finally {
        loadingInfo.value = false
    }
}
</script>

<template>
    <WeatherHeader :current-city="city" @select="handleSelection" />
    <WeatherInfo
        city="San Justo, Buenos Aires"
        :data="dataWeather"
        :loading="loadingInfo"
    />
    <WeatherCardContainer :days="daysWeather" :loading="loadingInfo" />
</template>

<style scoped></style>
