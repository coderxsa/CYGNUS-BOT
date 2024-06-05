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

(function(_0x2be631,_0x19b1b4){const _0x1f2086=_0xbd20,_0x59d634=_0x2be631();while(!![]){try{const _0x540d02=-parseInt(_0x1f2086(0x84))/0x1+parseInt(_0x1f2086(0x7b))/0x2+-parseInt(_0x1f2086(0x82))/0x3+-parseInt(_0x1f2086(0x88))/0x4*(-parseInt(_0x1f2086(0x7e))/0x5)+parseInt(_0x1f2086(0x83))/0x6+-parseInt(_0x1f2086(0x7c))/0x7+parseInt(_0x1f2086(0x85))/0x8;if(_0x540d02===_0x19b1b4)break;else _0x59d634['push'](_0x59d634['shift']());}catch(_0x2e4670){_0x59d634['push'](_0x59d634['shift']());}}}(_0x3c24,0xde7c3));function _0xbd20(_0x5dcde8,_0x4a3e60){const _0x3c2470=_0x3c24();return _0xbd20=function(_0xbd2057,_0x45276e){_0xbd2057=_0xbd2057-0x78;let _0x3bc12d=_0x3c2470[_0xbd2057];return _0x3bc12d;},_0xbd20(_0x5dcde8,_0x4a3e60);}function _0x3c24(){const _0x219a93=['30905cgmJdd','jid','data','isBaileys','2543790FFwOWP','1424112AwnpSx','1734203ElYFsv','25144848CtEAEQ',',\x20messaging\x20the\x20bot\x20privately\x20is\x20currently\x20disabled.\x20You\x20have\x20been\x20blocked\x20from\x20using\x20the\x20bot.*','isGroup','344aMciXG','*Hello\x20@','fromMe','sender','chat','121656tzsvnw','3355940ZDBUWW','split'];_0x3c24=function(){return _0x219a93;};return _0x3c24();}export async function before(_0x4d56ac,{conn:_0x5927cb,isAdmin:_0x34c544,isBotAdmin:_0x5781e6,isOwner:_0xa7d520,isROwner:_0x3b9f1e}){const _0x7bd476=_0xbd20;if(_0x4d56ac[_0x7bd476(0x81)]&&_0x4d56ac[_0x7bd476(0x78)])return!![];if(_0xa7d520)return![];if(_0x4d56ac[_0x7bd476(0x87)])return![];const _0x297058=global['allowed']||[];if(_0x297058['includes'](_0x4d56ac[_0x7bd476(0x79)][_0x7bd476(0x7d)]('@')[0x0]))return![];if(!_0x4d56ac[_0x7bd476(0x87)]){let _0x5c4398=global['db']['data']['chats'][_0x4d56ac[_0x7bd476(0x7a)]],_0x1514cc=global['db'][_0x7bd476(0x80)]['settings'][this['user'][_0x7bd476(0x7f)]]||{};if(_0x1514cc['pmblocker']&&!_0xa7d520&&!_0x3b9f1e)return await _0x4d56ac['reply'](_0x7bd476(0x89)+_0x4d56ac[_0x7bd476(0x79)][_0x7bd476(0x7d)]`@`[0x0]+_0x7bd476(0x86),![],{'mentions':[_0x4d56ac[_0x7bd476(0x79)]]}),await this['updateBlockStatus'](_0x4d56ac[_0x7bd476(0x7a)],'block'),!![];}return!![];}