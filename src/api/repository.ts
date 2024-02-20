import { ApiConfig } from './config'

export abstract class Repository extends ApiConfig {
    constructor(controller: string) {
        super(controller)
    }

    protected async doGet<T>(method: string, params?: object): Promise<T> {
        params = { ...params, appId: this.key }
        var query = new URLSearchParams({ ...params }).toString().replace('%2C', ',')

        const response = await fetch(this.url + method + '?' + query)
        return await response.json()
    }
}
