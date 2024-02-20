export abstract class ApiConfig {
    private readonly baseUrl: string
    private readonly controller: string
    protected readonly url: string
    protected readonly key: string

    constructor(controller: string) {
        this.baseUrl = import.meta.env.VITE_API_URL
        this.controller = controller
        this.key = import.meta.env.VITE_API_KEY

        this.url = this.baseUrl + this.controller + '/'
    }
}
