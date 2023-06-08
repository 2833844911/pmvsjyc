const generator = require("@babel/generator").default;
const tee = require('@babel/types');
const parser = require("@babel/parser");



var constantPool = [100, "c_f_0", 1, "c_f_1", "console", "log"]; //  常量池
var changlc = {
    "awcbb_yhh_fun0": {  // 函数
        "variablePool": {"c_f_0": null, "c_f_1": null}, // 变量池
        "zhili": [1, 10, 0, 23, 22, 1, 23, 10, 1, 181, 10, 2, 20, 23, 22, 3, 23, 10, 3, 181, 23, 10, 4, 181, 10, 5, 181, 150, 1] //指令
    }
};

function cltothis(cythis, poolList, off) {
    for (let i in poolList) {
        if (off == 1) {
            cythis[i] = undefined
        } else {
            cythis[i] = poolList[i];

        }

    }
}


function cbb_jsvmp(all, duei, start, shuz, argsList, ogg, op, myAst){
    if (op !== undefined) {
        var allthis
        allthis = op['allthis']
        duei = op.duei
        all = op.all
        shuz = op.shuz
        argsList = op.argsList
        var a1, a2, a3, a4, a5, a6, a7, a8, a9, j, j2, i, a10;
        a7 = op.a7
        var args = op.args
        var cbbb = op.cbbb;
    } else {
        var allthis
        if (ogg !== undefined) {
            allthis = ogg
        } else {
            allthis = all
        }
        var a1, a2, a3, a4, a5, a6, a7, a8, a9, j, j2, i, a10;
        var args = []
        var cbbb = all;
    }

    var jsq = 0, og = 0, lp = 0
    while (!![]) {
         let s_cbb = shuz[start++];

        switch (s_cbb) {
            case 1:
                a8 = duei.length
                break
            case 10:
                a1 = shuz[start++]
                let cy_10_1;
                
                cy_10_1 = tee.valueToNode(constantPool[a1])
               
                duei.push(cy_10_1)
                break
            case 20:
                a1 = duei.pop()
                a2 = duei.pop()
                // a1 = a2 + a1;
                a1 = tee.binaryExpression('+', a2, a1)
                duei.push(a1)
                break
            case 23:
                all = cbbb
                duei.push(cbbb)
                break
            case 150:
                a1 = shuz[start++]
                a3 = duei.pop()
                args = []
                for (a2 = 0; a2 < a1; a2++) {

                    args.splice(0, 0, duei.pop())
                }
                a4 = tee.callExpression(a3,args);
                myAst.body.push(a4)
                break
            case 22:
                a1 = shuz[start++]
                a2 = duei.pop()
                a3 = duei.pop()
                let cy_22_1 = tee.memberExpression(a2, tee.identifier(constantPool[a1]))
                let cy_22_2 = tee.assignmentExpression("=", cy_22_1, a3);
                myAst.body.push(cy_22_2)
                break
            case 181:
                a1 = duei.pop();
                a2 = duei.pop();

                try {
                    // a1 = a2[a1]
                    a1 = tee.memberExpression(a2,a1,true)
                } catch (e) {
                    // a1 = window[a1]
                    console.log(a1);
                    a1 = tee.memberExpression(tee.identifier("window"),a1,true)
                }

                all = a2
                duei.push(a1)
                break

            default:
                if (!s_cbb){
                    console.log("解析结束！！！");
                    return
                }
                console.log("指令没有解析:", s_cbb)
                return
        }
    }


}

cywindow = tee.identifier("window")

cywindow['variablePool'] = {}
cywindow['zhili'] = []
cltothis(cywindow['variablePool'], changlc.awcbb_yhh_fun0.variablePool)
cltothis(cywindow['zhili'], changlc.awcbb_yhh_fun0.zhili)

var myAst =  tee.program([])

cbb_jsvmp(cywindow, [], 0, changlc.awcbb_yhh_fun0.zhili,undefined,undefined,undefined,myAst);

var code = generator(myAst).code;
console.log(code);
