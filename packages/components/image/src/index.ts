import {defineComponent , h} from 'vue'

const StImage = defineComponent({
    name : 'st-image',
    props : {
        src : {
            type : String,
            default : ''
        },
        fit : {
            type : String,
            default: 'fill'
        },
        alt : {
            type : String,
            default : ''
        },
        position : {
            type : String,
            default : 'center'
        },
        width : {
            type : String,
            default : '100px'
        },
        height : {
            type : String,
            default : '100px'
        },
        radius : {
            type : String
        },
        circle : {
            type : Boolean,
            default : false
        },
        block : {
            type : Boolean,
            default : false
        },
        lazyLoad : Boolean,
        showError : Boolean,
        showLoading : Boolean,
        crossOrigin : {
            type : String,
            default : 'anonymous'
        },
        referrerPolicy : {
            type : String,
            default : 'unsafe-url'
        }
    },
    setup(props) {
        const classNames = [
            'st-image',
            props.circle ? 'st-image--circle' : '',
            props.block ? 'st-image--block' : ''
        ]
        const styles = {
            objectFit : props.fit,
            OObjectPosition : props.position,
            width : props.width ? props.width : (props.circle && props.height) ? props.height : '',
            height : props.circle ? props.width : props.height ,
            borderRadius : props.radius,
            crossOrigin : props.crossOrigin ,
            referrerPolicy : props.referrerPolicy
        }
        return {
            classNames,
            styles
        }
    },
    render () {
        return h('div' , {class : this.classNames}, [
            h('img' , {class : 'st-image--inner' , alt : this.$props.alt , src : this.$props.src , style : this.styles })
        ])
    }
})

export default StImage