import { IDataWeather } from '../models/IDataWeather'
import { IWeather } from '../models/IWeather'

export interface IListDaysWeather {
    main: IDataWeather
    weather: Array<IWeather>
    dt_txt: string
}
