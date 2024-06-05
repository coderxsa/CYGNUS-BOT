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

function _0x1f73(){const _0x315195=['397960JngYrp','mp3','4910FzfLwd','22zTqmzS','236776zourWj','mp4','5733250LYEaFO','21NdXMBV','15716063kiFMQc','quoted','✳️\x20Respond\x20to\x20an\x20animated\x20sticker','tovid.mp4','download','2539425iKEyyM','chat','-c:a','306896bGXCgw','30fFyIQt','mimetype','tovid','-filter_complex','sticker','-crf','99KSlSbx','yuv420p','test','command','copy','tags'];_0x1f73=function(){return _0x315195;};return _0x1f73();}const _0xc960f5=_0x524d;(function(_0x460e01,_0x4e2648){const _0x3ecae4=_0x524d,_0x44bb24=_0x460e01();while(!![]){try{const _0x27d9c0=parseInt(_0x3ecae4(0x76))/0x1*(parseInt(_0x3ecae4(0x75))/0x2)+parseInt(_0x3ecae4(0x7a))/0x3*(parseInt(_0x3ecae4(0x83))/0x4)+-parseInt(_0x3ecae4(0x73))/0x5*(parseInt(_0x3ecae4(0x84))/0x6)+-parseInt(_0x3ecae4(0x80))/0x7+-parseInt(_0x3ecae4(0x77))/0x8*(parseInt(_0x3ecae4(0x8a))/0x9)+-parseInt(_0x3ecae4(0x79))/0xa+parseInt(_0x3ecae4(0x7b))/0xb;if(_0x27d9c0===_0x4e2648)break;else _0x44bb24['push'](_0x44bb24['shift']());}catch(_0x1d2e78){_0x44bb24['push'](_0x44bb24['shift']());}}}(_0x1f73,0x57ef8));function _0x524d(_0x5520e2,_0x45e404){const _0x1f7371=_0x1f73();return _0x524d=function(_0x524d65,_0x3608c7){_0x524d65=_0x524d65-0x6f;let _0x56fce0=_0x1f7371[_0x524d65];return _0x56fce0;},_0x524d(_0x5520e2,_0x45e404);}import{webp2mp4}from'../lib/webp2mp4.js';import{ffmpeg}from'../lib/converter.js';let handler=async(_0x196581,{conn:_0xcf5d1a})=>{const _0x2660a8=_0x524d;if(!_0x196581[_0x2660a8(0x7c)])throw _0x2660a8(0x7d);let _0x4b5cb9=_0x196581[_0x2660a8(0x7c)][_0x2660a8(0x85)]||'';if(!/webp|audio/[_0x2660a8(0x6f)](_0x4b5cb9))throw'✳️\x20Respond\x20to\x20an\x20animated\x20sticker';let _0x4d50dd=await _0x196581[_0x2660a8(0x7c)][_0x2660a8(0x7f)](),_0x14e1b0=Buffer['alloc'](0x0);if(/webp/[_0x2660a8(0x6f)](_0x4b5cb9))_0x14e1b0=await webp2mp4(_0x4d50dd);else/audio/['test'](_0x4b5cb9)&&(_0x14e1b0=await ffmpeg(_0x4d50dd,[_0x2660a8(0x87),'color','-pix_fmt',_0x2660a8(0x8b),_0x2660a8(0x89),'51',_0x2660a8(0x82),_0x2660a8(0x71),'-shortest'],_0x2660a8(0x74),_0x2660a8(0x78)));await _0xcf5d1a['sendFile'](_0x196581[_0x2660a8(0x81)],_0x14e1b0,_0x2660a8(0x7e),'✅\x20sticker\x20a\x20video',_0x196581);};handler['help']=[_0xc960f5(0x86)],handler[_0xc960f5(0x72)]=[_0xc960f5(0x88)],handler[_0xc960f5(0x70)]=['tovideo',_0xc960f5(0x86)];export default handler;