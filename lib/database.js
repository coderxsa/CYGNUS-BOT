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

const _0x7640e=_0x3ce3;(function(_0x1979c5,_0x5c51fd){const _0x21cba9=_0x3ce3,_0x276208=_0x1979c5();while(!![]){try{const _0x396ff1=-parseInt(_0x21cba9(0x1d7))/0x1+parseInt(_0x21cba9(0x1de))/0x2*(-parseInt(_0x21cba9(0x1e3))/0x3)+-parseInt(_0x21cba9(0x1db))/0x4+parseInt(_0x21cba9(0x1d2))/0x5+parseInt(_0x21cba9(0x1d1))/0x6*(-parseInt(_0x21cba9(0x1e5))/0x7)+-parseInt(_0x21cba9(0x1d6))/0x8+parseInt(_0x21cba9(0x1e1))/0x9;if(_0x396ff1===_0x5c51fd)break;else _0x276208['push'](_0x276208['shift']());}catch(_0x11878c){_0x276208['push'](_0x276208['shift']());}}}(_0x3092,0xe2be8));function _0x3ce3(_0x44dae0,_0x48a958){const _0x3092e4=_0x3092();return _0x3ce3=function(_0x3ce3df,_0x4bb62f){_0x3ce3df=_0x3ce3df-0x1ce;let _0x267fb9=_0x3092e4[_0x3ce3df];return _0x267fb9;},_0x3ce3(_0x44dae0,_0x48a958);}import{resolve,dirname as _0x157285}from'path';import _0x2443e7,{existsSync,readFileSync}from'fs';const {promises:fs}=_0x2443e7;class Database{constructor(_0x5b2c5a,..._0xf61d31){const _0x577c62=_0x3ce3;this[_0x577c62(0x1ce)]=resolve(_0x5b2c5a),this[_0x577c62(0x1d4)]=console,this[_0x577c62(0x1d5)](),this['_jsonargs']=_0xf61d31,this['_state']=![],this[_0x577c62(0x1d8)]=[],this[_0x577c62(0x1d3)]=setInterval(async()=>{const _0x3779b3=_0x577c62;!this[_0x3779b3(0x1e6)]&&this[_0x3779b3(0x1d8)]&&this[_0x3779b3(0x1d8)][0x0]&&(this['_state']=!![],await this[this['_queue'][_0x3779b3(0x1e4)]()]()['catch'](this[_0x3779b3(0x1d4)][_0x3779b3(0x1cf)]),this[_0x3779b3(0x1e6)]=![]);},0x3e8);}get[_0x7640e(0x1dc)](){const _0x2c8ae8=_0x7640e;return this[_0x2c8ae8(0x1e2)];}set[_0x7640e(0x1dc)](_0x1269ca){const _0x3f3032=_0x7640e;this['_data']=_0x1269ca,this[_0x3f3032(0x1e0)]();}[_0x7640e(0x1d9)](){const _0x18bce1=_0x7640e;this[_0x18bce1(0x1d8)][_0x18bce1(0x1d0)](_0x18bce1(0x1d5));}[_0x7640e(0x1e0)](){const _0x40f943=_0x7640e;this['_queue'][_0x40f943(0x1d0)](_0x40f943(0x1e7));}[_0x7640e(0x1d5)](){const _0x5d6b43=_0x7640e;try{return this['_data']=existsSync(this[_0x5d6b43(0x1ce)])?JSON['parse'](readFileSync(this[_0x5d6b43(0x1ce)])):{};}catch(_0x5677e7){return this['logger']['error'](_0x5677e7),this['_data']={};}}async[_0x7640e(0x1e7)](){const _0x111fa5=_0x7640e;let _0x1da6c2=_0x157285(this['file']);if(!existsSync(_0x1da6c2))await fs[_0x111fa5(0x1da)](_0x1da6c2,{'recursive':!![]});return await fs['writeFile'](this[_0x111fa5(0x1ce)],JSON[_0x111fa5(0x1dd)](this['_data'],...this[_0x111fa5(0x1df)])),this[_0x111fa5(0x1ce)];}}export default Database;function _0x3092(){const _0x1ead23=['logger','_load','7058560VFqHiZ','635848duECPc','_queue','load','mkdir','1574232JsyfMf','data','stringify','72kJyivC','_jsonargs','save','21354831fLVFVc','_data','26529EEEMQX','shift','325563sFtDWf','_state','_save','file','error','push','18qMkOae','4627930KUqgpa','_interval'];_0x3092=function(){return _0x1ead23;};return _0x3092();}