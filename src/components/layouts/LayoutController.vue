<template>
<!--
This component should switch layouts based on the
namespace in the router. Namespace routes should be
added to the router, and the namespace should be passed
into the global store. The layout component below should then
be switched out base on that value.
-->
<div>
	<component v-bind:is="pageLayoutComponent">

		<template v-slot:contentHeader>
			<ContentHeader/>
		</template>

		<template v-slot:content>
			<Content/>
		</template>

	</component>

	<LayoutSwitcher/>
</div>
</template>

<script>
	export default {
		computed: {
			pageLayoutComponent() {
				const layout = this.$store.getters.layout;
					switch ( layout ) {
					case 'article':
						return 'ArticleLayout';
					case 'vector':
						return 'VectorLayout';
					default:
						return 'ArticleLayout'
				}
			}
		}
	}
</script>
