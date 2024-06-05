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

function _0x1dcb(_0x1a2cba,_0x26c58c){const _0x16b042=_0x16b0();return _0x1dcb=function(_0x1dcbca,_0x458dc2){_0x1dcbca=_0x1dcbca-0xdf;let _0xdbb4f2=_0x16b042[_0x1dcbca];return _0xdbb4f2;},_0x1dcb(_0x1a2cba,_0x26c58c);}const _0x1a29c8=_0x1dcb;(function(_0x33aa50,_0x5c85b2){const _0x172208=_0x1dcb,_0x1cfd9a=_0x33aa50();while(!![]){try{const _0x4f385e=-parseInt(_0x172208(0xf0))/0x1*(parseInt(_0x172208(0xf2))/0x2)+parseInt(_0x172208(0xe2))/0x3+parseInt(_0x172208(0xec))/0x4+parseInt(_0x172208(0xf5))/0x5*(parseInt(_0x172208(0xed))/0x6)+parseInt(_0x172208(0xeb))/0x7+-parseInt(_0x172208(0xfa))/0x8*(parseInt(_0x172208(0xf9))/0x9)+-parseInt(_0x172208(0xe9))/0xa;if(_0x4f385e===_0x5c85b2)break;else _0x1cfd9a['push'](_0x1cfd9a['shift']());}catch(_0x516a98){_0x1cfd9a['push'](_0x1cfd9a['shift']());}}}(_0x16b0,0x64dfc));import _0x83956e from'node-fetch';import _0x2c6e53 from'../lib/loading.js';const endpoint='https://v2-guru-indratensei.cloud.okteto.net/perplexity?query=';let handler=async(_0x2d31e0,{text:_0x449677,conn:_0x1a18e1,usedPrefix:_0x5f44fc,command:_0x2280e2})=>{const _0x3015cb=_0x1dcb;try{if(!_0x449677&&!(_0x2d31e0[_0x3015cb(0xe5)]&&_0x2d31e0[_0x3015cb(0xe5)][_0x3015cb(0xf1)]))throw'Please\x20provide\x20some\x20text\x20or\x20quote\x20a\x20message\x20to\x20get\x20a\x20response.';if(!_0x449677&&_0x2d31e0[_0x3015cb(0xe5)]&&_0x2d31e0[_0x3015cb(0xe5)][_0x3015cb(0xf1)])_0x449677=_0x2d31e0[_0x3015cb(0xe5)]['text'];else _0x449677&&_0x2d31e0[_0x3015cb(0xe5)]&&_0x2d31e0[_0x3015cb(0xe5)]['text']&&(_0x449677=_0x449677+'\x20'+_0x2d31e0[_0x3015cb(0xe5)]['text'],_0x2d31e0[_0x3015cb(0xe5)]['text'][_0x3015cb(0xef)]('.aisearch')&&(_0x449677=_0x449677[_0x3015cb(0xe3)](_0x3015cb(0xe1),'')));await _0x2c6e53(_0x1a18e1,_0x2d31e0[_0x3015cb(0xf3)]),_0x1a18e1[_0x3015cb(0xf7)](_0x3015cb(0xdf),_0x2d31e0[_0x3015cb(0xf3)]);let _0x11539b=await _0x1a18e1['sendMessage'](_0x2d31e0[_0x3015cb(0xf3)],{'text':_0x3015cb(0xe7)});const _0x214b61=encodeURIComponent(_0x449677),_0x558fba=await _0x83956e(endpoint+_0x214b61);if(!_0x558fba['ok'])throw _0x3015cb(0xfe)+_0x558fba[_0x3015cb(0xfc)]+'\x20-\x20'+_0x558fba[_0x3015cb(0xe6)];const _0xa8b6fd=await _0x558fba[_0x3015cb(0xea)](),_0x5e6227=_0xa8b6fd[_0x3015cb(0xe0)]['trim']();await _0x1a18e1[_0x3015cb(0xfd)](_0x2d31e0[_0x3015cb(0xf3)],{'protocolMessage':{'key':_0x11539b[_0x3015cb(0xf6)],'type':0xe,'editedMessage':{'conversation':_0x5e6227}}},{});}catch(_0x5addec){console['error'](_0x3015cb(0xee),_0x5addec),_0x2d31e0[_0x3015cb(0xfb)]('An\x20error\x20occurred\x20while\x20processing\x20your\x20request.\x20Please\x20try\x20again\x20later.');}};handler['help']=[_0x1a29c8(0xe8)],handler[_0x1a29c8(0xf8)]=['AI'],handler[_0x1a29c8(0xe4)]=[_0x1a29c8(0xe8),_0x1a29c8(0xf4)];function _0x16b0(){const _0x5e628c=['quoted','statusText','Thinking...','aisearch','4241730fSVabE','json','5057745PFelbd','1478956hEzzcw','568668JWSUrl','Error:','includes','887Npzjft','text','1630zZSAYa','chat','ai2','40YHxyle','key','sendPresenceUpdate','tags','1629AIEjdn','23688ZQWewR','reply','status','relayMessage','Received\x20an\x20error\x20response\x20from\x20the\x20server:\x20','composing','response','.aisearch','737103mBBNQa','replace','command'];_0x16b0=function(){return _0x5e628c;};return _0x16b0();}export default handler;