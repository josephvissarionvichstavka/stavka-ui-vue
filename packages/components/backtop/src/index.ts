import {defineComponent , h , ref , watchEffect} from 'vue'
import {createNamespace} from "../../../utils/namespace";

const StBackTop = defineComponent({
    name : createNamespace('back-top'),
    props : {
        image : String
    },
    setup(props) {
        const handleClick = (event : Event) => {
            window.scrollTo({top: 0, behavior: "smooth"});
        }
        const classNames = [
            'st-back-top',
            props.image ? '' : 'st-back-top--default'
        ]
        return {
            handleClick,
            classNames
        }
    },
    mounted() {
        const draggable : HTMLElement = this.$refs.draggable as HTMLElement;
        let offsetX : number, offsetY : number;

        draggable.addEventListener('mousedown', (e : MouseEvent) => {
            offsetX = e.clientX - draggable.offsetLeft;
            offsetY = e.clientY - draggable.offsetTop;
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });

        function onMouseMove(e : MouseEvent) {
            draggable.style.left = e.clientX - offsetX + 'px';
            draggable.style.top = e.clientY - offsetY + 'px';
        }

        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
    },
    render() {
        console.log(this.$slots)
        return h('div' , {class : this.classNames , onClick : this.handleClick, ref : "draggable",} , [
            this.$props.image ? h('img' , {src : this.$props.image , class : 'st-back-top--image'}) :
            !this.$slots ? h('i' , {class : 'st-icon--top'} ) : h('slot' , {} , this.$slots)
        ])
    }
})

export default StBackTop;
