<template>
    <div class="form-control">
        <ul>
            <li :class="{active: modelValue === 'Weak'}">
                <button @click="activate('Weak')" type="button">Weak</button>
                </li>
            <li :class="{active: modelValue === 'Average'}">
                <button @click="activate('Average')" type="button">Averge</button>
                </li>
            <li :class="{active: modelValue === 'Well'}">
                <button @click="activate('Well')" type="button">Well</button>
                </li>
        </ul>
        </div>
</template>
<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
 //   data() {
  //      return {
  //          activeOption: this.modelValue,
  //      }
        
  //  },
   // computed: {
     //   activeOption() {
       //     return this.modelValue;
      //  }
   // },
    methods: {
        activate(option) {
           // this.activeOption = option;
            this.$emit('update:modelValue', option)

        }
    }

};
</script>


<style lang="scss" scoped>
.active {
    border-color: #A00178;


}
.active-button {
    border-color: purple;
}
ul {
    list-style: none;
    margin: 0.5rem 0;
    padding: 0;
    display: flex;
    .li {
        margin: 0 1rem;
        border: 1px solid white;
        padding: 1px;
        display: flex;
        justify-content: center;
        align-items: center;
        .button {
            border: none;
            font: inherit;
            background-color: transparent;
            cursor: pointer;
        }
    }
    
}
</style>