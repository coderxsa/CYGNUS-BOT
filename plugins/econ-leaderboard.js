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

function _0x4203(){const _0x20539c=['name','image','sort','profilePictureUrl','fetchStatus','indexOf','\x0a*🏆\x20Rank:*\x20','tags','\x20members*','length','split','6616lVAdwE','level','error','max','getName','971280saTIZa','filter','leaderboard','chat','1745HtyUPT','\x0a*💰\x20Gold:*\x20','credit','catch','sender','users','slice','732616uhAZPa','digest','jid','quoted','role','exp','find','\x0a*🏦\x20Bank:*\x20','trim','help','\x0a*✨\x20Level:*\x20','data','prems','hex','./Cygnus.jpg','includes','153136zIVuCd','12SqkXIw','1261896cqFLEJ','entries','update','bank','\x0a*🌟\x20Experience:*\x20','\x20out\x20of\x20total\x20','min','map','13131702faIPxv','multiplier','core','✳️\x20The\x20user\x20is\x20not\x20found\x20in\x20my\x20database','md5','588987okyffv','mentionedJid','some','user'];_0x4203=function(){return _0x20539c;};return _0x4203();}const _0x3d46e9=_0x2bda;(function(_0x4ef0ef,_0x1adc1f){const _0x5a3b92=_0x2bda,_0x3f4fbb=_0x4ef0ef();while(!![]){try{const _0x37f9d2=-parseInt(_0x5a3b92(0xef))/0x1+-parseInt(_0x5a3b92(0xff))/0x2*(-parseInt(_0x5a3b92(0x100))/0x3)+-parseInt(_0x5a3b92(0xdf))/0x4*(parseInt(_0x5a3b92(0xe8))/0x5)+parseInt(_0x5a3b92(0xe4))/0x6+-parseInt(_0x5a3b92(0xd0))/0x7+-parseInt(_0x5a3b92(0x101))/0x8+parseInt(_0x5a3b92(0x109))/0x9;if(_0x37f9d2===_0x1adc1f)break;else _0x3f4fbb['push'](_0x3f4fbb['shift']());}catch(_0x59680a){_0x3f4fbb['push'](_0x3f4fbb['shift']());}}}(_0x4203,0x5bac2));function _0x2bda(_0x4c124e,_0x18cc71){const _0x4203b7=_0x4203();return _0x2bda=function(_0x2bda95,_0x14ce2d){_0x2bda95=_0x2bda95-0xcd;let _0x5de064=_0x4203b7[_0x2bda95];return _0x5de064;},_0x2bda(_0x4c124e,_0x18cc71);}import{areJidsSameUser}from'@whiskeysockets/baileys';import{createHash}from'crypto';import _0x208bd0 from'awesome-phonenumber';import{canLevelUp,xpRange}from'../lib/levelling.js';let handler=async(_0x284812,{conn:_0x4151bf,args:_0x12bf6b,usedPrefix:_0x93bdf5,participants:_0x3f2817})=>{const _0x2adf46=_0x2bda;let _0x3e77ba=Object[_0x2adf46(0x102)](global['db'][_0x2adf46(0xfa)]['users'])[_0x2adf46(0x108)](([_0x397695,_0xf0b841])=>{return{..._0xf0b841,'jid':_0x397695};}),_0x884a85=_0x284812[_0x2adf46(0xf2)]?_0x284812[_0x2adf46(0xf2)][_0x2adf46(0xec)]:_0x284812['mentionedJid']&&_0x284812[_0x2adf46(0xd1)][0x0]?_0x284812[_0x2adf46(0xd1)][0x0]:_0x284812['fromMe']?_0x4151bf[_0x2adf46(0xd3)][_0x2adf46(0xf1)]:_0x284812[_0x2adf46(0xec)],_0x14758f=global['db'][_0x2adf46(0xfa)][_0x2adf46(0xed)][_0x884a85];if(!(_0x884a85 in global['db']['data'][_0x2adf46(0xed)]))throw _0x2adf46(0xce);let _0x32d9b2=await _0x4151bf[_0x2adf46(0xd7)](_0x884a85,_0x2adf46(0xd5))['catch'](_0x2a008d=>_0x2adf46(0xfd)),_0x261cd0=(await _0x4151bf[_0x2adf46(0xd8)](_0x884a85)[_0x2adf46(0xeb)](console[_0x2adf46(0xe1)]))?.['status']||'',{name:_0x2cd696,exp:_0x588434,credit:_0x4ef30f,lastclaim:_0x304097,registered:_0x362456,regTime:_0x3d5c4f,age:_0x397b46,level:_0x4bf952,role:_0x325149,warn:_0x155a94}=global['db'][_0x2adf46(0xfa)][_0x2adf46(0xed)][_0x884a85],{min:_0x44112c,xp:_0x1df945,max:_0x404e37}=xpRange(_0x14758f[_0x2adf46(0xe0)],global[_0x2adf46(0x10a)]),_0x3acaf6=_0x4151bf[_0x2adf46(0xe3)](_0x884a85),_0x1e95b9=_0x404e37-_0x1df945,_0x40a57a=global[_0x2adf46(0xfb)][_0x2adf46(0xfe)](_0x884a85[_0x2adf46(0xde)]('@')[0x0]),_0x2ee792=createHash(_0x2adf46(0xcf))[_0x2adf46(0x103)](_0x884a85)[_0x2adf46(0xf0)](_0x2adf46(0xfc)),_0x103dac;_0x103dac=Object[_0x2adf46(0x102)](global['db'][_0x2adf46(0xfa)][_0x2adf46(0xed)])[_0x2adf46(0x108)](([_0x1e984f,_0x39f76f])=>{const _0x37b907=_0x2adf46,_0x11fdf7={..._0x39f76f,'jid':_0x1e984f};return _0x11fdf7['tg']=_0x11fdf7[_0x37b907(0xea)]+_0x11fdf7['bank'],_0x11fdf7['tg'];});let _0x4fb9d2=_0x3e77ba[_0x2adf46(0x108)](toNumber(_0x2adf46(0xf4)))[_0x2adf46(0xd6)](sort(_0x2adf46(0xf4))),_0x934819=_0x3e77ba[_0x2adf46(0x108)](toNumber(_0x2adf46(0xea)))[_0x2adf46(0xd6)](sort(_0x2adf46(0xea))),_0x514d93=_0x3e77ba[_0x2adf46(0x108)](toNumber(_0x2adf46(0xe0)))[_0x2adf46(0xd6)](sort(_0x2adf46(0xe0))),_0x39e7a5=_0x3e77ba[_0x2adf46(0x108)](toNumber(_0x2adf46(0x104)))[_0x2adf46(0xd6)](sort(_0x2adf46(0x104))),_0x5167af=_0x3e77ba[_0x2adf46(0x108)](toNumber(_0x2adf46(0xf3)))[_0x2adf46(0xd6)](sort(_0x2adf46(0xf3))),_0x140c30=_0x4fb9d2[_0x2adf46(0x108)](enumGetKey),_0x5f3666=_0x934819['map'](enumGetKey),_0x4d52d2=_0x514d93[_0x2adf46(0x108)](enumGetKey),_0x27ff89=_0x39e7a5[_0x2adf46(0x108)](enumGetKey),_0xf6b8e=_0x5167af[_0x2adf46(0x108)](enumGetKey),_0x40b1cb=_0x12bf6b[0x0]&&_0x12bf6b[0x0][_0x2adf46(0xdd)]>0x0?Math[_0x2adf46(0x107)](0x32,Math[_0x2adf46(0xe2)](parseInt(_0x12bf6b[0x0]),0x5)):Math[_0x2adf46(0x107)](0xa,_0x4fb9d2[_0x2adf46(0xdd)]),_0x540520=('\x0a👑\x20*GLOBAL\x20LEADERBOARD*\x20👑\x0a\x0a'+_0x4fb9d2['slice'](0x0,_0x40b1cb)[_0x2adf46(0x108)](({jid:_0x55c0b9,exp:_0x4952b5,credit:_0x14265e,level:_0x42f7a1,bank:_0xe1e315,role:_0x1f4f8a},_0x36684c)=>{const _0x4d6218=_0x2adf46;let _0x55fd7a=_0x3e77ba[_0x4d6218(0xf5)](_0x4fe3ba=>_0x4fe3ba[_0x4d6218(0xf1)]===_0x55c0b9)[_0x4d6218(0xea)]+_0x3e77ba[_0x4d6218(0xf5)](_0x12883e=>_0x12883e['jid']===_0x55c0b9)['bank'],_0xe767ac=global['db'][_0x4d6218(0xfa)][_0x4d6218(0xed)][_0x55c0b9],_0x40280b=_0xe767ac[_0x4d6218(0xd4)];return'*#'+(_0x36684c+0x1)+'.*\x0a*👑\x20Username:*\x20'+_0x40280b+_0x4d6218(0x105)+_0x4952b5+_0x4d6218(0xda)+_0x1f4f8a+_0x4d6218(0xf9)+_0x42f7a1+'\x0a*👛\x20Wallet:*\x20'+_0x14265e+_0x4d6218(0xf6)+_0xe1e315+_0x4d6218(0xe9)+_0x55fd7a;})['join']('\x0a\x0a\x0a')+'\x0a*You\x20are\x20at\x20'+(_0x140c30[_0x2adf46(0xd9)](_0x284812[_0x2adf46(0xec)])+0x1)+_0x2adf46(0x106)+_0x140c30[_0x2adf46(0xdd)]+_0x2adf46(0xdc))[_0x2adf46(0xf7)]();_0x4151bf['reply'](_0x284812[_0x2adf46(0xe7)],_0x540520,_0x284812,{'mentions':[..._0x140c30[_0x2adf46(0xee)](0x0,_0x40b1cb),..._0x4d52d2[_0x2adf46(0xee)](0x0,_0x40b1cb),..._0x5f3666[_0x2adf46(0xee)](0x0,_0x40b1cb),..._0x27ff89['slice'](0x0,_0x40b1cb),..._0xf6b8e['slice'](0x0,_0x40b1cb)][_0x2adf46(0xe5)](_0x2512d4=>!_0x3f2817[_0x2adf46(0xd2)](_0x4adf1d=>areJidsSameUser(_0x2512d4,_0x4adf1d['id'])))});};handler[_0x3d46e9(0xf8)]=[_0x3d46e9(0xe6)],handler[_0x3d46e9(0xdb)]=[_0x3d46e9(0xcd)],handler['command']=[_0x3d46e9(0xe6),'lb'];export default handler;function sort(_0x3ccc1a,_0x58799b=!![]){if(_0x3ccc1a)return(..._0x59d91e)=>_0x59d91e[_0x58799b&0x1][_0x3ccc1a]-_0x59d91e[!_0x58799b&0x1][_0x3ccc1a];else return(..._0x31e2ad)=>_0x31e2ad[_0x58799b&0x1]-_0x31e2ad[!_0x58799b&0x1];}function toNumber(_0x2867cb,_0x2dd0c2=0x0){if(_0x2867cb)return(_0x3b02bd,_0x2a8333,_0x484502)=>{return{..._0x484502[_0x2a8333],[_0x2867cb]:_0x3b02bd[_0x2867cb]===undefined?_0x2dd0c2:_0x3b02bd[_0x2867cb]};};else return _0x5672fa=>_0x5672fa===undefined?_0x2dd0c2:_0x5672fa;}function enumGetKey(_0x257ae2){const _0x5d6865=_0x3d46e9;return _0x257ae2[_0x5d6865(0xf1)];}