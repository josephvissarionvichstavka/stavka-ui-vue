import {defineComponent , h} from 'vue'

const StProgress = defineComponent({
    name : 'st-progress',
    props : {
        value : {
            type : [String , Number],
            default : '0'
        },
        type : {
            type : String ,
            default : 'line'
        },
        width : {
            type : String,
            default : '6px'
        },
        status : {
            type : String,
        },
        color : String,
        format : Function,
    },
    data () {
        return {
            valueThis : this.$props.value
        }
    },
    watch : {
      value (newValue) {
          if (newValue > 100) {
              this.valueThis = '100'
          }else {
              this.valueThis = newValue
          }
      }
    },
    render() {
        return h('div', { class: ['st-progress', `st-progress--type--${this.$props.type}`] }, [
            this.$props.type === 'line' && h('div', { class: 'st-progress--bar' }, [
                h('div', { class: 'st-progress--line' , style : `height:${this.$props.width};`}, [
                    h('div', { class: ['st-progress--other', `st-progress--${this.$props.status}` ] ,
                        style : `color:${this.$props.color};width:${this.$props.value}%;` })
                ])
            ]),
            this.$props.type === 'circle' && h('svg' , {style : `width: 100%;height : 100%;`},[
                h('circle' , {cx : 70 , cy : 70 , r : 70 , 'stroke-width' : this.$props.width , 'stroke-dashoffset': 0}),
                h('circle' , {cx : 70 , cy : 70 , r : 70 ,
                    style : `stroke-dashoffset : ${440 - Number(this.valueThis) * 440/100};`,
                    'stroke-width' : this.$props.width , class : `st-progress--${this.$props.status}` }),
            ]),
            h('div', { class: 'st-progress--text' }, [
                this.$props.format ?  h('i', {} , this.$props.format(this.valueThis)) :
                    (this.$props.status ?  h('i' , {class : `st-icon--${this.$props.status}`}) :
                        h('i' , `${this.valueThis}%`))
            ])
        ]);
    }
})

export default StProgress;
