import {defineComponent , h} from 'vue'

const StIcon = defineComponent({
    name : 'st-icon',
    props : {
        name : {
            type : String,
            default : 'default'
        }
    },
    setup(props) {
        const classNames = [
            'st-icon',
            props.name ? 'st-icon--' + props.name : ''
        ];
        return {
            classNames
        }
    },
    render() {
        return h('div' ,{class : this.classNames})
    }
})

export default StIcon;
