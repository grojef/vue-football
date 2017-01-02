<template>
    <div class="slideLeft">
        <div class="bg_f5">
            <div class="tac addGames fs24" @click="contiuneBet();">
                <i class="iconfont fs24">&#xe60e;</i> 继续添加比赛（已选择<span class="red" ng-cloak>{{betCount}}</span>场赛事）
            </div>
            <div class="k-tabs" style="top:4.6rem; bottom:9.6rem;">


                        <ul class="gamesList">
                        <li class="repeat" v-for="item in selectArray">
                            <div class="justify">
                                <div><span class="gray fs24 mr10">{{item.race.matchNo}}</span>{{item.race.homeTeam}}（主）VS
                                    {{item.race.guestTeam}}
                                </div>
                                <a class="red-better fs24" href="javascript:;" @click="removeRace(item.race.id);">删除</a>
                            </div>
                            <div class="gamesListBox clearfix">
                                <transition-group name="list" tag="p">
                                   <button v-for="(key,value) in item.tar" :key="key" @click="removeTar(item.race.id,key)" class="glb_btn" data-no="170102014-4076-3">{{key | formatCode}}</button>
                                </transition-group>
                            </div>
                        </li>
                      </ul>

            </div>
        </div>
        <div class="pick-area">
            <div class="pick-toolbar">
                <div class="pick-bets-con">
                    <p class="c666 fs24">预测奖金：<span class="red">1200.00</span>元 ~ <span class="red">1500.00</span>元</p>
                </div>
                <div class="tc-btn-group">
                    <a id="js_bet_mul" href="javascript:void(0);" class="tc-btn tc-btn-info fs24">投1倍</a>
                    <a id="js_bet_mul2" href="javascript:void(0);" class="tc-btn tc-btn-info fs24">2串1</a>
                    <a href="javascript:void(0);" @click="betConfrim()" class="tc-btn tc-btn-large tc-btn-primary fs24">立即支付2.00元</a>
                </div>
                <div class="pick-agree-rule">
                </div>
            </div>
        </div>
    </div>
</template>

<style>

    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-active {
        opacity: 0;
    }
</style>



<script>
    import {mapState, mapActions, mapGetters} from 'vuex'
    export default{

        data(){
            return {
                betCount: 0,
                selectArray: []
            }
        },
        methods: {
            contiuneBet() {
                this.$router.back();
            },
            removeRace(id) {
                this.$store.dispatch('removeRace', {id});
                this.initData();
            },
            removeTar(id,params) {
                this.$store.dispatch('togglePitch', {id,params});
                this.initData();
            },
            betConfrim(){
                  this.$message({message:'投注成功，自动返回选择比赛',duration:3000,onClose:()=>{
                      this.contiuneBet();
                  }});
            },
            initData() {
                var arr = [];
                this.$store.state.pitchRace.forEach((v, k) => {

                    let tar = [];

                    v.forEach(vt=>{
                        tar.push(vt);
                    })

                    this.$store.state.raceList.forEach(f => {
                        if (k == f.id) {
                            arr.push({'race': f, 'tar': tar});
                        }
                    })
                });

                this.selectArray = arr;
                this.betCount = this.selectArray.length;

                if (this.betCount < 2) {
                    this.contiuneBet();
                }

            }
        },
        mounted(){
            this.initData();
        }
    }
</script>
