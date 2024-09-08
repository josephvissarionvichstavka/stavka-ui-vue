import {App} from 'vue'
import StButton from "../packages/components/button";
import StMain from "../packages/components/main";
import StFooter from "../packages/components/footer";
import StHeader from "../packages/components/header";
import StAside from "../packages/components/aside";
import StButtonGroup from "../packages/components/buttongroup";
import StContainer from "../packages/components/container";
import StRow from "../packages/components/row";
import StCol from "../packages/components/col";
import StIcon from "../packages/components/icon";
import StLink from "../packages/components/link";
import StImage from "../packages/components/image";
import StTag from "../packages/components/tag";
import StCard from "../packages/components/card";
import StEmpty from "../packages/components/empty";
const version = "0.1.0";
const components = [
    StButton,
    StButtonGroup,
    StContainer,
    StMain,
    StAside,
    StHeader,
    StFooter,
    StRow,
    StCol,
    StIcon,
    StLink,
    StImage,
    StTag,
    StCard,
    StEmpty
];
const makeInstall = (components :any[] = []) => {
    const install = (app : App  , options? : {}) => {
        components.forEach(component => {
            app.use(component)
        })
    }
    return {
        install
    }
}
const install = makeInstall([...components]);
export default {
    install : install,
    version : version,
    ...components
};