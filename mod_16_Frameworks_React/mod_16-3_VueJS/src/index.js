import Count from './components/Count.js';

const {createApp} = Vue;

const app = createApp();

app.component('App', {
    data() {
        const message = ('Hello Alena Consul-adviser!');
        return {
            message
        }
    },
    template: `
        <p>{{ message }}</p>
        <Count />
        <Count />
        <Count />
        `
})

app.component('Count', Count);

app.mount('#app');