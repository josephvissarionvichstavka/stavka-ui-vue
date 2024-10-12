import {defineComponent , h} from 'vue'

const StPagination = defineComponent({
    name : 'st-pagination' ,
    props : {
        pageSize : { // 每页的条数
            type : Number,
            default : 10
        },
        pageTotal : { // 总条数
            type : Number,
            default : 1
        },
        pageCount : { // 总页数
            type : Number,
        },
        value : { // 当前页
            type : Number,
            default : 1
        },
        prevText : {
            type : String,
            default : '上一页'
        },
        nextText : {
            type : String,
            default : '下一页'
        },
        hiddenOnSinglePage : Boolean,
        border : Boolean

    },
    computed : {
        pageSizeW () : number {
            return (this.$props.pageCount) ? this.$props.pageCount :
                (this.$props.pageTotal / this.$props.pageSize + 1)
        },
        pages () : number[] {
            const pages = []
            for (let i = 0; i < this.pageSizeW; i++) {
                pages.push(i + 1)
            }
            if (this.pageSizeW < 7) {
                return pages;
            }else if (this.$props.value > this.pageSizeW - 7) {
                return pages.slice(this.pageSizeW - 7 , this.pageSizeW);
            }else if (this.$props.value > 3) {
                return pages.slice(this.$props.value - 4, this.$props.value + 3)
            }else {
                return [];
            }
        },
        single () : boolean {
            if (this.$props.hiddenOnSinglePage && this.pages.length === 1) {
                return false;
            }
            return true;
        }
    },
    methods : {
        handleClick (page : number) {
            page = Math.max(1, page)
            page = Math.min(this.pageSizeW , page)
            if (page !== this.$props.value && page !== 0) {
                this.$emit('change:value' , page)
                this.$emit('input:value' , page)
            }
        }
    },
    render() {
        return h('div' , {class : ['st-pagination' , this.$props.border && 'st-pagination--border']} , [
            this.single && h('ul' , {},[
                h('li' , {class : ['st-pagination--item' ,this.$props.value === 1 && 'st-pagination--disabled'],
                    onClick : this.handleClick(this.$props.value - 1)} , [
                    h('i' , {class : 'st-icon--left' }),
                    h('span' ,  { disabled : this.$props.value === 1 } , this.$props.prevText)
                ]),
                this.pages.map(item => {
                        return  h('li' , {class : 'st-pagination--item', onClick : this.handleClick(item)}, [
                            h('span' , {} , item)
                        ])
                    }),
                h('li' , {class : ['st-pagination--item',this.$props.value === this.pageSizeW && 'st-pagination--disabled'], onClick : this.handleClick(this.$props.value - 1)} , [
                    h('i' , {class : 'st-icon--right' }),
                    h('span' , { disabled : this.$props.value === this.pageSizeW} , this.$props.nextText)
                ]),
            ])
        ])
    }
})

export default StPagination;
