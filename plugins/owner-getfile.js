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

const _0x132437=_0x2854;(function(_0x4a4890,_0x482dd5){const _0x119eca=_0x2854,_0x5b700e=_0x4a4890();while(!![]){try{const _0x44c7e9=-parseInt(_0x119eca(0x99))/0x1+-parseInt(_0x119eca(0x93))/0x2*(parseInt(_0x119eca(0x88))/0x3)+-parseInt(_0x119eca(0x95))/0x4*(-parseInt(_0x119eca(0x9b))/0x5)+parseInt(_0x119eca(0x9a))/0x6*(-parseInt(_0x119eca(0x97))/0x7)+-parseInt(_0x119eca(0x98))/0x8+-parseInt(_0x119eca(0x82))/0x9+parseInt(_0x119eca(0x7d))/0xa;if(_0x44c7e9===_0x482dd5)break;else _0x5b700e['push'](_0x5b700e['shift']());}catch(_0x59c520){_0x5b700e['push'](_0x5b700e['shift']());}}}(_0x24fe,0x5b875));function _0x2854(_0x2fd328,_0x5452c1){const _0x24fec1=_0x24fe();return _0x2854=function(_0x28543f,_0x2cd22f){_0x28543f=_0x28543f-0x7a;let _0x4bb580=_0x24fec1[_0x28543f];return _0x4bb580;},_0x2854(_0x2fd328,_0x5452c1);}import _0x45e948 from'fs';import _0x3879a8 from'syntax-error';import _0x59b57b from'path';const _fs=_0x45e948[_0x132437(0x8f)];let handler=async(_0x426820,{text:_0x1f337c,usedPrefix:_0x46fb55,command:_0x12ea91,__dirname:_0x367893})=>{const _0xe68da=_0x132437;if(!_0x1f337c)throw(_0xe68da(0x84)+(_0x46fb55+_0x12ea91)+_0xe68da(0x7f)+_0x46fb55+_0xe68da(0x80)+_0x46fb55+_0xe68da(0x86))[_0xe68da(0x87)]();if(/p(lugin)?/i[_0xe68da(0x96)](_0x12ea91)){const _0x286453=_0x1f337c['replace'](/plugin(s)\//i,'')+(/\.js$/i['test'](_0x1f337c)?'':_0xe68da(0x91)),_0x406d58=_0x59b57b[_0xe68da(0x92)](_0x367893,_0x286453),_0xede984=await _fs['readFile'](_0x406d58,'utf8');_0x426820[_0xe68da(0x94)](_0xede984);const _0x19a09d=_0x3879a8(_0xede984,_0x286453,{'sourceType':_0xe68da(0x85),'allowReturnOutsideFunction':!![],'allowAwaitOutsideFunction':!![]});_0x19a09d&&await _0x426820[_0xe68da(0x94)]((_0xe68da(0x8d)+_0x286453+'*:\x0a\x0a'+_0x19a09d+'\x0a\x0a')[_0xe68da(0x87)]());}else{const _0x15fc89=/\.js/[_0xe68da(0x96)](_0x1f337c);if(_0x15fc89){const _0x1b9c70=await _fs['readFile'](_0x1f337c,_0xe68da(0x7b));_0x426820[_0xe68da(0x94)](_0x1b9c70);const _0xac9037=_0x3879a8(_0x1b9c70,_0x1f337c,{'sourceType':_0xe68da(0x85),'allowReturnOutsideFunction':!![],'allowAwaitOutsideFunction':!![]});_0xac9037&&await _0x426820['reply']((_0xe68da(0x8e)+_0x1f337c+'*:\x0a\x0a'+_0xac9037+'\x0a\x0a')[_0xe68da(0x87)]());}else{const _0x185765=await _fs[_0xe68da(0x8a)](_0x1f337c,_0xe68da(0x89));await _0x426820[_0xe68da(0x94)](Buffer[_0xe68da(0x90)](_0x185765,_0xe68da(0x89)));}}};handler['help']=[_0x132437(0x81),_0x132437(0x7a)][_0x132437(0x7e)](_0x11a512=>_0x132437(0x7c)+_0x11a512+_0x132437(0x83)),handler['tags']=['owner'],handler[_0x132437(0x8b)]=/^g(et)?(p(lugin)?|f(ile)?)$/i,handler[_0x132437(0x8c)]=!![];export default handler;function _0x24fe(){const _0xbbf3b0=['16255100VVXNtv','map','\x20<name\x20file>\x0a\x0a📌\x20Example:\x0a\x20\x20\x20\x20\x20\x20\x20\x20','getfile\x20main.js\x0a\x20\x20\x20\x20\x20\x20\x20\x20','plugin','72666cqyMaH','\x20<name\x20file>','\x0a✳️\x20user\x20\x20:\x20','module','getplugin\x20owner\x0a','trim','6yRWAAc','base64','readFile','command','rowner','\x0a❎\x20bug\x20found\x20in\x20\x20*','\x0a❎\x20bug\x20found\x20in\x20*','promises','from','.js','join','265038ZTQvgv','reply','596916OlZhbn','test','1540175InXLsU','841912OfMFZT','730666EKXSVh','12fFvLiF','10isYoRc','file','utf8','get'];_0x24fe=function(){return _0xbbf3b0;};return _0x24fe();}