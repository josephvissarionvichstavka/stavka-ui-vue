import {defineComponent , h} from 'vue'
import {createNamespace} from "../../../utils/namespace";
const StTabNav = defineComponent({
    name : createNamespace('tab-nav'),
    props : {
        left : Number,
        width : Number,
        list : {
            type : Array,
            default : []
        },
    },
    methods : {
      handleClick (index : number) {
          this.$emit('gotoIndex' , index)
      }
    },
    render() {
        return h('div' , {class : 'st-tab--nav'} ,[
            this.$props.list.map((item : any , index : number) => {
                return  h('span' , {class : ['st-tab--nav--item' , item.disabled && 'disabled'] ,
                    onClick : () => this.handleClick(index) } , item.title)
            }),
            h('span' , {class : 'st-tab--nav--bar' , style : `left : ${this.left}%;width : ${this.width}%;`})
        ])
    }
})

export default StTabNav;
