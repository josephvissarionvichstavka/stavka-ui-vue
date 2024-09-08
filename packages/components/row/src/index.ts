import {defineComponent , h} from '@vue/runtime-core'

const StRow = defineComponent({
    name: "st-row",
    props : {
        gutter: {
            type: Number,
            default: '0'
        },
        type: String,
        justify: {
            type: String,
            default: 'start'
        }
    },
    setup(props : any) {
        const classNames = [
            'st-row' ,
            props.type ? 'st-row--' + props.type : '',
            props.justify ? 'st-row-justify--' + props.justify : ''
        ]

        return {
            classNames
        }
    },
    render () {
        const gutter = this.$props.gutter ? this.$props.gutter : 0

        document.documentElement.style.
        setProperty('--st-row-gutter', (gutter / 24 * 100 / 2).toFixed(1) + '%');
        return h('div' , {class : this.classNames} , this.$slots)
    }
})
export default StRow;