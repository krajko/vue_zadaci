<template>
  <div class="hello">
    <h1> {{ msg }}</h1>

    <form v-on:submit.prevent="addAnimal()">
      <input v-model="ime" type="text" placeholder="Naziv">
      <input v-model="vrsta" type="text" placeholder="Vrsta">
      <input v-model="rodjendan" type="text" placeholder="Godina">
      <select v-model="selected">
        <option v-for="item in sektor" v-bind:key="item"> {{ item }} </option>
      </select>

      <button type="submit">Dodaj</button>
    </form>

    <ul>
      <li v-for="(item, index) in animalList" :key="item.ime">  
        <p>
          {{ item.ime }} - {{ item.vrsta }} - {{ item.sektor ? item.sektor : 'Nepoznat' }} - {{ item.rodjendan ? item.rodjendan : "Nepoznat" }}
        </p>
        <a @click="remove(index)">Obrisi</a>
        <button @click="moveToTop(index)" v-if="index !== 0">Pomeri na vrh</button>
        <hr>
      </li>
    </ul>

    <ul>
      <li v-for="item in sektor" :key="item">
          {{ item }}
        <a @click="alertAnimals(item)">
          Prikazi listu zivotinja
        </a>
      </li> 
    </ul>

  </div>
</template>

<script>

export default {
  name: 'AnimalList',
  data() {
    return {
      msg: "Animal List",
      selected: "Sektor",
      ime: '',
      vrsta: '',
      rodjendan: '',
      sektor: ["ptica", "zmija", "nesto"],
      animalList: [
        {
          ime: 'Zivotinja 1',
          vrsta: 'Vrsta 1',
          sektor: 'ptica',
          rodjendan: new Date().getYear() + 1900
        },
        {
          ime: 'Zivotinja 2',
          vrsta: 'Vrsta 2',
          sektor: 'zmija',
          rodjendan: new Date().getYear() + 1900
        },
        {
          ime: 'Zivotinja 3',
          vrsta: 'Vrsta 3',
          sektor: 'ptica',
          rodjendan: ''
        },
        {
          ime: 'Zivotinja 4',
          vrsta: 'Vrsta 4',
          sektor: 'nesto',
          rodjendan: ''   
        },
        {
          ime: 'Zivotinja 5',
          vrsta: 'Vrsta 5',
          sektor: 'nesto',
          rodjendan: new Date().getYear() + 1900
        }
      ]
    }
  },
  methods: {

    remove(index) {
      this.$delete(this.animalList, index);
    },

    moveToTop(index) {
      let tmp = this.animalList.splice(0, 1, this.animalList[index]);
      this.animalList[index] = tmp[0];
    },

    addAnimal() {
      let newAnimal = {
        ime: this.ime,
        vrsta: this.vrsta,
        rodjendan: this.rodjendan,
        sektor: this.selected
      }
      
      this.animalList.push(newAnimal);
      this.ime = '';
      this.vrsta = '';
      this.rodjendan = '';
    },

    alertAnimals(clickedSektor) {
      let animals = this.animalList.filter(({ sektor }) => sektor === clickedSektor);
      let animalsString = '';

      animals.forEach(element => {
        animalsString += `${element.ime} ${element.vrsta} ${element.sektor} ${element.rodjendan ? element.rodjendan : "Nepoznat"} \n`;
      })

      alert(animalsString);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    /* display: inline-block; */
    margin: 5px auto;
    padding: auto;
    width: 50vw;
  }

  hr {
    height: 1px;
    width: 50vw;
    border: none;
    border-bottom: 1px solid #2c3e5033; 
    margin-top: 0;
  }

  a {
    display: inline-block;
    color: #42b983;
    cursor: pointer;
    margin-left: 10px;
  }

  p {
    display: inline-block;
    margin: 5px;
    padding: auto;
  }

  button {
    margin-left: 20px;
  }

  form button {
    display: block;
    margin: 5px auto;
  }

  input {
    display: block;
    margin: 5px auto;
  }

</style>
