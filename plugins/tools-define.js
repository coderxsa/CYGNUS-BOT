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

const _0x5ccfa4=_0x5859;(function(_0xcc8410,_0x4a34f4){const _0x4a6d79=_0x5859,_0x2276d5=_0xcc8410();while(!![]){try{const _0x5d4ccd=-parseInt(_0x4a6d79(0x165))/0x1+-parseInt(_0x4a6d79(0x157))/0x2+parseInt(_0x4a6d79(0x15b))/0x3+parseInt(_0x4a6d79(0x162))/0x4+parseInt(_0x4a6d79(0x153))/0x5+parseInt(_0x4a6d79(0x152))/0x6*(-parseInt(_0x4a6d79(0x151))/0x7)+-parseInt(_0x4a6d79(0x14d))/0x8;if(_0x5d4ccd===_0x4a34f4)break;else _0x2276d5['push'](_0x2276d5['shift']());}catch(_0x3ce4e8){_0x2276d5['push'](_0x2276d5['shift']());}}}(_0x147f,0x709e8));function _0x147f(){const _0x5aaefd=['list','2387bhkdOR','2706omGbNQ','2760435CdUKkf','json','\x0a*Definition:*\x20','*Example:*\x20','487524OsgoLs','An\x20error\x20occurred:\x20','length','sendMessage','1206567uOZTUY','tools','example','chat','*Word:*\x20','command','Word\x20not\x20found\x20in\x20the\x20dictionary.','488124IXpXAV','define\x20<word>','definition','102041JgijGf','923400mVjmSS','https://api.urbandictionary.com/v0/define?term=','extendedTextMessage'];_0x147f=function(){return _0x5aaefd;};return _0x147f();}function _0x5859(_0x264002,_0x13fb1d){const _0x147fa6=_0x147f();return _0x5859=function(_0x5859b3,_0x1cf07d){_0x5859b3=_0x5859b3-0x14d;let _0x4504a9=_0x147fa6[_0x5859b3];return _0x4504a9;},_0x5859(_0x264002,_0x13fb1d);}import _0x139a78 from'node-fetch';let handler=async(_0x10cc2e,{conn:_0x56d522,text:_0x1535f2})=>{const _0x4a8063=_0x5859;if(!_0x1535f2)throw'Please\x20provide\x20a\x20word\x20to\x20search\x20for.';const _0x3a22ae=_0x4a8063(0x14e)+encodeURIComponent(_0x1535f2),_0x1e1a4c=await _0x139a78(_0x3a22ae),_0x2760d3=await _0x1e1a4c[_0x4a8063(0x154)]();if(!_0x1e1a4c['ok'])throw _0x4a8063(0x158)+_0x2760d3['message'];if(!_0x2760d3[_0x4a8063(0x150)][_0x4a8063(0x159)])throw _0x4a8063(0x161);const _0x1f4264=_0x2760d3[_0x4a8063(0x150)][0x0],_0x1a2d8a=_0x1f4264[_0x4a8063(0x164)],_0x1afec8=_0x1f4264[_0x4a8063(0x15d)]?_0x4a8063(0x156)+_0x1f4264['example']:'',_0x2b7518=_0x4a8063(0x15f)+_0x1535f2+_0x4a8063(0x155)+_0x1a2d8a+'\x0a'+_0x1afec8;_0x56d522[_0x4a8063(0x15a)](_0x10cc2e[_0x4a8063(0x15e)],{'text':_0x2b7518},_0x4a8063(0x14f),{'quoted':_0x10cc2e});};handler['help']=[_0x5ccfa4(0x163)],handler['tags']=[_0x5ccfa4(0x15c)],handler[_0x5ccfa4(0x160)]=/^define/i;export default handler;