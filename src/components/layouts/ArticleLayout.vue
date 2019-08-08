<style scoped lang="less">
@import (reference) "~wikimedia-ui-base/wikimedia-ui-base.less";

.page {
	display: grid;
	grid-template-areas: "global-header  global-header"
				"global-sidebar global-content"
				"global-footer  global-footer";
	grid-template-columns: auto 1fr;
	grid-template-rows: auto 1fr 120px;
}

.global-header {
	grid-area: global-header;
}
.global-content {
	grid-area: global-content;
}
.global-sidebar {
	grid-area: global-sidebar;
}

.global-footer {
	grid-area: global-footer;
}

.global-content {
	grid-area: global-content;
	display: grid;
	background-color:@background-color-base;
	padding: 12px;
	grid-template-areas:	"content-actions   content-actions"
				"content-header    content-meta-actions"
				"content-subheader content-subheader"
				"content-content   content-content";
	grid-template-columns: auto 1fr;
	box-shadow: @box-shadow-menu;
}

.content-header {
	grid-area: content-header;
	width: 100%;
	display: flex;
	border-bottom: 1px solid @wmui-color-base70;
}

.content-meta-actions {
	grid-area: content-meta-actions;
	border-bottom: 1px solid @wmui-color-base70;
}

.content-subheader {
	grid-area: content-subheader;
}

.content-actions {
	grid-area: content-actions;
}

.content-content {
	grid-area: content-content;
}


@media (max-width: @width-breakpoint-tablet) {
	.global-sidebar {
		position: fixed;
		display: none;
	}
}

</style>

<template>
<div class="page">
	<div class="global-content" v-bind:class="{ 'dev-view' : devView }" title="global content">
		<div class="content-header" v-bind:class="{ 'dev-view' : devView }" title="content header">
			<slot name="contentHeader"></slot>
		</div>

		<div class="content-content" v-bind:class="{ 'dev-view' : devView }" title="content content">
			<slot name="content"></slot>
		</div>

		<div class="content-subheader" v-bind:class="{ 'dev-view' : devView }" title="content subheader">
			<slot name="contentSubheader"></slot>
		</div>

		<div class="content-actions" v-bind:class="{ 'dev-view' : devView }" title="content actions">
			<slot name="contentActions"></slot>
		</div>

		<div class="content-meta-actions" v-bind:class="{ 'dev-view' : devView }" title="content meta actions">
			<slot name="contentMetaActions"></slot>
		</div>
	</div>
	<div class="global-header" v-bind:class="{ 'dev-view' : devView }" title="global header">
		<slot name="siteHeader"></slot>
	</div>
	<div class="global-sidebar" v-bind:class="{ 'dev-view' : devView }" title="global sidebar">
		<slot name="siteSidebar"></slot>
	</div>
	<div class="global-footer" v-bind:class="{ 'dev-view' : devView }" title="global footer">
		<slot name="siteFooter"></slot>
	</div>
</div>
</template>

<script>
export default {
	computed: {
		devView(){
			return this.$store.getters.devGrid;
		}
	}
}
</script>
