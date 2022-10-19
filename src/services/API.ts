import axios from 'axios'
import { CONFIG } from '@/constants/config'

export default class API {
    // Упрощенная версия сервиса без method, body
    // используется только GET запрос для получения данных
    static request = (endpoint: string) => {
        return axios
            .get(`${CONFIG.API_ROOT}/${endpoint}`)
            .then(response => {
                return response
            })
            .catch(error => (error))
    }
}