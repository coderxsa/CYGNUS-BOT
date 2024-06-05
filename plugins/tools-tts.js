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

const _0x4d9b94=_0x2d36;function _0x529a(){const _0x21737e=['../tmp','command','sendFile','voz','\x20en\x20hello\x20world','quoted','__dirname','en-en','52045CESNqF','3167991AUVcbT','614112lvJOcN','text','join','save','702294txROzQ','tts','tools','344ZcyTZa','2675440QsnIPF','6906HKWDdn','url','tts.opus','275894oLDKee','log','help','tts\x20<lang>\x20<task>','slice','584TvSPGW','reply','.wav'];_0x529a=function(){return _0x21737e;};return _0x529a();}(function(_0x2fd111,_0x11d820){const _0x2716c9=_0x2d36,_0x598584=_0x2fd111();while(!![]){try{const _0x557cdf=parseInt(_0x2716c9(0x13d))/0x1+parseInt(_0x2716c9(0x131))/0x2+parseInt(_0x2716c9(0x13a))/0x3*(parseInt(_0x2716c9(0x138))/0x4)+-parseInt(_0x2716c9(0x139))/0x5+-parseInt(_0x2716c9(0x135))/0x6+-parseInt(_0x2716c9(0x12f))/0x7*(-parseInt(_0x2716c9(0x124))/0x8)+-parseInt(_0x2716c9(0x130))/0x9;if(_0x557cdf===_0x11d820)break;else _0x598584['push'](_0x598584['shift']());}catch(_0x42c741){_0x598584['push'](_0x598584['shift']());}}}(_0x529a,0x4e035));import _0x50ead6 from'node-gtts';import{readFileSync,unlinkSync}from'fs';function _0x2d36(_0x2f1a9b,_0x3e4a80){const _0x529a3d=_0x529a();return _0x2d36=function(_0x2d3661,_0x5ddb70){_0x2d3661=_0x2d3661-0x123;let _0x5075cc=_0x529a3d[_0x2d3661];return _0x5075cc;},_0x2d36(_0x2f1a9b,_0x3e4a80);}import{join}from'path';const defaultLang='en';let handler=async(_0x146507,{conn:_0x3cc098,args:_0x4b521e,usedPrefix:_0x45a5bc,command:_0x32e638})=>{const _0x20e962=_0x2d36;let _0x2f8eca=_0x4b521e[0x0],_0x4f26ac=_0x4b521e[_0x20e962(0x123)](0x1)[_0x20e962(0x133)]('\x20');(_0x4b521e[0x0]||'')['length']!==0x2&&(_0x2f8eca=defaultLang,_0x4f26ac=_0x4b521e[_0x20e962(0x133)]('\x20'));if(!_0x4f26ac&&_0x146507['quoted']?.[_0x20e962(0x132)])_0x4f26ac=_0x146507[_0x20e962(0x12c)]['text'];let _0x4c1a46;try{_0x4c1a46=await tts(_0x4f26ac,_0x2f8eca);}catch(_0x194286){_0x146507[_0x20e962(0x125)](_0x194286+''),_0x4f26ac=_0x4b521e[_0x20e962(0x133)]('\x20');if(!_0x4f26ac)throw'📌\x20Example\x20:\x20\x0a'+_0x45a5bc+_0x32e638+_0x20e962(0x12b);_0x4c1a46=await tts(_0x4f26ac,defaultLang);}finally{if(_0x4c1a46)_0x3cc098[_0x20e962(0x129)](_0x146507['chat'],_0x4c1a46,_0x20e962(0x13c),null,_0x146507,!![]);}};handler[_0x4d9b94(0x13f)]=[_0x4d9b94(0x140)],handler['tags']=[_0x4d9b94(0x137)],handler[_0x4d9b94(0x128)]=[_0x4d9b94(0x136),_0x4d9b94(0x12a)];export default handler;function tts(_0x518e2a,_0x254c32=_0x4d9b94(0x12e)){const _0x2c3e6c=_0x4d9b94;return console[_0x2c3e6c(0x13e)](_0x254c32,_0x518e2a),new Promise((_0x588d63,_0xa9dc87)=>{const _0x47faad=_0x2c3e6c;try{let _0x427f88=_0x50ead6(_0x254c32),_0x11f33b=join(global[_0x47faad(0x12d)](import.meta[_0x47faad(0x13b)]),_0x47faad(0x127),0x1*new Date()+_0x47faad(0x126));_0x427f88[_0x47faad(0x134)](_0x11f33b,_0x518e2a,()=>{_0x588d63(readFileSync(_0x11f33b)),unlinkSync(_0x11f33b);});}catch(_0x40e80a){_0xa9dc87(_0x40e80a);}});}