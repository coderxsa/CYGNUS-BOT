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

(function(_0x3a9091,_0x1713da){const _0x329a7f=_0x5b6f,_0x45c265=_0x3a9091();while(!![]){try{const _0x16774b=parseInt(_0x329a7f(0x72))/0x1+-parseInt(_0x329a7f(0x68))/0x2+-parseInt(_0x329a7f(0x6a))/0x3+parseInt(_0x329a7f(0x78))/0x4+-parseInt(_0x329a7f(0x6e))/0x5*(-parseInt(_0x329a7f(0x75))/0x6)+parseInt(_0x329a7f(0x6b))/0x7+-parseInt(_0x329a7f(0x66))/0x8;if(_0x16774b===_0x1713da)break;else _0x45c265['push'](_0x45c265['shift']());}catch(_0x5ceadf){_0x45c265['push'](_0x45c265['shift']());}}}(_0x5a98,0x6dd04));function _0x5a98(){const _0x13f67e=['1650688XmaXon','nsfw','37110Kvcozz','3550316PniUvn','json','chat','2541575BAUqdL','\x20miku*','https://api.lolhuman.xyz/api/nhentaisearch?apikey=','*ERROR\x20NOT\x20FOUND\x20TRY\x20SEARCHING\x20ANOTHER\x20QUERY*','304600WsngXe','🚫\x20group\x20doesnt\x20supprt\x20nsfw\x20\x0a\x0a\x20enable\x20it\x20by\x20\x0a*','users','6AJHNwB','chats','.pdf','446540qmssqQ','?apikey=','sendMessage','application/pdf','&query=','wait','data','result','1153824wNYcZQ','❎\x20uneed\x20to\x20be\x20atleast\x2018\x20years'];_0x5a98=function(){return _0x13f67e;};return _0x5a98();}let handler=async(_0x1bd10e,{conn:_0x17b187,text:_0x29e5e7,usedPrefix:_0x354afd,command:_0x3d82ea,args:_0x38a973})=>{const _0x4ed1df=_0x5b6f;if(!global['db'][_0x4ed1df(0x7e)][_0x4ed1df(0x76)][_0x1bd10e[_0x4ed1df(0x6d)]][_0x4ed1df(0x69)])throw _0x4ed1df(0x73)+_0x354afd+'enable*\x20nsfw';let _0x49b77e=global['db']['data'][_0x4ed1df(0x74)][_0x1bd10e['sender']]['age'];if(_0x49b77e<0x11)throw _0x1bd10e['reply'](_0x4ed1df(0x67));if(!_0x29e5e7)throw'*This\x20command\x20provides\x20sauce\x20from\x20nhentai:\x20'+(_0x354afd+_0x3d82ea)+_0x4ed1df(0x6f);try{_0x1bd10e['reply'](global[_0x4ed1df(0x7d)]);let _0x1443cf=await fetch(_0x4ed1df(0x70)+lolkeysapi+_0x4ed1df(0x7c)+_0x29e5e7),_0x19135b=await _0x1443cf[_0x4ed1df(0x6c)](),_0x29b85c=_0x19135b[_0x4ed1df(0x65)][0x0]['id'],_0x26bd61=_0x19135b['result'][0x0]['title_native'],_0x21093f=await fetch('https://api.lolhuman.xyz/api/nhentaipdf/'+_0x29b85c+_0x4ed1df(0x79)+lolkeysapi),_0x23646e=await _0x21093f[_0x4ed1df(0x6c)](),_0x2449f4=_0x23646e[_0x4ed1df(0x65)];await _0x17b187[_0x4ed1df(0x7a)](_0x1bd10e['chat'],{'document':{'url':_0x2449f4},'mimetype':_0x4ed1df(0x7b),'fileName':_0x26bd61+_0x4ed1df(0x77)},{'quoted':_0x1bd10e});}catch{throw _0x4ed1df(0x71);}};function _0x5b6f(_0xc2f75e,_0x365754){const _0x5a9822=_0x5a98();return _0x5b6f=function(_0x5b6f28,_0x31e1f0){_0x5b6f28=_0x5b6f28-0x65;let _0x1e4aa6=_0x5a9822[_0x5b6f28];return _0x1e4aa6;},_0x5b6f(_0xc2f75e,_0x365754);}handler['command']=/^(hentai)$/i;export default handler;