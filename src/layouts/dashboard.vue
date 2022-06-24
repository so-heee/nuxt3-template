<template>
  <v-layout>
    <v-navigation-drawer color="primary" permanent>
      <template #prepend>
        <logo class="my-1 ml-7" />
      </template>
      <v-divider />
      <v-list density="compact" color="primary" nav>
        <v-list-group v-for="item in nav" :key="item.title">
          <template #activator="{ props }">
            <v-list-item v-bind="props" :prepend-icon="item.icon" :title="item.title" :value="item.value" />
          </template>

          <v-list-item
            v-for="subitem in item.sub"
            :key="subitem.title"
            :to="subitem.to"
            :title="subitem.title"
            :value="subitem.value"
          />
          <!-- <v-list-item prepend-icon="mdi-account" title="List" value="user-list" /> -->
        </v-list-group>
        <!-- <v-list-group color="primary"> -->
        <!--   <template #activator="{ props }"> -->
        <!--     <v-list-item v-bind="props" prepend-icon="mdi-chat-processing" title="Tweet" value="tweet" /> -->
        <!--   </template> -->
        <!---->
        <!--   <v-list-item to="/tweet" prepend-icon="mdi-chat-processing" title="Create" value="tweet-create" /> -->
        <!--   <v-list-item prepend-icon="mdi-chat-processing" title="List" value="tweet-list" /> -->
        <!-- </v-list-group> -->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat>
      <template #prepend>
        <v-app-bar-nav-icon />
      </template>
      <template #append>
        <v-btn icon="mdi-dots-vertical" />
      </template>
    </v-app-bar>

    <v-main>
      <v-divider />
      <nuxt-page />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import Logo from '../components/Logo.vue'
const nav = [
  {
    title: 'User',
    icon: 'mdi-account',
    value: 'user',
    sub: [
      {
        title: 'list',
        value: 'user-list',
        to: '/users'
      },
      {
        title: 'create',
        value: 'user-create',
        to: '/users/create'
      }
    ]
  },
  {
    title: 'Tweet',
    icon: 'mdi-chat-processing',
    value: 'tweet',
    sub: [
      {
        title: 'list',
        value: 'tweet-list',
        to: '/tweets'
      },
      {
        title: 'create',
        value: 'tweet-create',
        to: '/tweets/create'
      }
    ]
  }
]
</script>
