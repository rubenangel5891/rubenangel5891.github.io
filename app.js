/*const app = Vue.createApp({
	template: '<h2>Hello with Vue CDN</h2>'
});
app.mount("#app")
*/

const { createApp } = Vue
const { createVuetify } = Vuetify

const vuetify = createVuetify()

const app = createApp()
app.use(vuetify).mount('#app')