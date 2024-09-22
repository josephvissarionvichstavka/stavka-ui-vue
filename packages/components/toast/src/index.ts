import {defineComponent , h} from 'vue'
import {createNamespace} from "../../../utils/namespace";

const StToast = defineComponent({
    name : createNamespace('toast'),
    props : {
        type : {
            type: String,
            default : 'default'
        },
        message : String,
        icon : String,
        loading : Boolean,
        timeout : {
            type : Number,
            default : 3000
        }
    },
    data() {
        return {
            show:  true,
            timer : 0
        }
    },
    methods : {
        startTimer () {
            if (this.timeout > 0) {
                this.timer = setTimeout(() => {
                    this.show = false
                    document.documentElement.style.removeProperty('--st-point-events' )
                } , this.$props.timeout)
            }
        },
        loadingCreate () {
            if (this.$props.loading || this.$props.icon === 'loading') {
                document.documentElement.style.setProperty('--st-point-events' , 'none')
            }
        },
        handleClick () {
            this.show = false
        }
    },
    mounted() {
        this.startTimer()
        this.loadingCreate()
    },
    render() {
        return this.show ? (
            h('div' , {class : ['st-message' , 'st-message--' + this.$props.type] , onClick : this.handleClick} , [
                h('div' , {class : 'st-message--icon'} , [
                    this.$props.loading ? h('i' , {class : 'st-icon--loading'}) :
                    h('i' , {class : 'st-icon--' + this.$props.icon})
                ]),
                h('div' , {class : 'st-message--message'} , this.$props.message || this.$slots)
            ] )
        ) : null
    }
})

export default StToast;
