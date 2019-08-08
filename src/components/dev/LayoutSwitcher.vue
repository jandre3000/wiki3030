<template>
	<div>
		<select v-model="layout" v-on:change="updateLayout">
			<option value="vector">Vector layout</option>
			<option value="article">New layout</option>
		</select>

		<input
			type="checkbox"
			id="devGrid-checkbox"
			v-model="devGrid"
			v-on:change="updateDevGrid"
		>
		<label for="devGrid-checkbox">dev grid ({{ devGrid }})</label>
	</div>
</template>

<script>
export default {
	data() {
		return {
			layout: this.$store.getters.layout,
			devGrid: this.$store.getters.devGrid
		}
	},
	methods: {
		updateLayout: function() {
			this.$store.commit( 'setLayout', this.layout );
		},
		updateDevGrid: function() {
			this.$store.commit( 'setDevGrid', this.devGrid );
		}

	}
}
</script>
