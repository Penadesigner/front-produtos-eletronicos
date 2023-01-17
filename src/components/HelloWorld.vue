<template>
  <div class="hello">
    <div class="row">
      <div class="card" style="" v-for="text in textos" :key="text.id">
        <div class="img-tamanho">
        <img class="card-img-top" :src="text.img" alt="Imagem de capa do card" />
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ text.nome }}</h5>
          <p class="card-text">
            {{ text.descricao }}
          </p>
          <button class="btn btn-primary" @click="excluir(text.id)">Visitar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/http.js";
export default {
  name: "HelloWorld",
  data() {
    return {
      textos: [],
    };
  },
  created() {
    api.get("produtos").then((res) => {
      this.textos = res.data;
      console.log(res.data);
    });
  },
  methods: {
    excluir(id){
      api.delete(`produtos/${id}`).then(res => {
        console.log(res);
      })
    }
  }
};
</script>

<style scoped>
.card {
  display: flex;
  max-width: 20%;
  padding: 1em;
  margin: 1.5em;
  border-radius: 0.25rem;
  box-shadow: 2px 3px 10px #5e5e5e;
}

.btn {
  position: absolute;
  bottom: 15px;
  left: 35%;
}

.card-text {
  margin-bottom: 3em;
}

.img-tamanho {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-img-top {
  width: 190px;
}
</style>
