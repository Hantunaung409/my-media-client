import axios from "axios";
import { mapGetters } from "vuex";
export default {
    name : 'newDetails',
    data() {
        return {
            postId: 0,
            thisPostData: {},
            viewCount : 0
        }
    },
    computed: {
      ...mapGetters(["storedToken","storedUserData"])
    },
    methods: {
        loadPost() {
            axios.post("http://127.0.0.1:8000/api/post/details",{ pId : this.postId }).then((response) => {
                    if(response.data.postData.image != null){
                    response.data.postData.image = "http://127.0.0.1:8000/storage/postImage/"+response.data.postData.image;
                    }else{
                        response.data.postData.image = "http://127.0.0.1:8000/defaultPostImage/defualtPostImage.png";
                    }
                this.thisPostData = response.data.postData;
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
        }
    },
    mounted () {
        let data = {
            user_id : this.storedUserData.id ,
            post_id : this.$route.params.newId
        }
         this.postId = this.$route.params.newId,
         this.loadPost(),
         axios.post("http://127.0.0.1:8000/api/post/actionLog", data).then((response) => {
            this.viewCount = response.data.postData.length;
         });
    },
}