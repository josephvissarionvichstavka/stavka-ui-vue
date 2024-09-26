import {defineComponent , h} from 'vue'
import {createNamespace} from "../../../utils/namespace";

const StBadge = defineComponent({
    name : createNamespace('badge'),
    props : {
      value : [String, Number],
      max : {
          type : Number,
          default: 99
      },
      type : {
          type:  String,
          default : 'default'
      },
        isDot : Boolean,
        hidden : Boolean
    },
    computed : {
      content () : any{
          if (!this.$props.isDot && (!this.value || this.value === '')) return 0;
          if (typeof this.$props.value === 'number'){
              const {value, max} = this.$props;
              return value > max ? `${max}+` : value;
          }else {
              return this.value;
          }

      }
    },
    render() {
        return h('div' , {class : 'st-badge'} , [
            h('slot' , {} , this.$slots),
            (this.$props.hidden  || this.content === 0) ? null :
            h('sup' , {class : ['st-badge--content' , 'st-badge--' + this.$props.type , this.$props.isDot && 'dot']} , this.content)
        ])
    }
})

export default StBadge;
