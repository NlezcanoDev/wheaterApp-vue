import { Repository } from '../repository'
import { IGeocodingDto } from '../types/dto/IGeocodingDto'
import { GeocodingFilter } from '../types/filters/GeocodingFilter'

class GeocodingApi extends Repository {
    constructor(controller: string) {
        super(controller)
    }

    public async getCiudad(filter: GeocodingFilter): Promise<Array<IGeocodingDto>> {
        filter = {
            q: filter.q + ',AR',
            limit: filter.limit || 6,
        }
        const data = await this.doGet<Array<IGeocodingDto>>('direct', filter)

        return data
    }
}

export default new GeocodingApi('geo/1.0')
