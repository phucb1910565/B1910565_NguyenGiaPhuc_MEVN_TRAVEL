<template>
    <v-conatiner>
        <v-row no-gutters>
            <v-col sm="10" class="pa-4 mx-auto">
                <v-card class="pa-2">
                    <v-img :src="`/${post.image}`"></v-img>
                    <v-card-actions class="pb-0">
                        <v-row class="mt-1 mx-1">
                            <v-col sm="2">
                                <v-btn small outlined color="success">
                                    {{ post.category }}
                                </v-btn>
                            </v-col>
                            <v-col sm="10" class="d-flex justify-end">
                                <v-btn color="success" text :to="{name: 'edit-post', params: { id: post._id}}">Chỉnh Sửa</v-btn>
                                <v-btn color="red" text @click="removePost(post._id)">Xóa</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-subtitle class="headline">
                        <h3 class="green--text">{{ post.title }}</h3>
                    </v-card-subtitle>
                    <v-card-text class="black--text">
                        <p>{{ post.content }}</p>
                        <!-- <p>{{ post.created }}</p> -->
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-conatiner>
</template>

<script>
    import API from "../api";
    export default{
        data(){
            return{
                post: {},
            };
        },
        async created(){
            const response = await API.getPostByID(this.$route.params.id);
            this.post = response;
        },
        methods: {
            async removePost(id){
                const response = await API.deletePost(id);
                this.$router.push({name: "home", params: {message: response.message}});
            }
        }
    }
</script>