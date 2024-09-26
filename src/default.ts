import {makeInstall} from './install'
import {version} from "./version";
import components from "./components";
import plugin from "./plugin";
const width = document.documentElement.scrollWidth;
const height = document.documentElement.scrollHeight;
document.documentElement.style.setProperty('--st-windows-width' , width + 'px');
document.documentElement.style.setProperty('--st-windows-height' , height + 'px');
const install = makeInstall([...components , ...plugin]);
export default {
    install : install,
    version : version,
    ...components
};
