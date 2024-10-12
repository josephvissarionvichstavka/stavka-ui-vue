import {defineComponent , h} from 'vue'

const StOverplay = defineComponent({
    name : 'st-overplay',
    props : {
        show : {
            type : Boolean,
            default : false
        },
        zIndex : {
            type : Number,
            default : 1
        },
    },
    methods : {
      handleClick (event : Event) {
          this.$emit('click' , event)
      }
    },
    render() {
        return this.$props.show ? h('div' , {class : 'st-overplay' , style : `z-index : ${this.zIndex};`,onClick : this.handleClick} , this.$slots) :
            h('div' , {})
    }
})

export default StOverplay;
