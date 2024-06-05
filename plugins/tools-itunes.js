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

const _0x273cd3=_0x3f37;(function(_0x48000b,_0x109c9d){const _0x177973=_0x3f37,_0x31d364=_0x48000b();while(!![]){try{const _0x1217ca=-parseInt(_0x177973(0x107))/0x1+parseInt(_0x177973(0x113))/0x2*(-parseInt(_0x177973(0x100))/0x3)+parseInt(_0x177973(0x104))/0x4+-parseInt(_0x177973(0x111))/0x5+parseInt(_0x177973(0xf8))/0x6+parseInt(_0x177973(0x106))/0x7*(parseInt(_0x177973(0xf6))/0x8)+parseInt(_0x177973(0x10e))/0x9;if(_0x1217ca===_0x109c9d)break;else _0x31d364['push'](_0x31d364['shift']());}catch(_0x44292c){_0x31d364['push'](_0x31d364['shift']());}}}(_0x1867,0x49dbc));function _0x1867(){const _0x363850=['138XfNyug','artist','command','log','1241376ysRMuv','reply','791077ZlvHOF','370415zPbelt','https://api.popcat.xyz/itunes?q=','\x0a\x0a\x20\x20\x20\x20\x20•\x20*Price:*\x20','tags','\x0a\x0a\x20\x20\x20\x20\x20•\x20*Length:*\x20','itunes','name','5724522GAvrlM','*Song\x20Information:*\x0a\x0a\x20\x20\x20\x20\x20•\x20*Name:*\x20','API\x20request\x20failed\x20with\x20status\x20','2835945XQwgCM','\x0a\x0a\x20\x20\x20\x20\x20•\x20*Artist:*\x20','9172jyrZxh','tools','url','thumbnail.jpg','8VNptbz','JSON\x20response:','2350026yfATtb','thumbnail','length','\x0a\x0a\x20\x20\x20\x20\x20•\x20*URL:*\x20','\x0a\x0a\x20\x20\x20\x20\x20•\x20*Release\x20Date:*\x20','status','price','release_date'];_0x1867=function(){return _0x363850;};return _0x1867();}function _0x3f37(_0x492714,_0x36a51b){const _0x1867ec=_0x1867();return _0x3f37=function(_0x3f3777,_0x816537){_0x3f3777=_0x3f3777-0xf6;let _0x378d2a=_0x1867ec[_0x3f3777];return _0x378d2a;},_0x3f37(_0x492714,_0x36a51b);}import _0x1a5208 from'node-fetch';let itunesHandler=async(_0x2bb39b,{conn:_0xe40068,text:_0x1dbba8})=>{const _0x5c4b4f=_0x3f37;if(!_0x1dbba8)throw'Please\x20provide\x20a\x20song\x20name';try{let _0x16c7c1=await _0x1a5208(_0x5c4b4f(0x108)+encodeURIComponent(_0x1dbba8));if(!_0x16c7c1['ok'])throw new Error(_0x5c4b4f(0x110)+_0x16c7c1[_0x5c4b4f(0xfd)]);let _0x48011d=await _0x16c7c1['json']();console[_0x5c4b4f(0x103)](_0x5c4b4f(0xf7),_0x48011d);let _0x1c495a=_0x5c4b4f(0x10f)+_0x48011d[_0x5c4b4f(0x10d)]+_0x5c4b4f(0x112)+_0x48011d[_0x5c4b4f(0x101)]+'\x0a\x0a\x20\x20\x20\x20\x20•\x20*Album:*\x20'+_0x48011d['album']+_0x5c4b4f(0xfc)+_0x48011d[_0x5c4b4f(0xff)]+_0x5c4b4f(0x109)+_0x48011d[_0x5c4b4f(0xfe)]+_0x5c4b4f(0x10b)+_0x48011d[_0x5c4b4f(0xfa)]+'\x0a\x0a\x20\x20\x20\x20\x20•\x20*Genre:*\x20'+_0x48011d['genre']+_0x5c4b4f(0xfb)+_0x48011d[_0x5c4b4f(0x115)];_0x48011d[_0x5c4b4f(0xf9)]?await _0xe40068['sendFile'](_0x2bb39b['chat'],_0x48011d[_0x5c4b4f(0xf9)],_0x5c4b4f(0x116),_0x1c495a,_0x2bb39b):_0x2bb39b[_0x5c4b4f(0x105)](_0x1c495a);}catch(_0x1d95a8){console['error'](_0x1d95a8);}};itunesHandler['help']=[_0x273cd3(0x10c)],itunesHandler[_0x273cd3(0x10a)]=[_0x273cd3(0x114)],itunesHandler[_0x273cd3(0x102)]=/^(itunes)$/i;export default itunesHandler;