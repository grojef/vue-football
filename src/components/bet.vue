<template>
    <div class="slideLeft">
        <div class="bg_f5">
            <div class="tac addGames fs24" @click="contiuneBet();">
                <i class="iconfont fs24">&#xe60e;</i> 继续添加比赛（已选择<span class="red">{{selectArray.length}}</span>场赛事）
            </div>
            <div class="k-tabs" style="top:4.6rem; bottom:9.6rem;">


                <ul class="gamesList">
                    <li class="repeat" v-for="item in selectArray" :key="item.id">
                        <div class="justify">
                            <div><span class="gray fs24 mr10">{{item.matchNo}}</span>{{item.homeTeam}}（主）VS
                                {{item.guestTeam}}
                            </div>
                            <a class="red-better fs24" href="javascript:;" @click="removeRace(item.id);">删除</a>
                        </div>
                        <div class="gamesListBox clearfix">
                            <transition-group name="list" tag="p">
                                <button v-for="(value,key) in item.comments" :key="key" v-if="value"
                                        @click="removeTar(item.id,key)" class="glb_btn">{{key | formatCode}}
                                </button>
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
    import * as types from '../store/mutations-types'
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
                this.$store.dispatch(types.REMOVE_RACE, {id});
            },
            removeTar(id, params) {
                this.$store.dispatch(types.TOGGLE_PITCH, {id, params});
            },
            betConfrim(){
                this.$message({
                    message: '投注成功，自动返回', duration: 3000, onClose: () => {
                        this.contiuneBet();
                    }
                });
            }
        },
        mounted(){
            //this.initData();
        },
        computed: {
            ...mapGetters({selectArray: 'validMatches'})
        }
    }
</script>
