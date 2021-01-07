<template>
  <div class="home">
    <v-carousel
      continuous
      cycle
      progress
      show-arrows-on-hover
      interval="2400"
      v-model="model"
      delimiter-icon="mdi-minus"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <div>
      <h1 @click="$router.push(`/blog`)">Welcome to Your Vue.js + TypeScript App</h1>
    </div>
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card
            @click="$router.push(`/${card.path}`)"
          >
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!--footer-->
    <v-footer
      padless
    >
      <v-card
        class="indigo lighten-1 white--text text-center flex"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          宁小邶个人网站
        </v-card-text>

        <v-divider inset></v-divider>

        <v-card-text class="white--text">
          © 2021 <a href="https://znzheng.com/" class="white--text">宁小邶的博客</a>. All Rights Reserved. <a target="_black"
                                                                                                        href="https://beian.miit.gov.cn"
                                                                                                        class="white--text">冀ICP备16011331号-1</a>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      items: [
        {
          src: `https://picsum.photos/500/300?image=${Math.floor(Math.random() * 100) * 5 + 10}`,
        },
        {
          src: `https://picsum.photos/500/300?image=${Math.floor(Math.random() * 100) * 5 + 10}`,
        },
        {
          src: `https://picsum.photos/500/300?image=${Math.floor(Math.random() * 100) * 5 + 10}`,
        },
        {
          src: `https://picsum.photos/500/300?image=${Math.floor(Math.random() * 100) * 5 + 10}`,
        },
      ],
      model: 0,
      cards: [
        {
          title: '博客',
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          flex: 4,
          path: `blog`
        },
        {
          title: '个人简介',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          flex: 4,
          path: `blog`
        },
        {
          title: '后台管理',
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          flex: 4,
          path: `blog`
        },
      ],
    })
  })
</script>
