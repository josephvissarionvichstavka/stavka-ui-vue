import {computed ,defineComponent , h} from 'vue'
import {createNamespace} from "../../../utils/namespace";
const StContainer = defineComponent({
    name: createNamespace('container'),
    props : {
        h5 : Boolean
    },
    setup(props : any) {
        const isH5 = computed(() => {
            if (props.h5) {
                return true;
            }else {
                return false;
            }
        })
        const classNames = [
            'st-container',
            isH5 ? 'top-to-bottom' : ''
        ]
        return {
            classNames
        }
    },
    render () {
        return h('div' , {class : this.classNames} , this.$slots)
    }
})
export default StContainer;
