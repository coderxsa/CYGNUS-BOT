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

const _0x1a569a=_0x257f;(function(_0x5146da,_0x10b547){const _0x5aba27=_0x257f,_0x52b7de=_0x5146da();while(!![]){try{const _0x2aace8=parseInt(_0x5aba27(0x16b))/0x1+parseInt(_0x5aba27(0x16a))/0x2+parseInt(_0x5aba27(0x163))/0x3+-parseInt(_0x5aba27(0x179))/0x4+-parseInt(_0x5aba27(0x165))/0x5*(-parseInt(_0x5aba27(0x16c))/0x6)+-parseInt(_0x5aba27(0x166))/0x7*(parseInt(_0x5aba27(0x177))/0x8)+parseInt(_0x5aba27(0x168))/0x9;if(_0x2aace8===_0x10b547)break;else _0x52b7de['push'](_0x52b7de['shift']());}catch(_0x18e482){_0x52b7de['push'](_0x52b7de['shift']());}}}(_0x3559,0x32646));import{readdirSync,existsSync,readFileSync,watch}from'fs';import{join,resolve}from'path';function _0x3559(){const _0x24d55f=['map','47065aFiCKD','434unjuXP','__filename','1311750auhJKj','indexOf','216262sQVGHP','91201RQluYb','30bhTISn','fromEntries','bind','error','warn','error\x20require\x20plugin\x20\x27','default','syntax\x20error\x20while\x20loading\x20\x27','logger','__dirname','splice','8312amKUfi','push','1042544PCEBvC','\x20updated\x20plugin\x20-\x20\x27','filter','info','../plugins/index','test','close','catch','417939PJuljp'];_0x3559=function(){return _0x24d55f;};return _0x3559();}import{format}from'util';function _0x257f(_0x1c27c2,_0x43c427){const _0x355968=_0x3559();return _0x257f=function(_0x257fcc,_0x325480){_0x257fcc=_0x257fcc-0x15e;let _0x59a4fe=_0x355968[_0x257fcc];return _0x59a4fe;},_0x257f(_0x1c27c2,_0x43c427);}import _0x5c3446 from'syntax-error';import _0x198cef from'./import.js';import _0x240c40 from'./helper.js';const __dirname=_0x240c40[_0x1a569a(0x175)](import.meta),pluginFolder=_0x240c40[_0x1a569a(0x175)](join(__dirname,_0x1a569a(0x15f))),pluginFilter=_0xb1ae68=>/\.(mc)?js$/[_0x1a569a(0x160)](_0xb1ae68);let watcher,plugins,pluginFolders=[];watcher=plugins={};async function filesInit(_0x3900f1=_0x3900f1,_0x4920da=_0x4920da,_0x1fdc9b){const _0x363887=_0x1a569a,_0x23b496=resolve(_0x3900f1);if(_0x23b496 in watcher)return;pluginFolders[_0x363887(0x178)](_0x23b496),await Promise['all'](readdirSync(_0x23b496)[_0x363887(0x17b)](_0x4920da)[_0x363887(0x164)](async _0x215e33=>{const _0x40cc88=_0x363887;try{let _0x4808a7=global['__filename'](join(_0x23b496,_0x215e33));const _0x9a28d6=await import(_0x4808a7);if(_0x9a28d6)plugins[_0x215e33]=_0x40cc88(0x172)in _0x9a28d6?_0x9a28d6[_0x40cc88(0x172)]:_0x9a28d6;}catch(_0x836c85){_0x1fdc9b?.[_0x40cc88(0x174)][_0x40cc88(0x16f)](_0x836c85),delete plugins[_0x215e33];}}));const _0x55e258=watch(_0x23b496,reload[_0x363887(0x16e)](null,_0x1fdc9b,_0x23b496,_0x4920da));return _0x55e258['on'](_0x363887(0x161),()=>deletePluginFolder(_0x23b496,!![])),watcher[_0x23b496]=_0x55e258,plugins;}function deletePluginFolder(_0x183caa,_0x4eb733=![]){const _0x1bfb8d=_0x1a569a,_0x2860a8=resolve(_0x183caa);if(!(_0x2860a8 in watcher))return;if(!_0x4eb733)watcher[_0x2860a8]['close']();delete watcher[_0x2860a8],pluginFolders[_0x1bfb8d(0x176)](pluginFolders[_0x1bfb8d(0x169)](_0x2860a8),0x1);}async function reload(_0x40bdbc,_0xae706d=_0xae706d,_0x1f25cf=_0x1f25cf,_0x23bfad,_0x47a0b3){const _0x5e3465=_0x1a569a;if(_0x1f25cf(_0x47a0b3)){let _0x2368d2=global['__filename'](join(_0xae706d,_0x47a0b3),!![]);if(_0x47a0b3 in plugins){if(existsSync(_0x2368d2))_0x40bdbc['logger'][_0x5e3465(0x15e)](_0x5e3465(0x17a)+_0x47a0b3+'\x27');else return _0x40bdbc?.['logger'][_0x5e3465(0x170)]('deleted\x20plugin\x20-\x20\x27'+_0x47a0b3+'\x27'),delete plugins[_0x47a0b3];}else _0x40bdbc?.[_0x5e3465(0x174)][_0x5e3465(0x15e)]('new\x20plugin\x20-\x20\x27'+_0x47a0b3+'\x27');let _0x37a883=_0x5c3446(readFileSync(_0x2368d2),_0x47a0b3,{'sourceType':'module','allowAwaitOutsideFunction':!![]});if(_0x37a883)_0x40bdbc['logger'][_0x5e3465(0x16f)](_0x5e3465(0x173)+_0x47a0b3+'\x27\x0a'+format(_0x37a883));else try{const _0x46981a=await _0x198cef(global[_0x5e3465(0x167)](_0x2368d2))[_0x5e3465(0x162)](console['error']);if(_0x46981a)plugins[_0x47a0b3]=_0x46981a;}catch(_0x1c7e8f){_0x40bdbc?.[_0x5e3465(0x174)]['error'](_0x5e3465(0x171)+_0x47a0b3+'\x0a'+format(_0x1c7e8f)+'\x27');}finally{plugins=Object[_0x5e3465(0x16d)](Object['entries'](plugins)['sort'](([_0x96b319],[_0x44e6db])=>_0x96b319['localeCompare'](_0x44e6db)));}}}export{pluginFolder,pluginFilter,plugins,watcher,pluginFolders,filesInit,deletePluginFolder,reload};