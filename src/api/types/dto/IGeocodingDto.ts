export interface IGeocodingDto {
    name: string
    lat: number
    lon: number
    country: string
    state: string
    local_names: { feature_name: string; es?: string }
    label?: string
}
