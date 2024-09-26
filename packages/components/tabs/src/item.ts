import {defineComponent , h} from 'vue'
import {createNamespace} from "../../../utils/namespace";
const StTabItem = defineComponent({
    name : createNamespace('tab-item'),
    props : {
        title : String,
        disabled : Boolean,
        closeAble : Boolean,
    }
})
export default StTabItem;
