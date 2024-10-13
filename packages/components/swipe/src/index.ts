import {Component, defineComponent, h} from 'vue'

const StSwipe = defineComponent({
    name : 'st-swipe',
    props : {
        width : {
            type : String,
            default : '400px'
        },
        height : {
            type : String,
            default : '300px'
        },
        initIndex : {
            type : Number,
            default : 0
        },
        autoplay : {
            type : Boolean,
            default : true
        },
        interval : {
            type : Number,
            default : 1000
        },
    },
    computed : {
        length () : any[] {
            const length: any[] = []
            if (this.$slots && this.$slots.default) {
                this.$slots.default().map((item) => {
                    if ((item.type as Component).name === 'st-swipe-item') {
                        length.push(    item.children);
                    }
                })
            }
            return length;
        },
      list () : any[] {
            const list: any[] = []
          this.length.forEach((item, index) => {
              list.push(h('div', {class : ['st-swipe--image',(index - this.currentIndex === 0) && 'active', this.animal(index) && 'animal'], style : this.translate(index)} , item))
          })

          return list;
      },
        Nav () : any[] {
            const selectItem: any[] = []
            this.length.forEach((item , index) => {
                selectItem.push(h('div', {
                    class : ['st-swipe--select--item',(index - this.currentIndex === 0) && 'checked'],
                onclick : () => this.gotoIndex(index)}))
            })
            return selectItem;
        },
        styles () : any {
          return {
              width: this.$props.width,
              height: this.$props.height
          }
        },
        translates () : number[] {
            const int : any[] = []
            this.length.forEach((item , index) => {
                int.push((index - Math.floor(this.length.length / 2))  * 100)
            })
            return int
        }

    },
    mounted() {
        this.$props.autoplay && this.start();
    },
    methods : {
        gotoIndex (index : number) {
            this.stop();
            if (index === -1) index = this.list.length - 1
            this.right = index >= this.currentIndex;
            this.currentIndex = index % this.list.length
        },
        handleMouseMove() {
            this.stop();
        },
        handleMouseOver() {
            this.stop();
        },
        handleMouseOut () {
            this.start();
        },
        stop () {
            clearInterval(this.timer);
            this.timer = 0;
        },
        start () {
            if (this.$props.autoplay) {
                this.timer = setInterval(() => {
                    if (this.right) {
                        this.currentIndex = (this.currentIndex + 1) % this.length.length;
                    }else {
                        this.currentIndex = (this.currentIndex - 1 + this.length.length) % this.length.length;
                    }
                }, this.$props.interval)
            }
        },
        translate (index : number) : any {
            const translate = (index - this.currentIndex + this.length.length + Math.floor(this.length.length / 2)) % this.length.length;

            return `transform:translateX(${this.translates[translate]}%);`
        },
        animal (index : number) : boolean {
            if (this.right) {
                return ((index - this.currentIndex === 0)
                    || ((index - this.currentIndex + this.length.length) % this.length.length - this.length.length === -1 ))

            }else {
                return ((index - this.currentIndex === 0)
                    ||  ((index - this.currentIndex + this.length.length) % this.length.length === 1 )  )
            }
        }
    },
    data () {
      return {
          currentIndex : this.$props.initIndex ? this.$props.initIndex : 0,
          timer : 0,
          right : false
      }
    },
    render() {
        return h('div', {
            class: 'st-swipe',
            onMousemove: this.handleMouseMove,
            onMouseover: this.handleMouseOver,
            onMouseout: this.handleMouseOut,
            style : this.styles
        }, [
            h('div', { class: 'st-swipe--main' }, [
                h('div', { class: 'st-swipe--image-box' }, [...this.list]),
                h('div', { class: 'st-swipe--select' , ref : 'select' } , [...this.Nav]),
                h('div', {class: 'st-swipe--label st-swipe--left', onClick: () => this.gotoIndex(this.currentIndex - 1 )}, [h('i', {class: 'st-icon--left'})]),
                h('div', {class: 'st-swipe--label st-swipe--right', onClick: () => this.gotoIndex(this.currentIndex + 1)}, [h('i', {class: 'st-icon--right'})])
            ])
        ])
    }
})

export default StSwipe;
