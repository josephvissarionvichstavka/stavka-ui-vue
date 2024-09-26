import {defineComponent , h ,VNodeTypes} from 'vue'
import {createNamespace} from "../../../utils/namespace";
import StTabNav from "./nav";
import StTabItem from "./item";
import nav from "./nav";
import item from "./item";
const StTabs = defineComponent({
    name : createNamespace('tabs'),
    methods : {
      handleClick (index : number) {
          if (!this.list[index].disabled) {
              this.left = (index) * this.width
              this.indexX = index
          }
          if (this.$props.newItem && index === this.list.length - 1) {
              this.$emit('addItem', {
                  title : 'app',
                  content : '',
                  disabled : false
              })
          }
      }
    },
    props : {
        card : Boolean,
        disabled : Boolean,
        borderCard : Boolean,
        newItem : Boolean,
    },
    computed : {
        list () : Array<any> {
            const list: any[] = []
            if (this.$slots && this.$slots.default) {
                this.$slots.default().forEach(node => {
                    // @ts-ignore
                    if ('st-tab--item' === node.type.name) {
                        const item : any = {
                            title : node.props ? node.props.title : 'title' ,
                            content : node.children ? node.children : 'content',
                            disabled : this.$props.disabled ||( node.props ? node.props.disabled : false)
                        }
                        list.push(item)
                    }
                })
            }
            list.push({
                title : '+',
                content : '',
                disabled : this.disabled
            })
            return list;
        },
        width(){
            return (100 / this.list.length)
        }
    },
   data() {
     return {
         left : 0,
         indexX : 0
     }
   },
    render () {
        return h('div' , { class : ['st-tab' ,this.$props.borderCard && 'st-tab--card',this.$props.disabled && 'disabled']  } , [
            h('div' ,{class : 'st-tab--warp'} , [
               h(StTabNav , {left : this.left , width : this.width , list : this.list, newItem : this.$props.newItem,
                   onGotoIndex : this.handleClick }),
            ]),
            h('div' ,{class : 'st-tab--content'} , [
                this.list.map((item ,index) => {
                    return h('div' , {class : 'st-tab--pane' , style : (this.indexX !== index) && 'display : none;'} , item.content)
                }),
            ])
        ])
    }
})

export default StTabs;
