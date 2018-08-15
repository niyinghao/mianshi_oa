<template>
  <div id="app">
  	<div class="nav">
  	</div>
    <router-view></router-view>
  </div>
</template>	

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
	#app{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #f5f5f5;
	}
	.nav{
		height:70px;
		width: 100%;
		background: #363d4c;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
	}
</style>
