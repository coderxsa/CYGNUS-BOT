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

const _0x3de177=_0x1e42;(function(_0x1ddd0e,_0xf3ab74){const _0x9a28d8=_0x1e42,_0x3930a3=_0x1ddd0e();while(!![]){try{const _0x23eacf=-parseInt(_0x9a28d8(0x1f9))/0x1*(parseInt(_0x9a28d8(0x1e7))/0x2)+-parseInt(_0x9a28d8(0x1f7))/0x3*(parseInt(_0x9a28d8(0x1e1))/0x4)+parseInt(_0x9a28d8(0x1ed))/0x5*(-parseInt(_0x9a28d8(0x1e8))/0x6)+parseInt(_0x9a28d8(0x1f1))/0x7+-parseInt(_0x9a28d8(0x1e4))/0x8*(parseInt(_0x9a28d8(0x1e3))/0x9)+-parseInt(_0x9a28d8(0x1fa))/0xa+-parseInt(_0x9a28d8(0x1e5))/0xb*(-parseInt(_0x9a28d8(0x1f4))/0xc);if(_0x23eacf===_0xf3ab74)break;else _0x3930a3['push'](_0x3930a3['shift']());}catch(_0x5bc9c3){_0x3930a3['push'](_0x3930a3['shift']());}}}(_0x2b08,0x84d6a));import _0x3a9c70 from'node-fetch';import{sticker}from'../lib/sticker.js';function _0x1e42(_0x49b96a,_0x2e48d5){const _0x2b081a=_0x2b08();return _0x1e42=function(_0x1e4245,_0x5cf2af){_0x1e4245=_0x1e4245-0x1de;let _0x5545fb=_0x2b081a[_0x1e4245];return _0x5545fb;},_0x1e42(_0x49b96a,_0x2e48d5);}const fetchJson=(_0x3443cd,_0x5e0932)=>new Promise(async(_0x46dbfe,_0x1b7f42)=>{const _0x5e4bf1=_0x1e42;_0x3a9c70(_0x3443cd,_0x5e0932)[_0x5e4bf1(0x1ea)](_0x43529b=>_0x43529b[_0x5e4bf1(0x1f2)]())['then'](_0x415d92=>{_0x46dbfe(_0x415d92);})[_0x5e4bf1(0x1f5)](_0x6dac10=>{_0x1b7f42(_0x6dac10);});});function _0x2b08(){const _0x3611f6=['✳️\x20Separate\x20the\x20emoji\x20with\x20a\x20*+*\x20\x0a\x0a📌\x20Example\x20:\x20\x0a*','3717525gkQwNl','json','emojimix\x20<emoji+emoji>','25411956hTSnuS','catch','\x20😎+🤑','6fnfVwe','sendFile','6JYuZuU','7998950ayfkQp','emojimix','author','tags','1824412faJXBu','url','37809oQnwRk','1304eVwmUZ','22lVIBGZ','includes','266802ayaqAp','35550fMLGnr','https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=','then','📌\x20Example\x20:\x20','command','865VzugGA','sticker','diamond'];_0x2b08=function(){return _0x3611f6;};return _0x2b08();}let handler=async(_0x5d0f0f,{conn:_0x10a759,text:_0x51ea01,args:_0x1c834e,usedPrefix:_0x5bd258,command:_0x2b75f1})=>{const _0x488379=_0x1e42;if(!_0x1c834e[0x0])throw _0x488379(0x1eb)+(_0x5bd258+_0x2b75f1)+_0x488379(0x1f6);if(!_0x51ea01[_0x488379(0x1e6)]('+'))throw _0x488379(0x1f0)+(_0x5bd258+_0x2b75f1)+'*\x20😎+🤑';let [_0x379513,_0x599073]=_0x51ea01['split']`+`,_0x21530f=await fetchJson(_0x488379(0x1e9)+encodeURIComponent(_0x379513)+'_'+encodeURIComponent(_0x599073));for(let _0x442fbf of _0x21530f['results']){let _0x3841fe=await sticker(![],_0x442fbf[_0x488379(0x1e2)],global['packname'],global[_0x488379(0x1df)]);_0x10a759[_0x488379(0x1f8)](_0x5d0f0f['chat'],_0x3841fe,null,{'asSticker':!![]},_0x5d0f0f);}};handler['help']=[_0x3de177(0x1f3)],handler[_0x3de177(0x1e0)]=[_0x3de177(0x1ee)],handler[_0x3de177(0x1ec)]=[_0x3de177(0x1de)],handler[_0x3de177(0x1ef)]=!![];export default handler;