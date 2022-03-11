import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import Carousel3d from 'vue-carousel-3d';
import api from '../services/api';
import VueSweetalert2 from 'vue-sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/dist/vuetify.css';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);
Vue.use(Vuetify);
Vue.use(Carousel3d);
Vue.prototype.$http = api;

Vue.config.productionTip = false;
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  timer: 1800,
  timerProgressBar: true,
  showConfirmButton: false,
});

window.Toast = Toast;

export default new Vuetify({ icons: { iconsfont: 'md' || 'fa' || 'v-icon' } });
