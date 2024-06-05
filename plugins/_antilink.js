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

(function(_0xcf8306,_0x20f841){const _0x2c4a3f=_0x38f0,_0x937727=_0xcf8306();while(!![]){try{const _0x1dad87=-parseInt(_0x2c4a3f(0x72))/0x1*(-parseInt(_0x2c4a3f(0x80))/0x2)+-parseInt(_0x2c4a3f(0x82))/0x3*(-parseInt(_0x2c4a3f(0x88))/0x4)+-parseInt(_0x2c4a3f(0x71))/0x5+parseInt(_0x2c4a3f(0x75))/0x6+-parseInt(_0x2c4a3f(0x84))/0x7*(parseInt(_0x2c4a3f(0x77))/0x8)+-parseInt(_0x2c4a3f(0x86))/0x9+parseInt(_0x2c4a3f(0x7d))/0xa;if(_0x1dad87===_0x20f841)break;else _0x937727['push'](_0x937727['shift']());}catch(_0x1be8f5){_0x937727['push'](_0x937727['shift']());}}}(_0x4a3d,0xd6996));const linkRegex=/chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i;function _0x38f0(_0x40bd1c,_0x2cb7c9){const _0x4a3d67=_0x4a3d();return _0x38f0=function(_0x38f080,_0x4d6e5f){_0x38f080=_0x38f080-0x70;let _0xbce93c=_0x4a3d67[_0x38f080];return _0xbce93c;},_0x38f0(_0x40bd1c,_0x2cb7c9);}export async function before(_0x260c78,{conn:_0x196bbc,isAdmin:_0xc69fd7,isBotAdmin:_0x3a8b94}){const _0x2fda0a=_0x38f0;if(_0x260c78['isBaileys']&&_0x260c78['fromMe'])return!0x0;if(!_0x260c78[_0x2fda0a(0x83)])return!0x1;let _0x19f823=global['db']['data'][_0x2fda0a(0x7f)][_0x260c78[_0x2fda0a(0x7b)]],_0x59b58a=global['db'][_0x2fda0a(0x7c)][_0x2fda0a(0x78)][this[_0x2fda0a(0x8b)][_0x2fda0a(0x89)]]||{};const _0x61c3ed=linkRegex[_0x2fda0a(0x8a)](_0x260c78[_0x2fda0a(0x7a)]);if(_0x19f823[_0x2fda0a(0x7e)]&&_0x61c3ed&&!_0xc69fd7){if(_0x3a8b94){const _0xc9296d=_0x2fda0a(0x79)+await this[_0x2fda0a(0x73)](_0x260c78['chat']);if(_0x260c78['text']['includes'](_0xc9296d))return!0x0;}await _0x196bbc[_0x2fda0a(0x74)](_0x260c78['chat'],'*≡\x20Link\x20Detected*\x20\x20\x0aWe\x20do\x20not\x20allow\x20links\x20from\x20other\x20groups\x20\x0aI\x27m\x20sorry\x20*@'+_0x260c78[_0x2fda0a(0x85)][_0x2fda0a(0x87)]('@')[0x0]+'*\x20\x20you\x20will\x20be\x20kicked\x20out\x20of\x20the\x20group\x20'+(_0x3a8b94?'':'\x0a\x0aIM\x20not\x20an\x20admin\x20so\x20I\x20canT\x20expel\x20you\x20:\x22v'),null,{'mentions':[_0x260c78[_0x2fda0a(0x85)]]});if(_0x3a8b94&&_0x19f823[_0x2fda0a(0x7e)])await _0x196bbc[_0x2fda0a(0x81)](_0x260c78['chat'],{'delete':_0x260c78[_0x2fda0a(0x70)]}),await _0x196bbc[_0x2fda0a(0x76)](_0x260c78['chat'],[_0x260c78[_0x2fda0a(0x85)]],'remove');else{if(!_0x19f823[_0x2fda0a(0x7e)])return;}}return!0x0;}function _0x4a3d(){const _0xde6689=['jid','exec','user','key','4722010OvwVoz','1621ciIFoh','groupInviteCode','reply','1167870dGXlkf','groupParticipantsUpdate','9096Jxngax','settings','https://chat.whatsapp.com/','text','chat','data','21528750gsXhQf','antiLink','chats','606lPvYNf','sendMessage','2206377MbWDnO','isGroup','6461BayLDi','sender','6311619XNsviT','split','4sitcBT'];_0x4a3d=function(){return _0xde6689;};return _0x4a3d();}