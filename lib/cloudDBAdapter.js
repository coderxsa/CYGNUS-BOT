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

const _0x484e32=_0x552e;(function(_0x426f09,_0x53bb5e){const _0x445a9b=_0x552e,_0x58c4fd=_0x426f09();while(!![]){try{const _0x490d82=parseInt(_0x445a9b(0x111))/0x1+-parseInt(_0x445a9b(0x115))/0x2+parseInt(_0x445a9b(0x124))/0x3+parseInt(_0x445a9b(0x10d))/0x4*(-parseInt(_0x445a9b(0x121))/0x5)+-parseInt(_0x445a9b(0x11e))/0x6*(parseInt(_0x445a9b(0x122))/0x7)+-parseInt(_0x445a9b(0x116))/0x8*(-parseInt(_0x445a9b(0x123))/0x9)+parseInt(_0x445a9b(0x11d))/0xa;if(_0x490d82===_0x53bb5e)break;else _0x58c4fd['push'](_0x58c4fd['shift']());}catch(_0x18f0f8){_0x58c4fd['push'](_0x58c4fd['shift']());}}}(_0x361e,0x8b475));import _0x582030 from'got';const stringify=_0x4b1d49=>JSON[_0x484e32(0x118)](_0x4b1d49,null,0x2),parse=_0x18be00=>JSON[_0x484e32(0x10c)](_0x18be00,(_0x499531,_0x23bfe8)=>{const _0x4f8f15=_0x484e32;if(_0x23bfe8!==null&&typeof _0x23bfe8===_0x4f8f15(0x11c)&&_0x4f8f15(0x11b)in _0x23bfe8&&_0x23bfe8['type']===_0x4f8f15(0x120)&&_0x4f8f15(0x114)in _0x23bfe8&&Array[_0x4f8f15(0x11a)](_0x23bfe8[_0x4f8f15(0x114)]))return Buffer['from'](_0x23bfe8['data']);return _0x23bfe8;});class CloudDBAdapter{constructor(_0x29b0af,{serialize:serialize=stringify,deserialize:deserialize=parse,fetchOptions:fetchOptions={}}={}){const _0x53034d=_0x484e32;this['url']=_0x29b0af,this[_0x53034d(0x11f)]=serialize,this[_0x53034d(0x10f)]=deserialize,this[_0x53034d(0x110)]=fetchOptions;}async['read'](){const _0x369116=_0x484e32;try{let _0x29c0a0=await _0x582030(this[_0x369116(0x119)],{'method':'GET','headers':{'Accept':'application/json;q=0.9,text/plain'},...this[_0x369116(0x110)]});if(_0x29c0a0[_0x369116(0x112)]!==0xc8)throw _0x29c0a0[_0x369116(0x117)];return this[_0x369116(0x10f)](_0x29c0a0[_0x369116(0x113)]);}catch(_0xb75b52){return null;}}async[_0x484e32(0x10e)](_0x46c303){const _0xa88383=_0x484e32;let _0x2f3672=await _0x582030(this[_0xa88383(0x119)],{'method':'POST','headers':{'Content-Type':_0xa88383(0x10b)},...this[_0xa88383(0x110)],'body':this[_0xa88383(0x11f)](_0x46c303)});if(_0x2f3672['statusCode']!==0xc8)throw _0x2f3672['statusMessage'];return _0x2f3672[_0xa88383(0x113)];}}function _0x552e(_0x2f6ab1,_0x26e7df){const _0x361e9f=_0x361e();return _0x552e=function(_0x552eee,_0x1cc6a8){_0x552eee=_0x552eee-0x10b;let _0x2ecba7=_0x361e9f[_0x552eee];return _0x2ecba7;},_0x552e(_0x2f6ab1,_0x26e7df);}function _0x361e(){const _0x112c37=['stringify','url','isArray','type','object','2867270DoHaqu','180126jKPaVD','serialize','Buffer','15MenXnO','189DTejPb','73809bBeNOP','182694chDGvB','application/json','parse','694268MYTdJK','write','deserialize','fetchOptions','730736yVJIku','statusCode','body','data','173838FoekXX','888wZFPdQ','statusMessage'];_0x361e=function(){return _0x112c37;};return _0x361e();}export default CloudDBAdapter;