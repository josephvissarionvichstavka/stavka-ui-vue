import {defineComponent , h} from 'vue'
import {createNamespace} from "../../../utils/namespace";
const StCard = defineComponent({
    name: createNamespace('card'),
    props : {
        title : String,
        description : String,
        color : String
    },
    setup(props) {
        const styles = {
            background : (props.color && props.color !== 'white') ? props.color : ''
        }
        return {
            styles
        }
    },
    render() {
        return h('div' , {class : 'st-card'} , [
            h('div' , {class : 'st-card--canvas'} , [
                h('div' , {class : 'tr-1 tracker'}),
                h('div' , {class : 'tr-2 tracker'}),
                h('div' , {class : 'tr-3 tracker'}),
                h('div' , {class : 'tr-4 tracker'}),
                h('div' , {class : 'tr-5 tracker'}),
                h('div' , {class : 'tr-6 tracker'}),
                h('div' , {class : 'tr-7 tracker'}),
                h('div' , {class : 'tr-8 tracker'}),
                h('div' , {class : 'tr-9 tracker'}),
                h('div' , {class : 'tr-10 tracker'}),
                h('div' , {class : 'tr-11 tracker'}),
                h('div' , {class : 'tr-12 tracker'}),
                h('div' , {class : 'tr-13 tracker'}),
                h('div' , {class : 'tr-14 tracker'}),
                h('div' , {class : 'tr-15 tracker'}),
                h('div' , {class : 'tr-16 tracker'}),
                h('div' , {class : 'tr-17 tracker'}),
                h('div' , {class : 'tr-18 tracker'}),
                h('div' , {class : 'tr-19 tracker'}),
                h('div' , {class : 'tr-20 tracker'}),
                h('div' , {class : 'tr-21 tracker'}),
                h('div' , {class : 'tr-22 tracker'}),
                h('div' , {class : 'tr-23 tracker'}),
                h('div' , {class : 'tr-24 tracker'}),
                h('div' , {class : 'tr-25 tracker'}),
                h('div', {class : 'st-card--inner' , style : this.styles} , [
                    this.$props.description && h('div' , {class : 'st-card--description'} , this.$props.description),
                    h('div',{class : 'st-card--card' + (this.$props.description ? ' st-card--card--opacity' : '')},[
                        this.$props.title &&  h('div' , {class : 'st-card--title'} , this.$props.title),
                        h('div' , {class : 'st-card--article'} , this.$slots)
                    ])
                ])
            ])
        ])
    }
})
export default StCard;
