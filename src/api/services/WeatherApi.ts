import { Repository } from '../repository'
import { ICurrentWeatherDto } from '../types/dto/ICurrentWeatherDto'
import { IForestDays } from '../types/dto/IForestDays'
import { CurrentWeatherFilter } from '../types/filters/CurrentWeatherFilter'

class WeatherApi extends Repository {
    constructor(controller: string) {
        super(controller)
    }

    public async getCurrentWeather(
        filter: CurrentWeatherFilter,
    ): Promise<ICurrentWeatherDto> {
        filter = {
            lat: filter.lat,
            lon: filter.lon,
            lang: 'es',
            units: 'metric',
        }
        return await this.doGet<ICurrentWeatherDto>('weather', filter)
    }

    public async getNextDays(
        filter: CurrentWeatherFilter & { cnt?: number },
    ): Promise<IForestDays> {
        filter = {
            lat: filter.lat,
            lon: filter.lon,
            lang: 'es',
            units: 'metric',
            cnt: 5,
        }

        return await this.doGet<IForestDays>('forecast', filter)
    }
}

export default new WeatherApi('data/2.5')
