import Toast from './src'
import { createApp} from 'vue'

class StToast {
    constructor(options = {}) {
        createApp(Toast, options).mount('#app')
    }
    success(message?: string) {
        createApp(Toast, {type: 'success', message: message, icon: 'success'}).mount('#app')
    }

    fail(message?: string) {
        createApp(Toast,  {type: 'danger', message: message, icon: 'error'}).mount('#app')
    }

    loading(message?: string) {
        createApp(Toast, {message: message, icon: 'loading' , timeout : 99999999}).mount('#app')
    }

    clear() {
        const app = createApp(Toast, { timeout : 0})
        app.mount('#app')
        app.unmount()
    }
}

export default StToast;
