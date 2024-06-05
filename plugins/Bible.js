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

const _0x1a8b24=_0x503f;(function(_0x4af434,_0x3ba818){const _0x1f46a2=_0x503f,_0x1a9eb9=_0x4af434();while(!![]){try{const _0x53df91=-parseInt(_0x1f46a2(0x17b))/0x1+parseInt(_0x1f46a2(0x16e))/0x2*(-parseInt(_0x1f46a2(0x179))/0x3)+parseInt(_0x1f46a2(0x17a))/0x4*(-parseInt(_0x1f46a2(0x170))/0x5)+-parseInt(_0x1f46a2(0x182))/0x6+-parseInt(_0x1f46a2(0x177))/0x7+parseInt(_0x1f46a2(0x176))/0x8+parseInt(_0x1f46a2(0x184))/0x9;if(_0x53df91===_0x3ba818)break;else _0x1a9eb9['push'](_0x1a9eb9['shift']());}catch(_0x5aed57){_0x1a9eb9['push'](_0x1a9eb9['shift']());}}}(_0x14bd,0x8970e));function _0x503f(_0x30c18e,_0x86b495){const _0x14bd86=_0x14bd();return _0x503f=function(_0x503f7b,_0x2d0ef6){_0x503f7b=_0x503f7b-0x165;let _0x3967d7=_0x14bd86[_0x503f7b];return _0x3967d7;},_0x503f(_0x30c18e,_0x86b495);}import _0x70da6 from'node-fetch';import{translate}from'@vitalets/google-translate-api';const BASE_URL=_0x1a8b24(0x169);let bibleChapterHandler=async(_0xa1ee38,{conn:_0x37ac53})=>{const _0x29e9a1=_0x1a8b24;try{let _0x568685=_0xa1ee38[_0x29e9a1(0x171)][_0x29e9a1(0x17d)]('\x20')[_0x29e9a1(0x17f)](0x1)[_0x29e9a1(0x16f)]('')[_0x29e9a1(0x16c)]();if(!_0x568685)throw new Error(_0x29e9a1(0x172));_0x568685=encodeURIComponent(_0x568685);let _0x4cc8fc=await _0x70da6(BASE_URL+'/'+_0x568685);if(!_0x4cc8fc['ok'])throw new Error(_0x29e9a1(0x172));let _0x81f4c4=await _0x4cc8fc[_0x29e9a1(0x175)](),_0x287fb3=await translate(_0x81f4c4[_0x29e9a1(0x171)],{'to':'hi','autoCorrect':!![]}),_0x53eaa1=await translate(_0x81f4c4[_0x29e9a1(0x171)],{'to':'en','autoCorrect':!![]}),_0x2316ba='\x0a📖\x20*The\x20Holy\x20Bible*\x0a\x0a📜\x20*Chapter\x20'+_0x81f4c4[_0x29e9a1(0x181)]+_0x29e9a1(0x16a)+_0x81f4c4[_0x29e9a1(0x16d)]+_0x29e9a1(0x165)+_0x81f4c4[_0x29e9a1(0x183)][_0x29e9a1(0x166)]+_0x29e9a1(0x168)+_0x53eaa1['text']+_0x29e9a1(0x178)+_0x53eaa1[_0x29e9a1(0x171)];_0xa1ee38[_0x29e9a1(0x17e)](_0x2316ba);}catch(_0x554887){console[_0x29e9a1(0x16b)](_0x554887),_0xa1ee38[_0x29e9a1(0x17e)]('Error:\x20'+_0x554887[_0x29e9a1(0x17c)]);}};bibleChapterHandler[_0x1a8b24(0x180)]=['bible\x20[chapter_number|chapter_name]'],bibleChapterHandler[_0x1a8b24(0x173)]=[_0x1a8b24(0x174)],bibleChapterHandler['command']=['bible',_0x1a8b24(0x167)];export default bibleChapterHandler;function _0x14bd(){const _0x2abf68=['20wexzBO','641897tLYcXv','message','split','reply','slice','help','reference','6261450eIzAmX','verses','32618493CpZPwt','\x0a\x0aNumber\x20of\x20verses:\x20','length','chapter','\x0a\x0a🔮\x20*Chapter\x20Content\x20(English):*\x0a\x0a','https://bible-api.com','*\x0a\x0aType:\x20','error','trim','translation_name','106878GmfLiA','join','378130oGjzGz','text','Please\x20specify\x20the\x20chapter\x20number\x20or\x20name.\x20Example:\x20-bible\x20john\x203:16','tags','religion','json','6256760rIpTHk','7221662BsZDKy','\x0a\x0a🔮\x20*Chapter\x20Content\x20():*\x0a\x0a','42EAXWAb'];_0x14bd=function(){return _0x2abf68;};return _0x14bd();}