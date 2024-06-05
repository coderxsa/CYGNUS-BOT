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

const _0x1444b8=_0x5004;function _0x7fd9(){const _0x2ff8f9=['command','3604160FBVNyD','help','\x22\x0a\x0aContributor:\x20','log','tags','3184cocZEg','36644240UuruUR','status','519zVyoBK','6580260GmFcIV','error','fun','3038195auLKyG','2004544VWlkiZ','963030oyqfSz','pickupline','*Here\x27s\x20a\x20pickup\x20line\x20for\x20you:*\x0a\x0a\x22','contributor','JSON\x20response:'];_0x7fd9=function(){return _0x2ff8f9;};return _0x7fd9();}function _0x5004(_0x19ce51,_0x40aa21){const _0x7fd9c0=_0x7fd9();return _0x5004=function(_0x5004d4,_0x19c6a0){_0x5004d4=_0x5004d4-0x9a;let _0x8d1619=_0x7fd9c0[_0x5004d4];return _0x8d1619;},_0x5004(_0x19ce51,_0x40aa21);}(function(_0x28db7d,_0xd45836){const _0x597858=_0x5004,_0x47c4ce=_0x28db7d();while(!![]){try{const _0x19087f=-parseInt(_0x597858(0xad))/0x1+parseInt(_0x597858(0xa4))/0x2*(-parseInt(_0x597858(0xa7))/0x3)+-parseInt(_0x597858(0xac))/0x4+-parseInt(_0x597858(0xab))/0x5+-parseInt(_0x597858(0xa8))/0x6+-parseInt(_0x597858(0x9f))/0x7+parseInt(_0x597858(0xa5))/0x8;if(_0x19087f===_0xd45836)break;else _0x47c4ce['push'](_0x47c4ce['shift']());}catch(_0x2c2c1a){_0x47c4ce['push'](_0x47c4ce['shift']());}}}(_0x7fd9,0x97c97));import _0x5ba64f from'node-fetch';let pickupLineHandler=async(_0x50c6e7,{conn:_0x14c99f,text:_0x5e0783})=>{const _0xf25265=_0x5004;try{let _0x3ba0da=await _0x5ba64f('https://api.popcat.xyz/pickuplines');if(!_0x3ba0da['ok'])throw new Error('API\x20request\x20failed\x20with\x20status\x20'+_0x3ba0da[_0xf25265(0xa6)]);let _0x34bbe3=await _0x3ba0da['json']();console[_0xf25265(0xa2)](_0xf25265(0x9d),_0x34bbe3);let _0x37ead1=_0xf25265(0x9b)+_0x34bbe3[_0xf25265(0x9a)]+_0xf25265(0xa1)+_0x34bbe3[_0xf25265(0x9c)];_0x50c6e7['reply'](_0x37ead1);}catch(_0x3d7502){console[_0xf25265(0xa9)](_0x3d7502);}};pickupLineHandler[_0x1444b8(0xa0)]=['pickupline'],pickupLineHandler[_0x1444b8(0xa3)]=[_0x1444b8(0xaa)],pickupLineHandler[_0x1444b8(0x9e)]=/^(pickupline|pickup)$/i;export default pickupLineHandler;