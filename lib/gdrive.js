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

const _0x3c99cd=_0x4f81;(function(_0x2ce92f,_0x1a8dff){const _0x2a0468=_0x4f81,_0xbe96f3=_0x2ce92f();while(!![]){try{const _0x790e79=parseInt(_0x2a0468(0x176))/0x1*(parseInt(_0x2a0468(0x160))/0x2)+parseInt(_0x2a0468(0x15e))/0x3+parseInt(_0x2a0468(0x171))/0x4*(-parseInt(_0x2a0468(0x174))/0x5)+parseInt(_0x2a0468(0x16a))/0x6*(parseInt(_0x2a0468(0x177))/0x7)+-parseInt(_0x2a0468(0x164))/0x8+parseInt(_0x2a0468(0x15f))/0x9*(-parseInt(_0x2a0468(0x16b))/0xa)+-parseInt(_0x2a0468(0x167))/0xb*(-parseInt(_0x2a0468(0x16c))/0xc);if(_0x790e79===_0x1a8dff)break;else _0xbe96f3['push'](_0xbe96f3['shift']());}catch(_0x3c76bf){_0xbe96f3['push'](_0xbe96f3['shift']());}}}(_0x4e99,0x1dce6));import{join}from'path';import{promises as _0x697db2}from'fs';function _0x4e99(){const _0x4de316=['83666riZooH','OAuth2','getFolderID','804dKPvhj','30QJwBkM','12GHxdvY','emit','downloadFile','getToken','once','3100WZbpqz','token','infoFile','195OApQJP','generateAuthUrl','1iJYYnw','5509hAfoHl','auth','readFile','offline','parse','227586FRvSbL','7974CjIcAY','69014INxTvk','setCredentials','authorize','stringify','547712LcnFsn','/drive/api','http://localhost:'];_0x4e99=function(){return _0x4de316;};return _0x4e99();}import{promisify}from'util';import{google}from'googleapis';const SCOPES=['https://www.googleapis.com/auth/drive.metadata.readonly'],TOKEN_PATH=join(__dirname,'..','token.json');class GoogleAuth extends EventEmitter{constructor(){super();}async[_0x3c99cd(0x162)](_0x3f8746){const _0x2655d9=_0x3c99cd;let _0x782515;const {client_secret:_0xd9a77d,client_id:_0x82946b}=_0x3f8746,_0x1c71a2=new google[(_0x2655d9(0x15a))][(_0x2655d9(0x168))](_0x82946b,_0xd9a77d,_0x2655d9(0x166)+port);try{_0x782515=JSON[_0x2655d9(0x15d)](await _0x697db2[_0x2655d9(0x15b)](TOKEN_PATH));}catch(_0x260f8a){const _0x3abe66=_0x1c71a2[_0x2655d9(0x175)]({'access_type':_0x2655d9(0x15c),'scope':SCOPES});this[_0x2655d9(0x16d)]('auth',_0x3abe66);let _0x5025d7=await promisify(this[_0x2655d9(0x170)])['bind'](this)('token');_0x782515=await _0x1c71a2[_0x2655d9(0x16f)](_0x5025d7),await _0x697db2['writeFile'](TOKEN_PATH,JSON[_0x2655d9(0x163)](_0x782515));}finally{await _0x1c71a2[_0x2655d9(0x161)](_0x782515);}}[_0x3c99cd(0x172)](_0x5e68ad){const _0x5843ef=_0x3c99cd;this['emit'](_0x5843ef(0x172),_0x5e68ad);}}class GoogleDrive extends GoogleAuth{constructor(){const _0x2e3124=_0x3c99cd;super(),this['path']=_0x2e3124(0x165);}async[_0x3c99cd(0x169)](_0x4b6675){}async[_0x3c99cd(0x173)](_0x4bc29f){}async['folderList'](_0x2edac7){}async[_0x3c99cd(0x16e)](_0x59253f){}async['uploadFile'](_0x2c88ee){}}function _0x4f81(_0x50e06c,_0x2eab57){const _0x4e9935=_0x4e99();return _0x4f81=function(_0x4f81f6,_0x3323c5){_0x4f81f6=_0x4f81f6-0x15a;let _0x1e0819=_0x4e9935[_0x4f81f6];return _0x1e0819;},_0x4f81(_0x50e06c,_0x2eab57);}export{GoogleAuth,GoogleDrive};