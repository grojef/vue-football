
const Bet = resolve => {require(['./components/bet.vue'], resolve)};

export default function (VueRouter) {
  return new VueRouter({
      base: __dirname,
      mode:'history',
      routes: [{
        name:'list',
        path: '/list',
        component: require('./components/list.vue')
      },
        {
          name:'bet',
          path: '/bet',
          component: Bet
        },
        {
          path: '*',
          component: require('./components/list.vue')
        },
      ]
    }
  );
}
