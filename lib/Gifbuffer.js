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

function _0x159e(_0x246918,_0xd956df){const _0x823939=_0x8239();return _0x159e=function(_0x159e6a,_0x16d544){_0x159e6a=_0x159e6a-0x10d;let _0xe9a25c=_0x823939[_0x159e6a];return _0xe9a25c;},_0x159e(_0x246918,_0xd956df);}(function(_0x130742,_0xbcf165){const _0x4d0eae=_0x159e,_0x2f9c53=_0x130742();while(!![]){try{const _0x1b3412=parseInt(_0x4d0eae(0x11e))/0x1*(-parseInt(_0x4d0eae(0x114))/0x2)+parseInt(_0x4d0eae(0x10e))/0x3+parseInt(_0x4d0eae(0x11c))/0x4*(parseInt(_0x4d0eae(0x120))/0x5)+-parseInt(_0x4d0eae(0x11b))/0x6+parseInt(_0x4d0eae(0x115))/0x7*(parseInt(_0x4d0eae(0x119))/0x8)+-parseInt(_0x4d0eae(0x11a))/0x9*(parseInt(_0x4d0eae(0x11f))/0xa)+parseInt(_0x4d0eae(0x117))/0xb;if(_0x1b3412===_0xbcf165)break;else _0x2f9c53['push'](_0x2f9c53['shift']());}catch(_0x55ef0c){_0x2f9c53['push'](_0x2f9c53['shift']());}}}(_0x8239,0xdc94e));function _0x8239(){const _0x497b21=['Error\x20processing\x20GIF\x20to\x20video.','252136wvpjBA','9xcHkcK','4143672TDIqhl','1652CJyYqW','unlink','1087514Qsvzrh','8876710RDGXRa','19645HIeRxd','join','.gif','.mp4','3992745rKUGaX','random','toString','all','error','ffmpeg\x20-i\x20\x22','2vUeplx','28lIGQDa','tmp','5386029pntlDg'];_0x8239=function(){return _0x497b21;};return _0x8239();}import _0x29b553 from'fs/promises';import{promisify}from'util';import{exec}from'child_process';import _0x5e3de9 from'path';const __dirname=_0x5e3de9['resolve'](),sleep=promisify(setTimeout),GIFBufferToVideoBuffer=async _0x1d680f=>{const _0x2f8f20=_0x159e;try{const _0x67fab3=''+Math[_0x2f8f20(0x10f)]()[_0x2f8f20(0x110)](0x24),_0xc8bcff=_0x5e3de9[_0x2f8f20(0x121)](__dirname,_0x2f8f20(0x116),_0x67fab3+_0x2f8f20(0x122)),_0x266550=_0x5e3de9[_0x2f8f20(0x121)](__dirname,_0x2f8f20(0x116),_0x67fab3+_0x2f8f20(0x10d));await _0x29b553['writeFile'](_0xc8bcff,_0x1d680f);const _0x12ee98=_0x2f8f20(0x113)+_0xc8bcff+'\x22\x20-movflags\x20faststart\x20-pix_fmt\x20yuv420p\x20-vf\x20\x22scale=trunc(iw/2)*2:trunc(ih/2)*2\x22\x20\x22'+_0x266550+'\x22';await promisify(exec)(_0x12ee98),await sleep(0xfa0);const _0x116d57=await _0x29b553['readFile'](_0x266550);return await Promise[_0x2f8f20(0x111)]([_0x29b553[_0x2f8f20(0x11d)](_0xc8bcff),_0x29b553[_0x2f8f20(0x11d)](_0x266550)]),_0x116d57;}catch(_0x5123b2){console[_0x2f8f20(0x112)](_0x5123b2);throw new Error(_0x2f8f20(0x118));}};export default GIFBufferToVideoBuffer;