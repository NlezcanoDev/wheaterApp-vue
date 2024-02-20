export const getWeatherIcon = (icon: string) => {
    let weatherIcon = 'bi bi-'
    switch (icon) {
        case '01d':
            weatherIcon += 'brightness-high'
            break
        case '01n':
            weatherIcon += 'moon'
            break
        case '02d':
            weatherIcon += 'cloud-sun'
            break
        case '02n':
            weatherIcon += 'cloud-moon'
            break
        case '03d':
        case '03n':
            weatherIcon += 'cloud'
            break
        case '04d':
        case '04n':
            weatherIcon += 'clouds'
            break
        case '09d':
        case '09n':
            weatherIcon += 'cloud-rain-heavy'
            break
        case '10d':
        case '10n':
            weatherIcon += 'cloud-rain'
            break
        case '11d':
        case '11n':
            weatherIcon += 'cloud-lightning-rain'
            break
        case '13d':
        case '13n':
            weatherIcon += 'snow'
            break
        case '50d':
        case '50n':
            weatherIcon += 'wind'
            break
        default:
            ''
            break
    }

    return weatherIcon
}
