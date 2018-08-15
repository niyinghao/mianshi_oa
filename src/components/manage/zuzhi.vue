<template>
	<div class="box">
		<div class="container">
			<ul class="tab">
				<li class="two active">组织结构</li>
				<li class="two">自定义字段</li>
			</ul>
			<div class="row">
				<div class="clo-left">
					<ul>
						<li v-for="item in try_list">
							<p style="text-align:left;"><i class="fa fa-home"></i>鸿合科技{{item.name}}</p>
						</li>
						
					</ul>
				</div>
				<div class="clo-right">
					<div class="hd_btn">
						<el-button plain><i class="fa el-icon-delete"></i>删除</el-button>
						<el-button plain><i class="fa fa-plus"></i>创建分部</el-button>
						<el-button plain><i class="fa fa-plus"></i>创建部门</el-button>
					</div>
					<div class="from_label">
						<div class="label">
							<label class="label_mi l">分类编码</label>
							<el-input  v-model="input" placeholder="请输入内容"></el-input>
						</div>
						<div class="label">
							<label class="label_mi l">分布名称</label>
							<el-input  v-model="input" placeholder="请输入内容"></el-input>
						</div>
						<div class="label">
							<label class="lable_mi l">分布简称</label>
							<el-input  v-model="input" placeholder="请输入内容"></el-input>
						</div>
						<div class="label">
							<label class="label_mi l">显示顺序</label>
							<el-input  v-model="input" placeholder="请输入内容"></el-input>
						</div>
						<div class="label">
							<label class="lable_mi l">上级</label>
							<el-input  v-model="input" placeholder="请输入内容"></el-input>
						</div>
						<div class="label">
							<label class="lable_mi l">描述</label>
							<el-input
							  type="textarea"
							  :rows="2"
							  placeholder="请输入内容"
							  v-model="textarea">
							</el-input>
						</div>
						<div class="label_btn">
							<el-button plain><i class="fa el-icon-printer"></i>打印</el-button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import http from 'axios'
	export default{
		data(){
			return {
				try_list:null
			}
		},
		created(){
			http.get('http://api.haomo-studio.com/org/departments')
				.then(({data})=>{
					this.try_list=data;
					console.log(this.try_list)
				})
		}
	}
</script>

<style scoped>
	.container{
		padding: 20px;
	}
	.tab{
		overflow: hidden;
	    border-bottom: 1px solid #ccc;
    	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
		font-size: 14px ;
	}
	.container ul .two{
		float: left;
		width: 90px ;
		height: 28px;
		text-align: center;
		line-height: 30px;
	    margin-bottom: -1px;
	}
	.container ul .two.active{
		border: 1px solid #ccc;
		border-bottom: none;
		border-radius:4px 4px 0 0;
		background: #DDDDDD;
		color: #727272;
		font-weight: bold;
	}
	.row{
		overflow:hidden;
		padding: 20px;
	}
	.clo-left{
		float: left;
		width: 300px;
		overflow-y:scroll;
		height: 529px;
		position: relative;
		
	}
	.clo-left ul:before{
		width: 1px;
	    z-index: 1;
	    content: "";
	    display: block;
	    position: absolute;
	    top: 20px;
	    bottom: 16px;
        left: 7px;
	    border-left: 1px solid #999;
	}
	.clo-left ul li{
		font-size: 14px;
	    padding: 4px 5px 6px 5px;
	    position: relative;
	}
	.clo-left ul li:before{
	    display: inline-block;
		content: "";
		position: absolute;
		top: 14px;
		left: -13px;
		width: 18px;
		height: 0;
		border-top: 1px solid #666;
		z-index: 1;
	}
	
	.clo-left ul li:first-child{
		margin-left:-18px ;
	}
	.clo-left ul li:first-child:before{
		display: none;
	}
	.clo-left ul{
		margin-left: 20px;
	}
	.clo-right{
		float: left;
		width: 70%;
		height: 539px;
		border-left: 1px solid #e4e4e4;
		margin-left:20px;
		margin-right: 10px;
	}
	label{
		text-align: right;
		display: block;
		width: 200px;
		line-height: 30px;
		margin-right: 30px;
		font-size: 12px;
	}
	.label_mi::before{
		content: "*";
		color: red;
		margin-left: 3px;
		float: right;
	}
	li{
		color: #666;
	}
	.fa{
		margin-right:4px ;
	}
	.label{
		margin-bottom: 20px;
	}
	.hd_btn{
		margin-bottom: 30px;
		padding: 10px 15px;
		border-bottom: 1px solid #e4e4e4 !important;
	}
	.el-button{
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
	}
	.el-input{
		width: 400px;
	}
	.el-textarea{
		width: 400px;	
	}
	.el-button{
		
	}
	.label_btn{
		margin-left: 127px;
	}
</style>