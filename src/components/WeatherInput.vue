<script setup lang="ts">
import { reactive } from 'vue'
import { useDebounce } from '../hooks/useDebounce'

import PrimeAutocomplete, { AutoCompleteItemSelectEvent } from 'primevue/autocomplete'
import { IGeocodingDto } from '../api/types/dto/IGeocodingDto'
import GeocodingApi from '../api/services/GeocodingApi'

type ModelType = {
    value: string
    loading: boolean
    options: Array<IGeocodingDto>
}

const emit = defineEmits<{
    (e: 'select', value: Required<IGeocodingDto>): void
}>()
defineProps({
    placeholder: {
        type: String,
        default: '',
    },
})

const { fetchData, loading } = useDebounce<Array<IGeocodingDto>>()
const modelValue = reactive<ModelType>({
    value: '',
    loading: false,
    options: [],
})

const getLabel = (data: IGeocodingDto) => {
    let label = ''
    if (data.local_names?.es) {
        label += data.local_names['es']
    } else {
        label += data.name
    }

    if (data.state) label += `, ${data.state}`
    return label
}

const handleChange = async () => {
    try {
        await fetchData(async () => {
            const places = new Set()
            const data = await GeocodingApi.getCiudad({ q: modelValue.value })

            modelValue.options = data
                ?.map((d) => ({
                    ...d,
                    label: getLabel(d),
                }))
                .filter((opt) => {
                    const dupLabel = places.has(opt.label)
                    places.add(opt.label)
                    return !dupLabel
                })
        })
        modelValue.loading = loading.value
    } catch (e) {
        modelValue.options = []
        console.error(e)
    } finally {
        modelValue.loading = false
    }
}

const handleSelection = (ev: AutoCompleteItemSelectEvent) => {
    localStorage.setItem('currentCity', JSON.stringify(ev.value))
    modelValue.value = ''
    emit('select', ev.value)
}
</script>

<template>
    <PrimeAutocomplete
        v-model="modelValue.value"
        :suggestions="modelValue.options"
        option-label="label"
        :loading="modelValue.loading"
        class="w-searchbar"
        :placeholder="placeholder"
        @complete="handleChange"
        @item-select="handleSelection"
    />
</template>

<style scoped lang="css"></style>
../api/services/GeocodingApi
