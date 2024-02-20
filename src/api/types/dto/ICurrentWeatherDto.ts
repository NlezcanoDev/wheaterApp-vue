import { ICoord } from '../models/ICoord'
import { IDataWeather } from '../models/IDataWeather'
import { IRainPrediction } from '../models/IRainPrediction'
import { IWeather } from '../models/IWeather'

export interface ICurrentWeatherDto {
    coord: ICoord
    weather: Array<IWeather>
    base: string
    main: IDataWeather
    rain: IRainPrediction
    id: number
}
