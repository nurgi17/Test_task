<template>
  <div class="container mt-3">
    <h1 class="text-center">Список сотрудников</h1>
     <b-col lg="6" class="my-1">
        <b-form-group
          label="Фильтр"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          label-for="filterInput"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              v-model="filter"
              type="search"
              id="filterInput"
              placeholder="Введите для поиска"
            ></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Очистить</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col lg="6" class="my-1">
        <b-form-group
          label="Фильтр по"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0">
          <b-form-checkbox-group v-model="filterOn" class="mt-1">
            <b-form-checkbox value="id">Id</b-form-checkbox>
            <b-form-checkbox value="first_name">Имя</b-form-checkbox>
            <b-form-checkbox value="last_name">Фамилия</b-form-checkbox>
            <b-form-checkbox value="middle_name">Отчество</b-form-checkbox>
            <b-form-checkbox value="count">Кол-во</b-form-checkbox>
            <b-form-checkbox value="sum">Сумма</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </b-col>
    <b-table
      class="mt-4"
      :items="users"
      :fields="fields"
      :sort-by.sync="sortBy"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filterIncludedFields="filterOn"
      @row-dblclicked="(item, index, event) => dblclick(item.id)"
      @row-contextmenu="(item, index, event) => context(item.id, event)"
      responsive="sm"
      @filtered="onFiltered"
    ></b-table>
    <vue-context ref="menu">
        <li>
            <a href="#" @click.prevent="deleteUser()">Удалить</a>
        </li>
    </vue-context>
    <b-pagination
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      align="center"
    ></b-pagination>
    <div class="text-center">
      <b-button variant="dark" @click.prevent="create">Добавить</b-button>
    </div>
    <Form :user="user" @cancel="cancel" v-if="show"/>
  </div>
</template>
<script>
import { VueContext } from 'vue-context'
import Form from '@/components/Form.vue'
export default {
  name: 'Home',
  components: {
    VueContext, Form
  },
  data: () => ({
    show: false,
    id: null,
    user: null,
    users: [],
    sortBy: 'sum',
    currentPage: 1,
    perPage: 10,
    totalRows: 1,
    filter: null,
    filterOn: [],
    fields: [
      { key: 'id', label: 'Id', sortable: true },
      { key: 'first_name', label: 'Имя', sortable: true },
      { key: 'last_name', label: 'Фамилия', sortable: true },
      { key: 'middle_name', label: 'Отчество', sortable: true },
      { key: 'count', label: 'Кол-во', sortable: true },
      { key: 'sum', label: 'Сумма', sortable: true }
    ]
  }),
  mounted () {
    this.$store.dispatch('fetchUsers')
      .then(res => {
        this.users = res
        this.totalRows = this.users.length
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    create () {
      this.show = true
      this.user = {
        id: null,
        first_name: '',
        last_name: '',
        middle_name: '',
        items: []
      }
    },
    dblclick (id) {
      this.show = true
      this.$store.dispatch('getUserById', id)
        .then(res => {
          this.user = res
        })
        .catch(err => {
          console.log(err)
        })
    },
    cancel (value) {
      this.show = value
    },
    context (id, e) {
      e.preventDefault()
      this.$refs.menu.open()
      this.id = id
    },
    onFiltered (filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    deleteUser () {
      const res = confirm('Вы уверены?')
      if (res) {
        var removeIndex = this.users
          .map(function (item) {
            return item.id
          })
          .indexOf(this.id)
        ~removeIndex && this.users.splice(removeIndex, 1)
        this.$store.dispatch('deleteUser', this.id)
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
<style>
@import '~vue-context/dist/css/vue-context.css';
.all-copy th,td{
  -webkit-user-select: all;
  -moz-user-select: all;
  -ms-user-select: all;
  user-select: all;
}
.page-item.active .page-link{
  background-color: #333333 !important;
  border-color: #333333 !important;
  color: #ffffff !important;
}
.page-link {
  color: #333333 !important;
}
</style>
