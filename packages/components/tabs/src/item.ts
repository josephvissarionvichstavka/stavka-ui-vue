import {defineComponent , h} from 'vue'
const StTabItem = defineComponent({
    name : 'st-tab-item',
    props : {
        title : String,
        disabled : Boolean,
        closeAble : Boolean,
    }
})
export default StTabItem;
