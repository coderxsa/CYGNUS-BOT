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

const _0x51e79b=_0x347b;function _0x564c(){const _0x5e8d95=['unlink','isFile','readdir','map','__dirname','447nGmfKJ','8585253wLEXKK','5288suqIdB','12732ZJGMMP','\x20files.','48026ttpjai','633JDpFbK','open','10pIUuzC','stat','message','2170998zZPfQA','161QOtSyh','error','[clearTmp]\x20Error\x20opening\x20file:','endsWith','mtimeMs','4694RytdrL','../tmp','216616LHZdrt','now','5333795HVefnK'];_0x564c=function(){return _0x5e8d95;};return _0x564c();}(function(_0x3321eb,_0x1689b8){const _0x502983=_0x347b,_0x5420b6=_0x3321eb();while(!![]){try{const _0x2d4a30=parseInt(_0x502983(0x1bc))/0x1*(-parseInt(_0x502983(0x1cd))/0x2)+parseInt(_0x502983(0x1c2))/0x3*(parseInt(_0x502983(0x1be))/0x4)+-parseInt(_0x502983(0x1d1))/0x5+-parseInt(_0x502983(0x1c7))/0x6+-parseInt(_0x502983(0x1c8))/0x7*(parseInt(_0x502983(0x1cf))/0x8)+-parseInt(_0x502983(0x1bd))/0x9*(parseInt(_0x502983(0x1c4))/0xa)+parseInt(_0x502983(0x1c1))/0xb*(parseInt(_0x502983(0x1bf))/0xc);if(_0x2d4a30===_0x1689b8)break;else _0x5420b6['push'](_0x5420b6['shift']());}catch(_0x4a49ce){_0x5420b6['push'](_0x5420b6['shift']());}}}(_0x564c,0xd132f));import _0x3ac5fd from'./helper.js';function _0x347b(_0x210614,_0x5370b9){const _0x564c1c=_0x564c();return _0x347b=function(_0x347bc4,_0x25ef6c){_0x347bc4=_0x347bc4-0x1ba;let _0x4f4f92=_0x564c1c[_0x347bc4];return _0x4f4f92;},_0x347b(_0x210614,_0x5370b9);}import{promises as _0x1a0613}from'fs';import{tmpdir,platform}from'os';import{join}from'path';const maxtime=0x3e8*0x3c*0x2,__dirname=_0x3ac5fd[_0x51e79b(0x1bb)](import.meta);export default async function clearTmp(){const _0x5a9b25=_0x51e79b,_0x2811d2=[tmpdir(),join(__dirname,_0x5a9b25(0x1ce))],_0x123df5=[];await Promise['allSettled'](_0x2811d2[_0x5a9b25(0x1ba)](async _0xf9d2d8=>{const _0x233c47=_0x5a9b25,_0x428708=await _0x1a0613[_0x233c47(0x1d4)](_0xf9d2d8);for(const _0x49d6cd of _0x428708){if(!_0x49d6cd[_0x233c47(0x1cb)]('.file')){const _0x4e3cfc=join(_0xf9d2d8,_0x49d6cd),_0x378882=await _0x1a0613[_0x233c47(0x1c5)](_0x4e3cfc);if(_0x378882[_0x233c47(0x1d3)]()&&Date[_0x233c47(0x1d0)]()-_0x378882[_0x233c47(0x1cc)]>=maxtime){if(platform()==='win32'){let _0x74eba0;try{_0x74eba0=await _0x1a0613[_0x233c47(0x1c3)](_0x4e3cfc,'r+');}catch(_0x63b6f8){console[_0x233c47(0x1c9)](_0x233c47(0x1ca),_0x63b6f8[_0x233c47(0x1c6)]);continue;}finally{await _0x74eba0?.['close']();}}await _0x1a0613[_0x233c47(0x1d2)](_0x4e3cfc),_0x123df5['push'](_0x4e3cfc);}}}})),console['log']('[clearTmp]\x20Deleted\x20'+_0x123df5['length']+_0x5a9b25(0x1c0));}