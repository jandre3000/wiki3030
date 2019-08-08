<style scoped lang="less">
	h1 {
		margin-bottom: 0.2em;
		font-weight: normal;
	}
	/**
	 * Hide all headings on the main page
	 */
	h1[data-content="Main Page"], // en
	h1[data-content="メインページ"], // ja
	h1[data-content="Wikipedia:Portada"], // es
	h1[data-content="Wikipedia:Hauptseite"], // de
	h1[data-content="Заглавная_страница"], // ru
	h1[data-content="Wikipédia:Accueil_principal"], // fr
	h1[data-content="Pagina_principale"], // it
	h1[data-content="Wikipedia:首页"], // zh
	h1[data-content="Wikipédia:Página_principal"], //pt
	h1[data-content="Wikipedia:Strona_główna"] // pl
	{
		display: none;
	}
</style>
<template>
	<h1
		v-bind:lang=$store.getters.lang
		v-bind:data-content=$store.getters.title
	>
		{{ $store.getters.title }}
	</h1>
</template>
