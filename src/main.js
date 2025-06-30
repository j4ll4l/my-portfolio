import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { Icon } from '@iconify/vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  VueGtag  from "vue-gtag-next";
AOS.init({duration:1000});

const app = createApp(App);

app.use(VueGtag, {
  property: {
    id: 'G-KXK2QNBFEF'
  }
});

app.component('Icon', Icon);

app.mount('#app');
