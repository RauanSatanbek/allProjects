var Vue = require("vue");
var vueRouter = require("vue-router");
var hello = require("vue!./components/hello.vue");
var about = require("vue!./components/about.vue");
Vue.use(vueRouter);

var home = {template: "<div>Home</div>"};
var profile = {template: "<div>profile</div>"};
var posts = {template: "<div>posts</div>"};
var router = new vueRouter({
	routes: [
		{path: "/user", component: hello, 
			children: [
				{path: "", component: home},
				{path: "profile", component: profile},
				{path: "posts", component: posts}
			]
		},
		{path: "/about/:id", component: about}
	]
});
new Vue({
	el: "#app",
	components: {
		hello: hello
	},
	router: router
});