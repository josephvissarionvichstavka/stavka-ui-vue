import {defineComponent , h} from 'vue'
const StFooter = defineComponent({
    name: 'st-footer',
    props : {
        height : {
            type : String,
            default : '96px'
        }
    },
    setup (props : any) {
        const classNames = [
            'st-footer'
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

export default StFooter;
