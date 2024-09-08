import {defineComponent , h} from 'vue';
const StButtonGroup = defineComponent({
    name : 'st-button-group',
    setup() {
        const classNames = [
            'st-button-group'
        ]
        return {
            classNames
        }
    },
    render() {
        console.log(this)
        return h('div' , {class : this.classNames},[
            h('slot', {} , this.$slots )
        ] )
    }
})
export default StButtonGroup;