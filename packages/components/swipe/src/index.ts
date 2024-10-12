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
            default : 3000
        },
        arrows : {
            type : String,
            default : 'default'
        },
    },
    watch : {
        currentIndex ( newValue) {

            console.log(newValue)
        }
    },
    computed : {
      list () : any[] {
          const ImageList : any[] = []
          this.$slots.default().map((item , index) => {
              if ((item.type as Component).name === 'st-swipe-item') {
                 ImageList.push(     h('div' , {class : 'st-swipe--image' ,
                     style : this.translate(index)} , item.children));
              }
          })
          return ImageList;

      },
        Nav () : any[] {
            const selectItem = []
            for (let i = 0;i < this.list.length;++i) {
                const classList : string[] = [
                    'st-swipe--select--item',
                    (this.currentIndex === i) ? 'checked' : ''
                ]
                selectItem.push(h('div' , {class :  classList, onClick : () => this.gotoIndex(i)}))
            }
            return selectItem;
        },
        styles () : any {
          return {
              width: this.$props.width,
              height: this.$props.height
          }
        },

    },
    methods : {
        gotoIndex (index : number) {
            this.stop();
            if (index === -1) index = this.list.length - 1
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
            clearTimeout(this.timer);
            this.timer = 0;
        },
        start () {
            if (this.$props.autoplay) {
                this.timer = setTimeout(() => {
                    this.gotoIndex(this.currentIndex + 1 )
                }, this.$props.interval)
            }
        },
        translate (index : number) : string {
            return `transform:translateX(${-(index - this.currentIndex) * 100}%); transition: all 2s;`
        }
    },
    data () {
      return {
          currentIndex : this.$props.initIndex && 0,
          timer : 0,
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
            h('div', { class: 'st-swipe--background' }),
            h('div', { class: 'st-swipe--main' }, [
                h('div', { class: 'st-swipe--image-box' }, [
                    ...this.list
                ]),
                h('div', { class: 'st-swipe--select' , ref : 'select' } , [
                    ...this.Nav
                ]),
                h('div', {
                    class: 'st-swipe--label st-swipe--left',
                    onClick: () => this.gotoIndex(this.currentIndex - 1 )
                }, [
                    h('i', {class: 'st-icon--left'})
                ]),
                h('div', {
                    class: 'st-swipe--label st-swipe--right',
                    onClick: () => this.gotoIndex(this.currentIndex + 1)
                }, [
                    h('i', {class: 'st-icon--right'})
                ])
            ])
        ])

    }
})

export default StSwipe;
