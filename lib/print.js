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

const _0x229468=_0x1735;(function(_0x3b4f32,_0x64c461){const _0x54e0a4=_0x1735,_0x1224e9=_0x3b4f32();while(!![]){try{const _0x5c9c70=parseInt(_0x54e0a4(0xba))/0x1*(parseInt(_0x54e0a4(0xad))/0x2)+parseInt(_0x54e0a4(0xc1))/0x3+-parseInt(_0x54e0a4(0xbf))/0x4*(-parseInt(_0x54e0a4(0xc4))/0x5)+-parseInt(_0x54e0a4(0xc7))/0x6*(parseInt(_0x54e0a4(0xa6))/0x7)+parseInt(_0x54e0a4(0xb3))/0x8+-parseInt(_0x54e0a4(0xc2))/0x9+-parseInt(_0x54e0a4(0xb2))/0xa;if(_0x5c9c70===_0x64c461)break;else _0x1224e9['push'](_0x1224e9['shift']());}catch(_0x3653ed){_0x1224e9['push'](_0x1224e9['shift']());}}}(_0x345d,0xb882c));function _0x345d(){const _0x3b1487=['yellowBright','red','Command','sender','Message','getName','183wvnCNd','log','@g.us','blueBright','redBright','180kZpRkL','img','4368702DIAoMt','5352183oYRhdj','terminal-image','154635HLSBYl','split','endsWith','68982iHZZJY','isCommand','cyanBright','623vtAtgF','url','Update\x20\x27lib/print.js\x27','default','chat','greenBright','opts','8018hkXOsi','[CYGNUS\x20BOT]','url-regex-safe','Private','from','19580130dHzLOv','6000744XsuWCn'];_0x345d=function(){return _0x3b1487;};return _0x345d();}import _0x2a48df from'chalk';function _0x1735(_0x4e7987,_0x1ebc11){const _0x345dda=_0x345d();return _0x1735=function(_0x17358c,_0x5cfab8){_0x17358c=_0x17358c-0xa4;let _0x3776ba=_0x345dda[_0x17358c];return _0x3776ba;},_0x1735(_0x4e7987,_0x1ebc11);}import{watchFile}from'fs';const terminalImage=global[_0x229468(0xac)][_0x229468(0xc0)]?require(_0x229468(0xc3)):'',urlRegex=(await import(_0x229468(0xaf)))[_0x229468(0xa9)]({'strict':![]}),log=(_0x248ed9,_0x39a14f=![])=>console[_0x229468(0xbb)](_0x2a48df[_0x39a14f?_0x229468(0xb5):'blue'](_0x229468(0xae)),_0x2a48df[_0x39a14f?_0x229468(0xbe):_0x229468(0xab)](_0x248ed9));export default async function (m,conn={'user':{}}){const _0x5c810d=_0x229468;let senderName=await conn[_0x5c810d(0xb9)](m[_0x5c810d(0xb7)]),chatName='';m[_0x5c810d(0xaa)]&&m['chat']!==m['sender']?!m['chat'][_0x5c810d(0xc6)](_0x5c810d(0xbc))?chatName='Private':(chatName=await conn[_0x5c810d(0xb9)](m[_0x5c810d(0xaa)]),chatName=chatName?chatName+'\x20':''):chatName=_0x5c810d(0xb0);if(m[_0x5c810d(0xa4)]){let commandText=m['text'][_0x5c810d(0xc5)]('\x20')[0x0];const cmdtxt=_0x2a48df[_0x5c810d(0xa5)](_0x5c810d(0xb6)),cmd=_0x2a48df['yellowBright'](''+commandText),from=_0x2a48df[_0x5c810d(0xab)](_0x5c810d(0xb1)),username=_0x2a48df[_0x5c810d(0xb4)](''+senderName),ins=_0x2a48df[_0x5c810d(0xab)]('in'),grp=_0x2a48df[_0x5c810d(0xbd)](chatName);log(cmdtxt+'\x20'+cmd+'\x20'+from+'\x20'+username+'\x20'+ins+'\x20'+grp);}else{const msg=_0x2a48df['cyanBright'](_0x5c810d(0xb8)),from=_0x2a48df[_0x5c810d(0xab)]('from'),username=_0x2a48df['yellowBright'](''+senderName),ins=_0x2a48df[_0x5c810d(0xab)]('in'),grp=_0x2a48df[_0x5c810d(0xbd)](chatName);log(msg+'\x20'+from+'\x20'+username+'\x20'+ins+'\x20'+grp);}}let file=global['__filename'](import.meta[_0x229468(0xa7)]);watchFile(file,()=>{const _0x3c2ead=_0x229468;log(_0x2a48df[_0x3c2ead(0xbe)](_0x3c2ead(0xa8)),![]);});