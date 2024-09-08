import {defineComponent , h} from 'vue';
const StButton = defineComponent({
    name : 'st-button',
    props : {
        type : {
            type : String,
            default : 'default',

        },
        size : {
            type : String,
            default : 'big',

        },
        plain : {
            type : Boolean,
            default : false
        },
        text : {
            type : Boolean,
            default : false
        },
        circle : {
            type : Boolean,
            default : false
        },
        block : {
            type : Boolean,
            default : false
        },
        round : {
            type : Boolean,
            default : false
        },
        disabled : {
            type : Boolean,
            default : false
        },
        autoFocus : {
            type : Boolean,
            default : false
        },
        loading : {
            type : Boolean,
            default : false
        },
        color : {
            type : String
        },
        icon : {
            type : String,
            required : false
        }
    },
    methods : {
        handleClick (event : Event) {
            if(! (this.$props.disabled || this.$props.loading) ) {
                this.$emit('click',event)
            }
        }
    },
    setup(props : any) {
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
        const styles = {} as { color?: string; backgroundColor?: string; borderColor?: string };
        if (props.color) {
            styles.color = (props.plain || props.text) ? props.color : 'white'
            styles.backgroundColor = (props.plain || props.text) ? 'transparent' : props.color
            styles.borderColor = (!props.text) ? props.color : 'transparent'
        }
        return {
            classNames,
            styles
        }
    },
    render() {
        return h('div' , {class : this.classNames , style : this.styles , autofocus : this.$props.autoFocus , onClick : this.handleClick},[
            this.$props.loading ? h('i', { class: 'st-icon--loading' }) : null,
            !this.$props.loading && this.$props.icon ? h('i', { class: this.$props.icon } ) : null,
            h('span', {}, h('slot', {} , this.$slots ))
        ] )
    }
})
export default StButton;