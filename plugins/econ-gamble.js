/*
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ                                             // 
//                                                                                                      // 
//                                         Ｖ：１．０                                                    // 
//                                                                                                      // 
//                                                                                                      //
//         ██████ ██    ██  ██████  ███    ██ ██    ██ ███████       ██████   ██████  ████████          //
//        ██       ██  ██  ██       ████   ██ ██    ██ ██            ██   ██ ██    ██    ██             //
//        ██        ████   ██   ███ ██ ██  ██ ██    ██ ███████ █████ ██████  ██    ██    ██             //   
//        ██         ██    ██    ██ ██  ██ ██ ██    ██      ██       ██   ██ ██    ██    ██             //  
//         ██████    ██     ██████  ██   ████  ██████  ███████       ██████   ██████     ██             //  
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

*
   * @project_name : CYGNUS-BOT
   * @author : CODERXSA
   * @youtube : https://www.youtube.com/coderxsa
   * @description : My Private build i made public for everone to use and easy hosting.
   * @version 1.0
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By CODERX.
   * © 2024 CYGNUS-BOT.
*/



//══════════════════════════════════════════════════════════════════════════════════════════════════════//

const _0x392364=_0x4c79;function _0x4c79(_0x3be6fa,_0x278655){const _0x48cd21=_0x48cd();return _0x4c79=function(_0x4c7915,_0x4e9c39){_0x4c7915=_0x4c7915-0x67;let _0x2e3890=_0x48cd21[_0x4c7915];return _0x2e3890;},_0x4c79(_0x3be6fa,_0x278655);}(function(_0x2c2105,_0x103cb2){const _0x34ab2c=_0x4c79,_0x415d10=_0x2c2105();while(!![]){try{const _0x5a8a7a=-parseInt(_0x34ab2c(0x81))/0x1+parseInt(_0x34ab2c(0x8c))/0x2+-parseInt(_0x34ab2c(0x6d))/0x3*(-parseInt(_0x34ab2c(0x88))/0x4)+-parseInt(_0x34ab2c(0x87))/0x5+-parseInt(_0x34ab2c(0x71))/0x6*(-parseInt(_0x34ab2c(0x6e))/0x7)+-parseInt(_0x34ab2c(0x72))/0x8*(-parseInt(_0x34ab2c(0x79))/0x9)+parseInt(_0x34ab2c(0x73))/0xa*(-parseInt(_0x34ab2c(0x77))/0xb);if(_0x5a8a7a===_0x103cb2)break;else _0x415d10['push'](_0x415d10['shift']());}catch(_0xda01b8){_0x415d10['push'](_0x415d10['shift']());}}}(_0x48cd,0xdc2d9));let rouletteBets={},rouletteResult={};const handler=async(_0x5192ce,{conn:_0x16b908,args:_0x56de65,usedPrefix:_0x5d82bc,command:_0x21fc79})=>{const _0x3698f3=_0x4c79,_0x7bd90a=(_0xedd8,_0x592731)=>{const _0x333777=_0x4c79;let _0x34e392=_0x5192ce['quoted']?_0x5192ce[_0x333777(0x85)][_0x333777(0x7e)]:_0x5192ce[_0x333777(0x7b)]&&_0x5192ce[_0x333777(0x7b)][0x0]?_0x5192ce[_0x333777(0x7b)][0x0]:_0x5192ce['fromMe']?_0x592731['user']['jid']:_0x5192ce['sender'],_0x6c3651=_0x592731[_0x333777(0x7a)](_0x34e392);if(!(_0x34e392 in global['db']['data'][_0x333777(0x6a)]))throw _0x333777(0x67);if(rouletteBets[_0xedd8]&&rouletteBets[_0xedd8][_0x333777(0x8a)]>0x0){let _0x31b0cc=[_0x333777(0x89),_0x333777(0x97)],_0x4985e3=_0x31b0cc[Math[_0x333777(0x70)](Math['random']()*_0x31b0cc[_0x333777(0x8a)])],_0x3510fc=[],_0x4e1157=_0x333777(0x7d)+_0x4985e3+'\x0a\x0a🎉\x20Winners\x20🎉\x0a\x0a';for(let _0xa1a00a of rouletteBets[_0xedd8]){let _0x16faf0='';_0x4985e3===_0xa1a00a['color']?(_0x16faf0='@'+_0xa1a00a[_0x333777(0x7f)][_0x333777(0x68)]('@')[0x0]+_0x333777(0x80)+_0xa1a00a[_0x333777(0x86)],global['db'][_0x333777(0x84)]['users'][_0xa1a00a[_0x333777(0x7f)]][_0x333777(0x8f)]+=_0xa1a00a[_0x333777(0x86)],_0x3510fc[_0x333777(0x7c)](_0x16faf0)):(_0x16faf0='@'+_0xa1a00a['user'][_0x333777(0x68)]('@')[0x0]+_0x333777(0x74)+_0xa1a00a[_0x333777(0x86)],global['db'][_0x333777(0x84)][_0x333777(0x6a)][_0xa1a00a[_0x333777(0x7f)]][_0x333777(0x8f)]-=_0xa1a00a['amount']);}_0x4e1157+=_0x3510fc[_0x333777(0x92)]('\x0a'),_0x3510fc[_0x333777(0x8a)]===0x0&&(_0x4e1157+='No\x20winners'),rouletteResult[_0xedd8]=_0x4e1157,delete rouletteBets[_0xedd8],_0x592731[_0x333777(0x8e)](_0x5192ce[_0x333777(0x76)],_0x4e1157,_0x5192ce,{'mentions':[_0x34e392]});}},_0x5339d6=(_0x446076,_0x25d304)=>{const _0x2daaf5=0xa*0x3e8;setTimeout(()=>{_0x7bd90a(_0x446076,_0x25d304);},_0x2daaf5);},_0x3c9d8b=(_0x33ae8c,_0x5719e5,_0x2cc7bf,_0x5245c7)=>{const _0x51bd46=_0x4c79;let _0x3dcc7a=[_0x51bd46(0x89),_0x51bd46(0x97)];if(isNaN(_0x2cc7bf)||_0x2cc7bf<0x1f4)throw'✳️\x20The\x20minimum\x20bet\x20is\x20500\x20gold';if(!_0x3dcc7a[_0x51bd46(0x75)](_0x5245c7))throw _0x51bd46(0x95);if(_0x4f9ed7[_0x51bd46(0x8f)]<_0x2cc7bf)throw _0x51bd46(0x91);if(_0x2cc7bf>0x186a0)throw _0x51bd46(0x83);return!rouletteBets[_0x5719e5]&&(rouletteBets[_0x5719e5]=[]),rouletteBets[_0x5719e5][_0x51bd46(0x7c)]({'user':_0x33ae8c,'amount':_0x2cc7bf,'color':_0x5245c7}),_0x51bd46(0x90)+_0x2cc7bf+_0x51bd46(0x6c)+_0x5245c7+_0x51bd46(0x8b);};let _0x3c6fb5=parseInt(_0x56de65[0x0]),_0x32a9a4=_0x56de65[0x1]?.[_0x3698f3(0x93)]();if(_0x56de65['length']<0x2)throw _0x3698f3(0x69)+(_0x5d82bc+_0x21fc79)+_0x3698f3(0x6f)+(_0x5d82bc+_0x21fc79)+_0x3698f3(0x6b);let _0x4f9ed7=global['db'][_0x3698f3(0x84)][_0x3698f3(0x6a)][_0x5192ce[_0x3698f3(0x7e)]],_0x116879=_0x3c9d8b(_0x5192ce[_0x3698f3(0x7e)],_0x5192ce[_0x3698f3(0x76)],_0x3c6fb5,_0x32a9a4);_0x5192ce[_0x3698f3(0x8e)](_0x116879),_0x5339d6(_0x5192ce[_0x3698f3(0x76)],_0x16b908);};handler[_0x392364(0x94)]=['gamble\x20<amount>\x20<color(red/black)>'],handler[_0x392364(0x78)]=[_0x392364(0x82)],handler[_0x392364(0x8d)]=['gamble'],handler[_0x392364(0x96)]=!![];function _0x48cd(){const _0xb4aca0=['join','toLowerCase','help','✳️\x20You\x20must\x20specify\x20a\x20valid\x20color:\x20red\x20or\x20black','group','black','✳️\x20The\x20user\x20is\x20not\x20found\x20in\x20my\x20database','split','✳️\x20Command\x20Usage:\x20','users','\x20500\x20red','\x20gold\x20on\x20','6DFMBHv','301ThMfTo','\x20<amount>\x20<color>\x0a\x0a\x20Example:\x20','floor','151410bmdMxt','12457232czfXuk','3531700swTvgA','\x20lost\x20','includes','chat','44cQEKNe','tags','9UumkkU','getName','mentionedJid','push','The\x20ball\x20landed\x20on\x20','sender','user','\x20won\x20','1071349legQhe','economy','🟥\x20You\x20can\x27t\x20bet\x20gold\x20more\x20than\x20100000','data','quoted','amount','6417985UcKzde','1145044BTsRUk','red','length','\x20has\x20been\x20placed!','2909388GhrgGL','command','reply','credit','✅\x20Your\x20bet\x20of\x20','✳️\x20You\x20do\x20not\x20have\x20enough\x20gold!'];_0x48cd=function(){return _0xb4aca0;};return _0x48cd();}export default handler;