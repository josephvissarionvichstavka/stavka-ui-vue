import {defineComponent , h} from 'vue';
import {createNamespace} from "../../../utils/namespace";
const StButtonGroup = defineComponent({
    name : createNamespace('button-group'),
    setup() {
        const classNames = [
            'st-button-group'
        ]
        return {
            classNames
        }
    },
    render() {
        console.log(this)
        return h('div' , {class : this.classNames},[
            h('slot', {} , this.$slots )
        ] )
    }
})
export default StButtonGroup;
