import {defineComponent , h} from 'vue';
import {createNamespace} from "../../../utils/namespace";
const StButton = defineComponent({
    name : createNamespace('button'),
    props : {
        type : {
            type : String,
            default : 'default',
        },
        size : {
            type : String,
            default : 'big',
        },
        plain : Boolean,
        text : Boolean,
        circle : Boolean,
        block : Boolean,
        round : Boolean,
        disabled : Boolean,
        autoFocus : Boolean,
        loading : Boolean,
        color : {
            type : String,
            required : false
        },
        icon : {
            type : String,
            required : false
        }
    },
    emits : ['click'],
    setup(props , {emit}) {
        const  handleClick = (event : Event) => {
            if(! (props.disabled || props.loading) ) {
                emit('click',event)
            }
        }
        const classNames =
            [ 'st-button' ,
                'st-button--' + props.type ,
                props.plain ? 'plain' : '',
                props.text ?  'text' : '',
                'st-button--' + props.size,
                props.circle ? 'st-button--circle' : '',
                props.block ? 'st-button--block' : '',
                props.round ? 'st-button--round' : '',
                (props.disabled || props.loading) ? 'disabled' : ''
            ]
        const styles = props.color && {
            color : (props.plain || props.text) ? props.color : 'white',
            backgroundColor : (props.plain || props.text) ? 'transparent' : props.color,
            borderColor : (!props.text) ? props.color : 'transparent'
        } ;
        return {
            classNames,
            styles,
            handleClick
        }
    },
    render() {
        return h('div' , {class : this.classNames , style : this.styles ,
            autofocus : this.$props.autoFocus , onClick : this.handleClick},[
            this.$props.loading ? h('i', { class: 'st-icon--loading' }) : null,
            !this.$props.loading && this.$props.icon ? h('i', { class: this.$props.icon } ) : null,
            h('span', {}, h('slot', {name : 'default'} , this.$slots ))
        ] )
    }
})
export default StButton;
