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

const _0x2f02b7=_0x374d;(function(_0xbd2f30,_0x1cf460){const _0x27d211=_0x374d,_0x4888b3=_0xbd2f30();while(!![]){try{const _0x46fcff=-parseInt(_0x27d211(0x70))/0x1*(parseInt(_0x27d211(0x6e))/0x2)+-parseInt(_0x27d211(0x9b))/0x3+-parseInt(_0x27d211(0x74))/0x4+parseInt(_0x27d211(0x8c))/0x5+-parseInt(_0x27d211(0xa1))/0x6+parseInt(_0x27d211(0x99))/0x7*(parseInt(_0x27d211(0x75))/0x8)+-parseInt(_0x27d211(0x8d))/0x9*(-parseInt(_0x27d211(0xa0))/0xa);if(_0x46fcff===_0x1cf460)break;else _0x4888b3['push'](_0x4888b3['shift']());}catch(_0x20b990){_0x4888b3['push'](_0x4888b3['shift']());}}}(_0x7f3f,0xf2eba));import _0x347c3a from'node-fetch';import{Sticker,createSticker,StickerTypes}from'wa-sticker-formatter';import _0x26a7f5 from'fs';import _0x5ea1de from'os';function _0x7f3f(){const _0x4ee641=['unlinkSync','10AOpkcD','6654732wYkcfT','chat','Failed\x20to\x20fetch:\x20','tags','quote','image','12sKtJpj','tmpdir','317113gAoYHL','sendFile','floor','Please\x20provide\x20some\x20text\x20or\x20quote\x20a\x20message\x20to\x20get\x20a\x20response.','4289196FkLjZs','3762256BDwuUz','✳️\x20The\x20user\x20is\x20not\x20found\x20in\x20my\x20database','Error\x20sending\x20sticker:','base64','join','mentionedJid','catch','fun','quoted','command','toMessage','Here\x20is\x20the\x20quote\x20image:','reply','users','random','sender','react','Unexpected\x20response\x20structure','Error\x20sending\x20sticker.\x20Sending\x20image\x20instead.','json','result','profilePictureUrl','packname','7888005XWxkVA','33744051ZzWNAQ','text','statusText','#FFFFFF','from','stringify','POST','fromMe','sendMessage','https://raw.githubusercontent.com/coderxsa/WABot/main/WA-BOT/cdn/images/logo.png','error','writeFileSync','14YSFqmy','https://bot.lyo.su/quote/generate','3565209FsnJpB','#00000000','quote.png','user'];_0x7f3f=function(){return _0x4ee641;};return _0x7f3f();}import _0x100eb2 from'path';let handler=async(_0x3f02b9,{conn:_0x2ab46c,text:_0x2e487a})=>{const _0x3545e4=_0x374d;try{if(!_0x2e487a&&!(_0x3f02b9['quoted']&&_0x3f02b9[_0x3545e4(0x7d)][_0x3545e4(0x8e)]))throw _0x3545e4(0x73);!_0x2e487a&&_0x3f02b9[_0x3545e4(0x7d)]&&_0x3f02b9[_0x3545e4(0x7d)][_0x3545e4(0x8e)]&&(_0x2e487a=_0x3f02b9['quoted'][_0x3545e4(0x8e)]);let _0x2e32d8=_0x3f02b9[_0x3545e4(0x7d)]?_0x3f02b9['quoted'][_0x3545e4(0x84)]:_0x3f02b9[_0x3545e4(0x7a)]&&_0x3f02b9[_0x3545e4(0x7a)][0x0]?_0x3f02b9['mentionedJid'][0x0]:_0x3f02b9[_0x3545e4(0x94)]?_0x2ab46c[_0x3545e4(0x9e)]['jid']:_0x3f02b9['sender'];if(!(_0x2e32d8 in global['db']['data'][_0x3545e4(0x82)]))throw _0x3545e4(0x76);let _0x3ac723=await _0x2ab46c[_0x3545e4(0x8a)](_0x2e32d8,_0x3545e4(0xa6))[_0x3545e4(0x7b)](_0xe16341=>_0x3545e4(0x96)),_0x3a6d28=global['db']['data'][_0x3545e4(0x82)][_0x2e32d8],{name:_0x57ef5a}=global['db']['data'][_0x3545e4(0x82)][_0x2e32d8];_0x3f02b9['react'](rwait);let _0x43bb50={'type':_0x3545e4(0xa5),'format':'png','backgroundColor':_0x3545e4(0x90),'width':0x708,'height':0xc8,'scale':0x2,'messages':[{'entities':[],'avatar':!![],'from':{'id':0x1,'name':_0x57ef5a,'photo':{'url':_0x3ac723}},'text':_0x2e487a,'replyMessage':{}}]},_0x31ebb1=await _0x347c3a(_0x3545e4(0x9a),{'method':_0x3545e4(0x93),'body':JSON[_0x3545e4(0x92)](_0x43bb50),'headers':{'Content-Type':'application/json'}});if(!_0x31ebb1['ok'])throw new Error(_0x3545e4(0xa3)+_0x31ebb1['status']+'\x20'+_0x31ebb1[_0x3545e4(0x8f)]);let _0x254906=await _0x31ebb1[_0x3545e4(0x88)]();if(!_0x254906[_0x3545e4(0x89)]||!_0x254906[_0x3545e4(0x89)][_0x3545e4(0xa6)])throw new Error(_0x3545e4(0x86));function _0x936b0(){const _0x231189=_0x3545e4;return Math[_0x231189(0x72)](0x186a0+Math[_0x231189(0x83)]()*0xdbba0);}let _0x1ce4ad=Buffer[_0x3545e4(0x91)](_0x254906[_0x3545e4(0x89)][_0x3545e4(0xa6)],_0x3545e4(0x78)),_0x59a3de=_0x100eb2[_0x3545e4(0x79)](_0x5ea1de[_0x3545e4(0x6f)](),'tempImage.png');_0x26a7f5[_0x3545e4(0x98)](_0x59a3de,_0x1ce4ad);let _0x5203d7=new Sticker(_0x59a3de,{'pack':global[_0x3545e4(0x8b)],'author':_0x57ef5a,'type':StickerTypes['FULL'],'categories':['🤩','🎉'],'id':_0x936b0(),'quality':0x64,'background':_0x3545e4(0x9c)});try{await _0x2ab46c[_0x3545e4(0x95)](_0x3f02b9['chat'],await _0x5203d7[_0x3545e4(0x7f)](),{'quoted':_0x3f02b9});}catch(_0x1f2b02){console[_0x3545e4(0x97)](_0x3545e4(0x77),_0x1f2b02),_0x3f02b9[_0x3545e4(0x81)](_0x3545e4(0x87)),await _0x2ab46c[_0x3545e4(0x71)](_0x3f02b9[_0x3545e4(0xa2)],_0x59a3de,_0x3545e4(0x9d),_0x3545e4(0x80),_0x3f02b9);}_0x26a7f5[_0x3545e4(0x9f)](_0x59a3de),_0x3f02b9[_0x3545e4(0x85)]('🤡');}catch(_0x300299){console[_0x3545e4(0x97)](_0x300299),_0x3f02b9['react']('😭');}};handler['help']=[_0x2f02b7(0xa5)],handler[_0x2f02b7(0xa4)]=[_0x2f02b7(0x7c)],handler[_0x2f02b7(0x7e)]=[_0x2f02b7(0xa5)];function _0x374d(_0x1e3515,_0x56c8e7){const _0x7f3f57=_0x7f3f();return _0x374d=function(_0x374d12,_0x11e8c8){_0x374d12=_0x374d12-0x6e;let _0x17f347=_0x7f3f57[_0x374d12];return _0x17f347;},_0x374d(_0x1e3515,_0x56c8e7);}export default handler;