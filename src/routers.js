
const Bet = resolve => {require(['./components/bet.vue'], resolve)};

const List = resolve =>{require(['./components/list.vue'],resolve)}

export default function (VueRouter) {
  return new VueRouter({
      base: __dirname,
      mode:'history',
      routes: [{
        name:'list',
        path: '/list',
        component: List
      },
        {
          name:'bet',
          path: '/bet',
          component: Bet
        },
        {
          path: '*',
          component: List
        },
      ]
    }
  );
}
