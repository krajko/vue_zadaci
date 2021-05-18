<template>
  <div class="hello">

    <form v-on:submit.prevent="addAnimal">
      <input v-model="newAnimalIme" type="text" placeholder="Naziv">
      <input v-model="newAnimalVrsta" type="text" placeholder="Vrsta">
      <input v-model="newAnimalRodjendan" type="date" placeholder="Rodjendan">
      <select v-model="selected">
        <option v-for="item in sektor" :key="item"> {{ item }} </option>
      </select>

      <button type="submit">Dodaj</button>
    </form>

      <table>
          <tr>
            <th>Ime</th>
            <th>Vrsta</th>
            <th>Sektor</th>
            <th>Rodjendan</th>
          </tr>
          
          <tr v-for="(item, index) in animalList" :key="item.ime">
            <td>{{ item.ime }}</td>
            <td>{{ item.vrsta }}</td>
            <td>{{ item.sektor ? item.sektor : 'Nepoznat' }}</td>
            <td>{{ item.rodjendan ? item.rodjendan.toLocaleDateString() : "Nepoznat" }}</td>
            <td>
              <button @click="remove(index)">Obrisi</button>
            </td>
            <td>
              <button @click="moveToTop(index)" v-if="index !== 0">Pomeri na vrh</button>
            </td>
          </tr>
      </table>

    <ul>
      <li v-for="item in sektor" :key="item">
          {{ item }}
        <button @click="alertAnimals(item)">
          Prikazi listu zivotinja
        </button>
      </li> 
    </ul>

    <ul>
      <li v-for="item in sektor" :key="item">
        <h3>
          [sektor {{ item }}]
        </h3>
          
        <ul>
          <li v-for="animal in getAnimalsBySector(item)" :key="animal.ime">
            <p>
              {{ animal.ime }} - {{ animal.vrsta}} - {{ animal.rodjendan ? animal.rodjendan.toLocaleDateString() : "Nepoznat"}}
            </p>
          </li>

          <li v-if="getAnimalsBySector(item).length === 0">
            Za ovaj sektor trenutno nema zivotinja
          </li>
        </ul>
        
      </li>
    </ul>

  </div>
</template>

<script>

export default {
  name: 'AnimalList',
  data() {
    return {
      selected: 'ptica',
      newAnimalIme: '',
      newAnimalVrsta: '',
      newAnimalRodjendan: '',
      sektor: ['ptica', 'zmija', 'nesto'],
      animalList: [
        {
          ime: 'Zivotinja 1',
          vrsta: 'Vrsta 1',
          sektor: 'ptica',
          rodjendan: new Date()
        },
        {
          ime: 'Zivotinja 2',
          vrsta: 'Vrsta 2',
          rodjendan: new Date()
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
          rodjendan: new Date()
        }
      ]
    }
  },
  methods: {

    remove(index) {
      this.animalList.splice(index, 1);
    },

    moveToTop(index) {
      let removed = this.animalList[index];
      this.remove(index);
      this.animalList.unshift(removed);
    },

    addAnimal() {
      let newAnimal = {
        ime: this.newAnimalIme,
        vrsta: this.newAnimalVrsta,
        rodjendan: this.newAnimalRodjendan,
        sektor: this.selected
      }
      
      this.animalList.push(newAnimal);

      this.newAnimalIme = '';
      this.newAnimalVrsta = '';
      this.newAnimalRodjendan = '';
    },

    alertAnimals(clickedSektor) {
      let animals = this.animalList.filter(({ sektor }) => sektor === clickedSektor);
      
      alert(animals.reduce((acc, element, i) => {
        acc += `${i+1}: ${element.ime} - ${element.vrsta} \n`;
        return acc;
      }, ''))
    },

    getAnimalsBySector(sector) {
      return this.animalList.filter(({ sektor }) => sektor  === sector);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h3 {
    margin: 20px 0 0;
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

  table {
    text-align: left;
    margin: auto;
    border: 1px solid #2c3e5033;
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
