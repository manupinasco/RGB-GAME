<template>

  <div class="src-components-square" :style="styleSquare" >

  </div>

</template>

<script>

  export default  {
    name: 'src-components-square',
    props: ['backgroundColor', 'display'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {
      styleSquare () {
        return "backgroundColor: " + this.backgroundColor + (this.display != undefined ? "; display: " + this.display : "")
        
      }
    }

  }


</script>

<style scoped lang="css">
  .src-components-square {

	width: 30%;
	background: blue;
	padding-bottom: 30%;
	float: left;
	margin: 1.66%;
	border-radius: 10%;
	transition: background 0.8s;
	-webkit-transition: background 0.8s;
	-moz-transition: background 0.8s;


  }
</style>
