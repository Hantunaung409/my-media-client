import axios from 'axios';
export default {
    name : 'HomePage',
    data () {
        return {
            postLists: {},
            categoryLists: {},
            searchKey: ""
        }
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
        }
    },
    mounted () {
        this.getAllPost();
        this.getAllCategory();
    }
}