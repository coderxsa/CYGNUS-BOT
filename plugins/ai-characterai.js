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

const _0x50e50e=_0x134c;(function(_0x52d4fc,_0x273096){const _0x366dfa=_0x134c,_0x7449f4=_0x52d4fc();while(!![]){try{const _0x41db05=parseInt(_0x366dfa(0x142))/0x1*(parseInt(_0x366dfa(0x152))/0x2)+-parseInt(_0x366dfa(0x14e))/0x3+-parseInt(_0x366dfa(0x149))/0x4*(parseInt(_0x366dfa(0x143))/0x5)+parseInt(_0x366dfa(0x156))/0x6+-parseInt(_0x366dfa(0x154))/0x7+-parseInt(_0x366dfa(0x145))/0x8*(parseInt(_0x366dfa(0x151))/0x9)+parseInt(_0x366dfa(0x146))/0xa;if(_0x41db05===_0x273096)break;else _0x7449f4['push'](_0x7449f4['shift']());}catch(_0x3c5184){_0x7449f4['push'](_0x7449f4['shift']());}}}(_0xa27a,0xb590d));function _0xa27a(){const _0x4ffd0d=['&message=','279EfeQRi','13952QwyuLa','parse','3570553MKEFJd','cai_nicknames.json','8296212SXrvjP','keys','Error\x20loading\x20JSON\x20file:','slice','Error\x20sending\x20request:','142mqCKCu','20JuVHgW','existsSync','103560JkhQED','13181260YhWcPD','reply','error','1358444sRUEps','https://animecafe-characterai-indratensei.cloud.okteto.net/cai?char=','utf-8','sendPresenceUpdate','text','2033727oejxnq','includes'];_0xa27a=function(){return _0x4ffd0d;};return _0xa27a();}import _0x220689 from'node-fetch';import _0x109c74 from'fs';let nicknameCharIdDict={};if(_0x109c74[_0x50e50e(0x144)](_0x50e50e(0x155)))try{const fileData=_0x109c74['readFileSync']('cai_nicknames.json',_0x50e50e(0x14b));nicknameCharIdDict=JSON[_0x50e50e(0x153)](fileData);}catch(_0x5e4fd3){console['error'](_0x50e50e(0x158),_0x5e4fd3);}const nicknames=Object[_0x50e50e(0x157)](nicknameCharIdDict);function _0x134c(_0x429e6d,_0x43edb1){const _0xa27a96=_0xa27a();return _0x134c=function(_0x134ce6,_0x4373c1){_0x134ce6=_0x134ce6-0x142;let _0x15d492=_0xa27a96[_0x134ce6];return _0x15d492;},_0x134c(_0x429e6d,_0x43edb1);}export async function before(_0xbaf015,{conn:_0x25aec6,isOwner:_0x2b04dd,isAdmin:_0x6156a0,isROwner:_0x552e4e}){const _0x845924=_0x50e50e;if(_0xbaf015[_0x845924(0x14d)]&&_0xbaf015[_0x845924(0x14d)]['startsWith']('.')){const _0x5183af=_0xbaf015[_0x845924(0x14d)]['split']('\x20'),_0x5e654f=_0x5183af[0x0]['slice'](0x1);if(nicknames[_0x845924(0x14f)](_0x5e654f)){_0x25aec6[_0x845924(0x14c)]('composing',_0xbaf015['chat']);const _0x536b9b=nicknameCharIdDict[_0x5e654f],_0x424849=_0x5183af[_0x845924(0x159)](0x1)['join']('\x20');try{const _0x430614=await _0x220689(_0x845924(0x14a)+_0x536b9b+_0x845924(0x150)+encodeURIComponent(_0x424849)),_0x3cb5e1=await _0x430614['json'](),_0x12c0b5=_0x3cb5e1[_0x845924(0x14d)];_0xbaf015[_0x845924(0x147)](_0x12c0b5);}catch(_0x2a55f6){console[_0x845924(0x148)](_0x845924(0x15a),_0x2a55f6);}}}}