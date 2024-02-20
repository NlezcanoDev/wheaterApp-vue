abstract class CoreApi {
    protected readonly baseUrl: string
    protected readonly controller: string
    protected readonly apiKey: string
    protected url: string

    constructor(controller: string) {
        this.baseUrl = import.meta.env.VITE_API_URL
        this.apiKey = import.meta.env.VITE_API_KEY
        this.controller = controller
        this.url = this.baseUrl + this.controller

        // this.api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
        //     config.params = {
        //         ...config.params,
        //         appid: this.apiKey,
        //     }

        //     console.log(config.headers)
        //     return config
        // })

        // this.api.interceptors.response.use((config: AxiosResponse) => config.data)
    }
}

export default CoreApi
