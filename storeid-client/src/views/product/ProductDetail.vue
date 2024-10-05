<template>
  <div>
    <div id="page-wrap" v-if="product">
      <h4 class="notif" v-if="notif">Item Added to Cart</h4>
      <div id="img-wrap">
        <img :src="`http://localhost:8000${product.imageUrl}`" alt="" />
      </div>
      <div id="product-details">
        <h1>{{ product.name }}</h1>
        <h3 id="price">{{ formatPrice(product.price) }}</h3>
        <p>Average Rating: {{ product.averageRating }}</p>
        <button id="add-to-cart" @click="addToCart(product.code)">
          Add to Cart
        </button>
        <p>{{ product.description }}</p>
      </div>
    </div>
    <NotFound v-else />
  </div>
</template>

<script>
import axios from "axios";
import NotFound from "../errors/NotFound.vue";

export default {
  components: {
    NotFound,
  },

  data() {
    return {
      product: {},
      notif: false,
    };
  },

  methods: {
    async addToCart(product) {
      await axios.post("http://localhost:8000/api/orders/user/1/add", {
        product: product,
      });
      this.notif = true;
    },
    formatPrice(price) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(price);
    },
  },

  async created() {
    try {
      const code = this.$route.params.id;
      const result = await axios.get(
        `http://localhost:8000/api/products/${code}`
      );
      this.product = result.data;
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  },
};
</script>

<style scoped>
#page-wrap {
  margin-top: 16px;
  padding: 16px;
  max-width: 600px;
}

#img-wrap {
  text-align: center;
}

img {
  width: 400px;
}

#product-details {
  padding: 16px;
  position: relative;
}

#add-to-cart {
  width: 100%;
}

#price {
  position: absolute;
  top: 24px;
  right: 16px;
}
.notif {
  text-align: center;
  color: white;
  background-color: #41b883;
  padding: 3%;
  border-radius: 8px;
}

.notif {
  text-align: center;
  color: white;
  background-color: #41b883;
  padding: 3%;
  border-radius: 8px;
}
</style>
