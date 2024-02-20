<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { IGeocodingDto } from '../api/types/dto/IGeocodingDto'
import WeatherInput from './WeatherInput.vue'

const emit = defineEmits<{
    (e: 'select', value: Required<IGeocodingDto>): void
}>()

const props = defineProps({
    currentCity: {
        type: String,
        default: 'Seleccione una ubicación',
    },
})

const city = ref<string>('')

onBeforeMount(() => {
    city.value = props.currentCity
})
const handleSelection = (value: Required<IGeocodingDto>) => {
    city.value = value.label || 'Seleccione una ubicación'
    emit('select', value)
}
</script>

<template>
    <header class="w-header">
        <nav class="w-nav">
            <div class="w-options">
                <h1><span>WEATHER</span>APP</h1>

                <div class="w-location">
                    <i class="bi bi-geo-alt"></i>
                    <p>{{ city }}</p>
                </div>
            </div>
            <div class="w-inputs">
                <WeatherInput placeholder="Buscar ciudad" @select="handleSelection" />
            </div>
        </nav>
    </header>
</template>

<style scoped lang="css">
.w-header {
    border-bottom: 1px solid #333;
    .w-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 40px;

        h1,
        span {
            font-family: var(--font-brand);
        }

        h1 {
            margin-right: 30px;
        }

        span {
            color: #06b6d4;
        }
        .w-options {
            display: flex;
            align-items: center;
            column-gap: 24px;
        }

        .w-location {
            display: flex;
            align-items: baseline;
            column-gap: 8px;

            p {
                max-width: 250px;
                overflow-x: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }

    .w-inputs {
        display: flex;
        column-gap: 24px;
    }
}
</style>
