<template>
    <v-container>
        <v-row no-gutters>
            <v-col style="padding-top: 42px" sm="5" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title style="color: #6ada4f; margin-left: 140px">Thêm bài viết</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.preven="submitForm" class="pa-5" enctype="multipart/form-data">
                        <v-text-field label="Tiêu đề" v-model="post.title" prepend-icon="mdi-note" :rules="rules">
                        </v-text-field>

                        <v-text-field label="Danh mục" v-model="post.category" prepend-icon="mdi-view-list" :rules="rules">
                        </v-text-field>

                        <v-textarea label="Nội dung" v-model="post.content" prepend-icon="mdi-note-plus"
                            :rules="rules"></v-textarea>

                        <v-file-input @change="selectFile" :rules="rules" show-size counter multiple
                            label="Chọn ảnh"></v-file-input>

                        <v-btn type="submit" class="mt-3" color="green" style="color: white">Thêm bài viết</v-btn>

                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from "../api";
export default {
    data() {
        return {
            rules: [(value) => !!value || "This field is required!"],
            post: {
                title: "",
                category: "",
                content: "",
                image: ""
            },
            image: "",
        };
    },
    methods: {
        selectFile(file) {
            this.image = file[0];
        },
        async submitForm() {
            const formData = new FormData();
            formData.append("image", this.image);
            formData.append("title", this.post.title);
            formData.append("category", this.post.category);
            formData.append("content", this.post.content);
            if (this.$refs.form.validate()) {
                const response = await API.addPost(formData);
                this.$router.push({ name: "home", params: { message: response.message } });
            }
        }
    }
}
</script>