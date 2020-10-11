<template>
<div class="shareholders">
    <div class="m_b16">
        <Input placeholder="姓名" class="m_r16" style="width:200px" v-model="serchName" />
        <Input placeholder="联系方式" class="m_r16" style="width:200px" v-model="serchTel" />
        <Button @click="search">查找</Button>
    </div>
    <Table stripe :columns="columns1" :data="data1">
         <template slot-scope="{row}" slot="action">
            <Button @click="editModel(row)" type="primary" size="small" style="margin-right: 5px">查看分红明细</Button>
        </template>
    </Table>
    <Modal
        v-model="editModelShow"
        title="查看分红明细"
        @on-ok="confirm"
        @on-cancel="cancel">
        <Table stripe :columns="columns2" :data="data2"></Table>
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
            columns2:[
                {
                    title: '日期',
                    key: 'date'
                },
                {
                    title: '消费金额',
                    key: 'price'
                },{
                    title: '分红比例',
                    key: 'proportion'
                },{
                    title: '分红金额',
                    key: 'balance'
                },
            ],
             columns1: [{
                    title: '姓名',
                    key: 'name'
                },
                {
                    title: '会员类型',
                    key: 'type'
                },
                {
                    title: '累计分红',
                    key: 'balance'
                },
                {
                    title: '已提现',
                    key: 'withdrawal'
                },
                {
                    title: '联系方式',
                    key: 'tel'
                },
                {
                    title: '操作',
                    slot: 'action'
                }
            ],
            data1: [{
                    name: '李毅',
                    type: '投资型',
                    balance: '10800',
                    withdrawal: '1000',
                    tel: '19300000000',
                }
            ],
            data2: [{
                    date: '2020-10-10',
                    price: '2999',
                    proportion: '10%',
                    balance: '299.9',
                },{
                    date: '2020-10-10',
                    price: '2999',
                    proportion: '10%',
                    balance: '299.9',
                },{
                    date: '2020-10-10',
                    price: '2999',
                    proportion: '10%',
                    balance: '299.9',
                },{
                    date: '2020-10-10',
                    price: '2999',
                    proportion: '10%',
                    balance: '299.9',
                },{
                    date: '2020-10-10',
                    price: '2999',
                    proportion: '10%',
                    balance: '299.9',
                },{
                    date: '2020-10-10',
                    price: '2999',
                    proportion: '10%',
                    balance: '299.9',
                },
            ]
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
