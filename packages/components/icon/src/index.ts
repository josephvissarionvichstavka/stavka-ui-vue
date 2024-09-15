import {defineComponent , h} from 'vue'
import {createNamespace} from "../../../utils/namespace";

const StIcon = defineComponent({
    name : createNamespace('icon'),
    props : {
        name : {
            type : String,
            default : 'default'
        }
    },
    setup(props) {
        const classNames = [
            'st-icon',
            props.name ? 'st-icon--' + props.name : ''
        ];
        return {
            classNames
        }
    },
    render() {
        return h('div' ,{class : this.classNames})
    }
})

export default StIcon;
