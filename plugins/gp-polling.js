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

const _0x521967=_0x5bd0;(function(_0xd5d9e7,_0x2e8a0d){const _0x48f80f=_0x5bd0,_0xcea8fb=_0xd5d9e7();while(!![]){try{const _0x2f122c=parseInt(_0x48f80f(0x1f4))/0x1+-parseInt(_0x48f80f(0x1f6))/0x2*(parseInt(_0x48f80f(0x1fc))/0x3)+parseInt(_0x48f80f(0x1fb))/0x4+-parseInt(_0x48f80f(0x1fa))/0x5+parseInt(_0x48f80f(0x1f9))/0x6+-parseInt(_0x48f80f(0x203))/0x7+-parseInt(_0x48f80f(0x1fd))/0x8*(parseInt(_0x48f80f(0x207))/0x9);if(_0x2f122c===_0x2e8a0d)break;else _0xcea8fb['push'](_0xcea8fb['shift']());}catch(_0x383d32){_0xcea8fb['push'](_0xcea8fb['shift']());}}}(_0x3384,0x396f4));let handler=async(_0xadbec5,{conn:_0x3ed8c4,text:_0x580e4b,args:_0x18a204,usedPrefix:_0x496e29,command:_0x2c7f19})=>{const _0x12ccf7=_0x5bd0;let _0xfd2292=_0x580e4b['split']('|')[_0x12ccf7(0x206)](0x1);if(!_0xfd2292[0x1])throw _0x12ccf7(0x200)+_0x496e29+_0x2c7f19+_0x12ccf7(0x205);if(_0xfd2292[0xc])throw'Too\x20many\x20options,\x20Format\x0a'+_0x496e29+_0x2c7f19+'\x20hello\x20|yes|no';if(checkDuplicate(_0xfd2292))throw'Duplicate\x20options\x20in\x20the\x20message!';let _0x1fc45=_0x12ccf7(0x1f5)+_0xadbec5['name']+_0x12ccf7(0x204)+_0x580e4b[_0x12ccf7(0x202)]('|')[0x0];const _0x485b76={'name':_0x1fc45,'values':_0xfd2292,'multiselect':![],'selectableCount':0x1};await _0x3ed8c4[_0x12ccf7(0x208)](_0xadbec5['chat'],{'poll':_0x485b76});};function _0x3384(){const _0x225ad9=['poll\x20question|option|option','203009YjPsqP','*Polling\x20Request\x20By*\x20','2sDzLaA','command','group','1702218uKbjgO','1709645vufYBd','1622324BRnOnN','301467DrQYIu','1592uTpKMA','tags','size','Format\x0a','length','split','564872NzLGzY','\x0a*Message:*\x20','\x20hello\x20|yes|no','slice','6057MtKdPP','sendMessage'];_0x3384=function(){return _0x225ad9;};return _0x3384();}handler['help']=[_0x521967(0x1f3)],handler[_0x521967(0x1fe)]=[_0x521967(0x1f8)],handler[_0x521967(0x1f7)]=/^po(l((l?ing|ls)|l)|ols?)$/i;function _0x5bd0(_0x58dc30,_0x3decfc){const _0x338499=_0x3384();return _0x5bd0=function(_0x5bd05a,_0x59701c){_0x5bd05a=_0x5bd05a-0x1f3;let _0x230675=_0x338499[_0x5bd05a];return _0x230675;},_0x5bd0(_0x58dc30,_0x3decfc);}export default handler;function checkDuplicate(_0x37d060){const _0x455fca=_0x521967;return new Set(_0x37d060)[_0x455fca(0x1ff)]!==_0x37d060[_0x455fca(0x201)];}