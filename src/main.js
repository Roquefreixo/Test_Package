import { createApp } from 'vue'
//import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue';

const app = createApp(HelloWorld);

app.mount('#app');

export { HelloWorld };
