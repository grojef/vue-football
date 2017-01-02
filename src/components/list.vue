<template>
    <div>
        <div id="jq_indent">
            <div class="k-tabs bg_f5" style="top:0; bottom:7.7rem;">
                <div class="all_match_tabs">
                    <div class="all_match">
                        <div class="match_hd bg_ff justify">
                            <p><i class="iconfont gray fs30">&#xe607;</i> 2015-02-09 星期一 {{count}} 场比赛</p>
                            <i class="iconfont gray_er">&#xe604;</i>
                        </div>
                        <ul class="match_list">
                            <li v-for="item in raceList">
                                <div class="match_bd">
                                    <div class="game_box">
                                        <div class="game_tit tac">
                                            <div class="game_tit_con gray">
                                                <p>{{item.matchName}}</p>
                                                <p>{{item.endSaleTimeStr}}</p>
                                                <p class="mt10" :class="{roll:index ==item.id}"
                                                   @click="toogleItemShow(item.id)">
                                                    <i class="iconfont fs30 pink">&#xe618;</i>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="game_bd">
                                            <table class="ft_tb" width="100%">
                                                <thead>
                                                <tr>
                                                    <td align="center"><a class="games_nums" href="javascript:;">{{item.matchNo}}</a>
                                                    </td>
                                                    <td align="center"><span class="fs20">{{item.homeTeam}}</span></td>
                                                    <td align="center"><span class="gray">VS</span></td>
                                                    <td align="center"><span class="">{{item.guestTeam}}</span></td>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-if="item.spfopen">
                                                    <td align="center">0</td>
                                                    <td align="center">
                                                        <div class="sucs_fail"
                                                             :class="{select:itemStatus[`${item.id}-4076-3`]}"
                                                             @click="toggleItem(item.id,'4076-3');"><span
                                                                class="name">胜</span>{{caculateSp(item['spf-sp'],0)}}
                                                        </div>
                                                    </td>
                                                    <td align="center">
                                                        <div class="sucs_fail"
                                                             :class="{select: itemStatus[`${item.id}-4076-1`]}"
                                                             @click="toggleItem(item.id,'4076-1');"><span
                                                                class="name">平</span>{{caculateSp(item['spf-sp'],1)}}
                                                        </div>
                                                    </td>
                                                    <td align="center">
                                                        <div class="sucs_fail"
                                                             :class="{select: itemStatus[`${item.id}-4076-0`]}"
                                                             @click="toggleItem(item.id,'4076-0');"><span
                                                                class="name">负</span>{{caculateSp(item['spf-sp'],2)}}
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr v-if="item.rspfopen">
                                                    <td align="center"><span class="red">{{item.concede}}</span></td>
                                                    <td align="center">
                                                        <div class="sucs_fail"
                                                             :class="{select: itemStatus[`${item.id}-4071-3`]}"
                                                             @click="toggleItem(item.id,'4071-3');"><span
                                                                class="name">胜</span>{{caculateSp(item['xspf-sp'],0)}}
                                                        </div>
                                                    </td>
                                                    <td align="center">
                                                        <div class="sucs_fail"
                                                             :class="{select: itemStatus[`${item.id}-4071-1`]}"
                                                             @click="toggleItem(item.id,'4071-1');"><span
                                                                class="name">平</span>{{caculateSp(item['xspf-sp'],1)}}
                                                        </div>
                                                    </td>
                                                    <td align="center">
                                                        <div class="sucs_fail"
                                                             :class="{select: itemStatus[`${item.id}-4071-0`]}"
                                                             @click="toggleItem(item.id,'4071-0');"><span
                                                                class="name">胜</span>{{caculateSp(item['xspf-sp'],2)}}
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="match_ft" v-if="index ==item.id">
                                    <table width="100%">
                                        <tr>
                                            <td width="22%" valign="top"><span class="">本场体验</span></td>
                                            <td><p>跨联赛三连败,巴萨罗那近期望反弹.近7次交战,巴萨罗那5胜1平1负.</p></td>
                                        </tr>
                                    </table>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="pick-area">
            <div class="pick-toolbar">
                <div class="pick-bets-con">
                    <p class="c666 fs24">开奖结果不包含加时赛及点球大战</p>
                </div>
                <div class="tc-btn-group">
                    <a href="javascript:void(0);" @click="reset()" class="tc-btn tc-btn-info fs24">重置</a>
                    <a href="javascript:void(0);" class="tc-btn tc-btn-large tc-btn-primary"
                       @click="check()">{{buttonMsg()}}</a>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import {mapState, mapActions, mapGetters} from 'vuex'

    import * as types from '../store/mutations-types'


    export default{
        data(){
            return {
                itemStatus: {},
                index: -1,
                count: 0,
                raceList: []
            }
        },
        methods: {
            check: function () {
                if (this.pitchRace.size > 1) {
                    this.$router.push('bet');
                } else {
                    this.$message({message: '请至少选择2场比赛', duration: 1000});
                }
            },
            caculateSp: function (orgin, index) {
                return orgin.split('-')[index];
            },
            toggleItem: function (id, params) {
                this.$store.dispatch(types.TOGGLE_PITCH, {id, params});
                this.caculateItemStatus();
                this.buttonMsg();
            },
            reset(){
                this.$message({
                    message: '重置成功',duration:300, onClose: () => {
                        this.$store.dispatch(types.RESET);
                        this.caculateItemStatus();
                        this.buttonMsg();
                    }
                });
            },
            caculateItemStatus: function () {
                let map = this.pitchRace;
                let item = {};
                map.forEach((values, key) => {
                    values.forEach(t => {
                        item[`${key}-${t}`] = true;
                    })
                });
                this.itemStatus = item;
            },
            toogleItemShow: function (key) {
                if (this.index == key) {
                    this.index = -1;
                } else {
                    this.index = key;
                }
            },
            buttonMsg: function () {
                if (this.$store.getters.pitchRace.size > 1) {
                    return "确认"
                } else {
                    return '请选择'
                }
            },
            initList: function () {
                this.raceList = this.$store.getters.getRaceList;
                this.count = this.raceList.length;
            }
        },

        mounted: function () {
            this.initList();
            this.caculateItemStatus();
        },

        computed: {
            ...mapGetters({pitchRace: 'pitchRace'})
        }
    }

</script>
