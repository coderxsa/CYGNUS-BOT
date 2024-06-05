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

function _0x36c6(){const _0xe0b0b7=['map','downloader','chat','wallpaper.jpg','446353AtpnDW','5837384mUxxpI','8LxOICw','floor','No\x20wallpapers\x20found\x20for:\x20','\x20Naruto*','statusText','sendFile','random','help','Error\x20fetching\x20wallpaper:\x20','5215070kJFZvh','542706jSLvEI','buffer','length','Error:\x20','1705515FjiGkK','30945QIiTeI','1345401ZoYyQc','196DJmvtl','*EXAMPLE\x20USAGE\x20','includes','https://weeb-api.vercel.app/wallpaper?query=','2VijcLX'];_0x36c6=function(){return _0xe0b0b7;};return _0x36c6();}const _0xee405=_0x4fef;(function(_0x46f450,_0x324c30){const _0x1f9216=_0x4fef,_0x54635f=_0x46f450();while(!![]){try{const _0x5e1825=parseInt(_0x1f9216(0x201))/0x1*(parseInt(_0x1f9216(0x1fc))/0x2)+-parseInt(_0x1f9216(0x1f5))/0x3+-parseInt(_0x1f9216(0x1f8))/0x4*(-parseInt(_0x1f9216(0x1f6))/0x5)+parseInt(_0x1f9216(0x1f1))/0x6+parseInt(_0x1f9216(0x202))/0x7+-parseInt(_0x1f9216(0x1e7))/0x8*(parseInt(_0x1f9216(0x1f7))/0x9)+-parseInt(_0x1f9216(0x1f0))/0xa;if(_0x5e1825===_0x324c30)break;else _0x54635f['push'](_0x54635f['shift']());}catch(_0x4eafff){_0x54635f['push'](_0x54635f['shift']());}}}(_0x36c6,0x6a12c));function _0x4fef(_0x1035f2,_0x436b1e){const _0x36c645=_0x36c6();return _0x4fef=function(_0x4fefcf,_0x398010){_0x4fefcf=_0x4fefcf-0x1e7;let _0x401638=_0x36c645[_0x4fefcf];return _0x401638;},_0x4fef(_0x1035f2,_0x436b1e);}import _0x3e86d8 from'node-fetch';let handler=async(_0x169ccd,{conn:_0x279cf1,text:_0xaf603f,usedPrefix:_0x1feca6,command:_0x38367b})=>{const _0x23b5a7=_0x4fef;if(!_0xaf603f)throw _0x23b5a7(0x1f9)+(_0x1feca6+_0x38367b)+_0x23b5a7(0x1ea);const _0x207913=_0x23b5a7(0x1fb)+encodeURIComponent(_0xaf603f);try{const _0x38a473=await _0x3e86d8(_0x207913);if(!_0x38a473['ok'])throw _0x23b5a7(0x1ef)+_0x38a473['status']+'\x20'+_0x38a473[_0x23b5a7(0x1eb)];const _0x587d67=await _0x38a473['json']();if(_0x587d67[_0x23b5a7(0x1f3)]===0x0)throw _0x23b5a7(0x1e9)+_0xaf603f;const _0xfa0a08=getRandomIndexes(_0x587d67[_0x23b5a7(0x1f3)],0x2),_0x5c5ce9=_0xfa0a08[_0x23b5a7(0x1fd)](_0x25efd5=>_0x587d67[_0x25efd5]);for(const _0x34ee05 of _0x5c5ce9){const _0x448f73=await _0x3e86d8(_0x34ee05);if(!_0x448f73['ok'])throw'Error\x20fetching\x20image:\x20'+_0x448f73['status']+'\x20'+_0x448f73[_0x23b5a7(0x1eb)];const _0x289ff8=await _0x448f73[_0x23b5a7(0x1f2)]();_0x279cf1[_0x23b5a7(0x1ec)](_0x169ccd[_0x23b5a7(0x1ff)],_0x289ff8,_0x23b5a7(0x200),'*'+_0xaf603f+'*',_0x169ccd);}}catch(_0x3706d0){throw _0x23b5a7(0x1f4)+_0x3706d0;}};function getRandomIndexes(_0x1bf63d,_0x3dc2c6){const _0x2a2a6b=_0x4fef,_0xea52c1=[];while(_0xea52c1['length']<_0x3dc2c6){const _0x385033=Math[_0x2a2a6b(0x1e8)](Math[_0x2a2a6b(0x1ed)]()*_0x1bf63d);!_0xea52c1[_0x2a2a6b(0x1fa)](_0x385033)&&_0xea52c1['push'](_0x385033);}return _0xea52c1;}handler[_0xee405(0x1ee)]=[''][_0xee405(0x1fd)](_0x114a0c=>'wallpaper'+_0x114a0c+'\x20<query>'),handler['tags']=[_0xee405(0x1fe)],handler['command']=/^(wall|wallpaper)$/i;export default handler;