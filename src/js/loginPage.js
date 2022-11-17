import axios from "axios";
import {mapGetters} from "vuex";
export default{
    name : 'loginPage',
    data() {
        return {
            accData: {
                email : "",
                password : '',
            },
            userStatus : false,
        }
    },
    computed: {
      ...mapGetters(["storedToken","storedUserData"])
    },
    methods: {
        home(){
            this.$router.push({
                name : 'homePage'
            })
        },
        loginPage(){
            this.$router.push({
                name : 'loginPage'
            })
        },
        loginProcess(){
            axios.post("http://127.0.0.1:8000/api/user/login",this.accData).then((response) => {
                if(response.data.token == null){
                    this.userStatus = true ;
                }else{
                    this.userStatus = false;
                    this.$store.dispatch("setToken", response.data.token);
                    this.$store.dispatch("setUserData", response.data.user);
                    this.home();
                }
            }).catch((er) => {
                console.log(er);
            });
        },
    },
};