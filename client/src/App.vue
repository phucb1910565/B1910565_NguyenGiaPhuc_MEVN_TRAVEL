<template>
  <v-app id="inspire">
    <v-navigation-drawer style="background-color:ghostwhite;" v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          
          <!-- <v-list-item-title>
            An Giang
          </v-list-item-title>
          <v-list-item-subtitle>
            Du lịch và Trải nghiệm
          </v-list-item-subtitle> -->
          <v-img src="./assets/logo2.png"></v-img>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item-group  color="primary">
          <v-list-item style="color: green;" v-for="(item, i) in items" :key="i" :to="item.link" link>
          
            <v-list-item-content>
              <v-list-item-title style="font-size: 16px" v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app style="background-color: #6ada4f;">
      <v-app-bar-nav-icon style="color: white" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title style="color: white">Lang Thang An Giang</v-toolbar-title>
    </v-app-bar>

    <v-main style="background-color: #c2d6bd;" >
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
     drawer: null,
     items: [
        { title: "Trang chủ", icon: "mdi-home", link: "/" },
        { title: "Thêm bài viết", icon: "mdi-note-plus", link: "/add-post" },
    
       
      ],
    }),
}
</script>