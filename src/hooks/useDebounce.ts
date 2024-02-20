import { ref, onBeforeUnmount } from 'vue'

export function useDebounce<T>(timeout = 400) {
    const debounceId = ref<NodeJS.Timeout>()
    const response = ref<T>()
    const loading = ref<boolean>(false)

    onBeforeUnmount(() => clearTimeout(debounceId.value))

    const fetchData = async (cb: Function) => {
        if (debounceId.value) clearTimeout(debounceId.value)

        loading.value = true

        debounceId.value = setTimeout(async () => {
            response.value = await cb()
            loading.value = false
        }, timeout)
    }

    return {
        fetchData,
        response,
        loading,
    }
}
