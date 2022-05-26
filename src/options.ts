import './index.css'
import { createApp } from 'vue'
import Options from './components/Options.vue'
import Toast, { PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(Options)
const options: PluginOptions = {}
app.use(Toast, options);
app.mount('#root')

