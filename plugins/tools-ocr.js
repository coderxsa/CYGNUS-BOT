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

const _0x21b002=_0x4e72;(function(_0x37beaf,_0x5c27cd){const _0x36ce4b=_0x4e72,_0x4886cc=_0x37beaf();while(!![]){try{const _0x3e1365=parseInt(_0x36ce4b(0x1db))/0x1*(parseInt(_0x36ce4b(0x1e1))/0x2)+parseInt(_0x36ce4b(0x1e6))/0x3+-parseInt(_0x36ce4b(0x1e9))/0x4+parseInt(_0x36ce4b(0x1d6))/0x5*(-parseInt(_0x36ce4b(0x1e4))/0x6)+-parseInt(_0x36ce4b(0x1ec))/0x7*(-parseInt(_0x36ce4b(0x1ed))/0x8)+-parseInt(_0x36ce4b(0x1de))/0x9+-parseInt(_0x36ce4b(0x1d7))/0xa*(parseInt(_0x36ce4b(0x1d5))/0xb);if(_0x3e1365===_0x5c27cd)break;else _0x4886cc['push'](_0x4886cc['shift']());}catch(_0x5e9048){_0x4886cc['push'](_0x4886cc['shift']());}}}(_0x1d59,0x30e12));function _0x1d59(){const _0x1a0ca4=['16VIaOcW','json','mimetype','2413044jhwDwd','some\x20error\x20occured!\x0a\x0a','quoted','33452xXRSlA','reply','&language=','6HxGiRt','Reply\x20media\x20with\x0a','1097148nRNgHA','video\x20files\x20not\x20supported!','command','763632tgcUbu','mediaType','*OCR\x20RESULT*\x0a\x0a','2028005IoniSK','8wkUuKo','test','help','22yIvKug','243365vuGEzq','1075700hFbwwI','https://api.ocr.space/parse/imageurl?apikey=K88889328888957&url=','ocr','chat'];_0x1d59=function(){return _0x1a0ca4;};return _0x1d59();}import _0x56235e from'../lib/uploadFile.js';import _0x346f6c from'../lib/uploadImage.js';import{webp2png}from'../lib/webp2mp4.js';function _0x4e72(_0x302c0d,_0x3f507a){const _0x1d59b=_0x1d59();return _0x4e72=function(_0x4e72f3,_0x17352b){_0x4e72f3=_0x4e72f3-0x1d3;let _0x1f4bf5=_0x1d59b[_0x4e72f3];return _0x1f4bf5;},_0x4e72(_0x302c0d,_0x3f507a);}import _0x391d11 from'node-fetch';import _0x3fb2c9 from'../lib/loading.js';let handler=async(_0x165f9d,{conn:_0x10ccfa,args:_0x388e0e,text:_0x48331f,usedPrefix:_0x53735f,command:_0xa78e26})=>{const _0x979953=_0x4e72;var _0x453df5;let _0xa5f381=_0x165f9d[_0x979953(0x1e0)]?_0x165f9d[_0x979953(0x1e0)]:_0x165f9d,_0x257cfd=(_0xa5f381['msg']||_0xa5f381)[_0x979953(0x1dd)]||_0xa5f381[_0x979953(0x1ea)]||'';if(/video/g[_0x979953(0x1d3)](_0x257cfd))return _0x165f9d[_0x979953(0x1e2)](_0x979953(0x1e7));if(!/webp|image|viewOnce/g[_0x979953(0x1d3)](_0x257cfd))return _0x165f9d[_0x979953(0x1e2)](_0x979953(0x1e5)+(_0x53735f+_0xa78e26));let _0x57bb2a=await _0xa5f381['download']?.();if(/webp/g['test'](_0x257cfd))_0x453df5=await webp2png(_0x57bb2a);else{if(/image/g[_0x979953(0x1d3)](_0x257cfd))_0x453df5=await _0x346f6c(_0x57bb2a);else/viewOnce/g['test'](_0x257cfd)&&(_0x453df5=await _0x56235e(_0x57bb2a));}await _0x3fb2c9(_0x10ccfa,_0x165f9d[_0x979953(0x1da)]);try{let _0x22b641;_0x388e0e[0x0]?_0x22b641=await(await _0x391d11(_0x979953(0x1d8)+_0x453df5+_0x979953(0x1e3)+_0x388e0e[0x0]))[_0x979953(0x1dc)]():_0x22b641=await(await _0x391d11('https://api.ocr.space/parse/imageurl?apikey=K88889328888957&url='+_0x453df5))['json'](),await _0x165f9d['reply'](_0x979953(0x1eb)+_0x22b641['ParsedResults'][0x0]['ParsedText']);}catch(_0x43cd5e){throw _0x979953(0x1df)+_0x43cd5e;}};handler[_0x21b002(0x1d4)]=[_0x21b002(0x1d9)],handler['tags']=['tools'],handler[_0x21b002(0x1e8)]=/^ocr$/i;export default handler;