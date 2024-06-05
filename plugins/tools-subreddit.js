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

const _0xc421a2=_0x50d2;function _0x3a76(){const _0x14f06d=['396085zaNECp','active_users','\x0a\x0a\x20\x20\x20\x20\x20•\x20*Title:*\x20','\x0a\x0a\x20\x20\x20\x20\x20•\x20*Description:*\x20','reply','members','status','over_18','133562pYLesO','\x0a\x0a\x20\x20\x20\x20\x20•\x20*Active\x20Users:*\x20','\x0a\x0a\x20\x20\x20\x20\x20•\x20*URL:*\x20','2729352birhNQ','command','1558139kFGVKz','log','chat','url','12bCRpge','24942kFfCPV','error','*Subreddit\x20Information:*\x0a\x0a\x20\x20\x20\x20\x20•\x20*Name:*\x20','50iFmzgK','allow_videos','354452iFLnMt','icon','6NPVrga','3179034hSlegV','Please\x20provide\x20a\x20subreddit\x20name','\x0a\x0a\x20\x20\x20\x20\x20•\x20*Members:*\x20','allow_images','392pogwiq','subreddit','API\x20request\x20failed\x20with\x20status\x20','icon.jpg','tags','description','Yes','help'];_0x3a76=function(){return _0x14f06d;};return _0x3a76();}(function(_0xf82164,_0x1fe2e9){const _0x36ab20=_0x50d2,_0x46a693=_0xf82164();while(!![]){try{const _0x3266d0=-parseInt(_0x36ab20(0x20d))/0x1+parseInt(_0x36ab20(0x1f6))/0x2*(-parseInt(_0x36ab20(0x1f8))/0x3)+parseInt(_0x36ab20(0x1f0))/0x4*(-parseInt(_0x36ab20(0x205))/0x5)+parseInt(_0x36ab20(0x1f1))/0x6*(parseInt(_0x36ab20(0x1fd))/0x7)+-parseInt(_0x36ab20(0x210))/0x8+parseInt(_0x36ab20(0x1f9))/0x9+parseInt(_0x36ab20(0x1f4))/0xa*(parseInt(_0x36ab20(0x212))/0xb);if(_0x3266d0===_0x1fe2e9)break;else _0x46a693['push'](_0x46a693['shift']());}catch(_0x4f0d63){_0x46a693['push'](_0x46a693['shift']());}}}(_0x3a76,0x37865));import _0x330efb from'node-fetch';let subredditHandler=async(_0x46db2e,{conn:_0x55ad22,text:_0x34deff})=>{const _0xa9fe84=_0x50d2;if(!_0x34deff)throw _0xa9fe84(0x1fa);try{let _0x20d8f4=await _0x330efb('https://api.popcat.xyz/subreddit/'+encodeURIComponent(_0x34deff));if(!_0x20d8f4['ok'])throw new Error(_0xa9fe84(0x1ff)+_0x20d8f4[_0xa9fe84(0x20b)]);let _0x1b2a81=await _0x20d8f4['json']();console[_0xa9fe84(0x1ed)]('JSON\x20response:',_0x1b2a81);let _0x3a30e5=_0xa9fe84(0x1f3)+_0x1b2a81['name']+_0xa9fe84(0x207)+_0x1b2a81['title']+_0xa9fe84(0x20e)+_0x1b2a81[_0xa9fe84(0x206)]+_0xa9fe84(0x1fb)+_0x1b2a81[_0xa9fe84(0x20a)]+_0xa9fe84(0x208)+_0x1b2a81[_0xa9fe84(0x202)]+'\x0a\x0a\x20\x20\x20\x20\x20•\x20*Allow\x20Videos:*\x20'+(_0x1b2a81[_0xa9fe84(0x1f5)]?_0xa9fe84(0x203):'No')+'\x0a\x0a\x20\x20\x20\x20\x20•\x20*Allow\x20Images:*\x20'+(_0x1b2a81[_0xa9fe84(0x1fc)]?_0xa9fe84(0x203):'No')+'\x0a\x0a\x20\x20\x20\x20\x20•\x20*Over\x2018:*\x20'+(_0x1b2a81[_0xa9fe84(0x20c)]?_0xa9fe84(0x203):'No')+_0xa9fe84(0x20f)+_0x1b2a81[_0xa9fe84(0x1ef)];_0x1b2a81[_0xa9fe84(0x1f7)]?await _0x55ad22['sendFile'](_0x46db2e[_0xa9fe84(0x1ee)],_0x1b2a81[_0xa9fe84(0x1f7)],_0xa9fe84(0x200),_0x3a30e5,_0x46db2e):_0x46db2e[_0xa9fe84(0x209)](_0x3a30e5);}catch(_0x4f78c3){console[_0xa9fe84(0x1f2)](_0x4f78c3);}};function _0x50d2(_0x465a23,_0x9377ed){const _0x3a7669=_0x3a76();return _0x50d2=function(_0x50d2c9,_0x43a12b){_0x50d2c9=_0x50d2c9-0x1ed;let _0x26d326=_0x3a7669[_0x50d2c9];return _0x26d326;},_0x50d2(_0x465a23,_0x9377ed);}subredditHandler[_0xc421a2(0x204)]=[_0xc421a2(0x1fe)],subredditHandler[_0xc421a2(0x201)]=['tools'],subredditHandler[_0xc421a2(0x211)]=/^(subreddit|reddit)$/i;export default subredditHandler;