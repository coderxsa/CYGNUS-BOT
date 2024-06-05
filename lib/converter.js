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

(function(_0x23695e,_0x6bd47e){const _0x1a0a5e=_0x3585,_0x150088=_0x23695e();while(!![]){try{const _0x42f8be=parseInt(_0x1a0a5e(0x11c))/0x1+-parseInt(_0x1a0a5e(0x100))/0x2+parseInt(_0x1a0a5e(0x10e))/0x3*(parseInt(_0x1a0a5e(0x11d))/0x4)+parseInt(_0x1a0a5e(0x10c))/0x5*(-parseInt(_0x1a0a5e(0x103))/0x6)+-parseInt(_0x1a0a5e(0x115))/0x7+-parseInt(_0x1a0a5e(0x102))/0x8+parseInt(_0x1a0a5e(0x118))/0x9;if(_0x42f8be===_0x6bd47e)break;else _0x150088['push'](_0x150088['shift']());}catch(_0x191d17){_0x150088['push'](_0x150088['shift']());}}}(_0x49df,0xc0eb0));import{promises}from'fs';import{join}from'path';import{spawn}from'child_process';function _0x3585(_0x347864,_0x5d100a){const _0x49dfec=_0x49df();return _0x3585=function(_0x358534,_0x106605){_0x358534=_0x358534-0x100;let _0x33c633=_0x49dfec[_0x358534];return _0x33c633;},_0x3585(_0x347864,_0x5d100a);}function ffmpeg(_0xce5b43,_0x1fec63=[],_0x4d82fd='',_0x3f90e2=''){return new Promise(async(_0x8ed852,_0x3cfe5d)=>{const _0x4791e5=_0x3585;try{let _0x5939e6=join(global[_0x4791e5(0x117)](import.meta[_0x4791e5(0x107)]),_0x4791e5(0x108),+new Date()+'.'+_0x4d82fd),_0x41b6e5=_0x5939e6+'.'+_0x3f90e2;await promises['writeFile'](_0x5939e6,_0xce5b43),spawn(_0x4791e5(0x111),['-y','-i',_0x5939e6,..._0x1fec63,_0x41b6e5])['on']('error',_0x3cfe5d)['on'](_0x4791e5(0x104),async _0x525acf=>{const _0x670c6e=_0x4791e5;try{await promises[_0x670c6e(0x105)](_0x5939e6);if(_0x525acf!==0x0)return _0x3cfe5d(_0x525acf);_0x8ed852({'data':await promises[_0x670c6e(0x114)](_0x41b6e5),'filename':_0x41b6e5,'delete'(){return promises['unlink'](_0x41b6e5);}});}catch(_0x3da30c){_0x3cfe5d(_0x3da30c);}});}catch(_0x4dfe1f){_0x3cfe5d(_0x4dfe1f);}});}function toPTT(_0x492619,_0x2e9eca){const _0x413008=_0x3585;return ffmpeg(_0x492619,[_0x413008(0x110),'-c:a',_0x413008(0x11e),_0x413008(0x113),_0x413008(0x10f),'-vbr','on'],_0x2e9eca,'ogg');}function _0x49df(){const _0x15186d=['-ab','15815hTUwFd','-c:a','21iUjUxi','128k','-vn','ffmpeg','-compression_level','-b:a','readFile','1721265suReVX','opus','__dirname','16518555TpohFG','-ar','aac','mp4','463446tsyNRN','75436vAiyIB','libopus','-c:v','1338448czKcbC','slow','3324552EbEsGB','588FoxOzx','close','unlink','-preset','url','../tmp','44100','libx264'];_0x49df=function(){return _0x15186d;};return _0x49df();}function toAudio(_0x3ce54d,_0x4c9d7e){const _0x26d9e9=_0x3585;return ffmpeg(_0x3ce54d,[_0x26d9e9(0x110),_0x26d9e9(0x10d),_0x26d9e9(0x11e),_0x26d9e9(0x113),_0x26d9e9(0x10f),'-vbr','on',_0x26d9e9(0x112),'10'],_0x4c9d7e,_0x26d9e9(0x116));}function toVideo(_0x1feee5,_0x1d0866){const _0x26074d=_0x3585;return ffmpeg(_0x1feee5,[_0x26074d(0x11f),_0x26074d(0x10a),_0x26074d(0x10d),_0x26074d(0x11a),_0x26074d(0x10b),'128k',_0x26074d(0x119),_0x26074d(0x109),'-crf','32',_0x26074d(0x106),_0x26074d(0x101)],_0x1d0866,_0x26074d(0x11b));}export{toAudio,toPTT,toVideo,ffmpeg};