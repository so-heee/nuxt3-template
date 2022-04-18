<template>
  <v-app>
    <v-navigation-drawer app>
      <template #prepend>
        <v-list-item
          two-line
          prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
          title="Jane Smith"
          subtitle="Logged in"
          class="py-3"
        />
      </template>

      <v-divider />

      <v-list density="compact" nav>
        <v-list-group>
          <template #activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-account" title="User" value="user" />
          </template>

          <v-list-item to="/user" prepend-icon="mdi-account" title="Create" value="user-create" />
          <v-list-item prepend-icon="mdi-account" title="List" value="user-list" />
        </v-list-group>
        <v-list-group>
          <template #activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-chat-processing" title="Tweet" value="tweet" />
          </template>

          <v-list-item to="/tweet" prepend-icon="mdi-chat-processing" title="Create" value="tweet-create" />
          <v-list-item prepend-icon="mdi-chat-processing" title="List" value="tweet-list" />
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat app>
      <template #prepend>
        <v-app-bar-nav-icon />
      </template>

      <v-app-bar-title>Nuxt3 Vuetify Dashboard</v-app-bar-title>

      <template #append>
        <v-btn icon="mdi-dots-vertical" />
      </template>
    </v-app-bar>

    <v-main>
      <v-divider />
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
