import { Repository } from '../repository'

class ImageApi extends Repository {
    constructor(controller: string) {
        super(controller)
    }

    public async getImage(icon: string): Promise<any> {
        const data = await this.doGet<ICurrentWeatherDto>('wn/' + icon + '@2x.png')
        return data
    }
}

export default new ImageApi('img')
