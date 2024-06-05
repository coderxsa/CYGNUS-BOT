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

function _0x264f(){const _0x3d5c45=['file','success','4XAYDra','2214145CHIWCB','163182GJdFsk','1987728hgVlPz','isArray','tmp.','495lakJZA','files','2cEWUun','parse','231nduaLW','7093020zFaTrf','toArrayBuffer','json','POST','18460DEvugy','append','242264xHVKag','url','5579928AvsGPf','text','map','link'];_0x264f=function(){return _0x3d5c45;};return _0x264f();}(function(_0x149e3d,_0x5eea50){const _0x4cd5da=_0x3f74,_0x3f9c80=_0x149e3d();while(!![]){try{const _0xd4bbb=-parseInt(_0x4cd5da(0x10f))/0x1+parseInt(_0x4cd5da(0x106))/0x2*(-parseInt(_0x4cd5da(0x101))/0x3)+parseInt(_0x4cd5da(0xfe))/0x4*(parseInt(_0x4cd5da(0xff))/0x5)+parseInt(_0x4cd5da(0x100))/0x6*(parseInt(_0x4cd5da(0x108))/0x7)+parseInt(_0x4cd5da(0xf8))/0x8+-parseInt(_0x4cd5da(0x104))/0x9*(-parseInt(_0x4cd5da(0x10d))/0xa)+-parseInt(_0x4cd5da(0x109))/0xb;if(_0xd4bbb===_0x5eea50)break;else _0x3f9c80['push'](_0x3f9c80['shift']());}catch(_0xdb87b5){_0x3f9c80['push'](_0x3f9c80['shift']());}}}(_0x264f,0x8ff7b));import _0x5c5f0e from'node-fetch';import{FormData,Blob}from'formdata-node';import{fileTypeFromBuffer}from'file-type';function _0x3f74(_0x540e7c,_0x398bae){const _0x264f95=_0x264f();return _0x3f74=function(_0x3f7444,_0x578317){_0x3f7444=_0x3f7444-0xf7;let _0x3648f1=_0x264f95[_0x3f7444];return _0x3648f1;},_0x3f74(_0x540e7c,_0x398bae);}const fileIO=async _0x4fa5a1=>{const _0x2e8414=_0x3f74,{ext:_0x26c7cc,mime:_0x56fe92}=await fileTypeFromBuffer(_0x4fa5a1)||{};let _0x5232ff=new FormData();const _0x50c384=new Blob([_0x4fa5a1[_0x2e8414(0x10a)]()],{'type':_0x56fe92});_0x5232ff[_0x2e8414(0x10e)]('file',_0x50c384,_0x2e8414(0x103)+_0x26c7cc);let _0x2d643e=await _0x5c5f0e('https://file.io/?expires=1d',{'method':'POST','body':_0x5232ff}),_0x4ffd30=await _0x2d643e[_0x2e8414(0x10b)]();if(!_0x4ffd30[_0x2e8414(0xfd)])throw _0x4ffd30;return _0x4ffd30[_0x2e8414(0xfb)];},RESTfulAPI=async _0x313632=>{const _0x5f4fab=_0x3f74;let _0x1f6388=new FormData(),_0x2ba1de=_0x313632;if(!Array[_0x5f4fab(0x102)](_0x313632))_0x2ba1de=[_0x313632];for(let _0x57b618 of _0x2ba1de){const _0x518998=new Blob([_0x57b618[_0x5f4fab(0x10a)]()]);_0x1f6388['append'](_0x5f4fab(0xfc),_0x518998);}let _0xfc84d6=await _0x5c5f0e('https://storage.restfulapi.my.id/upload',{'method':_0x5f4fab(0x10c),'body':_0x1f6388}),_0x119624=await _0xfc84d6[_0x5f4fab(0xf9)]();try{_0x119624=JSON[_0x5f4fab(0x107)](_0x119624);if(!Array[_0x5f4fab(0x102)](_0x313632))return _0x119624[_0x5f4fab(0x105)][0x0]['url'];return _0x119624[_0x5f4fab(0x105)][_0x5f4fab(0xfa)](_0x36849c=>_0x36849c[_0x5f4fab(0xf7)]);}catch(_0x2a3ea0){throw _0x119624;}};export default async function (inp){let err=![];for(let upload of[RESTfulAPI,fileIO]){try{return await upload(inp);}catch(e){err=e;}}if(err)throw err;}