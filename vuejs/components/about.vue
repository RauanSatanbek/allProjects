<template>
	<div> 
		<h1>{{ text }}</h1>
		<p> {{ $route.params.id }} </p>
	</div>
</template>

<script>
	module.exports = {
		data: function() {
			return {
				text: "About us"
			}
		}
	}
</script>

<style type="text/css">
	
</style>