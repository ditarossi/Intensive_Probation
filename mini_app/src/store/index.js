import vue from "vue";
import vuex from "vuex";
import user from "@/store/user";

vue.use(vuex);

const store = new Vuex.store({
    modules : {
        user,
    }
})

export default store;