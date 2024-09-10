import {defineComponent , h , ref} from 'vue'

const StBackTop = defineComponent({
    name : 'st-back-top',
    methods : {
        handleClick(event : Event) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        },
        initDraggable() {
            const draggable : any= this.$refs.draggable;
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
    },
    mounted() {
        this.initDraggable();
    },
    render() {
        return h('div' , {class : 'st-back-top' , onClick : this.handleClick, ref : "draggable"} , [
            !this.$slots ? h('i' , {class : 'st-icon--top'} ) : h('span' , {} , this.$slots)
        ])
    }
})

export default StBackTop;