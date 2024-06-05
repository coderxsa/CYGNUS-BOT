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

function _0x1977(_0x36a1ff,_0x30528d){const _0x8416c3=_0x8416();return _0x1977=function(_0x19772a,_0x5d4a54){_0x19772a=_0x19772a-0x104;let _0xdd6922=_0x8416c3[_0x19772a];return _0xdd6922;},_0x1977(_0x36a1ff,_0x30528d);}function _0x8416(){const _0x2d85f8=['40911FLPPZp','dep','test','4368020egnQYs','7ciVpHc','188HtJaax','\x20gold\x20to\x20your\x20bank','command','540uKnHit','reply','5327084GtKPVR','chat','deposit','data','disabled','credit','🟥\x20*You\x20don\x27t\x20have\x20sufficient\x20amount\x20of\x20gold\x20in\x20your\x20wallet\x20to\x20make\x20this\x20transaction*','4225842pRVswl','bank','depall','7007912GotSaP','446409odYupL','1172545hEjUJE','max','replace','sender','You\x20have\x20transferred\x20🪙\x20','users'];_0x8416=function(){return _0x2d85f8;};return _0x8416();}const _0x2b3875=_0x1977;(function(_0x5cf9b3,_0x4560f3){const _0x4cfc8e=_0x1977,_0x5004ea=_0x5cf9b3();while(!![]){try{const _0x26a4d9=-parseInt(_0x4cfc8e(0x10d))/0x1+parseInt(_0x4cfc8e(0x118))/0x2*(parseInt(_0x4cfc8e(0x113))/0x3)+-parseInt(_0x4cfc8e(0x11d))/0x4+parseInt(_0x4cfc8e(0x116))/0x5+-parseInt(_0x4cfc8e(0x108))/0x6+-parseInt(_0x4cfc8e(0x117))/0x7*(parseInt(_0x4cfc8e(0x10b))/0x8)+-parseInt(_0x4cfc8e(0x10c))/0x9*(-parseInt(_0x4cfc8e(0x11b))/0xa);if(_0x26a4d9===_0x4560f3)break;else _0x5004ea['push'](_0x5004ea['shift']());}catch(_0x501d23){_0x5004ea['push'](_0x5004ea['shift']());}}}(_0x8416,0xb6f0c));const xpperbank=0x1;let handler=async(_0x144e6c,{conn:_0x204d25,command:_0x4c3f9d,args:_0x3bdb2c})=>{const _0x392720=_0x1977;let _0x4f52af=_0x4c3f9d[_0x392720(0x10f)](/^(dep|deposit)$/i,'');_0x4f52af=_0x4f52af?/depall/i[_0x392720(0x115)](_0x4f52af)?Math['floor'](global['db'][_0x392720(0x104)][_0x392720(0x112)][_0x144e6c[_0x392720(0x110)]][_0x392720(0x106)]/xpperbank):parseInt(_0x4f52af):_0x3bdb2c[0x0]?parseInt(_0x3bdb2c[0x0]):0x1,_0x4f52af=Math[_0x392720(0x10e)](0x1,_0x4f52af);if(global['db'][_0x392720(0x104)][_0x392720(0x112)][_0x144e6c[_0x392720(0x110)]][_0x392720(0x106)]>=xpperbank*_0x4f52af)global['db'][_0x392720(0x104)][_0x392720(0x112)][_0x144e6c['sender']][_0x392720(0x106)]-=xpperbank*_0x4f52af,global['db'][_0x392720(0x104)][_0x392720(0x112)][_0x144e6c['sender']][_0x392720(0x109)]+=_0x4f52af,_0x204d25[_0x392720(0x11c)](_0x144e6c[_0x392720(0x11e)],_0x392720(0x111)+_0x4f52af+_0x392720(0x119),_0x144e6c);else _0x204d25[_0x392720(0x11c)](_0x144e6c[_0x392720(0x11e)],_0x392720(0x107),_0x144e6c);};handler['help']=[_0x2b3875(0x11f)],handler['tags']=['economy'],handler[_0x2b3875(0x11a)]=[_0x2b3875(0x11f),_0x2b3875(0x114),_0x2b3875(0x10a)],handler[_0x2b3875(0x105)]=![];export default handler;