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

const _0x4d694e=_0x50d6;(function(_0x145795,_0x48550b){const _0x15212a=_0x50d6,_0x362039=_0x145795();while(!![]){try{const _0x47345a=-parseInt(_0x15212a(0x1d2))/0x1+-parseInt(_0x15212a(0x1ce))/0x2*(-parseInt(_0x15212a(0x1c2))/0x3)+-parseInt(_0x15212a(0x1c8))/0x4+-parseInt(_0x15212a(0x1c1))/0x5+parseInt(_0x15212a(0x1cf))/0x6+-parseInt(_0x15212a(0x1c5))/0x7+parseInt(_0x15212a(0x1d7))/0x8;if(_0x47345a===_0x48550b)break;else _0x362039['push'](_0x362039['shift']());}catch(_0x3269a1){_0x362039['push'](_0x362039['shift']());}}}(_0x372f,0xae357));function _0x50d6(_0x6da3b5,_0x1db83d){const _0x372f98=_0x372f();return _0x50d6=function(_0x50d669,_0x1b4b24){_0x50d669=_0x50d669-0x1c0;let _0x40ae41=_0x372f98[_0x50d669];return _0x40ae41;},_0x50d6(_0x6da3b5,_0x1db83d);}import{youtubedl,youtubedlv2}from'@bochilteam/scraper';let handler=async(_0x2879b6,{conn:_0xbbee7e,text:_0x4abe80,args:_0xad4ad3,isPrems:_0x24af0e,isOwner:_0x4e62f8,usedPrefix:_0x5af62f,command:_0x2e4850})=>{const _0x9346f8=_0x50d6;if(!_0xad4ad3||!_0xad4ad3[0x0])throw _0x9346f8(0x1c9)+(_0x5af62f+_0x2e4850)+'\x20https://youtu.be/7832rgW';if(!_0xad4ad3[0x0]['match'](/youtu/gi))throw _0x9346f8(0x1cb);_0x2879b6[_0x9346f8(0x1c3)](rwait);try{let _0x45e7a6='128kbps',_0x38ac5a=_0xad4ad3[0x0];const _0x2f9a69=await youtubedl(_0x38ac5a)[_0x9346f8(0x1d3)](async()=>await youtubedlv2(_0x38ac5a)),_0x328a07=await _0x2f9a69[_0x9346f8(0x1c0)][_0x45e7a6]['download'](),_0x14cc92=await _0x2f9a69[_0x9346f8(0x1c6)];_0xbbee7e['sendFile'](_0x2879b6[_0x9346f8(0x1d0)],_0x328a07,_0x14cc92+_0x9346f8(0x1c7),null,_0x2879b6,![],{'mimetype':_0x9346f8(0x1d5)}),_0x2879b6['react'](xmoji);}catch{await _0x2879b6[_0x9346f8(0x1d1)](_0x9346f8(0x1cd));}};function _0x372f(){const _0x227d0a=['6zsKchI','react','ytmp3','2689099EPSYRd','title','.mp3','4652376otNaiF','✳️\x20Example\x20:\x0a','downloader','❎\x20Verify\x20that\x20it\x20is\x20a\x20YouTube\x20link.','ytmp3\x20<url>','❎\x20Error:\x20Could\x20not\x20download\x20the\x20audio.','885254BeSxgH','7402272Vvybjs','chat','reply','1348280iqpxxn','catch','yta','audio/mpeg','tags','16748128KttzmL','audio','3016960QjChNF'];_0x372f=function(){return _0x227d0a;};return _0x372f();}handler['help']=[_0x4d694e(0x1cc)],handler[_0x4d694e(0x1d6)]=[_0x4d694e(0x1ca)],handler['command']=[_0x4d694e(0x1c4),_0x4d694e(0x1d4)];export default handler;