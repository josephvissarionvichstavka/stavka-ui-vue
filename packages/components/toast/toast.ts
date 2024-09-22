import Toast from './src'
import { createApp} from 'vue'
const StToast = (options = {})  => {
    createApp(Toast , options).mount('#app')
}
const StToastSuccess  = (message? : string) => {
    createApp(Toast, {type: 'success', message: message, icon: 'success'}).mount('#app')
}
const StToastFail  = ( message? : string) => {
    createApp(Toast,  {type: 'danger', message: message, icon: 'error'}).mount('#app')
}
const StToastLoading  = ( message? : string) => {
     createApp(Toast, {message: message, icon: 'loading' , timeout : 99999999}).mount('#app')

}
const StToastClear = () => {
    const app = createApp(Toast, { timeout : 0})
        app.mount('#app')
    app.unmount()
}
export default {
    StToast,
    StToastFail,
    StToastLoading,
    StToastSuccess,
    StToastClear
};
