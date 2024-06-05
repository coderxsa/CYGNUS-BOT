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

const _0x4fec4a=_0x2b42;(function(_0x385231,_0x23681e){const _0x438d81=_0x2b42,_0x4fc5cf=_0x385231();while(!![]){try{const _0xa8a07b=parseInt(_0x438d81(0xbd))/0x1+parseInt(_0x438d81(0xc4))/0x2*(parseInt(_0x438d81(0xc8))/0x3)+parseInt(_0x438d81(0xd1))/0x4+-parseInt(_0x438d81(0xc3))/0x5+parseInt(_0x438d81(0xd2))/0x6*(parseInt(_0x438d81(0xcc))/0x7)+-parseInt(_0x438d81(0xc1))/0x8*(-parseInt(_0x438d81(0xbc))/0x9)+-parseInt(_0x438d81(0xbf))/0xa;if(_0xa8a07b===_0x23681e)break;else _0x4fc5cf['push'](_0x4fc5cf['shift']());}catch(_0x3ab087){_0x4fc5cf['push'](_0x4fc5cf['shift']());}}}(_0x13ef,0x89f9e));import{download}from'aptoide-scraper';function _0x2b42(_0x138102,_0x16bc56){const _0x13ef69=_0x13ef();return _0x2b42=function(_0x2b4203,_0x51bdf9){_0x2b4203=_0x2b4203-0xbb;let _0x2b773e=_0x13ef69[_0x2b4203];return _0x2b773e;},_0x2b42(_0x138102,_0x16bc56);}let handler=async(_0x5c68b6,{conn:_0x4ace56,usedPrefix:_0x271171,command:_0x2d6896,text:_0x2139dc})=>{const _0xd1f797=_0x2b42;try{if(_0x2d6896==='modapk'){if(!_0x2139dc)throw _0xd1f797(0xc9);await _0x4ace56['reply'](_0x5c68b6[_0xd1f797(0xce)],global[_0xd1f797(0xcf)],_0x5c68b6);let _0xdb2af9=await download(_0x2139dc);if(_0xdb2af9[_0xd1f797(0xc0)]['replace']('\x20MB','')>0xc8)return await _0x4ace56[_0xd1f797(0xc2)](_0x5c68b6['chat'],{'text':'*[⛔]\x20The\x20file\x20is\x20too\x20large.*'},{'quoted':_0x5c68b6});if(_0xdb2af9[_0xd1f797(0xc0)][_0xd1f797(0xc7)]('GB'))return await _0x4ace56[_0xd1f797(0xc2)](_0x5c68b6[_0xd1f797(0xce)],{'text':_0xd1f797(0xcb)},{'quoted':_0x5c68b6});await _0x4ace56[_0xd1f797(0xc2)](_0x5c68b6['chat'],{'document':{'url':_0xdb2af9['dllink']},'mimetype':_0xd1f797(0xca),'fileName':_0xdb2af9[_0xd1f797(0xd3)]+_0xd1f797(0xc5),'caption':null},{'quoted':_0x5c68b6});}}catch{throw _0xd1f797(0xc6);}};function _0x13ef(){const _0x13eda0=['30XEXJEe','name','downloader','9036rQnzRN','65364QrStOR','modapk','18133300mCwPYq','size','6504QHMJWx','sendMessage','2782465pJsVkb','2fStNLL','.apk','*[❗]\x20An\x20error\x20occurred.\x20Make\x20sure\x20to\x20provide\x20a\x20valid\x20link.*','includes','3002541exfHFm','*[❗]\x20Please\x20provide\x20the\x20APK\x20Name\x20you\x20want\x20to\x20download.*','application/vnd.android.package-archive','*[⛔]\x20The\x20file\x20is\x20too\x20large.*','1165521PPBzFi','tags','chat','wait','help','879980FRwcrq'];_0x13ef=function(){return _0x13eda0;};return _0x13ef();}handler[_0x4fec4a(0xd0)]=[_0x4fec4a(0xbe)],handler[_0x4fec4a(0xcd)]=[_0x4fec4a(0xbb)],handler['command']=/^modapk$/i;export default handler;