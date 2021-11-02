import { http } from './config'

export default {
    get_all_product: () => {
        return http.get('product')
    },

    get_all_teams: () => {
        return http.get('team')
    },

    create_product: (product) => {
        return http.post('product', product)
    }

}