import Vue from "vue"; 
import Vuex from "vuex"; 

Vue.use(Vuex); 

const store = new Vuex.Store({
    state : {
        selectedItems : []
    },
    mutations: {
        addItem(state, payload){
            state.selectedItems.push(payload); 
        }, 
        removeItem(state){
            state.selectedItems.pop();
        }
    },
    getters : {
        getSelectedItems(state){
            return state.selectedItems;
        }
    }
})
export default store; 