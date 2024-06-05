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

const _0x4c30a4=_0x164c;function _0x3c92(){const _0x57c3ae=['🔢\x20Only\x20numbers\x20are\x20allowed.','quoted','sendMessage','length\x20<amount>','test','1094935ZWTuYg','⚠️️\x20Unsupported\x20format.','21968vQWvgt','sender','6qxyALV','243RADKYw','10BifQpn','help','2348066DugwSJ','1041236kzpyCD','Here\x20you\x20go','tags','command','3244020KLaSEo','download','msg','⚠️️\x20Enter\x20the\x20new\x20file\x20size\x20for\x20the\x20image/video.','34689cGbYDg','264352AyPJBk','tools','⚠️️\x20Reply\x20to\x20an\x20image\x20or\x20video.'];_0x3c92=function(){return _0x57c3ae;};return _0x3c92();}(function(_0x2175ed,_0x9e037f){const _0x3c9b5f=_0x164c,_0x580b86=_0x2175ed();while(!![]){try{const _0x5574db=parseInt(_0x3c9b5f(0xc0))/0x1+parseInt(_0x3c9b5f(0xb4))/0x2*(-parseInt(_0x3c9b5f(0xbf))/0x3)+-parseInt(_0x3c9b5f(0xb7))/0x4+-parseInt(_0x3c9b5f(0xae))/0x5+parseInt(_0x3c9b5f(0xb2))/0x6*(parseInt(_0x3c9b5f(0xb6))/0x7)+parseInt(_0x3c9b5f(0xb0))/0x8*(-parseInt(_0x3c9b5f(0xb3))/0x9)+parseInt(_0x3c9b5f(0xbb))/0xa;if(_0x5574db===_0x9e037f)break;else _0x580b86['push'](_0x580b86['shift']());}catch(_0x25751a){_0x580b86['push'](_0x580b86['shift']());}}}(_0x3c92,0x4c66b));import _0x331409 from'../lib/uploadImage.js';import _0x31a36e from'node-fetch';let handler=async(_0x456f3f,{conn:_0x34caf2,usedPrefix:_0x53b694,command:_0x458b24,args:_0x1b11a8,text:_0x4e67e0})=>{const _0x597295=_0x164c;let _0x567db5=_0x456f3f[_0x597295(0xc4)]?_0x456f3f[_0x597295(0xc4)]:_0x456f3f,_0x8199cc=(_0x567db5[_0x597295(0xbd)]||_0x567db5)['mimetype']||'';if(!_0x8199cc)throw _0x597295(0xc2);if(!_0x4e67e0)throw _0x597295(0xbe);if(isNaN(_0x4e67e0))throw _0x597295(0xc3);if(!/image\/(jpe?g|png)|video|document/[_0x597295(0xad)](_0x8199cc))throw _0x597295(0xaf);let _0x1bed5d=await _0x567db5[_0x597295(0xbc)](),_0x2eed7b=await _0x331409(_0x1bed5d);if(/image\/(jpe?g|png)/['test'](_0x8199cc))_0x34caf2[_0x597295(0xc5)](_0x456f3f['chat'],{'image':{'url':_0x2eed7b},'caption':_0x597295(0xb8),'fileLength':''+_0x4e67e0,'mentions':[_0x456f3f[_0x597295(0xb1)]]},{'ephemeralExpiration':0x18*0xe10,'quoted':_0x456f3f});else{if(/video/['test'](_0x8199cc))return _0x34caf2[_0x597295(0xc5)](_0x456f3f['chat'],{'video':{'url':_0x2eed7b},'caption':'Here\x20you\x20go','fileLength':''+_0x4e67e0,'mentions':[_0x456f3f[_0x597295(0xb1)]]},{'ephemeralExpiration':0x18*0xe10,'quoted':_0x456f3f});}};handler[_0x4c30a4(0xb9)]=[_0x4c30a4(0xc1)],handler[_0x4c30a4(0xb5)]=[_0x4c30a4(0xac)],handler[_0x4c30a4(0xba)]=/^(length|filelength|edittamaño|totamaño|tamaño)$/i;function _0x164c(_0x3f8d37,_0x143e9f){const _0x3c924d=_0x3c92();return _0x164c=function(_0x164c6f,_0x439d88){_0x164c6f=_0x164c6f-0xac;let _0x12059a=_0x3c924d[_0x164c6f];return _0x12059a;},_0x164c(_0x3f8d37,_0x143e9f);}export default handler;