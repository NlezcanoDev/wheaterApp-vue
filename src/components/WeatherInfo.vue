<script setup lang="ts">
import { type PropType } from 'vue'
import { getWeatherIcon } from '../utils/getWeatherIcon'

import PrimeCard from 'primevue/card'

import { ICurrentWeatherDto } from '../api/types/dto/ICurrentWeatherDto'

defineProps({
    loading: {
        type: Boolean,
        default: false,
    },
    data: {
        type: Object as PropType<ICurrentWeatherDto | null>,
        default: {},
    },
})
</script>

<template>
    <div v-if="loading" class="w-loading">loading...</div>
    <main v-else-if="data !== null" class="container w-info">
        <i class="w-icon" :class="getWeatherIcon(data.weather[0].icon)"></i>
        <h2 class="w-temp">{{ data?.main.temp.toFixed(1) }}°C</h2>
        <section class="w-extra">
            <PrimeCard>
                <template #content>
                    <h4>Máximo</h4>
                    <p>{{ data?.main.temp_max.toFixed(1) }}°C</p>
                </template>
            </PrimeCard>
            <PrimeCard>
                <template #content>
                    <h4>Mínimo</h4>
                    <p>{{ data?.main.temp_min.toFixed(1) }}°C</p>
                </template>
            </PrimeCard>
            <PrimeCard>
                <template #content>
                    <h4>Humedad</h4>
                    <p>{{ data?.main.humidity.toFixed(1) }}%</p>
                </template>
            </PrimeCard>
            <PrimeCard>
                <template #content>
                    <h4>Lluvias</h4>
                    <p v-if="data.rain">{{ data?.rain['1h'].toFixed(1) }}%</p>
                    <p v-else>0%</p>
                </template>
            </PrimeCard>
        </section>
    </main>
    <main v-else class="w-info-fallback">
        <div class="w-info-fallback-msg">
            <i class="bi bi-geo-alt"></i>
            <p>Seleccione una ubicación</p>
        </div>
    </main>
</template>

<style scoped lang="css">
.w-info {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;

    .w-city {
        font-size: 18px;
        font-weight: normal;
    }

    .w-icon {
        font-size: 120px;
    }

    .w-temp {
        font-size: 80px;
        font-weight: normal;
        margin: 20px 0;
    }

    .w-extra {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 24px;

        > div {
            width: 124px;
        }
    }
}

:deep(.p-card-body) {
    text-align: center;
}

.w-info-fallback,
.w-loading {
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
}

.w-loading {
    margin-top: 100px;
}

.w-info-fallback-msg {
    text-align: center;
    margin-top: 60px;
    i {
        color: gray;
        font-size: 70px;
    }
    p {
        color: gray;
        font-size: 40px;
        line-height: 48px;
        margin: 0;
    }
}
</style>
