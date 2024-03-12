import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode : 'history', 
    routes :[
    {
        path : '/', 
        component : () => import ('@/components/HomeComponent.vue')
    }, 
    {
        path : '/balance-game', 
        name : 'balance-game', 
        component : () => import ('@/components/BalanceGame.vue')
    }, 
    {
        path : '/end', 
        name : 'balance-game-end', 
        component : () => import ('@/components/FinalPage.vue')
    }

]
})
export default router;