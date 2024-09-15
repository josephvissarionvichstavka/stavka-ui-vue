import {App} from 'vue'
export const makeInstall = (components :any[] = []) => {
    const install = (app : App  , options? : {}) => {
        components.forEach(component => {
            app.use(component)
        })
    }
    return {
        install
    }
}
