import {defineComponent , h} from 'vue';
const StAside = defineComponent({
    name : 'st-aside',
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
        return h('div' , {class : this.classNames , style : this.styles} , this.$slots)
    }
})

export default StAside;