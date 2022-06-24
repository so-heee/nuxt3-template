<template>
  <v-container fluid>
    <h1>Users</h1>
    <v-divider />
    <v-card>
      <v-card-title>
        <v-text-field v-model="search" append-icon="mdi-magnify" color="primary" label="Search" variant="underlined" />
      </v-card-title>
      <v-table>
        <thead>
          <tr>
            <th v-for="item in headers" :key="item.text" class="text-left">
              {{ item.text }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
            <td>{{ item.fat }}</td>
            <td>{{ item.carbs }}</td>
            <td>{{ item.protein }}</td>
            <td>{{ item.iron }}</td>
          </tr>
        </tbody>
      </v-table>
      <!-- <v-data-table :headers="headers" :items="desserts" :search="search" /> -->
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
const search = ''
const headers = [
  {
    text: 'Dessert (100g serving)',
    align: 'start',
    filterable: false,
    value: 'name'
  },
  { text: 'Calories', value: 'calories' },
  { text: 'Fat (g)', value: 'fat' },
  { text: 'Carbs (g)', value: 'carbs' },
  { text: 'Protein (g)', value: 'protein' },
  { text: 'Iron (%)', value: 'iron' }
]
const desserts = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    iron: '1%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    iron: '1%'
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    iron: '7%'
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    iron: '8%'
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    iron: '16%'
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    iron: '0%'
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    iron: '2%'
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    iron: '45%'
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    iron: '22%'
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    iron: '6%'
  }
]
</script>
