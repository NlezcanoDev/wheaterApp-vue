import { ICoord } from '../models/ICoord'
import { IListDaysWeather } from './IListDaysWeather'

export interface IForestDays {
    list: Array<IListDaysWeather>
    city: { coord: ICoord }
}
