'use strict';var _0x13fad0=_0x13a8;(function(_0xc6ebb6,_0x191113){var _0x47b7a7=_0x13a8,_0x114380=_0xc6ebb6();while(!![]){try{var _0x184053=parseInt(_0x47b7a7(0x19c))/0x1+-parseInt(_0x47b7a7(0x1a1))/0x2+-parseInt(_0x47b7a7(0x19a))/0x3+-parseInt(_0x47b7a7(0x191))/0x4+parseInt(_0x47b7a7(0x1a2))/0x5+parseInt(_0x47b7a7(0x194))/0x6+-parseInt(_0x47b7a7(0x1a6))/0x7*(-parseInt(_0x47b7a7(0x1a7))/0x8);if(_0x184053===_0x191113)break;else _0x114380['push'](_0x114380['shift']());}catch(_0x2eec6c){_0x114380['push'](_0x114380['shift']());}}}(_0x8263,0xbcc0f));var __createBinding=this&&this[_0x13fad0(0x199)]||(Object['create']?function(_0x39fa40,_0x37e9d6,_0x3e07cd,_0xb26fb7){var _0x179fed=_0x13fad0;if(_0xb26fb7===undefined)_0xb26fb7=_0x3e07cd;Object[_0x179fed(0x184)](_0x39fa40,_0xb26fb7,{'enumerable':!![],'get':function(){return _0x37e9d6[_0x3e07cd];}});}:function(_0x50494f,_0x3a532a,_0x568d4b,_0x4dc251){if(_0x4dc251===undefined)_0x4dc251=_0x568d4b;_0x50494f[_0x4dc251]=_0x3a532a[_0x568d4b];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object[_0x13fad0(0x19d)]?function(_0xe6114e,_0xa5a87c){var _0x15dce6=_0x13fad0;Object[_0x15dce6(0x184)](_0xe6114e,_0x15dce6(0x183),{'enumerable':!![],'value':_0xa5a87c});}:function(_0x5432d6,_0x498d98){var _0x2124b9=_0x13fad0;_0x5432d6[_0x2124b9(0x183)]=_0x498d98;}),__importStar=this&&this[_0x13fad0(0x195)]||function(_0x59f285){var _0x4f4d7d=_0x13fad0;if(_0x59f285&&_0x59f285[_0x4f4d7d(0x1a0)])return _0x59f285;var _0x49f855={};if(_0x59f285!=null){for(var _0x221dae in _0x59f285)if(_0x221dae!==_0x4f4d7d(0x183)&&Object[_0x4f4d7d(0x180)][_0x4f4d7d(0x182)][_0x4f4d7d(0x186)](_0x59f285,_0x221dae))__createBinding(_0x49f855,_0x59f285,_0x221dae);}return __setModuleDefault(_0x49f855,_0x59f285),_0x49f855;},__importDefault=this&&this[_0x13fad0(0x18f)]||function(_0x1a8e9c){var _0x3a8299=_0x13fad0;return _0x1a8e9c&&_0x1a8e9c[_0x3a8299(0x1a0)]?_0x1a8e9c:{'default':_0x1a8e9c};};Object[_0x13fad0(0x184)](exports,'__esModule',{'value':!![]});function _0x13a8(_0x561031,_0x2c1ff7){var _0x82636=_0x8263();return _0x13a8=function(_0x13a80e,_0x1d2174){_0x13a80e=_0x13a80e-0x17f;var _0x4fee2c=_0x82636[_0x13a80e];return _0x4fee2c;},_0x13a8(_0x561031,_0x2c1ff7);}var assert_1=__importDefault(require(_0x13fad0(0x17f))),dotenv=__importStar(require(_0x13fad0(0x1a4)));dotenv[_0x13fad0(0x18a)]({'path':'.env.'+process[_0x13fad0(0x192)][_0x13fad0(0x193)]});var _a=process[_0x13fad0(0x192)],MG_SERVER=_a[_0x13fad0(0x1a5)],MG_USER=_a['MG_USER'],MG_PASSWORD=_a[_0x13fad0(0x18d)],MG_DATABASE=_a[_0x13fad0(0x198)],MG_TLS=_a[_0x13fad0(0x181)],MS_SQL_SERVER=_a[_0x13fad0(0x18e)],MS_SQL_DATABASE=_a['MS_SQL_DATABASE'],MS_SQL_USER=_a[_0x13fad0(0x18b)],MS_SQL_PASSWORD=_a[_0x13fad0(0x1a8)],MS_SQL_PORT=_a[_0x13fad0(0x185)],MY_SQL_SERVER=_a['MY_SQL_SERVER'],MY_SQL_DATABASE=_a[_0x13fad0(0x196)],MY_SQL_USER=_a[_0x13fad0(0x1a9)],MY_SQL_PASSWORD=_a[_0x13fad0(0x188)],MY_SQL_PORT=_a[_0x13fad0(0x19b)],NODE_PATH=_a[_0x13fad0(0x1a3)],NODE_ENV=_a[_0x13fad0(0x193)],sqlEncrypt=process[_0x13fad0(0x192)][_0x13fad0(0x197)]===_0x13fad0(0x19e);(0x0,assert_1['default'])(NODE_ENV,'NODE_ENV\x20configuration\x20is\x20required.'),(0x0,assert_1[_0x13fad0(0x183)])(NODE_PATH,_0x13fad0(0x190)),(0x0,assert_1[_0x13fad0(0x183)])(MG_SERVER,_0x13fad0(0x19f)),(0x0,assert_1[_0x13fad0(0x183)])(MG_USER,'MG_USER\x20configuration\x20is\x20required.'),(0x0,assert_1[_0x13fad0(0x183)])(MG_PASSWORD,_0x13fad0(0x187)),(0x0,assert_1[_0x13fad0(0x183)])(MG_DATABASE,_0x13fad0(0x18c)),exports[_0x13fad0(0x183)]={'mssql':{'server':MS_SQL_SERVER,'database':MS_SQL_DATABASE,'user':MS_SQL_USER,'password':MS_SQL_PASSWORD,'port':MS_SQL_PORT?parseInt(MS_SQL_PORT):'','options':{'encrypt':sqlEncrypt}},'mysql':{'host':MY_SQL_SERVER,'database':MY_SQL_DATABASE,'username':MY_SQL_USER,'password':MY_SQL_PASSWORD,'port':MY_SQL_PORT?parseInt(MY_SQL_PORT):'','dialect':_0x13fad0(0x189)},'mongodb':{'server':MG_SERVER,'database':MG_DATABASE,'user':MG_USER,'password':MG_PASSWORD,'tls':MG_TLS,'options':{'encrypt':sqlEncrypt}},'nodePath':NODE_PATH};function _0x8263(){var _0x22dbb=['MS_SQL_USER','MG_DATABASE\x20configuration\x20is\x20required.','MG_PASSWORD','MS_SQL_SERVER','__importDefault','NODE_PATH\x20configuration\x20is\x20required.','4675928QQKUXy','env','NODE_ENV','7734822Ywdlac','__importStar','MY_SQL_DATABASE','SQL_ENCRYPT','MG_DATABASE','__createBinding','2166732xUIAIv','MY_SQL_PORT','757955aedfTq','create','true','MG_SERVER\x20configuration\x20is\x20required.','__esModule','2376438sJHlNK','7420540thrtQF','NODE_PATH','dotenv','MG_SERVER','35YeCIJG','514208RYgKyy','MS_SQL_PASSWORD','MY_SQL_USER','assert','prototype','MG_TLS','hasOwnProperty','default','defineProperty','MS_SQL_PORT','call','MG_PASSWORD\x20configuration\x20is\x20required.','MY_SQL_PASSWORD','mysql','config'];_0x8263=function(){return _0x22dbb;};return _0x8263();}