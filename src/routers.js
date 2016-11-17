export default function (VueRouter) {
  return new VueRouter({
      base: __dirname,
      routes: [{
        name:'list',
        path: '/list',
        component: require('./components/list.vue')
      },
        {
          name:'bet',
          path: '/bet',
          component: require('./components/bet.vue')
        },
      {
          name:'loading',
          path: '/loading',
          component: require('./components/common/loading.vue')
      },
        {
          path: '*',
          component: require('./components/list.vue')
        },
      ]
    }
  );
}
