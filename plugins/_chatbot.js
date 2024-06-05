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

(function(_0x5ef0c7,_0x51ee17){const _0x33c374=_0xaaab,_0x181244=_0x5ef0c7();while(!![]){try{const _0x571b84=-parseInt(_0x33c374(0xd0))/0x1*(parseInt(_0x33c374(0xc4))/0x2)+-parseInt(_0x33c374(0xc9))/0x3+-parseInt(_0x33c374(0xc2))/0x4*(parseInt(_0x33c374(0xd2))/0x5)+parseInt(_0x33c374(0xd8))/0x6+-parseInt(_0x33c374(0xbd))/0x7*(-parseInt(_0x33c374(0xca))/0x8)+parseInt(_0x33c374(0xc7))/0x9+parseInt(_0x33c374(0xb6))/0xa*(parseInt(_0x33c374(0xce))/0xb);if(_0x571b84===_0x51ee17)break;else _0x181244['push'](_0x181244['shift']());}catch(_0x2b23b0){_0x181244['push'](_0x181244['shift']());}}}(_0x5ea9,0x5eb12));import _0x484399 from'node-fetch';function _0x5ea9(){const _0x1d18e5=['post','959076UtZsrH','2970080gCRIZS','users','length','quoted','22RGGqnk','fromMe','2425vEFHKs','isGroup','25gXeDPw','protocolMessage','text','Guru','remoteJid','replace','856872NQjsse','candidates','isBanned','pollUpdateMessage','reply','694180iQqYdP','https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDJC5a882ruaC4XL6ejY1yhgRkN-JNQKg8','data','getName','log','reactionMessage','chats','14WUmbSq','mtype','message','sender','msg','311932Lhfcoe','chat','146XNRtqc','stickerMessage','parts','2252898XJJDBn'];_0x5ea9=function(){return _0x1d18e5;};return _0x5ea9();}import _0x241d8f from'axios';function _0xaaab(_0x208f63,_0x7c5ce3){const _0x5ea9cf=_0x5ea9();return _0xaaab=function(_0xaaabc2,_0x2f4e1a){_0xaaabc2=_0xaaabc2-0xb6;let _0x187d93=_0x5ea9cf[_0xaaabc2];return _0x187d93;},_0xaaab(_0x208f63,_0x7c5ce3);}export async function before(_0x385159,{conn:_0x208852}){const _0x108e1d=_0xaaab;try{if(_0x385159['isBaileys']&&_0x385159[_0x108e1d(0xcf)])return!![];if(!_0x385159[_0x108e1d(0xd1)])return![];const _0x250210=global['db'][_0x108e1d(0xb8)][_0x108e1d(0xcb)],_0x75050d=global['db'][_0x108e1d(0xb8)][_0x108e1d(0xbc)],_0x285af9=global['db'][_0x108e1d(0xb8)][_0x108e1d(0xcb)][_0x385159[_0x108e1d(0xc0)]],_0x4914da=global['db'][_0x108e1d(0xb8)]['chats'][_0x385159[_0x108e1d(0xc3)]];let _0x319c1d=_0x208852[_0x108e1d(0xb9)](_0x385159[_0x108e1d(0xc0)]);if(_0x385159[_0x108e1d(0xbe)]===_0x108e1d(0xd3)||_0x385159[_0x108e1d(0xbe)]===_0x108e1d(0xdb)||_0x385159['mtype']===_0x108e1d(0xbb)||_0x385159[_0x108e1d(0xbe)]===_0x108e1d(0xc5))return;if(!_0x385159[_0x108e1d(0xc1)]||!_0x385159[_0x108e1d(0xbf)]||_0x385159['key'][_0x108e1d(0xd6)]!==_0x385159[_0x108e1d(0xc3)]||_0x250210[_0x385159[_0x108e1d(0xc0)]]['banned']||_0x75050d[_0x385159[_0x108e1d(0xc3)]][_0x108e1d(0xda)])return;if(!_0x385159[_0x108e1d(0xcd)]||!_0x385159[_0x108e1d(0xcd)]['isBaileys'])return;if(!_0x4914da['chatbot'])return!![];const _0x43cbd5=encodeURIComponent(_0x385159[_0x108e1d(0xd4)]);console['log'](_0x43cbd5);const _0x509f1c=await _0x241d8f[_0x108e1d(0xc8)](_0x108e1d(0xb7),{'contents':[{'parts':[{'text':_0x43cbd5}]}]}),_0x4a3f61=_0x509f1c[_0x108e1d(0xb8)];if(_0x4a3f61['candidates']&&_0x4a3f61[_0x108e1d(0xd9)][_0x108e1d(0xcc)]>0x0){const _0x169b14=_0x4a3f61[_0x108e1d(0xd9)][0x0],_0x1eaae8=_0x169b14['content'];let _0x2da941=_0x1eaae8[_0x108e1d(0xc6)][0x0][_0x108e1d(0xd4)];_0x2da941&&(_0x2da941=_0x2da941[_0x108e1d(0xd7)](/Google/gi,_0x108e1d(0xd5)),_0x2da941=_0x2da941[_0x108e1d(0xd7)](/a large language model/gi,botname),_0x385159[_0x108e1d(0xdc)](_0x2da941));}else _0x385159[_0x108e1d(0xdc)]('No\x20suitable\x20response\x20from\x20the\x20API.');}catch(_0x5daa30){console[_0x108e1d(0xba)](_0x5daa30);}}