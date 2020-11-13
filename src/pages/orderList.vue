<template>
  <div class="order-list">
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <loading v-if="loading"></loading>
          <div class="order" v-for="(item,index) in List" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                {{item.createTime}}
                <span>|</span>
                {{item.receiverName}}
                <span>|</span>
                订单号：{{item.orderNo}}
                <span>|</span>
                {{item.paymentTypeDesc}}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{item.payment}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list" v-for="(goods,i) in item.orderItemVoList" :key="i">
                  <div class="good-img">
                    <img v-lazy="goods.productImage" alt="">
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{goods.productName}}</div>
                    <div class="p-money">{{goods.currentUnitPrice}} X {{goods.quantity}}元</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="item.status == 10">
                <a href="javascript:;" @click="goPay(item.orderNo)">{{item.statusDesc}}</a>
              </div>
              <div class="good-state fr" v-else>
                <a href="javascript:;">{{item.statusDesc}}</a>
              </div>
            </div>
          </div>
          <!-- 分页器 -->
          <!-- <el-pagination
            class="pagination"
            background
            layout="prev, pager, next"
            :pageSize="pageSize"
            :total="total"
            @current-change="handleChange">
          </el-pagination> -->
          <!-- 点击按钮加载更多 -->
          <!-- <div class="load-more" v-if="showNextPage">
            <el-button type="primary" :loading="loading" @click="loadMore">加载更多</el-button>
          </div> -->
          <!-- 滚动加载数据 -->
          <div class="scroll-more"
            v-infinite-scroll="scrollMore" 
            infinite-scroll-disabled="busy" 
            infinite-scroll-distance="410">
            <img src="/imgs/loading-svg/loading-spinning-bubbles.svg" v-show="loading">
          </div>
          <no-data v-if="!loading && List.length == 0"></no-data>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import OrderHeader from './../components/OrderHeader'
  import Loading from './../components/Loading'
  import NoData from './../components/NoData'
  export default{ 
    name:'order-list',
    components:{
      OrderHeader,
      Loading,
      NoData
    },
    data(){
      return{
        List:[],
        loading:false,
        pageSize:10,
        pageNum:1,
        total:0,
        busy: false,//滚动加载，是否触发
        showNextPage:true,//加载更多，是否显示按钮
      }
    },
    mounted(){
      this.getOrderList()
    },
    methods:{
      getOrderList(){
        this.busy = true
        this.loading = true
        this.$axios.get('/orders',{
          params:{
            pageNum:this.pageNum,
            pageSize:10
          }
        }).then(res=>{
          this.loading = false
          this.busy = false
          // this.List = res.list
          this.List = this.List.concat(res.list)
          this.total = res.total
          this.showNextPage = res.hasNextPage
        }).catch(()=>{
          this.loading=false
        })
      },
      goPay(orderNo){
        this.$router.push({
          path:'/order/pay',
          query:{
            "orderNo":orderNo
          }
        })
      },
      //第一种方法：分页器
      handleChange(pageNum){
        this.pageNum = pageNum
        this.getOrderList()
      },
      //第二种方法：加载更多按钮
      loadMore(){
        this.pageNum++;
        this.getOrderList()
      },
      //第三种方法，滚动加载，通过插件实现
      scrollMore(){
        this.busy = true;
        setTimeout(()=>{
          this.pageNum++;
          this.getList()
        },500)
      },
      //专门给scrollMore使用
      getList(){
        this.loading = true
        this.$axios.get('/orders',{
          params:{
            pageNum:this.pageNum,
            pageSize:10
          }
        }).then(res=>{
          this.loading = false
          this.List = this.List.concat(res.list)
          if(res.hasNextPage){
            this.busy = false
          }else{
            this.busy = true
          }
        })
      }
    }
  }
</script>
<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .order-list{
    .wrapper{
      background-color:$colorJ;
      padding-top:33px;
      padding-bottom:110px;
      .order-box{
        .order{
          @include border();
          background-color:$colorG;
          margin-bottom:31px;
          &:last-child{
            margin-bottom:0;
          }
          .order-title{
            @include height(74px);
            background-color:$colorK;
            padding:0 43px;
            font-size:16px;
            color:$colorC;
            .item-info{
              span{
                margin:0 9px;
              }
            }
            .money{
              font-size:26px;
              color:$colorB;
            }
          }
          .order-content{
            padding:0 43px;
            .good-box{
              width:88%;
              .good-list{
                display: flex;
                align-items: center;
                height:145px;
                .good-img{
                  width:112px;
                  img{
                    width:100%;
                  }
                }
                .good-name{
                  font-size:20px;
                  color:$colorB;
                }
              }
            }
            .good-state{
              @include height(145px);
              font-size: 20px;
              color:$colorA;
              a{
                color:$colorA;
              }
            }
          }
        }
        .pagination{
          text-align:right;
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active{
          background-color: #FF6600;
        }
        .el-button--primary{
          background-color: #FF6600;
          border-color: #FF6600;
        }
        .load-more,.scroll-more{
          text-align:center;
        }
      }
    }
  }
</style>