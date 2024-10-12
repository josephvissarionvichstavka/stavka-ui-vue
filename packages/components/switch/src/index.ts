import {defineComponent , h} from 'vue'

const StSwitch = defineComponent({
    name : 'st-switch',
    props : {
        value : {
            type : Boolean,
            default : false
        },
        disabled : Boolean,
        activeValue: {
            type: Boolean,
            default: true
        },
        inactiveValue: {
            type: Boolean,
            default: false
        },
        size : {
            type: String,
            default : 'default'
        },
        activeText: String,
        inactiveText: String,
        activeColor : String,
        inactiveColor : String,
        border : {
            type : Boolean,
            default : true
        }
    },
    data () {
        return {
            isActive : this.$props.value
        }
    },
    methods : {
        handleClick() {
            if (!this.$props.disabled) {
                this.isActive = !this.isActive;
                this.$emit('update:value', this.isActive);
                this.$emit('change', this.isActive);
            }
        }
    },
    render() {
        return h('div' , {class : ['st-switch', this.$props.disabled && 'disabled']} , [
            h('input' , {type : 'checkbox' , style : 'display : none;'}),
            h('span' , {class : ['st-switch--label','st-switch--label--left', this.$props.inactiveValue === this.isActive && 'activeLabel']} , this.$props.inactiveText ),
            h('div' , {class : ['st-switch--switch' , this.isActive && 'activeSwitch' , `st-switch--switch--${this.$props.size}`,this.$props.border && 'border'],
                onClick : this.handleClick , style : this.isActive ? `background-color : ${this.$props.activeColor}` : `background-color : ${this.$props.inactiveColor}`} , [
                h('div' , {class : ['st-switch--switch--center' ,this.isActive && 'activeBall',this.$props.border && 'border'] })
            ]),
            h('span' , {class : ['st-switch--label','st-switch--label--right', this.$props.activeValue === this.isActive && 'activeLabel']} , this.$props.activeText ),
        ])
    }
})

export default StSwitch;
