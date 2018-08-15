<template>
	<div class="box">
		<div class="select">
			<div class="list left">
				<ul>
					<router-link v-for="item in list" :to="item.path" active-class="active" tag="li">
						<p class="tittle">
							<i class="el-icon-message"></i>
							<span><strong>{{item.title}}</strong></span>
							<i :class="icon"></i>
						</p>
						<ol>
							<router-link tag="li" active-class="active" v-for="items in item.name"  to="/index/zuzhi">{{items.title}}</router-link>
						</ol>
					</router-link>
				</ul>
			</div>
			<div class="content">
				<div class="header">
					组织结构
				</div>
				<div class="container">
					<router-view></router-view>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import http from 'axios'
export default {
	data(){
		return{
			icon:'el-icon-plus',
			list:null
		}
	},
	methods:{
		
	},
	created(){
		http.get('./static/data/list.json')
				.then(({data})=>{
					this.list = data;
				});
	}
}
</script>
<style scoped>
	.select{
	   width: 100%;
	}
	.list{
		box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
		width: 240px;
		background-color: #ffffff;
	    height: 100%;
	    margin-bottom: -70px;
	    padding-bottom: 70px;
	    float: left;
	}
	.list ul li ol li{
		padding: 10px 25px 10px 80px;
   		display: block;
   		font-size: 14px;
   		color: #75798B;
	}
	.tittle{
		padding: 15px 25px;
		text-align: center;
		color: #444;
		font-size: 14px;
	}
	.el-icon-message{
		font-size: 18px;
		line-height: 20px;
		float: left;
		vertical-align: middle;
	}
	.el-icon-plus{
		float: right;
		vertical-align: middle;
		line-height: 21px;
		
	}
	.content{
		float: right;
		width: 1250px;
		background: #FFFFFF;
	    margin: 20px 5px 15px 5px;
        box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);
	}
	.container{
		background: #FFFFFF;
	}
	.header{
		/*height: 40px ;*/
	    color: #797979;
    	background-color: #fafafa;
		/*line-height: 40px;*/
		
	    padding: 10px 20px;
	    font-size: 14px;
	}
</style>