import axios from 'axios';
import { isMappedTypeNode } from 'typescript';
import {mapGetters} from "vuex";
export default {
    name : 'HomePage',
    data () {
        return {
            postLists: {},
            categoryLists: {},
            searchKey: "",
            tokenStatus: false,
        }
    },
    computed: {
       ...mapGetters(['storedToken','storedUserData'])
    },
    methods: {
        getAllPost () {
        axios.get("http://127.0.0.1:8000/api/allPost").then((response) => {
            for(let i=0; i<response.data.post.length; i++){
                if(response.data.post[i].image != null){
                response.data.post[i].image = "http://127.0.0.1:8000/storage/postImage/"+response.data.post[i].image;
                }else{
                    response.data.post[i].image = "http://127.0.0.1:8000/defaultPostImage/defualtPostImage.png";
                }
            }
            this.postLists = response.data.post;
            // console.log(this.postLists);
        });   
        },
        getAllCategory(){
            axios.get("http://127.0.0.1:8000/api/allCategory").then((response) => {
                this.categoryLists = response.data.category ;
            }).catch( (e) => {
                console.log(e);
            }); 
        },
        search(){
            axios.post("http://127.0.0.1:8000/api/post/search",{ searchKey : this.searchKey}).then((response) => {
                for(let i=0; i<response.data.searchResult.length; i++){
                    if(response.data.searchResult[i].image != null){
                    response.data.searchResult[i].image = "http://127.0.0.1:8000/storage/postImage/"+response.data.searchResult[i].image;
                    }else{
                        response.data.searchResult[i].image = "http://127.0.0.1:8000/defaultPostImage/defualtPostImage.png";
                    }
                }
                this.postLists = response.data.searchResult;
            });
        },
        categoryFilter(filterKey){
            axios.post("http://127.0.0.1:8000/api/category/search",{ key : filterKey}).then((response) => {
                for(let i=0; i<response.data.filterResult.length; i++){
                    if(response.data.filterResult[i].image != null){
                    response.data.filterResult[i].image = "http://127.0.0.1:8000/storage/postImage/"+response.data.filterResult[i].image;
                    }else{
                        response.data.filterResult[i].image = "http://127.0.0.1:8000/defaultPostImage/defualtPostImage.png";
                    }
                }
                this.postLists = response.data.filterResult;
            });
        },
        newDetails(postId){
            this.$router.push({
                name : "newDetails",
                params : {
                    newId : postId,
                },
            });
        },
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
        checkToken(){
           if(this.storedToken != null && this.storedToken != "" && this.storedToken != undefined){
            this.tokenStatus = true ;
           }else{
            this.tokenStatus = false;
           }
        },
        logoutPage(){
            this.$store.dispatch('setToken', null);
            this.loginPage();
        }
    },
    mounted () {
        this.checkToken();
        this.getAllPost();
        this.getAllCategory();
    }
}