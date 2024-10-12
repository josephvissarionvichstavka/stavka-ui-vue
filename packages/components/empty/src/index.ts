import {defineComponent , h} from 'vue'
const defaultEmpty = h('svg', {width : 100 , height : 100 } , [
    h('polygon' , {points : '20,60 40,40 40,80 20,100', fill : '#6e6c6f'}),
    h('rect', {x : 40 , y :40 , width : 40 , height : 40 ,fill : '#807e81'}),
    h('polygon' , {points : '60,60 80,40 80,80 60,100' , fill : '#6e6c6f'}),
    h('polygon' , {points : '60,60 80,40 95,45 75,65' , fill : '#c7c4c9'}),
    h('rect', {x : 20 , y : 60 , width : 40 , height : 40 , fill : '#807e81'}),
    h('polygon' , {points : '20,60 60,60 50,75 10,75' , fill : '#c7c4c9'}),
])
const StEmpty = defineComponent({
    name : 'st-empty',
    props : {
        image : {
            type : String,
        },
        imageSize : {
            type : String,
        },
        description : String
    },
    setup(props) {
        const styles = {
            width: props.image ? props.imageSize ? props.imageSize : '100px' : '',
            height : props.image ? props.imageSize ? props.imageSize : '100px' : ''
        }
        return {
            styles
        }
    },
    render () {
        return h('div' , {class : 'st-empty' ,style : this.styles } , [
            this.$props.image ? h('img' , {src : this.$props.image}) : defaultEmpty,
            h('div' , {class : 'st-empty--description'} , this.$props.description || 'empty'),
            h('div' ,{} , this.$slots)
        ])
    }
})


export default StEmpty;
