import {defineComponent , h} from 'vue'
import {createNamespace} from "../../../utils/namespace";
const StHeader = defineComponent({
    name: createNamespace('header'),
    props : {
        height : {
            type : String,
            default : '96px'
        }
    },
    setup (props : any) {
        const classNames = [
            'st-header'
        ];
        const styles = {
            height: props.height
        }
        return {
            classNames,
            styles
        }
    },
    render () {
        return h('div' , {class : this.classNames , style : this.styles} , this.$slots)
    }
})

export default StHeader;
