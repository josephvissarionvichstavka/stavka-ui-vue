import {defineComponent, h} from 'vue'

const StPopup = defineComponent({
    name : 'st-popup',
    props : {
        show : {
            type : Boolean,
            default : false
        },
        overplay : Boolean,
        position : {
            type : String,
            default : 'left'
        },
        closeAble : Boolean,
        closeIcon : {
            type : String,
            default : 'close'
        },
        round : Boolean
    },
    methods : {
        handleClick () {
            this.$emit('update:show',!this.overplayThis)
        }
    },
    emits : ['update:show'],
    computed : {
        overplayThis () : boolean {
            return this.$props.overplay && this.$props.show
        },
        classList () : string[] {
            return [
                'st-popup',
                this.$props.show ? `active--${this.$props.position}` : '',
                'st-popup--' + this.$props.position,
                this.$props.position && this.$props.round ? `round--${this.$props.position}` : ''
            ]
        }
    },
    render() {
        return h('div' , {} , [
            h('div' , {class : this.classList} , [
                h('div' , {class : 'st-popup--default'} ,this.$slots),
                this.$props.closeAble &&
                h('i' , {class : [`st-icon--${this.$props.closeIcon}` , 'st-popup--close'] , onClick : this.handleClick}),

            ]) ,
            this.overplayThis && h('div' , {class : 'st-overplay', onClick : this.handleClick})
        ])
    }
})

export default StPopup;
