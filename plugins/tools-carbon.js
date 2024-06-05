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

function _0x5a08(_0x37040b,_0x22cbd4){const _0x3f302c=_0x3f30();return _0x5a08=function(_0x5a0894,_0x3a2d3c){_0x5a0894=_0x5a0894-0x1c6;let _0x35c73e=_0x3f302c[_0x5a0894];return _0x35c73e;},_0x5a08(_0x37040b,_0x22cbd4);}const _0x6e2d37=_0x5a08;(function(_0x35f000,_0x313198){const _0x16638f=_0x5a08,_0xcca8f5=_0x35f000();while(!![]){try{const _0x481fb4=-parseInt(_0x16638f(0x1dd))/0x1*(parseInt(_0x16638f(0x1cb))/0x2)+parseInt(_0x16638f(0x1c6))/0x3*(parseInt(_0x16638f(0x1c7))/0x4)+parseInt(_0x16638f(0x1cc))/0x5+parseInt(_0x16638f(0x1df))/0x6*(-parseInt(_0x16638f(0x1d5))/0x7)+-parseInt(_0x16638f(0x1e1))/0x8*(parseInt(_0x16638f(0x1cd))/0x9)+parseInt(_0x16638f(0x1de))/0xa+parseInt(_0x16638f(0x1d7))/0xb;if(_0x481fb4===_0x313198)break;else _0xcca8f5['push'](_0xcca8f5['shift']());}catch(_0x553b1a){_0xcca8f5['push'](_0xcca8f5['shift']());}}}(_0x3f30,0x687fe));function _0x3f30(){const _0xe0c0a5=['help','code.png','Please\x20provide\x20some\x20text\x20to\x20generate\x20the\x20code\x20image.','2WeHJaI','1567800hSNZok','1116279QFyTQu','stringify','buffer','#1F816D','sendFile','reply','Failed\x20to\x20generate\x20the\x20code\x20image.','POST','1737260oRqNFq','join','9437450fDFkCl','chat','.carbon\x20<code>','application/json','https://carbonara.solopov.dev/api/cook','tools','698606IfFGlX','4934270VzrOhf','6VCQmDd','command','24pusVux','6831LsMoft','144hPWmCq'];_0x3f30=function(){return _0xe0c0a5;};return _0x3f30();}import _0x68a42 from'node-fetch';let handler=async(_0x299eb2,{conn:_0x1c47b7,args:_0x12ddd1})=>{const _0x5004ec=_0x5a08;if(!_0x12ddd1[0x0])return _0x1c47b7[_0x5004ec(0x1d2)](_0x299eb2[_0x5004ec(0x1d8)],_0x5004ec(0x1ca),_0x299eb2);let _0x22aeef=_0x12ddd1[_0x5004ec(0x1d6)]('\x20');try{let _0x41b82f=await _0x68a42(_0x5004ec(0x1db),{'method':_0x5004ec(0x1d4),'headers':{'Content-Type':_0x5004ec(0x1da)},'body':JSON[_0x5004ec(0x1ce)]({'code':_0x22aeef,'backgroundColor':_0x5004ec(0x1d0)})});if(!_0x41b82f['ok'])throw new Error(_0x5004ec(0x1d3));let _0x16f741=await _0x41b82f[_0x5004ec(0x1cf)]();_0x1c47b7[_0x5004ec(0x1d1)](_0x299eb2[_0x5004ec(0x1d8)],_0x16f741,_0x5004ec(0x1c9),'Here\x20is\x20the\x20code\x20image:',_0x299eb2);}catch(_0x43a4d1){console['error'](_0x43a4d1),_0x1c47b7[_0x5004ec(0x1d2)](_0x299eb2[_0x5004ec(0x1d8)],'An\x20error\x20occurred\x20while\x20generating\x20the\x20code\x20image.',_0x299eb2);}};handler[_0x6e2d37(0x1c8)]=[_0x6e2d37(0x1d9)],handler['tags']=[_0x6e2d37(0x1dc)],handler[_0x6e2d37(0x1e0)]=/^carbon$/i;export default handler;