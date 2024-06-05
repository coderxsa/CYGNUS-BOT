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

const _0x2d19af=_0x2926;(function(_0x5e7f79,_0x5cb2c8){const _0x1ba7a0=_0x2926,_0x3d6b3d=_0x5e7f79();while(!![]){try{const _0x2b1f55=parseInt(_0x1ba7a0(0x1fe))/0x1+parseInt(_0x1ba7a0(0x1fd))/0x2+parseInt(_0x1ba7a0(0x204))/0x3*(-parseInt(_0x1ba7a0(0x208))/0x4)+-parseInt(_0x1ba7a0(0x1f3))/0x5+parseInt(_0x1ba7a0(0x20c))/0x6+-parseInt(_0x1ba7a0(0x200))/0x7+parseInt(_0x1ba7a0(0x20b))/0x8;if(_0x2b1f55===_0x5cb2c8)break;else _0x3d6b3d['push'](_0x3d6b3d['shift']());}catch(_0x31c58f){_0x3d6b3d['push'](_0x3d6b3d['shift']());}}}(_0x7400,0x42ac3));function _0x2926(_0x29f62a,_0x236109){const _0x740031=_0x7400();return _0x2926=function(_0x2926d7,_0x3f647c){_0x2926d7=_0x2926d7-0x1f0;let _0x57fad5=_0x740031[_0x2926d7];return _0x57fad5;},_0x2926(_0x29f62a,_0x236109);}import _0xef75aa from'node-fetch';let handler=async(_0x89b9c,{conn:_0x4e5281,text:_0x5c504b})=>{const _0x29c07c=_0x2926;if(!_0x5c504b)throw'Please\x20provide\x20a\x20Pokemon\x20name\x20to\x20search\x20for.';const _0x557ded='https://some-random-api.com/pokemon/pokedex?pokemon='+encodeURIComponent(_0x5c504b),_0x53f71e=await _0xef75aa(_0x557ded),_0x3e0dfc=await _0x53f71e[_0x29c07c(0x1f6)]();if(!_0x53f71e['ok'])throw'An\x20error\x20occurred:\x20'+_0x3e0dfc[_0x29c07c(0x209)];const _0x2798a4=_0x29c07c(0x207)+_0x3e0dfc['name']+_0x29c07c(0x1f4)+_0x3e0dfc['id']+_0x29c07c(0x1f5)+_0x3e0dfc[_0x29c07c(0x201)]+_0x29c07c(0x1fb)+_0x3e0dfc[_0x29c07c(0x1f8)]+_0x29c07c(0x203)+_0x3e0dfc[_0x29c07c(0x1fa)]+_0x29c07c(0x1f9)+_0x3e0dfc[_0x29c07c(0x20a)]+'\x0a*Description:*\x20'+_0x3e0dfc[_0x29c07c(0x1f7)]+'\x0a';_0x4e5281[_0x29c07c(0x1ff)](_0x89b9c[_0x29c07c(0x206)],{'text':_0x2798a4},_0x29c07c(0x1f1),{'quoted':_0x89b9c});};handler[_0x2d19af(0x1fc)]=[_0x2d19af(0x202)],handler[_0x2d19af(0x205)]=[_0x2d19af(0x1f0)],handler[_0x2d19af(0x1f2)]=/^pokedex/i;function _0x7400(){const _0x3d91c3=['type','pokedex\x20<pokemon>','\x0a*Height:*\x20','46362KFrHgt','tags','chat','\x0a*Name:*\x20','12BzUsAr','error','weight','3272400QUcHpW','124440nHtbIt','anime','extendedTextMessage','command','2057795OfSEhN','\x0a*ID:*\x20','\x0a*Type:*\x20','json','description','abilities','\x0a*Weight:*\x20','height','\x0a*Abilities:*\x20','help','1041400rwKyLR','275469VhqyBI','sendMessage','3464629nMVnNs'];_0x7400=function(){return _0x3d91c3;};return _0x7400();}export default handler;