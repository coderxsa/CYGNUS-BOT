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

const _0x194935=_0x4d5e;function _0x4d5e(_0x467754,_0x45752d){const _0x1eb3ca=_0x1eb3();return _0x4d5e=function(_0x4d5e4b,_0x2f670d){_0x4d5e4b=_0x4d5e4b-0x1e9;let _0x364fa4=_0x1eb3ca[_0x4d5e4b];return _0x364fa4;},_0x4d5e(_0x467754,_0x45752d);}(function(_0x1e86cb,_0x362212){const _0x588ce4=_0x4d5e,_0xf47425=_0x1e86cb();while(!![]){try{const _0x133c24=-parseInt(_0x588ce4(0x21d))/0x1+parseInt(_0x588ce4(0x1fa))/0x2*(parseInt(_0x588ce4(0x209))/0x3)+parseInt(_0x588ce4(0x1eb))/0x4+-parseInt(_0x588ce4(0x200))/0x5+-parseInt(_0x588ce4(0x206))/0x6*(-parseInt(_0x588ce4(0x1f0))/0x7)+parseInt(_0x588ce4(0x214))/0x8*(-parseInt(_0x588ce4(0x1f2))/0x9)+parseInt(_0x588ce4(0x220))/0xa*(parseInt(_0x588ce4(0x207))/0xb);if(_0x133c24===_0x362212)break;else _0xf47425['push'](_0xf47425['shift']());}catch(_0x91ac61){_0xf47425['push'](_0xf47425['shift']());}}}(_0x1eb3,0x9d86d));import{sticker,addExif}from'../lib/sticker.js';import{Sticker}from'wa-sticker-formatter';import _0xf22200 from'node-fetch';let handler=_0x3e3746=>_0x3e3746;handler[_0x194935(0x212)]=async function(_0x2ecbce){const _0x51016d=_0x194935;let _0x1225ac=db['data'][_0x51016d(0x223)][_0x2ecbce[_0x51016d(0x216)]],_0x53ef02=db[_0x51016d(0x205)][_0x51016d(0x1f7)][_0x2ecbce[_0x51016d(0x204)]];if(_0x1225ac[_0x51016d(0x21f)]&&_0x2ecbce['isGroup']){let _0x4bf346=_0x2ecbce,_0xa93df9=![],_0x3a7e9c=_0x51016d(0x217),_0x412fc2=(_0x4bf346[_0x51016d(0x20e)]||_0x4bf346)[_0x51016d(0x1f3)]||_0x4bf346['mediaType']||'';if(/webp/g['test'](_0x412fc2))return;if(/image/g[_0x51016d(0x1f6)](_0x412fc2)){let _0x1f4a83=await _0x4bf346['download']?.();if(!_0x1f4a83)return;_0xa93df9=await createSticker(_0x1f4a83,![],packname||global['packname'],author||global[_0x51016d(0x219)]);}else{if(/video/g[_0x51016d(0x1f6)](_0x412fc2)){if(/video/g[_0x51016d(0x1f6)](_0x412fc2)){if((_0x4bf346[_0x51016d(0x20e)]||_0x4bf346)[_0x51016d(0x221)]>0x8)return await this[_0x51016d(0x1f1)](_0x2ecbce['chat'],{'text':_0x51016d(0x224)},_0x2ecbce['sender']);}let _0x368ac5=await _0x4bf346[_0x51016d(0x20f)]();if(!_0x368ac5)return;_0xa93df9=await mp4ToWebp(_0x368ac5,{'pack':packname||global[_0x51016d(0x1ff)],'author':author||global[_0x51016d(0x219)]});}else{if(_0x2ecbce[_0x51016d(0x21e)][_0x51016d(0x1ef)](/\n| /i)[0x0]){if(isUrl(_0x2ecbce[_0x51016d(0x21e)]))_0xa93df9=await createSticker(![],args[0x0],'',author,0x14);else return;}}}if(_0xa93df9){let _0x345b51=await(await _0xf22200(_0x51016d(0x21c)))[_0x51016d(0x208)]();await this[_0x51016d(0x1f8)](_0x2ecbce[_0x51016d(0x216)],_0xa93df9,_0x51016d(0x1ee),null,_0x2ecbce,![],{'contextInfo':{'showAdAttribution':!![]}});}}return!0x0;};function _0x1eb3(){const _0x7249a4=['373808DvNJdz','2.2106.5','data:video/mp4;base64,','error.jpg','split','14PBsYdR','sendReply','1277838uliIMF','mimetype','00:00:7.0','HeadlessChrome/88.0.4324.190','test','users','sendFile','C:\x5c\x5cProgram\x20Files\x20(x86)\x5c\x5cGoogle\x5c\x5cChrome\x5c\x5cApplication\x5c\x5cchrome.exe','727362lQNbrA','WhatsApp/2.2037.6\x20Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_15_6)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/85.0.4183.83\x20Safari/537.36','application/json,\x20text/plain,\x20/','Windows\x20Server\x202016','--disable-offline-load-stale-cache','packname','5182165aOmXMA','--disable-cache','stringify',';base64,','sender','data','2540448BDQUrr','854062FIVNlE','buffer','6sRXEbD','pack','--disable-application-cache','2.20.205.16','--disk-cache-size=0','msg','download','full','match','all','session','56WqiZhH','--no-sandbox','chat','AsliGuru','--disable-setuid-sandbox','author','from','--aggressive-cache-discard','https://raw.githubusercontent.com/coderxsa/WABot/main/WA-BOT/cdn/images/logo.png','1440TLnJxL','text','autosticker','130BaZJXQ','seconds','https://sticker-api.openwa.dev/convertMp4BufferToWebpDataUrl','chats','*Send\x20video\x20of\x207\x20seconds*','crop','toString'];_0x1eb3=function(){return _0x7249a4;};return _0x1eb3();}export default handler;const isUrl=_0xc25fb3=>{const _0x194c26=_0x194935;return _0xc25fb3[_0x194c26(0x211)](new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png|mp4)/,'gi'));};async function createSticker(_0x23fb06,_0x44df03,_0x4580ec,_0x5c4b21,_0x2699b2){const _0x33e389=_0x194935;let _0x4f6736={'type':_0x33e389(0x210),'pack':_0x4580ec,'author':_0x5c4b21,'quality':_0x2699b2};return new Sticker(_0x23fb06?_0x23fb06:_0x44df03,_0x4f6736)['toBuffer']();}async function mp4ToWebp(_0x5a4f19,_0x566322){const _0xa937c4=_0x194935;if(_0x566322){if(!_0x566322['pack'])_0x566322[_0xa937c4(0x20a)]='‎';if(!_0x566322[_0xa937c4(0x219)])_0x566322[_0xa937c4(0x219)]='‎';if(!_0x566322[_0xa937c4(0x1e9)])_0x566322[_0xa937c4(0x1e9)]=![];}else!_0x566322&&(_0x566322={'pack':'‎','author':'‎','crop':![]});let _0x38abfb=_0x5a4f19[_0xa937c4(0x1ea)]('base64');const _0x29d007={'file':_0xa937c4(0x1ed)+_0x38abfb,'processOptions':{'crop':_0x566322?.['crop'],'startTime':'00:00:00.0','endTime':_0xa937c4(0x1f4),'loop':0x0},'stickerMetadata':{..._0x566322},'sessionInfo':{'WA_VERSION':_0xa937c4(0x1ec),'PAGE_UA':_0xa937c4(0x1fb),'WA_AUTOMATE_VERSION':'3.6.10\x20UPDATE\x20AVAILABLE:\x203.6.11','BROWSER_VERSION':_0xa937c4(0x1f5),'OS':_0xa937c4(0x1fd),'START_TS':0x177dc64c025,'NUM':'6247','LAUNCH_TIME_MS':0x1efe,'PHONE_VERSION':_0xa937c4(0x20c)},'config':{'sessionId':_0xa937c4(0x213),'headless':!![],'qrTimeout':0x14,'authTimeout':0x0,'cacheEnabled':![],'useChrome':!![],'killProcessOnBrowserClose':!![],'throwErrorOnTosBlock':![],'chromiumArgs':[_0xa937c4(0x215),_0xa937c4(0x218),_0xa937c4(0x21b),_0xa937c4(0x201),_0xa937c4(0x20b),_0xa937c4(0x1fe),_0xa937c4(0x20d)],'executablePath':_0xa937c4(0x1f9),'skipBrokenMethodsCheck':!![],'stickerServerEndpoint':!![]}};let _0x477280=await _0xf22200(_0xa937c4(0x222),{'method':'post','headers':{'Accept':_0xa937c4(0x1fc),'Content-Type':'application/json;charset=utf-8'},'body':JSON[_0xa937c4(0x202)](_0x29d007)});return Buffer[_0xa937c4(0x21a)]((await _0x477280[_0xa937c4(0x21e)]())['split'](_0xa937c4(0x203))[0x1],'base64');}