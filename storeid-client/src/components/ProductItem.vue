<template>
  <div class="product-item">
    <img :src="`http://localhost:8000${product.imageUrl}`" alt="" />
    <h3 class="product-name">{{ product.name }}</h3>
    <p class="product-price">{{ formatPrice(product.price) }}</p>
    <router-link :to="{ name: 'product-detail', params: { id: product.code } }"
      ><button>Detail</button></router-link
    >
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },

  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(price);
    },
  },
};
</script>

<style scoped>
.product-item {
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 2px 8px #888;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2%;
  padding: 20px;
  width: 32%;
  position: relative;
}

.product-name {
  margin-bottom: 0;
}

img {
  height: 200px;
  width: 200px;
  border-radius: 5%;
}

a {
  width: 100%;
}

button {
  width: 100%;
}
</style>
