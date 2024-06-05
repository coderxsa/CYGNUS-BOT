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

const _0x5ca89e=_0x28ed;(function(_0x7973c1,_0x5efb36){const _0x2e9e76=_0x28ed,_0x1b21bc=_0x7973c1();while(!![]){try{const _0x13d9e4=-parseInt(_0x2e9e76(0x1a7))/0x1*(parseInt(_0x2e9e76(0x1b3))/0x2)+-parseInt(_0x2e9e76(0x1ab))/0x3*(-parseInt(_0x2e9e76(0x194))/0x4)+parseInt(_0x2e9e76(0x19b))/0x5*(parseInt(_0x2e9e76(0x196))/0x6)+-parseInt(_0x2e9e76(0x195))/0x7+parseInt(_0x2e9e76(0x1b1))/0x8+-parseInt(_0x2e9e76(0x1ad))/0x9*(-parseInt(_0x2e9e76(0x1b4))/0xa)+-parseInt(_0x2e9e76(0x1b5))/0xb*(parseInt(_0x2e9e76(0x197))/0xc);if(_0x13d9e4===_0x5efb36)break;else _0x1b21bc['push'](_0x1b21bc['shift']());}catch(_0x4dd12f){_0x1b21bc['push'](_0x1b21bc['shift']());}}}(_0x4a23,0xe4a69));const xppercredit=0x1;function _0x4a23(){const _0x222239=['economy','replace','bank','\x20gold\x20in\x20your\x20wallet','with','credit','1kaUSJt','data','help','Transferred\x20🪙\x20','2444982CHdSfR','chat','113355iwXihU','sender','tags','🟥\x20*You\x20don\x27t\x20have\x20sufficient\x20amount\x20of\x20gold\x20in\x20your\x20bank\x20to\x20make\x20this\x20transaction*','11944280SrEcRk','users','784954iuyNes','450nwOzaF','28302923qyUExY','8flFuiN','1437548ZauVBz','6126gJYkCR','12hDCjCu','floor','test','disabled','2045EwMuyH','max','withdraw','command','reply','withdrawall'];_0x4a23=function(){return _0x222239;};return _0x4a23();}function _0x28ed(_0x55f192,_0x321044){const _0x4a2387=_0x4a23();return _0x28ed=function(_0x28ed5e,_0x3e54cc){_0x28ed5e=_0x28ed5e-0x194;let _0x31f5e1=_0x4a2387[_0x28ed5e];return _0x31f5e1;},_0x28ed(_0x55f192,_0x321044);}let handler=async(_0x37150c,{conn:_0x596c0e,command:_0x27ba73,args:_0x25e335})=>{const _0x8090df=_0x28ed;let _0x244fac=_0x27ba73[_0x8090df(0x1a2)](/^(wt|withdraw)/i,'');_0x244fac=_0x244fac?/all/i[_0x8090df(0x199)](_0x244fac)?Math[_0x8090df(0x198)](global['db'][_0x8090df(0x1a8)][_0x8090df(0x1b2)][_0x37150c['sender']]['bank']/xppercredit):parseInt(_0x244fac):_0x25e335[0x0]?parseInt(_0x25e335[0x0]):0x1,_0x244fac=Math[_0x8090df(0x19c)](0x1,_0x244fac);if(global['db'][_0x8090df(0x1a8)]['users'][_0x37150c['sender']][_0x8090df(0x1a3)]>=xppercredit*_0x244fac)global['db'][_0x8090df(0x1a8)]['users'][_0x37150c[_0x8090df(0x1ae)]]['bank']-=xppercredit*_0x244fac,global['db']['data'][_0x8090df(0x1b2)][_0x37150c['sender']][_0x8090df(0x1a6)]+=_0x244fac,_0x596c0e['reply'](_0x37150c[_0x8090df(0x1ac)],_0x8090df(0x1aa)+_0x244fac+_0x8090df(0x1a4),_0x37150c);else _0x596c0e[_0x8090df(0x19f)](_0x37150c[_0x8090df(0x1ac)],_0x8090df(0x1b0),_0x37150c);};handler[_0x5ca89e(0x1a9)]=[_0x5ca89e(0x19d)],handler[_0x5ca89e(0x1af)]=[_0x5ca89e(0x1a1)],handler[_0x5ca89e(0x19e)]=[_0x5ca89e(0x19d),_0x5ca89e(0x1a5),_0x5ca89e(0x1a0),'withall','wt','wtall'],handler[_0x5ca89e(0x19a)]=![];export default handler;