import {defineComponent , h} from 'vue'
import {createNamespace} from "../../../utils/namespace";

const StLink = defineComponent({
    name : createNamespace('link'),
    props : {
        type : {
            type: String,
            default : 'default'
        },
        underline : Boolean,
        disabled : Boolean,
        URL : String,
        color : String,
        icon : String
    },
    methods : {
        handleClick(event : Event) {
            if (!this.disabled) {
                if (!this.URL) {
                    this.$emit('click', event)
                }else {
                    window.location.href = this.URL;
                }
            }
        }
    },
    setup(props) {
        const classNames = [
            'st-link',
            props.type ? 'st-link--' + props.type : '',
            props.underline ? 'st-link--underline' : '',
            props.disabled ? 'disabled' : ''
        ]
        const styles = {
            background : props.color ? props.color : '',
            webkitBackgroundClip : props.color ? 'text' : '',
            color : props.color ? 'transparent' : ''
        }
        return {
            classNames,
            styles
        }
    },
    render() {
        return h('div' , {style : this.styles , class : this.classNames , onClick : this.handleClick},[
            h('span', {} , [ h('i' , {class : 'st-icon--' + this.$props.icon})]),
            h('span' , {} , this.$slots)
        ])
    }
})

export default StLink;
