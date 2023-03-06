<template>

  <section class="src-components-navigator">
    <div id="navigator">
		<button id="reset" @click="restart()"> {{textRestart}}</button>
		<span id="message" :style="styleMessage"> {{message}}</span>

		<button id="easy" @click="easyGame()" :class="easy">easy</button>
		<button id="hard" @click="hardGame()" :class="hard">hard</button>
	</div>

    <Container @win="won=$event" :textRestart="textRestart" :displaySquare="displaySquare" :isHard ="isHard" :colors ="colors" :pickedColor ="pickedColor"  />
  </section>
    
  

</template>

<script>

  import Container from './Container'
  export default  {
    name: 'src-components-navigator',
    components: {Container},
    props: [],

    mounted () {
      this.restart(); 
      this.$emit('stylerHeader', this.styleHeader)
      this.$emit('numColor', this.numberColor)

      
    },

    data () {
      return {
        won: '',
        numberColor: '',
        isHard : true,
        pickedColor: '',
        colors : [],
        colorCount : 6,
        displaySquare: 'block'
      }
    },

    methods: {

      easyGame(){
        if (this.isHard) {
          this.colorCount = 3;
          this.isHard = false;
          this.displaySquare = "none"
          this.restart();
        }
      },

    hardGame(){
      if (!this.isHard) {
        this.colorCount = 6;
        this.isHard = true;
        this.displaySquare = "block"
        this.restart();
        }
      },
      
      restart() {
        this.colors = this.createNewColors(this.colorCount);
        this.pickedColor = this.colors[this.pickColor()];
        this.numberColor = this.pickedColor; 
        this.$emit('numColor', this.numberColor)
        this.$emit('stylerHeader', this.styleHeader)
        this.needToRestart = false;
      },
      
      createNewColors(numbers){
        var arr = [];
        for (var i = 0; i < numbers; i++) {
          arr.push(this.createRandomStringColor());
        }
        return arr;
      }, 
      
      createRandomStringColor(){
        var newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")" ;
        
        return newColor;
      },
      
      randomInt(){
        return Math.floor(Math.random() * 256);
        
      },
      
      pickColor(){
        var quantity;
        if (this.isHard) {
          quantity = 6;
          } else {
            quantity = 3;
          }
          return Math.floor(Math.random() * quantity );
        }
    
    
    },



    computed: {
      styleHeader () {
        if(this.won == 'yes') {
          return "backgroundColor: " + this.pickedColor
        }
          return 'backgroundColor: steelblue'
        
      },

      textRestart () {
        if(this.won == 'yes') {
          return 'Play Again!'
        }
          return 'New Colors!'
        
      },

      message () {
        if(this.won == 'no') {
          return 'Try Again!'
        }
        return ''
        
      },

      styleMessage() {
        if(this.won == 'no') {
          return 'color: #000000'
        }
        return ''
      },

      hard() {
        if(this.isHard) {
          return 'selected'
        }
        return ''
      },

      easy() {
        if(!this.isHard) {
          return 'selected'
        }
        return ''
      },

      mode() {
        if(!this.isHard) {
          return {'display': 'none'}
        }
        return ''
      },
    }
}


</script>

<style scoped lang="css">
  #navigator {

	background: #ffffff;
	height: 30px;
	text-align: center;
	margin: 0;
	margin-top: -30px;

}
#message {
	color: #ffffff;
	display: inline-block;
	width: 20%;
}
button {
	border: none;
	background-color: white;
	font-family: "Montserrat", "Avenir";
	text-transform: uppercase;
	height: 100%;
	font-weight: 700;
	letter-spacing: 1px;
	color: steelblue;
	transition: all 0.3s;
	outline: none;
}
button:hover {
	color: white;
	background-color: steelblue;
}
.selected {
	background-color: steelblue;
	color: white;
}
</style>
