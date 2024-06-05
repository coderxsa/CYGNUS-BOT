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

const _0x11c2fa=_0x2679;(function(_0x44747c,_0x204596){const _0x3049c5=_0x2679,_0x1453ab=_0x44747c();while(!![]){try{const _0x477fb0=parseInt(_0x3049c5(0x1c5))/0x1+-parseInt(_0x3049c5(0x1ac))/0x2*(parseInt(_0x3049c5(0x1b8))/0x3)+parseInt(_0x3049c5(0x1af))/0x4+parseInt(_0x3049c5(0x1c2))/0x5+-parseInt(_0x3049c5(0x1b2))/0x6+parseInt(_0x3049c5(0x1b7))/0x7+-parseInt(_0x3049c5(0x1c3))/0x8*(parseInt(_0x3049c5(0x1b4))/0x9);if(_0x477fb0===_0x204596)break;else _0x1453ab['push'](_0x1453ab['shift']());}catch(_0x25bfac){_0x1453ab['push'](_0x1453ab['shift']());}}}(_0x4d6b,0xda3b2));function _0x2679(_0x39e497,_0x391da8){const _0x4d6ba0=_0x4d6b();return _0x2679=function(_0x267955,_0x1a0bb4){_0x267955=_0x267955-0x1ac;let _0x105e47=_0x4d6ba0[_0x267955];return _0x105e47;},_0x2679(_0x39e497,_0x391da8);}function _0x4d6b(){const _0x245803=['4436628tKVuzy','690qyZvDW','files','message','get','values','promises','Please\x20provide\x20a\x20plugin\x20URL','https://api.github.com/gists/','tags','Error\x20fetching\x20or\x20saving\x20the\x20plugin:\x20','3738240EUILgo','1102200krnIaP','install','1536237aaiiQQ','plugins','No\x20valid\x20files\x20found\x20in\x20the\x20Gist','7744iNyaJy','reply','help','3429956PZKIaE','data','Invalid\x20plugin\x20URL','9464514qXpIAP','command','27jwkNhW','\x20<Gist\x20URL>','content'];_0x4d6b=function(){return _0x245803;};return _0x4d6b();}import _0x59856f from'axios';import _0x1429de from'fs';import _0x52e0ec from'path';let handler=async(_0x124ea9,{text:_0x45b1db,usedPrefix:_0x25677f,command:_0x5e331f})=>{const _0x51da65=_0x2679;if(!_0x45b1db)throw _0x51da65(0x1be);const _0x5eb6f3=_0x45b1db['match'](/(?:\/|gist\.github\.com\/)([a-fA-F0-9]+)/);if(!_0x5eb6f3)throw _0x51da65(0x1b1);const _0x155249=_0x5eb6f3[0x1],_0x518401=_0x51da65(0x1bf)+_0x155249;try{const _0xbfd56e=await _0x59856f[_0x51da65(0x1bb)](_0x518401),_0x2f88b8=_0xbfd56e[_0x51da65(0x1b0)];if(!_0x2f88b8||!_0x2f88b8[_0x51da65(0x1b9)])throw _0x51da65(0x1c7);for(const _0x271c41 of Object[_0x51da65(0x1bc)](_0x2f88b8[_0x51da65(0x1b9)])){const _0x225b67=_0x271c41['filename'],_0x26f590=_0x52e0ec['join'](_0x51da65(0x1c6),''+_0x225b67);await _0x1429de[_0x51da65(0x1bd)]['writeFile'](_0x26f590,_0x271c41[_0x51da65(0x1b6)]),_0x124ea9[_0x51da65(0x1ad)]('successfully\x20installed\x20the\x20plugin\x20to\x20Guru\x20Bot');}}catch(_0x51cec9){throw _0x51da65(0x1c1)+_0x51cec9[_0x51da65(0x1ba)];}};handler[_0x11c2fa(0x1ae)]=[_0x11c2fa(0x1c4)]['map'](_0x150e48=>_0x150e48+_0x11c2fa(0x1b5)),handler[_0x11c2fa(0x1c0)]=['plugin'],handler[_0x11c2fa(0x1b3)]=/^install$/i,handler['owner']=!![];export default handler;