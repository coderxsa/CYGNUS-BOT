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

const _0x15ad3c=_0x16ca;function _0x16ca(_0x1deafa,_0x38da83){const _0x490b72=_0x490b();return _0x16ca=function(_0x16caa9,_0x108fc5){_0x16caa9=_0x16caa9-0x16c;let _0x275b63=_0x490b72[_0x16caa9];return _0x275b63;},_0x16ca(_0x1deafa,_0x38da83);}(function(_0x22e987,_0x686d80){const _0x2844bd=_0x16ca,_0x473119=_0x22e987();while(!![]){try{const _0x5ab6d0=-parseInt(_0x2844bd(0x175))/0x1+-parseInt(_0x2844bd(0x189))/0x2+parseInt(_0x2844bd(0x185))/0x3*(parseInt(_0x2844bd(0x17e))/0x4)+-parseInt(_0x2844bd(0x174))/0x5*(parseInt(_0x2844bd(0x188))/0x6)+-parseInt(_0x2844bd(0x172))/0x7*(parseInt(_0x2844bd(0x17d))/0x8)+parseInt(_0x2844bd(0x177))/0x9*(-parseInt(_0x2844bd(0x16f))/0xa)+parseInt(_0x2844bd(0x178))/0xb;if(_0x5ab6d0===_0x686d80)break;else _0x473119['push'](_0x473119['shift']());}catch(_0x48b1d7){_0x473119['push'](_0x473119['shift']());}}}(_0x490b,0x85640));import _0x49dfad from'mongoose';_0x49dfad[_0x15ad3c(0x17c)]('strictQuery',![]);function _0x490b(){const _0x69a89f=['6172lXPvBo','_schema','MongoDB\x20connected','then','options','conn','log','1293vodUEM','read','url','1934370pVeJkr','1112530UsQyFX','write','findById','all','559330cNAEyt','data','catch','14fwBIiG','_model','10KbTKzt','572000fmIAcD','_data','90DNlVyq','34477454iyYYHQ','findOne','_id','error','set','3682376KadONl'];_0x490b=function(){return _0x69a89f;};return _0x490b();}const {Schema,connect,model:_model}=_0x49dfad,defaultOptions={'useNewUrlParser':!![],'useUnifiedTopology':!![]};export class MongoDB{constructor(_0x284f6b,_0x10aec2=defaultOptions){const _0xfbaa04=_0x15ad3c;this[_0xfbaa04(0x187)]=_0x284f6b,this[_0xfbaa04(0x182)]=_0x10aec2,this[_0xfbaa04(0x170)]=this[_0xfbaa04(0x176)]={},this[_0xfbaa04(0x17f)]={},this[_0xfbaa04(0x173)]={},this['db']=connect(this[_0xfbaa04(0x187)],{...this[_0xfbaa04(0x182)]})[_0xfbaa04(0x181)](_0x4c2971=>{const _0x49b387=_0xfbaa04;return console[_0x49b387(0x184)](_0x49b387(0x180)),_0x4c2971;})[_0xfbaa04(0x171)](console[_0xfbaa04(0x17b)]);}async[_0x15ad3c(0x186)](){const _0x558c2=_0x15ad3c;this[_0x558c2(0x183)]=await this['db'];let _0x5dc7b0=this[_0x558c2(0x17f)]=new Schema({'data':{'type':Object,'required':!![],'default':{}}});try{this[_0x558c2(0x173)]=_model(_0x558c2(0x170),_0x5dc7b0);}catch{this[_0x558c2(0x173)]=_model('data');}this[_0x558c2(0x176)]=await this[_0x558c2(0x173)]['findOne']({});if(!this[_0x558c2(0x176)]){this['data']={};const [_0x161436,_0x4840db]=await Promise[_0x558c2(0x16e)]([this['write'](this[_0x558c2(0x170)]),this[_0x558c2(0x173)][_0x558c2(0x179)]({})]);this[_0x558c2(0x176)]=_0x4840db;}else this[_0x558c2(0x170)]=this['_data'][_0x558c2(0x170)];return this[_0x558c2(0x170)];}[_0x15ad3c(0x16c)](_0x4bd8d8){return new Promise(async(_0x106b28,_0x29be38)=>{const _0x211fe=_0x16ca;if(!_0x4bd8d8)return _0x29be38(_0x4bd8d8);try{if(!this['_data']){const _0x149d6c=new this[(_0x211fe(0x173))]({'data':_0x4bd8d8}),_0x5b3dc1=await _0x149d6c['save']();this[_0x211fe(0x176)]=_0x5b3dc1;}else{const _0x547a41=await this[_0x211fe(0x173)][_0x211fe(0x16d)](this[_0x211fe(0x176)][_0x211fe(0x17a)]);if(!_0x547a41[_0x211fe(0x170)])_0x547a41[_0x211fe(0x170)]={};_0x547a41[_0x211fe(0x170)]=_0x4bd8d8;const _0x241ded=await _0x547a41['save']();this[_0x211fe(0x176)]=_0x241ded;}this[_0x211fe(0x170)]={},_0x106b28(!![]);}catch(_0x134c8f){_0x29be38(_0x134c8f);}});}}