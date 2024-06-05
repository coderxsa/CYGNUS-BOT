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

function _0x3764(){const _0x3f1796=['reactionMessage','quoted','isBanned','61334icvRrN','chat','message','POST','text=','&lc=en&key=','200','mtype','3273215MKmbhH','banned','Invalid\x20response\x20from\x20SimSimi.','.wav','jarvis','msg','__dirname','998823rxobxH','users','application/x-www-form-urlencoded','chats','tts.opus','sender','672704Hzgwhw','status','text','45LdQGhJ','../tmp','fromMe','9503430MiVUQR','pollUpdateMessage','sendFile','222176Lcmdql','isBaileys','json','data','240HGOdCZ','reply','save','4ymDERt','Error\x20occurred\x20during\x20text-to-speech\x20conversion.','https://api.simsimi.vn/v1/simtalk','357464HCKqHZ','url','protocolMessage'];_0x3764=function(){return _0x3f1796;};return _0x3764();}(function(_0xdf83be,_0x4dd8c9){const _0x1be00e=_0x56ed,_0x45b0c9=_0xdf83be();while(!![]){try{const _0x106b19=parseInt(_0x1be00e(0x160))/0x1+parseInt(_0x1be00e(0x15d))/0x2*(parseInt(_0x1be00e(0x175))/0x3)+-parseInt(_0x1be00e(0x17b))/0x4+parseInt(_0x1be00e(0x16e))/0x5+-parseInt(_0x1be00e(0x15a))/0x6*(parseInt(_0x1be00e(0x166))/0x7)+parseInt(_0x1be00e(0x156))/0x8*(parseInt(_0x1be00e(0x17e))/0x9)+-parseInt(_0x1be00e(0x181))/0xa;if(_0x106b19===_0x4dd8c9)break;else _0x45b0c9['push'](_0x45b0c9['shift']());}catch(_0x5e9eab){_0x45b0c9['push'](_0x45b0c9['shift']());}}}(_0x3764,0x54eca));import _0x5029e9 from'node-fetch';function _0x56ed(_0xde7707,_0x35a2f9){const _0x376417=_0x3764();return _0x56ed=function(_0x56ed4a,_0x3ec54f){_0x56ed4a=_0x56ed4a-0x156;let _0xa6f383=_0x376417[_0x56ed4a];return _0xa6f383;},_0x56ed(_0xde7707,_0x35a2f9);}import _0x9cc827 from'node-gtts';import{readFileSync,unlinkSync}from'fs';import{join}from'path';const defaultLang='hi';export async function before(_0x14cb83,{conn:_0x1edbd9}){const _0x1e7dd8=_0x56ed;if(_0x14cb83[_0x1e7dd8(0x157)]&&_0x14cb83[_0x1e7dd8(0x180)])return!![];if(!_0x14cb83['isGroup'])return![];const _0x8d2573=global['db'][_0x1e7dd8(0x159)][_0x1e7dd8(0x176)],_0x43362a=global['db']['data'][_0x1e7dd8(0x178)],_0x1c1829=global['db']['data'][_0x1e7dd8(0x176)][_0x14cb83[_0x1e7dd8(0x17a)]],_0x4a806e=global['db'][_0x1e7dd8(0x159)]['chats'][_0x14cb83[_0x1e7dd8(0x167)]];if(_0x14cb83[_0x1e7dd8(0x16d)]===_0x1e7dd8(0x162)||_0x14cb83[_0x1e7dd8(0x16d)]===_0x1e7dd8(0x182)||_0x14cb83[_0x1e7dd8(0x16d)]===_0x1e7dd8(0x163)||_0x14cb83[_0x1e7dd8(0x16d)]==='stickerMessage')return;if(!_0x14cb83[_0x1e7dd8(0x173)]||!_0x14cb83['message']||_0x14cb83['key']['remoteJid']!==_0x14cb83['chat']||_0x8d2573[_0x14cb83[_0x1e7dd8(0x17a)]][_0x1e7dd8(0x16f)]||_0x43362a[_0x14cb83['chat']][_0x1e7dd8(0x165)])return;if(!_0x14cb83[_0x1e7dd8(0x164)]||!_0x14cb83[_0x1e7dd8(0x164)][_0x1e7dd8(0x157)])return;if(!_0x4a806e[_0x1e7dd8(0x172)])return!![];const _0x38b7f2={'method':_0x1e7dd8(0x169),'headers':{'Content-Type':_0x1e7dd8(0x177)},'body':_0x1e7dd8(0x16a)+encodeURIComponent(_0x14cb83[_0x1e7dd8(0x17d)])+_0x1e7dd8(0x16b)},_0xa7e954=await _0x5029e9(_0x1e7dd8(0x15f),_0x38b7f2),_0xb4ef9b=await _0xa7e954[_0x1e7dd8(0x158)]();let _0xddc526;if(_0xb4ef9b[_0x1e7dd8(0x17c)]===_0x1e7dd8(0x16c))_0xddc526=_0xb4ef9b[_0x1e7dd8(0x168)];else throw _0x1e7dd8(0x170);let _0x4b20bb;try{_0x4b20bb=await tts(_0xddc526,defaultLang);}catch(_0x2fa53d){_0x14cb83[_0x1e7dd8(0x15b)](_0x2fa53d+'');throw _0x1e7dd8(0x15e);}finally{if(_0x4b20bb)_0x1edbd9[_0x1e7dd8(0x183)](_0x14cb83[_0x1e7dd8(0x167)],_0x4b20bb,_0x1e7dd8(0x179),null,_0x14cb83,!![]);}}function tts(_0x514901,_0x270f3f='en'){return new Promise((_0x3129a3,_0x9a14d9)=>{const _0x1b9a43=_0x56ed;try{let _0x212226=_0x9cc827(_0x270f3f),_0xa43fa4=join(global[_0x1b9a43(0x174)](import.meta[_0x1b9a43(0x161)]),_0x1b9a43(0x17f),0x1*new Date()+_0x1b9a43(0x171));_0x212226[_0x1b9a43(0x15c)](_0xa43fa4,_0x514901,()=>{_0x3129a3(readFileSync(_0xa43fa4)),unlinkSync(_0xa43fa4);});}catch(_0xcdc4a4){_0x9a14d9(_0xcdc4a4);}});}