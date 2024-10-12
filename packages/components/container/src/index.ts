import {Component, computed, defineComponent, h, useSlots} from 'vue'
const StContainer = defineComponent({
    name: 'st-container',
    props : {
        description : {
            type : String,
            default : ''
        }
    },
    setup(props : any) {
        const slots = useSlots()
        const isH5 = computed(() => {
            if (props.direction === 'vertical') {
                return true;
            } else if (props.direction === 'horizontal') {
                return false;
            } else {
                return slots && slots.default ?
                    slots.default().some(node => {
                        const name = (node.type as Component).name;
                            return name === 'st-header' || name === 'st-footer'
                        }) : false;
            }
        })
        const classNames = [
            'st-container',
            isH5.value ? 'top-to-bottom' : ''
        ]
        return {
            classNames
        }
    },
    render () {
        return h('div' , {class : this.classNames} , this.$slots)
    }
})
export default StContainer;
