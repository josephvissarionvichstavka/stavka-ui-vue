import {defineComponent , h  , Component} from 'vue'
import StTabNav from "./nav";
const StTabs = defineComponent({
    name : 'st-tabs',
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
            if (this.$slots !== null && this.$slots.default) {
                this.$slots.default().map(node => {
                    if ((node.type as Component).name  ==='st-tab-item') {
                        const item : any = {
                            title : node.props ? node.props.title : 'title' ,
                            content : node.children ? node.children : 'content',
                            disabled : this.$props.disabled ||( node.props ? node.props.disabled : false)
                        }
                        list.push(item)
                    }
                })
            }
            if (this.$props.newItem) {
                list.push({
                    title : '+',
                    content : '',
                    disabled : this.disabled
                })
            }
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
