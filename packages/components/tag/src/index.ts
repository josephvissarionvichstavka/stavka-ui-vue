import {defineComponent , h} from 'vue'
import {createNamespace} from "../../../utils/namespace";

const StTag = defineComponent({
    name : createNamespace('tag'),
    props : {
        type : {
            type: String,
            default : 'default'
        },
        size : {
            type : String,
            default: 'defaults'
        },
        plain : Boolean,
        round : Boolean,
        closeAble : Boolean,
        mark : Boolean,
        show : Boolean,
        color : String
    },
    methods : {
        gradientBackground(){
            return {
                color : this.plain ? (this.color ? this.color : '') : '',
                background : this.plain ? '' : (this.color ? this.color : ''),
                borderColor :  this.color ? this.color : ''
            }
        },
        handleClose (event : Event) {
            event.stopPropagation();
            this.$emit('close',event)
        },
        handleClick (event : Event) {
            this.$emit('click' , event)
        }
    },
    setup(props) {
        const classNames = [
            'st-tag',
            props.type  ? 'st-tag--' + props.type : '',
            props.size ? 'st-tag--' + props.size : '',
            props.plain ? 'plain' : '',
            props.round && !props.mark ? 'round' : '',
            props.mark && !props.round ? 'mark' : ''
        ];
        const styles = {
            color : props.plain ? (props.color ? props.color : '') : '',
            background : props.plain ? '' : (props.color ? props.color : ''),
            borderColor :  props.color ? props.color : ''
        }
        return {
            classNames,
            styles
        }
    },
    render() {
        return(
            this.$props.show ?  h('div' , {class : this.classNames , style : this.styles , onClick : this.handleClick},[
                h('span' , {} , this.$slots),
                h('i' , {class : 'st-icon--close st-tag--close', onClick : this.handleClose })
            ]) : null
        )
    }
})

export default StTag
