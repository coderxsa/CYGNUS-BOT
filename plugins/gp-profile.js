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

const _0x51beb5=_0x3622;function _0x3622(_0x476163,_0x4d9a5b){const _0x5d079d=_0x5d07();return _0x3622=function(_0x36229e,_0x176116){_0x36229e=_0x36229e-0xa8;let _0x23c3ef=_0x5d079d[_0x36229e];return _0x23c3ef;},_0x3622(_0x476163,_0x4d9a5b);}function _0x5d07(){const _0x2dc8c7=['*🪪\x20Name:*\x20','includes','help','2aRYQxO','26693823iBEPpg','multiplier','\x0a\x0a*⚠️\x20Warnings:*\x20','update','Yes','react','exp','profile','\x0a\x0a\x20🎌\x20*Bio:*\x20','✳️\x20The\x20user\x20is\x20not\x20found\x20in\x20my\x20database','\x0a*📇\x20Registered\x20:*\x20','\x0a*💰\x20Gold\x20:*\x20','catch','sender','getName','9qeKpdQ','mentionedJid','1163282lxFqJY','jid','\x0a*✨\x20Level*\x20:\x20','./Cygnus.jpg','group','\x0a*⬆️\x20XP*\x20:\x20Total\x20','quoted','5SFroTo','data','command','xp*\x20missing\x20to\x20level\x20up','91BMvLNG','3355580TRklBz','md5','digest','12TmBUgS','profilePictureUrl','status','profil.jpg','users','hex','user','\x20/\x20','prems','levelup*','\x0a*🏆\x20Rank:*\x20','sendFile','level','1124385Xcizxg','680370IlzSmV','tags','7955536NOfGlS','chat','40eWOsCP','3790754TGGVxd'];_0x5d07=function(){return _0x2dc8c7;};return _0x5d07();}(function(_0x20a5b4,_0x5ec36d){const _0xd35661=_0x3622,_0x268c71=_0x20a5b4();while(!![]){try{const _0xdc0ee1=-parseInt(_0xd35661(0xad))/0x1*(-parseInt(_0xd35661(0xbf))/0x2)+parseInt(_0xd35661(0xdb))/0x3+parseInt(_0xd35661(0xcb))/0x4*(-parseInt(_0xd35661(0xc6))/0x5)+-parseInt(_0xd35661(0xdc))/0x6*(parseInt(_0xd35661(0xca))/0x7)+-parseInt(_0xd35661(0xde))/0x8*(-parseInt(_0xd35661(0xbd))/0x9)+parseInt(_0xd35661(0xa8))/0xa*(-parseInt(_0xd35661(0xa9))/0xb)+-parseInt(_0xd35661(0xce))/0xc*(-parseInt(_0xd35661(0xae))/0xd);if(_0xdc0ee1===_0x5ec36d)break;else _0x268c71['push'](_0x268c71['shift']());}catch(_0x129007){_0x268c71['push'](_0x268c71['shift']());}}}(_0x5d07,0xda5c4));import{createHash}from'crypto';import{canLevelUp,xpRange}from'../lib/levelling.js';let handler=async(_0x50eb4f,{conn:_0xff9cfe,usedPrefix:_0x4a42f5,command:_0x1f5d21})=>{const _0x18f0ba=_0x3622;let _0x261b9a=_0x50eb4f[_0x18f0ba(0xc5)]?_0x50eb4f[_0x18f0ba(0xc5)][_0x18f0ba(0xbb)]:_0x50eb4f[_0x18f0ba(0xbe)]&&_0x50eb4f[_0x18f0ba(0xbe)][0x0]?_0x50eb4f[_0x18f0ba(0xbe)][0x0]:_0x50eb4f['fromMe']?_0xff9cfe[_0x18f0ba(0xd4)][_0x18f0ba(0xc0)]:_0x50eb4f['sender'];if(!(_0x261b9a in global['db']['data']['users']))throw _0x18f0ba(0xb7);let _0x1c1b12=await _0xff9cfe[_0x18f0ba(0xcf)](_0x261b9a,'image')[_0x18f0ba(0xba)](_0x19105e=>_0x18f0ba(0xc2)),_0x318ac6=global['db'][_0x18f0ba(0xc7)][_0x18f0ba(0xd2)][_0x261b9a],_0x49d8b2=(await _0xff9cfe['fetchStatus'](_0x261b9a)[_0x18f0ba(0xba)](console['error'])||{})[_0x18f0ba(0xd0)]||'',{name:_0xf4c657,exp:_0xece804,credit:_0x567b6e,lastclaim:_0x1bcd3d,registered:_0x184408,regTime:_0x43e27d,age:_0x3d5760,level:_0x1074f8,role:_0x6ee93e,wealth:_0x47f206,warn:_0x2888ad}=global['db'][_0x18f0ba(0xc7)][_0x18f0ba(0xd2)][_0x261b9a],{min:_0x39442b,xp:_0x1653ee,max:_0xce58af}=xpRange(_0x318ac6[_0x18f0ba(0xda)],global[_0x18f0ba(0xaf)]),_0x30d4e3=_0xff9cfe[_0x18f0ba(0xbc)](_0x261b9a),_0x19531c=_0xce58af-_0x1653ee,_0x40cdd9=global[_0x18f0ba(0xd6)][_0x18f0ba(0xab)](_0x261b9a['split']`@`[0x0]),_0x43c244=createHash(_0x18f0ba(0xcc))[_0x18f0ba(0xb1)](_0x261b9a)[_0x18f0ba(0xcd)](_0x18f0ba(0xd3)),_0x5caa42=_0x18f0ba(0xaa)+_0x30d4e3+(_0x49d8b2?_0x18f0ba(0xb6)+_0x49d8b2:'')+_0x18f0ba(0xb0)+_0x2888ad+'/'+maxwarn+_0x18f0ba(0xb9)+_0x567b6e+_0x18f0ba(0xc1)+_0x1074f8+_0x18f0ba(0xc4)+_0xece804+'\x20('+(_0x318ac6[_0x18f0ba(0xb4)]-_0x39442b)+_0x18f0ba(0xd5)+_0x1653ee+')\x0a'+(_0x19531c<=0x0?'Ready\x20for\x20*'+_0x4a42f5+_0x18f0ba(0xd7):'*'+_0x19531c+_0x18f0ba(0xc9))+_0x18f0ba(0xd8)+_0x6ee93e+_0x18f0ba(0xb8)+(_0x184408?_0x18f0ba(0xb2):'No')+'\x0a*⭐\x20Premium*\x20:\x20'+(_0x40cdd9?_0x18f0ba(0xb2):'No')+'\x0a';_0xff9cfe[_0x18f0ba(0xd9)](_0x50eb4f[_0x18f0ba(0xdf)],_0x1c1b12,_0x18f0ba(0xd1),_0x5caa42,_0x50eb4f,![],{'mentions':[_0x261b9a]}),_0x50eb4f[_0x18f0ba(0xb3)](done);};handler[_0x51beb5(0xac)]=[_0x51beb5(0xb5)],handler[_0x51beb5(0xdd)]=[_0x51beb5(0xc3)],handler[_0x51beb5(0xc8)]=['profile'];export default handler;