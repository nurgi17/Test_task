<template>
    <div>
      <label for="inline-form-input-name">Имя</label>
      <b-input
        id="inline-form-input-name"
        class="mb-3 w-25"
        v-model="user.first_name"
      ></b-input>
      <label for="inline-form-input-name">Фамилия</label>
      <b-input
        id="inline-form-input-name"
        class="mb-3 w-25"
        v-model="user.last_name"
      ></b-input>
      <label for="inline-form-input-name">Отчество</label>
      <b-input
        id="inline-form-input-name"
        class="mb-3 w-25"
        v-model="user.middle_name"
      ></b-input>
      <b-table :items="user.items" :fields="fields" @row-contextmenu="(item, index, event) => context(item.id, event)">
        <template v-slot:cell(name)="row">
          <b-form-input class="w-75" v-model="row.item.name"/>
        </template>
        <template v-slot:cell(price)="row">
          <b-form-input class="w-75" v-model="row.item.price"/>
        </template>
      </b-table>
      <vue-context ref="menu">
        <li>
            <a href="#" @click.prevent="deleteItem">Удалить</a>
        </li>
      </vue-context>
      <p class="text-right">Итог: {{ total }}</p>
      <div class="mb-5">
          <b-button variant="dark" @click.prevent="create">Сохранить</b-button>
          <b-button class="ml-3" variant="dark" @click.prevent="cancel">Отмена</b-button>
      </div>
    </div>
</template>
<script>
import { VueContext } from 'vue-context'
export default {
  name: 'Form',
  props: ['user'],
  components: {
    VueContext
  },
  data: () => ({
    id: null,
    fields: [
      { key: 'id', label: 'Id', sortable: true },
      { key: 'name', label: 'Название', sortable: true },
      { key: 'price', label: 'Стоимость', sortable: true }
    ]
  }),
  computed: {
    total () {
      return this.user.items.reduce((a, b) => a + (parseInt(b.price) || 0), 0)
    }
  },
  methods: {
    create () {
      this.user.first_name = this.first_name
      this.user.last_name = this.last_name
      this.user.middle_name = this.middle_name
      if (this.user.id === null) {
        this.$store.dispatch('createUser', this.user)
          .then(res => {
            alert(res.message)
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        this.$store.dispatch('updateUser', this.user)
          .then(res => {
            alert(res.message)
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    cancel () {
      this.$emit('cancel', false)
    },
    context (id, e) {
      e.preventDefault()
      this.$refs.menu.open()
      this.id = id
    },
    deleteItem () {
      const res = confirm('Вы уверены?')
      if (res) {
        var removeIndex = this.user.items
          .map(function (item) {
            return item.id
          })
          .indexOf(this.id)
        ~removeIndex && this.user.items.splice(removeIndex, 1)
        this.$store.dispatch('deleteItem', this.id)
          .then(res => {
            alert(res.message)
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
}
</script>
