import {makeInstall} from './install'
import {version} from "./version";
import components from "./components";
import plugin from "./plugin";
const install = makeInstall([...components , ...plugin]);
export default {
    install : install,
    version : version,
    ...components
};
