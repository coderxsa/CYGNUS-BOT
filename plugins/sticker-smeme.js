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

const _0x28d248=_0x43c5;(function(_0x1087e2,_0x7a057c){const _0x13bc03=_0x43c5,_0x1051d5=_0x1087e2();while(!![]){try{const _0x5b1fce=-parseInt(_0x13bc03(0x1de))/0x1+-parseInt(_0x13bc03(0x1c5))/0x2*(parseInt(_0x13bc03(0x1c0))/0x3)+-parseInt(_0x13bc03(0x1c7))/0x4+-parseInt(_0x13bc03(0x1c6))/0x5*(-parseInt(_0x13bc03(0x1c1))/0x6)+parseInt(_0x13bc03(0x1d6))/0x7*(-parseInt(_0x13bc03(0x1ce))/0x8)+parseInt(_0x13bc03(0x1cd))/0x9*(parseInt(_0x13bc03(0x1c8))/0xa)+parseInt(_0x13bc03(0x1d4))/0xb;if(_0x5b1fce===_0x7a057c)break;else _0x1051d5['push'](_0x1051d5['shift']());}catch(_0x1afa48){_0x1051d5['push'](_0x1051d5['shift']());}}}(_0xd4fd,0xa0d8a));import _0x237184 from'../lib/uploadFile.js';function _0x43c5(_0x2967c2,_0x68d463){const _0xd4fda3=_0xd4fd();return _0x43c5=function(_0x43c530,_0x4c91f7){_0x43c530=_0x43c530-0x1be;let _0x236a92=_0xd4fda3[_0x43c530];return _0x236a92;},_0x43c5(_0x2967c2,_0x68d463);}import _0x460385 from'../lib/uploadImage.js';import{webp2png}from'../lib/webp2mp4.js';import{Sticker,StickerTypes}from'wa-sticker-formatter';import{sticker}from'../lib/sticker.js';let handler=async(_0xb804a1,{conn:_0x4d9d71,args:_0x5ac4a8,text:_0x2f5b4c,usedPrefix:_0x1c30fa,command:_0x1f92c5})=>{const _0x1e3f7c=_0x43c5;var _0x25bcbf;let _0x13e799=_0xb804a1[_0x1e3f7c(0x1bf)]&&_0xb804a1[_0x1e3f7c(0x1bf)][0x0]?_0xb804a1['mentionedJid'][0x0]:_0xb804a1[_0x1e3f7c(0x1d7)]?_0x4d9d71[_0x1e3f7c(0x1c9)][_0x1e3f7c(0x1e2)]:_0xb804a1[_0x1e3f7c(0x1cb)],_0x5d454f=await _0x4d9d71[_0x1e3f7c(0x1dc)](_0x13e799),[_0x4eb28b,_0x17a8d5]=_0x2f5b4c['split'](/[^\w\s]/g),_0xe16608=_0xb804a1[_0x1e3f7c(0x1db)]?_0xb804a1[_0x1e3f7c(0x1db)]:_0xb804a1,_0x4d47ee=(_0xe16608[_0x1e3f7c(0x1e1)]||_0xe16608)[_0x1e3f7c(0x1d5)]||_0xe16608[_0x1e3f7c(0x1d8)]||'';if(/video/g[_0x1e3f7c(0x1d0)](_0x4d47ee)){if((_0xe16608[_0x1e3f7c(0x1e1)]||_0xe16608)['seconds']>0xb)return _0xb804a1[_0x1e3f7c(0x1ca)](_0x1e3f7c(0x1d1));}if(!/webp|image|video|gif|viewOnce/g[_0x1e3f7c(0x1d0)](_0x4d47ee))return _0xb804a1[_0x1e3f7c(0x1ca)]('Reply\x20to\x20media\x20with\x20the\x20command\x0a\x0a'+(_0x1c30fa+_0x1f92c5)+'\x20<'+(_0x4eb28b?_0x4eb28b:'top\x20text')+_0x1e3f7c(0x1cc)+(_0x17a8d5?_0x17a8d5:'bottom\x20text')+'>');let _0xb69c96=await _0xe16608[_0x1e3f7c(0x1d3)]?.(),_0x3776b8=_0x1e3f7c(0x1dd)+encodeURIComponent(_0x4eb28b?_0x4eb28b:'_')+'/'+encodeURIComponent(_0x17a8d5?_0x17a8d5:'_')+_0x1e3f7c(0x1d9);if(/webp/g['test'](_0x4d47ee))_0x25bcbf=await createSticker(_0x3776b8+await webp2png(_0xb69c96),![],packname,_0x5d454f,0x3c);else{if(/image/g[_0x1e3f7c(0x1d0)](_0x4d47ee))_0x25bcbf=await createSticker(_0x3776b8+await _0x460385(_0xb69c96),![],packname,_0x5d454f,0x3c);else{if(/video/g[_0x1e3f7c(0x1d0)](_0x4d47ee))_0x25bcbf=await sticker(_0x3776b8+await _0x237184(_0xb69c96),![],packname,_0x5d454f);else{if(/gif/g[_0x1e3f7c(0x1d0)](_0x4d47ee))_0x25bcbf=await createSticker(_0x3776b8+await _0x237184(_0xb69c96),![],packname,_0x5d454f,0x3c);else/viewOnce/g[_0x1e3f7c(0x1d0)](_0x4d47ee)&&(_0x25bcbf=await createSticker(_0x3776b8+await _0x237184(_0xb69c96),![],packname,_0x5d454f,0x3c));}}}_0xb804a1['reply'](wait);if(_0x25bcbf)_0xb804a1[_0x1e3f7c(0x1ca)](_0x25bcbf);else throw error;};handler[_0x28d248(0x1be)]=['stickerwithmeme\x20(caption|reply\x20media)',_0x28d248(0x1e3),_0x28d248(0x1c2)],handler[_0x28d248(0x1d2)]=[_0x28d248(0x1c3)],handler[_0x28d248(0x1df)]=/^s(ti(ck(er)?|ker)meme|m(eme|i?m))$/i;function _0xd4fd(){const _0x2d4f26=['help','mentionedJid','3WvZjls','1338sGriuJ','swm(caption|reply\x20media)','sticker','FULL','1021120MdKqfR','27655QVNAPN','4975620cjCxqz','33430rIHwZx','user','reply','sender','>|<','450EDHINf','24eGcYsX','match','test','Maximum\x2010\x20seconds!','tags','download','17603630EmEBwy','mimetype','1179731LmUgMw','fromMe','mediaType','.png?background=','toBuffer','quoted','getName','https://api.memegen.link/images/custom/','82003QRxdxP','command','CROPPED','msg','jid','swmeme\x20<url>'];_0xd4fd=function(){return _0x2d4f26;};return _0xd4fd();}export default handler;const isUrl=_0x38b0ea=>{const _0x353a84=_0x28d248;return _0x38b0ea[_0x353a84(0x1cf)](new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/,'gi'));};async function createSticker(_0x511c74,_0x2ac919,_0x3a2e65,_0x21ff16,_0x256b3d){const _0xe2cc3c=_0x28d248;let _0x19ac1f={'type':StickerTypes[_0xe2cc3c(0x1c4)],'pack':_0x3a2e65,'author':_0x21ff16,'quality':_0x256b3d};return new Sticker(_0x511c74?_0x511c74:_0x2ac919,_0x19ac1f)[_0xe2cc3c(0x1da)]();}async function createStickerV(_0x203e2d,_0x4c6c82,_0x3e858d,_0x39542c,_0x4ab25b){const _0x3ab481=_0x28d248;let _0x2bf448={'type':StickerTypes[_0x3ab481(0x1e0)],'pack':_0x3e858d,'author':_0x39542c,'quality':_0x4ab25b};return new Sticker(_0x203e2d?_0x203e2d:_0x4c6c82,_0x2bf448)['toBuffer']();}