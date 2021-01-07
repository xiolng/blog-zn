<!--xiolng-->
<!--Blog-->
<!--2021/1/5-->
<!--9:42-->
<template>
  <div class="dashbord">
    <!--navbar-->
    <v-app-bar
      app
      shrink-on-scroll
      prominent
      fade-img-on-scroll
      src="https://picsum.photos/1920/1080?random"
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.width <= 600"
        @click="sideMenu = true"
      />
      <v-app-bar-title>Title</v-app-bar-title>
      <v-spacer />
      <v-btn
        icon
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-icon
          :color="$vuetify.theme.dark ? '': 'green'"
        >{{$vuetify.theme.dark ? 'mdi-brightness-4': 'mdi-brightness-6'}}
        </v-icon>
      </v-btn>
      <v-btn
        icon
      >
        <v-avatar
          color="teal"
          size="32"
        >
          <span class="white--text">N</span>
        </v-avatar>
      </v-btn>
      <!--progress-->
      <v-progress-linear
        value="45"
        absolute
        bottom
        color="deep-purple accent-4"
      ></v-progress-linear>
    </v-app-bar>
    <!--main-content-->
    <v-main>
      <v-container style="padding-top: 20px;">
        <v-row
          justify="center"
        >
          <v-col
            sm="12"
            md="10"
            lg="10"
            xl="10"
            cols="12"
            order-lg="2"
            order-md="2"
            order-sm="1"
            order="1"
          >
            <!--skeleton-->
            <v-skeleton-loader
              v-if="loading"
              type="
              button,
              list-item-avatar-two-line,
              divider,
              list-item-avatar-two-line,
              divider,
              list-item-avatar-two-line,
              divider,
              list-item-avatar-two-line,
              divider,
              list-item-avatar-two-line
            "
            ></v-skeleton-loader>
            <template
              v-if="!loading"
            >
              <v-list three-line>
                <template v-for="(item, index) in listItems">
                  <v-subheader
                    v-if="item.header"
                    :key="item.header"
                    v-text="item.header"
                  ></v-subheader>

                  <v-divider
                    v-else-if="item.divider"
                    :key="index"
                    :inset="item.inset"
                  ></v-divider>

                  <v-list-item
                    v-else
                    :key="item.title"
                  >
                    <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title v-html="item.title"></v-list-item-title>
                      <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-btn icon>
                        <v-icon color="grey lighten-1">mdi-information</v-icon>
                      </v-btn>
                    </v-list-item-action>
                    <v-list-item-action>
                      <v-btn icon>
                        <v-icon color="grey lighten-1">mdi-information</v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                </template>
              </v-list>
            </template>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <!--bottom-->
    <v-bottom-navigation
      color="teal"
      grow
      fixed
    >
      <v-btn
        to="/"
      >
        <span>首页</span>

        <v-icon>mdi-yin-yang</v-icon>
      </v-btn>

      <v-btn
        to="/blog"
      >
        <span>博客</span>

        <v-icon>mdi-post</v-icon>
      </v-btn>

      <v-btn
        to="/individualResume"
      >
        <span>个人简介</span>

        <v-icon>mdi-account-box-multiple</v-icon>
      </v-btn>

      <v-btn
        to="/admin"
      >
        <span>后台管理</span>

        <v-icon>mdi-cog-transfer-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <!--navigation-->
    <v-navigation-drawer
      v-model="sideMenu"
      :expand-on-hover="$vuetify.breakpoint.width > 600"
      app
    >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar
            class="transition-fast-out-linear-in"
          >
            <v-img src="../../assets/g.gif"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              Sandra Adams
            </v-list-item-title>
            <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list
        nav
        dense
      >
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <v-list-item-title>My Files</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Shared with me</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Starred</v-list-item-title>
        </v-list-item>
      </v-list>
      <div
        slot="append"
      >
        <v-card-text class="black--text">
          <a
            target="_black"
            href="https://beian.miit.gov.cn"
            class="black--text"
            style="word-break: normal; white-space: nowrap;"
          >冀ICP备16011331号-1</a>
        </v-card-text>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Blog',
    data: () => ({
      loading: true,
      sideMenu: null,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' },
      ],
      selectedItem: 0,
      tagItems: [
        { text: 'My Files', icon: 'mdi-folder' },
        { text: 'Shared with me', icon: 'mdi-account-multiple' },
        { text: 'Starred', icon: 'mdi-star' },
        { text: 'Recent', icon: 'mdi-history' },
        { text: 'Offline', icon: 'mdi-check-circle' },
        { text: 'Uploads', icon: 'mdi-upload' },
        { text: 'Backups', icon: 'mdi-cloud-upload' },
      ],
      listItems: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
    }),
    mounted (): void {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 3000)
      console.log(2, this.$vuetify, this.$route)
    },
    methods: {}
  })
</script>

<style scoped>

</style>
