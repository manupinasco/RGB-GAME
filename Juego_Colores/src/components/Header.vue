<template>

  
  <section class="src-components-header">
    <div :style="styleHeader" id="header">
		<h1>The Great <br>
			<span id="colorDisplay">{{'RGB ' + (numberColor != '' ? '(' + numberColor + ')' : numberColor)}} </span>
			<br>
			Guessing Game</h1>
	</div> 
  
  <Navigator @stylerHeader="styleHeader=$event" @numColor="numberColor=$event" />

  </section>

</template>

<script>
  import Navigator from './Navigator'
  export default  {
    components: {Navigator},
    name: 'src-components-header',
    props: [],
    mounted () {
      
    },
    data () {
      return {
        styleHeader: '',
        numberColor: '',
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">

  #header {
	transition: all 0.3s;
	background: steelblue;
	text-transform: uppercase;
	text-align: center;
	margin: 0;
	color: white;
	
}
#colorDisplay {
	font-size: 200%;
}
h1 {
	font-weight: normal;
	line-height: 1.1;
	padding: 20px 0;

}
</style>
