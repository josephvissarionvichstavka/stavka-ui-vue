import {App} from 'vue'
export const makeInstall = (components :any[] = []) => {
    const install = (app : App  , options? : object) => {
        components.forEach(component => {
            app.use(component)
        })
        console.log(options)
    }
    return {
        install
    }
}
