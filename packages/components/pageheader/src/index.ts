import {defineComponent , h} from 'vue'
import {createNamespace} from "../../../utils/namespace";

const StPageHeader =  defineComponent({
    name : createNamespace('page-header'),
    props : {
        title : {
            type : String,
            default : '返回'
        },
        content : {
            type : String,
            default : '本页'
        }
    },
    render () {
        return h('div' , {class : 'st-page-header'},[
            h('span' , {class : 'st-page-header--left'} , [
                h('i' , {class : 'st-icon--left'}),
                h('span' , {class : 'st-page-header--title'} , this.$props.title)
            ]),
            h('span', {class : 'st-page-header--right'} , this.$props.content)
        ])
    }
})

export default StPageHeader;
