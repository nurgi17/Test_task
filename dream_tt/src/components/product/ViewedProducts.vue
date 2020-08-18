<template>
  <div>
    <div class="text-ts1 text-bold text-color1">
      Просмотренные товары
    </div>
    <div class="wrapper">
      <div v-for="d in data" :key="d.id" class="card">
        <div class="card-img">
          <img :src="d.img" alt="Product img">
        </div>
        <div class="card-text">
          <div class="card-title">
            {{ d.name }}
          </div>
          <div class="card-price">
            <div class="card-price-current" :class="{'card-price-new': d.oCost}">
              {{ `${$u.fmtNum(d.cost)} ₸` }}
            </div>
            <div v-if="d.oCost" class="card-price-old">
              {{ `${$u.fmtNum(d.oCost)} ₸` }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['data']
  }
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 24px;
  display: flex;
  overflow-x: auto;
  font-size: 12px;
  .card {
    margin-right: 3px;
    border: 1px solid #E3E2E7;
    border-radius: 4px;
    .card-img {
      img {
        display: block;
        margin: 0 auto;
        width: 100px;
        height: 100px;
      }
    }
    .card-text {
      padding-left: 5px;
      margin-bottom: 8px;
      .card-title {
        padding-right: 5px;
        margin-bottom: 8px;
      }
      .card-price {
        .card-price-old {
          text-decoration-line: line-through;
        }
        .card-price-current {
          padding-top: 5px;
          font-weight: bold;
          font-size: 14px;
        }
        .card-price-new {
          padding-top: 0px;
          color: #EC0094;
        }
      }
    }
  }
}

</style>
