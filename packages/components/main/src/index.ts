import {defineComponent , h} from 'vue'
import {createNamespace} from "../../../utils/namespace";
const StMain = defineComponent({
    name: createNamespace('main'),
    render () {
        return h('div' , {class : 'st-main'} , this.$slots)
    }
})
export default StMain;
