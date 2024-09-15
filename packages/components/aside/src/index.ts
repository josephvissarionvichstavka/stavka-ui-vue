import {defineComponent , h} from 'vue';
import {createNamespace} from "../../../utils/namespace";
const StAside = defineComponent({
    name : createNamespace('aside'),
    props : {
        width : {
            type : String,
            default : '256px'
        }
    },
    setup (props : any) {
        const classNames = [
            'st-aside'
        ];
        const styles = {
            width : props.width ? props.width : ''
        }
        return {
            classNames,
            styles
        }
    },
    render() {
        return h('div' , {class : this.classNames , style : this.styles} , [
            h('slot' , {name : 'default'})
        ])
    }
})

export default StAside;
