<template>
<div class="shareholders">
    <div class="m_b16">
        <Input placeholder="姓名" class="m_r16" style="width:200px" v-model="serchName" />
        <Input placeholder="联系方式" class="m_r16" style="width:200px" v-model="serchTel" />
        <Button @click="search">查找</Button>
    </div>
    <Table stripe :columns="columns1" :data="data1">
         <template slot-scope="{row}" slot="action">
            <Button @click="editModel(row)" type="primary" size="small" style="margin-right: 5px">编辑</Button>
        </template>
    </Table>
    <Modal
        v-model="editModelShow"
        title="编辑信息"
        @on-ok="confirm"
        @on-cancel="cancel">
        <Form ref="formDetail" :model="formDetail" :rules="ruleValidate" :label-width="80">
            <FormItem label="姓名" prop="name">
                <Input v-model="formDetail.name" />
            </FormItem>
            <FormItem label="联系方式" prop="name">
                <Input v-model="formDetail.tel" />
            </FormItem>
            <FormItem label="类型" prop="name">
                <Select v-model="formDetail.type">
                    <Option value="1" :key="1">消费型股东</Option>
                    <Option value="2" :key="2">投资型股东</Option>
                </Select>
            </FormItem>
            <FormItem label="入股金额" prop="name">
                <Input v-model="formDetail.price" />
            </FormItem>
            <FormItem label="分红比例" prop="name">
                <Input v-model="formDetail.commissionRatio" />
            </FormItem>
            <FormItem true-value="1" false-value="0" label="禁用账户" prop="disabled">
                <i-switch v-model="formDetail.disabled" size="large">
                    <span slot="open">是</span>
                    <span slot="close">否</span>
                </i-switch>
            </FormItem>
        </Form>
    </Modal>
</div>
</template>

<script>
export default {
    data() {
        return {
            serchName:"",
            serchTel:"",
            editModelShow:false,
            columns1: [{
                    title: '姓名',
                    key: 'name'
                },
                {
                    title: '会员类型',
                    key: 'type'
                },
                {
                    title: '余额/投资金额',
                    key: 'balance'
                },
                {
                    title: '联系方式',
                    key: 'tel'
                },
                {
                    title: '是否禁用',
                    key: 'disabled'
                },
                {
                    title:"操作",
                    slot:"action"
                }
            ],
            data1: [{
                    name: '李毅',
                    type: '投资型',
                    balance: '10800',
                    disabled: '否',
                    tel: '19300000000',
                }
            ],
            formDetail:{
                name:"",
                tel:"",
                type:"1",
                price:0,
                commissionRatio:10,
                disabled:"0",
            },
            ruleValidate:{}
       }
    },
    methods:{
        editModel(){
            this.editModelShow = true;
        },
        confirm(){

        },
        cancel(){

        },
        search(){
            console.log(this.serchName);
        }
    }
}
</script>
