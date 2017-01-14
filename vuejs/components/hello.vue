<template>
	<div>
		<h1>{{Hello}}</h1>
		<router-view></router-view>
	</div>
</template>

<script>
	module.exports = {
		data: function() {
			return {
				Hello: "Hello VueJs"
			}
		}
	}
</script>

<style type="text/css">
	h1 {
		font-size: 18px;
		color: green;
	}
</style>