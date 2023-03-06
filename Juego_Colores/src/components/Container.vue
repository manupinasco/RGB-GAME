<template>

  <section class="src-components-container">

    <div id="container" v-for="(square, index) in squares" :key="index">
      <div @click="clickSquare(square.backgroundColor, square.id)">
       <Square :backgroundColor="square.backgroundColor" :display="square.display"  />
      </div>
      
    </div>
  </section>

</template>

<script>

  import Square from './Square'
  export default  {
    components: {Square},
    name: 'src-components-container',
    props: ['isHard', 'colors', 'pickedColor', 'displaySquare'],
    mounted () {
      this.$emit('win', this.won)
      
    },
    updated() {

    },
    data () {
      return {
        won: '',
        wrongSquaresClicked : []
       
      }
    },
    methods: {
     clickSquare(clickedColor, squareId){
          
          if (clickedColor === this.pickedColor) { 
            this.won = 'yes'
            this.$emit('win', this.won)
          } else {
            this.wrongSquaresClicked.push(squareId)
            this.won = 'no'
            this.$emit('win', this.won)
          }

	} 
  

    },
    computed: {
      squares() {
        var squares = [{},{},{},{},{},{}]

        for (var i = 0; i < squares.length; i++) {

          if( this.won != "yes") {

            if(this.wrongSquaresClicked.includes(i)) {
              squares[i].backgroundColor = "#232323"
            }

            else {
              squares[i].backgroundColor = this.colors[i];
            }
            
          }

          else {
            squares[i].backgroundColor = this.pickedColor;
          }
  
          if(i >= 3) {
          squares[i].display = this.displaySquare
        }
        
        squares[i].id = i
        }

        return squares
      }
    },

    watch: {
      colors: function() {
        this.won = ''
        this.$emit('win', this.won)
        this.wrongSquaresClicked.splice(0, this.wrongSquaresClicked.length)
      }
    }
}


</script>

<style scoped lang="css">

    

#container {
	margin: 20px auto;
	max-width: 600px;
}
</style>
