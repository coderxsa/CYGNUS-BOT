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

const _0x3d1689=_0x2654;(function(_0xfaad45,_0x32714d){const _0xcf366f=_0x2654,_0x465c32=_0xfaad45();while(!![]){try{const _0x2f3e3b=-parseInt(_0xcf366f(0x1d8))/0x1*(parseInt(_0xcf366f(0x1cf))/0x2)+-parseInt(_0xcf366f(0x1c8))/0x3*(parseInt(_0xcf366f(0x1d4))/0x4)+parseInt(_0xcf366f(0x1c0))/0x5*(parseInt(_0xcf366f(0x1d0))/0x6)+parseInt(_0xcf366f(0x1d2))/0x7+-parseInt(_0xcf366f(0x1d5))/0x8+parseInt(_0xcf366f(0x1ce))/0x9*(parseInt(_0xcf366f(0x1c9))/0xa)+parseInt(_0xcf366f(0x1d3))/0xb*(parseInt(_0xcf366f(0x1c4))/0xc);if(_0x2f3e3b===_0x32714d)break;else _0x465c32['push'](_0x465c32['shift']());}catch(_0xe6470a){_0x465c32['push'](_0x465c32['shift']());}}}(_0x28f9,0x29f00));import _0x5c4b15 from'node-fetch';function _0x28f9(){const _0x493065=['905121lRJSgK','5657157ukHiNC','14360XxjEIy','1821736hjJCWd','HEAD','gitclone\x20<url>','25769NluLWK','sendFile','command','get','headers','35aSnSig','/zipball','downloader','where\x20is\x20the\x20github\x20link?\x0a\x0a📌\x20Example\x20:\x20','12PpdKAM','✳️\x20*Wait,\x20sending\x20repository..*','credit','replace','165FWwJQC','20UbdowO','gitclone','⚠️\x20link\x20incorrect','help','\x20https://github.com/coderxsa','341883TyYrHf','16fHOBXB','71598uKZoqX','match'];_0x28f9=function(){return _0x493065;};return _0x28f9();}function _0x2654(_0x8108d0,_0x167b71){const _0x28f993=_0x28f9();return _0x2654=function(_0x2654d8,_0x15db39){_0x2654d8=_0x2654d8-0x1c0;let _0x385342=_0x28f993[_0x2654d8];return _0x385342;},_0x2654(_0x8108d0,_0x167b71);}const regex=/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;let handler=async(_0x1db92b,{conn:_0x18068d,args:_0xff55fa,usedPrefix:_0x22d555,command:_0xe6e6c7})=>{const _0x43225b=_0x2654;if(!_0xff55fa[0x0])throw _0x43225b(0x1c3)+(_0x22d555+_0xe6e6c7)+_0x43225b(0x1cd);if(!regex['test'](_0xff55fa[0x0]))throw _0x43225b(0x1cb);let [_0x4ba2a8,_0x17d181,_0x2fa163]=_0xff55fa[0x0][_0x43225b(0x1d1)](regex)||[];_0x2fa163=_0x2fa163[_0x43225b(0x1c7)](/.git$/,'');let _0x5ac4cd='https://api.github.com/repos/'+_0x17d181+'/'+_0x2fa163+_0x43225b(0x1c1),_0x4b0dba=(await _0x5c4b15(_0x5ac4cd,{'method':_0x43225b(0x1d6)}))[_0x43225b(0x1dc)][_0x43225b(0x1db)]('content-disposition')[_0x43225b(0x1d1)](/attachment; filename=(.*)/)[0x1];_0x1db92b['reply'](_0x43225b(0x1c5)),_0x18068d[_0x43225b(0x1d9)](_0x1db92b['chat'],_0x5ac4cd,_0x4b0dba,null,_0x1db92b);};handler[_0x3d1689(0x1cc)]=[_0x3d1689(0x1d7)],handler['tags']=[_0x3d1689(0x1c2)],handler[_0x3d1689(0x1da)]=[_0x3d1689(0x1ca)],handler[_0x3d1689(0x1c6)]=!![];export default handler;