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
        const trackers = []
        for (let i = 0; i < 25; i++)
            trackers.push(h('div',{class : `tr-${i} tracker`}))
        return h('div' , {class : 'st-card'} , [
            h('div' , {class : 'st-card--canvas'} , [
                ...trackers,
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
