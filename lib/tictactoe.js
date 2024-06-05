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

const _0x56a31b=_0xe973;(function(_0x40ba98,_0x5221a3){const _0x4cd69b=_0xe973,_0x45622d=_0x40ba98();while(!![]){try{const _0x3fd00e=-parseInt(_0x4cd69b(0x1dc))/0x1*(-parseInt(_0x4cd69b(0x1dd))/0x2)+-parseInt(_0x4cd69b(0x1e5))/0x3+parseInt(_0x4cd69b(0x1da))/0x4+parseInt(_0x4cd69b(0x1e4))/0x5*(parseInt(_0x4cd69b(0x1d7))/0x6)+parseInt(_0x4cd69b(0x1ec))/0x7*(-parseInt(_0x4cd69b(0x1e3))/0x8)+parseInt(_0x4cd69b(0x1eb))/0x9+-parseInt(_0x4cd69b(0x1d8))/0xa;if(_0x3fd00e===_0x5221a3)break;else _0x45622d['push'](_0x45622d['shift']());}catch(_0x56f0fc){_0x45622d['push'](_0x45622d['shift']());}}}(_0x3c41,0x379b6));function _0x3c41(){const _0x2beceb=['toString','turn','_currentTurn','toBinary','playerX','3261474mnSVJE','657174enJuYh','reverse','render','18OCyInw','5169080gKfgnN','padStart','518660ayhyBF','currentTurn','2VJVMsU','387808pWKlnr','board','invalid\x20position','check','enemyTurn','playerO','24aNGnYc','651005lcpjki','732426SNWecC'];_0x3c41=function(){return _0x2beceb;};return _0x3c41();}function _0xe973(_0x47f8fb,_0x18089e){const _0x3c415b=_0x3c41();return _0xe973=function(_0xe9738b,_0x11f891){_0xe9738b=_0xe9738b-0x1d6;let _0x38b5f5=_0x3c415b[_0xe9738b];return _0x38b5f5;},_0xe973(_0x47f8fb,_0x18089e);}class TicTacToe{constructor(_0x11152d='x',_0x3353d8='o'){const _0x3cacf6=_0xe973;this[_0x3cacf6(0x1ea)]=_0x11152d,this[_0x3cacf6(0x1e2)]=_0x3353d8,this[_0x3cacf6(0x1e8)]=![],this['_x']=0x0,this['_o']=0x0,this['turns']=0x0;}get[_0x56a31b(0x1de)](){return this['_x']|this['_o'];}get[_0x56a31b(0x1db)](){const _0x30e44a=_0x56a31b;return this[_0x30e44a(0x1e8)]?this['playerO']:this[_0x30e44a(0x1ea)];}get[_0x56a31b(0x1e1)](){const _0x1cdb11=_0x56a31b;return this['_currentTurn']?this[_0x1cdb11(0x1ea)]:this[_0x1cdb11(0x1e2)];}static[_0x56a31b(0x1e0)](_0x357510){for(let _0x10e617 of[0x7,0x38,0x49,0x54,0x92,0x111,0x124,0x1c0])if((_0x357510&_0x10e617)===_0x10e617)return!0x0;return!0x1;}static[_0x56a31b(0x1e9)](_0x11625e=0x0,_0x3fe268=0x0){const _0x3826e0=_0x56a31b;if(_0x11625e<0x0||_0x11625e>0x2||_0x3fe268<0x0||_0x3fe268>0x2)throw new Error(_0x3826e0(0x1df));return 0x1<<_0x11625e+0x3*_0x3fe268;}['turn'](_0x258029=0x0,_0x1b545f=0x0,_0xcab458){const _0x119b92=_0x56a31b;if(this[_0x119b92(0x1de)]===0x1ff)return-0x3;let _0x540ca2=0x0;if(_0xcab458==null){if(_0x1b545f<0x0||_0x1b545f>0x8)return-0x1;_0x540ca2=0x1<<_0x1b545f;}else{if(_0x1b545f<0x0||_0x1b545f>0x2||_0xcab458<0x0||_0xcab458>0x2)return-0x1;_0x540ca2=TicTacToe[_0x119b92(0x1e9)](_0x1b545f,_0xcab458);}if(this[_0x119b92(0x1e8)]^_0x258029)return-0x2;if(this['board']&_0x540ca2)return 0x0;return this[this['_currentTurn']?'_o':'_x']|=_0x540ca2,this[_0x119b92(0x1e8)]=!this[_0x119b92(0x1e8)],this['turns']++,0x1;}static[_0x56a31b(0x1d6)](_0x219a4f=0x0,_0xc35969=0x0){const _0x765849=_0x56a31b;let _0x1b937a=parseInt(_0x219a4f[_0x765849(0x1e6)](0x2),0x4),_0x30b363=parseInt(_0xc35969[_0x765849(0x1e6)](0x2),0x4)*0x2;return[...(_0x1b937a+_0x30b363)[_0x765849(0x1e6)](0x4)[_0x765849(0x1d9)](0x9,'0')][_0x765849(0x1ed)]()['map']((_0x5509e6,_0x52bbe1)=>_0x5509e6==0x1?'X':_0x5509e6==0x2?'O':++_0x52bbe1);}[_0x56a31b(0x1d6)](){const _0x4a61ee=_0x56a31b;return TicTacToe[_0x4a61ee(0x1d6)](this['_x'],this['_o']);}get['winner'](){const _0x17f79f=_0x56a31b;let _0x2be51a=TicTacToe[_0x17f79f(0x1e0)](this['_x']),_0x4cda39=TicTacToe['check'](this['_o']);return _0x2be51a?this[_0x17f79f(0x1ea)]:_0x4cda39?this[_0x17f79f(0x1e2)]:![];}}new TicTacToe()[_0x56a31b(0x1e7)];export default TicTacToe;