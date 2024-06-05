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

const _0x1251cf=_0x65cf;(function(_0x518456,_0x1713d5){const _0x28a704=_0x65cf,_0x533a27=_0x518456();while(!![]){try{const _0x11bb3f=-parseInt(_0x28a704(0x97))/0x1+-parseInt(_0x28a704(0xa3))/0x2*(-parseInt(_0x28a704(0xb8))/0x3)+-parseInt(_0x28a704(0x91))/0x4+-parseInt(_0x28a704(0xaf))/0x5+-parseInt(_0x28a704(0xa1))/0x6+parseInt(_0x28a704(0xa5))/0x7*(parseInt(_0x28a704(0xae))/0x8)+parseInt(_0x28a704(0x9c))/0x9*(-parseInt(_0x28a704(0x95))/0xa);if(_0x11bb3f===_0x1713d5)break;else _0x533a27['push'](_0x533a27['shift']());}catch(_0x4f78b7){_0x533a27['push'](_0x533a27['shift']());}}}(_0x14e9,0xde1bc));function _0x65cf(_0x5532c2,_0x4c32e5){const _0x14e9df=_0x14e9();return _0x65cf=function(_0x65cf39,_0x2dcc1){_0x65cf39=_0x65cf39-0x8e;let _0xcd42f6=_0x14e9df[_0x65cf39];return _0xcd42f6;},_0x65cf(_0x5532c2,_0x4c32e5);}import _0x292975 from'node-fetch';import _0x569415 from'../lib/uploadImage.js';let handler=async(_0x4a7227,{conn:_0x15b3d0})=>{const _0x518655=_0x65cf;try{let _0x49e9b2=_0x4a7227[_0x518655(0x93)]?_0x4a7227['quoted']:_0x4a7227,_0x3c625b=(_0x49e9b2['msg']||_0x49e9b2)['mimetype']||_0x49e9b2['mediaType']||'';if(!_0x3c625b['startsWith']('image'))throw _0x518655(0xab);let _0x1edfb3=await _0x49e9b2[_0x518655(0xac)](),_0x56c01d=await _0x569415(_0x1edfb3),_0x10686a='https://api.trace.moe/search?anilistInfo&url='+encodeURIComponent(_0x56c01d);console[_0x518655(0x96)]('API\x20URL:',_0x10686a);let _0x26cbd3=await _0x292975(_0x10686a),_0x4a02ff=await _0x26cbd3[_0x518655(0xa8)]();console['log'](_0x518655(0xa2),_0x4a02ff);if(!_0x4a02ff||_0x4a02ff[_0x518655(0xa0)]||_0x4a02ff[_0x518655(0x8f)][_0x518655(0xa4)]===0x0)throw _0x518655(0x94);let {anilist:_0x46abf0,from:_0x7c0ca,to:_0xac504d,similarity:_0x32d25f,video:_0x31b531,episode:_0x1d9dd6}=_0x4a02ff[_0x518655(0x8f)][0x0],_0x489ba5=_0x46abf0[_0x518655(0xaa)]?_0x46abf0[_0x518655(0xaa)][_0x518655(0xa7)]||_0x46abf0['title'][_0x518655(0xb1)]:'Unknown\x20Title',_0x1efd1=_0x518655(0x9f)+_0x489ba5+'\x0a';_0x46abf0[_0x518655(0x9d)]&&_0x46abf0[_0x518655(0x9d)][_0x518655(0xa4)]>0x0&&(_0x1efd1+=_0x518655(0xb4)+_0x46abf0['synonyms'][_0x518655(0x98)](',\x20')+'\x0a'),_0x1efd1+=_0x518655(0xa9)+_0x32d25f[_0x518655(0xb5)](0x2)+'%\x0a',_0x1efd1+='*Time:*\x20'+formatDuration(_0x7c0ca*0x3e8)+_0x518655(0xb2)+formatDuration(_0xac504d*0x3e8)+'\x0a',_0x1d9dd6&&(_0x1efd1+=_0x518655(0xa6)+_0x1d9dd6+'\x0a'),console['log'](_0x518655(0xb7),{'animeTitle':_0x489ba5,'synonyms':_0x46abf0[_0x518655(0x9d)]?_0x46abf0[_0x518655(0x9d)][_0x518655(0x98)](',\x20'):_0x518655(0x9a),'similarity':_0x32d25f,'timestamp':formatDuration(_0x7c0ca*0x3e8)+_0x518655(0xb2)+formatDuration(_0xac504d*0x3e8),'video':_0x31b531,'episode':_0x1d9dd6}),await _0x15b3d0[_0x518655(0x8e)](_0x4a7227['chat'],_0x31b531,_0x518655(0xb0),_0x1efd1,_0x4a7227);}catch(_0x219ffd){console[_0x518655(0xa0)](_0x518655(0xb3),_0x219ffd),_0x4a7227[_0x518655(0x90)]('*Error:\x20Could\x20not\x20track\x20the\x20anime\x20or\x20send\x20the\x20video.*');}};function formatDuration(_0x5ce099){const _0xa0c10f=_0x65cf;let _0xc44af9=Math[_0xa0c10f(0x9e)](_0x5ce099/0x3e8%0x3c),_0x139f7f=Math['floor'](_0x5ce099/(0x3e8*0x3c)%0x3c),_0x50b577=Math[_0xa0c10f(0x9e)](_0x5ce099/(0x3e8*0x3c*0x3c)%0x18);return _0x50b577[_0xa0c10f(0x9b)]()[_0xa0c10f(0xb6)](0x2,'0')+':'+_0x139f7f[_0xa0c10f(0x9b)]()[_0xa0c10f(0xb6)](0x2,'0')+':'+_0xc44af9[_0xa0c10f(0x9b)]()[_0xa0c10f(0xb6)](0x2,'0');}function _0x14e9(){const _0x57be2b=['8368tRotar','955065hbULQV','anime.mp4','native','\x20-\x20','Error:','*Synonyms:*\x20','toFixed','padStart','Anime\x20Information:','3sItbZK','sendFile','result','reply','723052iLfODa','command','quoted','*Error:\x20Could\x20not\x20track\x20the\x20anime.*','10ycNiiL','log','53212oURpIo','join','anime','Not\x20Available','toString','13675707syMKGq','synonyms','floor','*Anime:*\x20','error','358776TeAYFe','API\x20Response:','2516490sNJjkU','length','11081LBsinM','*Episode:*\x20','romaji','json','*Similarity:*\x20','title','*Respond\x20to\x20an\x20image*','download','help'];_0x14e9=function(){return _0x57be2b;};return _0x14e9();}handler[_0x1251cf(0xad)]=['trace'],handler['tags']=[_0x1251cf(0x99)],handler[_0x1251cf(0x92)]=/^trace$/i;export default handler;