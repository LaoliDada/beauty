import home from "@/components/index";
import shareholders from "@/components/shareholders/index";
import situationShareOutBonus from "@/components/shareholders/situationShareOutBonus";
import investmentShareholders from "@/components/shareholders/investmentShareholders";
import consumptionShareholders from "@/components/shareholders/consumptionShareholders";
export default[
    {
        path:"/",
        redirect:"/index/shareholders"
    },
    {
        path:"/index",
        component:home,
        children:[
            {
                path:"shareholders",//会员概况
                component:shareholders,
                meta:'会员概况'
            },
            {
                path:"situationShareOutBonus",//分红情况
                component:situationShareOutBonus,
                meta:'分红情况'
            },
            {
                path:"investmentShareholders",//投资股东
                component:investmentShareholders,
                meta:'投资股东'
            },
            {
                path:"consumptionShareholders",//消费股东
                component:consumptionShareholders,
                meta:'消费股东'
            }
        ]
    }
]