/**
 * Created by kexiao on 2016/9/7.
 */
// 创建一个对象存储一系列我们接下来要写的 mutation 函数
export default {
  kick (state,{amount}) {
    state.msg+=amount;
  }
}
