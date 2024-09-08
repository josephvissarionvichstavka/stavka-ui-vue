import {defineComponent , h} from 'vue'
const StMain = defineComponent({
    name: "st-main",
    render () {
        return h('div' , {class : 'st-main'} , this.$slots)
    }
})
export default StMain;