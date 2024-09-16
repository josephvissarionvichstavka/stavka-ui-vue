import {App} from 'vue'
const withInstall = (main : any) => {
    main.install = (app : App ) => {
        for (const component of [main]) {
            app.component(component.name, component);
        }
    }
    return main
}
export {withInstall}
