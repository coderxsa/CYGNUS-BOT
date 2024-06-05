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

const _0xa972f4=_0x1444;(function(_0x4ac894,_0x59b30a){const _0x2abb78=_0x1444,_0x4d88b5=_0x4ac894();while(!![]){try{const _0x1dbbae=parseInt(_0x2abb78(0x175))/0x1+-parseInt(_0x2abb78(0x154))/0x2*(parseInt(_0x2abb78(0x158))/0x3)+-parseInt(_0x2abb78(0x171))/0x4*(parseInt(_0x2abb78(0x16a))/0x5)+parseInt(_0x2abb78(0x173))/0x6+-parseInt(_0x2abb78(0x153))/0x7+-parseInt(_0x2abb78(0x165))/0x8+parseInt(_0x2abb78(0x15a))/0x9;if(_0x1dbbae===_0x59b30a)break;else _0x4d88b5['push'](_0x4d88b5['shift']());}catch(_0x293fd5){_0x4d88b5['push'](_0x4d88b5['shift']());}}}(_0x755c,0x910a4));import _0x3e4d22 from'node-fetch';import{translate}from'@vitalets/google-translate-api';function _0x1444(_0x4b2469,_0x422986){const _0x755c37=_0x755c();return _0x1444=function(_0x1444d4,_0xff92cd){_0x1444d4=_0x1444d4-0x151;let _0x1ae78f=_0x755c37[_0x1444d4];return _0x1ae78f;},_0x1444(_0x4b2469,_0x422986);}let quranSurahHandler=async(_0x3b39c7,{conn:_0x1a914a})=>{const _0x1afc78=_0x1444;try{let _0x465200=_0x3b39c7['text'][_0x1afc78(0x162)]('\x20')[0x1];if(!_0x465200)throw new Error(_0x1afc78(0x16e));let _0x210851=await _0x3e4d22(_0x1afc78(0x168)),_0x31b8bf=await _0x210851['json'](),_0x1c3547=_0x31b8bf[_0x1afc78(0x166)]['find'](_0x2e2e2f=>_0x2e2e2f[_0x1afc78(0x15d)]===Number(_0x465200)||_0x2e2e2f[_0x1afc78(0x159)]['ar'][_0x1afc78(0x151)][_0x1afc78(0x156)]()===_0x465200[_0x1afc78(0x156)]()||_0x2e2e2f[_0x1afc78(0x159)]['en']['short'][_0x1afc78(0x156)]()===_0x465200[_0x1afc78(0x156)]());if(!_0x1c3547)throw new Error(_0x1afc78(0x15c)+_0x465200+'\x22');let _0x348932=await _0x3e4d22(_0x1afc78(0x167)+_0x1c3547[_0x1afc78(0x15d)]);if(!_0x348932['ok']){let _0x1b0497=await _0x348932['json']();throw new Error(_0x1afc78(0x174)+_0x348932['status']+_0x1afc78(0x16c)+_0x1b0497[_0x1afc78(0x157)]);}let _0x302dcd=await _0x348932[_0x1afc78(0x160)](),_0x39a091=await translate(_0x302dcd[_0x1afc78(0x166)][_0x1afc78(0x16b)]['id'],{'to':'ur','autoCorrect':!![]}),_0x386fdb=await translate(_0x302dcd['data']['tafsir']['id'],{'to':'en','autoCorrect':!![]}),_0x3747ce=_0x1afc78(0x15f)+_0x302dcd[_0x1afc78(0x166)][_0x1afc78(0x15d)]+':\x20'+_0x302dcd[_0x1afc78(0x166)][_0x1afc78(0x159)]['ar'][_0x1afc78(0x16d)]+'\x20('+_0x302dcd[_0x1afc78(0x166)][_0x1afc78(0x159)]['en'][_0x1afc78(0x16d)]+_0x1afc78(0x169)+_0x302dcd['data'][_0x1afc78(0x155)]['en']+_0x1afc78(0x177)+_0x302dcd[_0x1afc78(0x166)]['ayahCount']+'\x0a\x0a🔮\x20*Explanation\x20(English):*\x0a\x0a'+_0x386fdb[_0x1afc78(0x163)];_0x3b39c7[_0x1afc78(0x161)](_0x3747ce),_0x302dcd['data'][_0x1afc78(0x15b)][_0x1afc78(0x172)]&&_0x1a914a[_0x1afc78(0x170)](_0x3b39c7['chat'],_0x302dcd[_0x1afc78(0x166)]['recitation'][_0x1afc78(0x172)],_0x1afc78(0x176),null,_0x3b39c7,!![],{'type':'audioMessage','ptt':!![]});}catch(_0x3f74ac){console[_0x1afc78(0x15e)](_0x3f74ac),_0x3b39c7[_0x1afc78(0x161)]('Error:\x20'+_0x3f74ac[_0x1afc78(0x157)]);}};function _0x755c(){const _0x2b0394=['925975VQzdfk','tafsir','\x20and\x20message\x20','long','Please\x20specify\x20the\x20surah\x20number\x20or\x20name','quran\x20[surah_number|surah_name]','sendFile','20ferPtI','full','2879610cIljCy','API\x20request\x20failed\x20with\x20status\x20','1039533rnXCkq','recitation.mp3','\x0a\x0aNumber\x20of\x20verses:\x20','short','tags','6491457wmBMLA','2SPCAXu','type','toLowerCase','message','812589ETnsdQ','asma','12574989iRztZi','recitation','Couldn\x27t\x20find\x20surah\x20with\x20number\x20or\x20name\x20\x22','number','error','\x0a🕌\x20*Quran:\x20The\x20Holy\x20Book*\x0a\x0a📜\x20*Surah\x20','json','reply','split','text','quran','1587328GVZYRA','data','https://quran-endpoint.vercel.app/quran/','https://quran-endpoint.vercel.app/quran',')*\x0a\x0aType:\x20'];_0x755c=function(){return _0x2b0394;};return _0x755c();}quranSurahHandler['help']=[_0xa972f4(0x16f)],quranSurahHandler[_0xa972f4(0x152)]=[_0xa972f4(0x164),'surah'],quranSurahHandler['command']=[_0xa972f4(0x164),'surah'];export default quranSurahHandler;