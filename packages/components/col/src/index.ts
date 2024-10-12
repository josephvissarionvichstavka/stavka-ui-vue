import {defineComponent , h} from '@vue/runtime-core'
const StCol = defineComponent({
    name: 'st-col',
    props : {
        span : {
            type : String,
            default : '4%'
        },
        offset : {
            type : String,
            default: '0%'
        },
    },
    setup (props : any) {
        const styles = {
            width : (props.span % 24) * (100 / 24 ) + '%',
            marginLeft : (props.offset % 24 ) * (100 / 24) + '%'
        }
        const classNames = [
            'st-col'
        ]
        return {
            classNames,
            styles
        }
    },
    render () {
        return h('div' , {class : this.classNames , style : this.styles} , this.$slots)
    }

})
export default StCol;
