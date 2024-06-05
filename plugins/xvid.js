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

const _0x3b185c=_0x2da5;function _0x2da5(_0x358e48,_0x51ede6){const _0x2be3d6=_0x2be3();return _0x2da5=function(_0x2da5a4,_0x283426){_0x2da5a4=_0x2da5a4-0x69;let _0x72c06d=_0x2be3d6[_0x2da5a4];return _0x72c06d;},_0x2da5(_0x358e48,_0x51ede6);}(function(_0x2c77a5,_0x44bef5){const _0x563e89=_0x2da5,_0x3a0499=_0x2c77a5();while(!![]){try{const _0x440f57=-parseInt(_0x563e89(0x77))/0x1+-parseInt(_0x563e89(0x91))/0x2*(parseInt(_0x563e89(0x95))/0x3)+-parseInt(_0x563e89(0x6b))/0x4*(parseInt(_0x563e89(0x69))/0x5)+-parseInt(_0x563e89(0x86))/0x6*(parseInt(_0x563e89(0x6f))/0x7)+parseInt(_0x563e89(0x72))/0x8+-parseInt(_0x563e89(0x90))/0x9*(parseInt(_0x563e89(0x75))/0xa)+parseInt(_0x563e89(0x92))/0xb;if(_0x440f57===_0x44bef5)break;else _0x3a0499['push'](_0x3a0499['shift']());}catch(_0x293c86){_0x3a0499['push'](_0x3a0499['shift']());}}}(_0x2be3,0x60bf4));import{xvideosSearch,xvideosdl}from'../lib/scraper.js';let handler=async(_0x50d662,{conn:_0xd740a1,args:_0x56253c,text:_0x3e5b2b,usedPrefix:_0x2b1ea1,command:_0x20fff9})=>{const _0x31edb8=_0x2da5;let _0x25cf67=global['db'][_0x31edb8(0x76)][_0x31edb8(0x96)][_0x50d662[_0x31edb8(0x93)]];if(!_0x25cf67[_0x31edb8(0x6c)])throw _0x31edb8(0x79)+_0x2b1ea1+_0x31edb8(0x85);let _0x3e78c4=global['db'][_0x31edb8(0x76)][_0x31edb8(0x78)][_0x50d662[_0x31edb8(0x6d)]][_0x31edb8(0x82)];if(_0x3e78c4<0x12)throw'❎\x20You\x20must\x20be\x2018\x20years\x20or\x20older\x20to\x20use\x20this\x20feature.';if(!_0x3e5b2b)throw _0x31edb8(0x8b)+(_0x2b1ea1+_0x20fff9)+_0x31edb8(0x71);_0x50d662[_0x31edb8(0x6e)]('⌛');if(!_0x3e5b2b)throw _0x31edb8(0x8f);const _0x416723=/^(https?:\/\/)?(www\.)?xvideos\.com\/.+$/i[_0x31edb8(0x97)](_0x3e5b2b);try{if(_0x416723){const _0x260dd1=await xvideosdl(_0x3e5b2b),{title:_0x2f047f,url:_0x5289f3}=_0x260dd1[_0x31edb8(0x7f)],_0x257bd4=await fetch(_0x5289f3),_0x342da9=await _0x257bd4['arrayBuffer']();_0xd740a1['sendFile'](_0x50d662[_0x31edb8(0x93)],Buffer[_0x31edb8(0x89)](_0x342da9),_0x2f047f+_0x31edb8(0x74),_0x31edb8(0x88)+_0x2f047f);}else{const _0x10a3ec=await xvideosSearch(_0x3e5b2b);if(_0x10a3ec[_0x31edb8(0x94)]===0x0)_0x50d662['reply']('No\x20search\x20results\x20found\x20for\x20the\x20given\x20query.');else{const _0x21ac3c=_0x10a3ec[_0x31edb8(0x87)]((_0x1f58f7,_0x50a185)=>{const _0x27b252=_0x31edb8;return _0x50a185+0x1+'.\x20*'+_0x1f58f7[_0x27b252(0x80)]+_0x27b252(0x83)+_0x1f58f7[_0x27b252(0x7e)]+'\x0aQuality:\x20'+_0x1f58f7[_0x27b252(0x8e)]+'\x0aURL:\x20'+_0x1f58f7['url'];})[_0x31edb8(0x73)]('\x0a\x0a');_0x50d662[_0x31edb8(0x8a)](_0x31edb8(0x6a)+_0x3e5b2b+_0x31edb8(0x7b)+_0x21ac3c);}}}catch(_0x23c8d0){console[_0x31edb8(0x7a)](_0x23c8d0);throw _0x31edb8(0x7d);}};handler[_0x3b185c(0x8c)]=[_0x3b185c(0x84)],handler[_0x3b185c(0x8d)]=[_0x3b185c(0x6c)],handler[_0x3b185c(0x70)]=[_0x3b185c(0x84)],handler[_0x3b185c(0x7c)]=!![],handler[_0x3b185c(0x81)]=![],handler['register']=!![],handler[_0x3b185c(0x81)]=![];export default handler;function _0x2be3(){const _0xd8d5a6=['66klfIXU','map','Here\x20is\x20your\x20Xvideos\x20video:\x20','from','reply','✳️\x20What\x20do\x20you\x20want\x20to\x20search?\x0a📌\x20Usage:\x20*','help','tags','quality','Please\x20provide\x20a\x20search\x20query\x20or\x20a\x20valid\x20Xvideos\x20URL.','63RqvzTh','995042pMNzFs','21225039UrGqKz','chat','length','3bxIqKf','chats','test','5oUYoVa','*Search\x20Results\x20for\x20\x22','1983836DnSALE','nsfw','sender','react','104531iuVUCT','command','\x20<search>*\x0a\x0aExample:\x20Hot\x20desi\x20bhabi\x20or\x20you\x20can\x20use\x20a\x20link\x20as\x20well\x0aExample:\x20.xnxx\x20link\x20*','2590488SKYuXq','join','.mp4','582530xtrzku','data','291570hzqOcK','users','🚫\x20This\x20group\x20does\x20not\x20support\x20NSFW\x20content.\x0a\x0aTo\x20turn\x20it\x20on,\x20use:\x20*','error','\x22:*\x0a\x0a','group','Failed\x20to\x20fetch\x20Xvideos\x20video\x20details.','duration','result','title','premium','age','*\x0aDuration:\x20','xvid','enable*\x20nsfw'];_0x2be3=function(){return _0xd8d5a6;};return _0x2be3();}