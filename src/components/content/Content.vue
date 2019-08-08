<style scoped>
	div * {
		max-width: 100%;
	}
	div {
		font-size:14px;
	}
	.nowrap {
		white-space: normal !important;
	}
</style>

<template>
	<div>
		<div v-on:click="routeLink" v-html="$store.getters.content"></div>
	</div>
</template>

<script>
 export default {
	 methods: {
		 routeLink( evt ) {
			const ANCHOR_NAME = 'A';
			if ( event.target.nodeName  === ANCHOR_NAME ) {
				event.preventDefault();
				let href = event.target.getAttribute('href').replace('/wiki/', `/${this.$store.getters.lang}/`);
				this.$router.navigate( href );
			}
		}
	}
 }
</script>
