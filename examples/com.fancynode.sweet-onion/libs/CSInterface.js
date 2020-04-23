function CSXSWindowType(){}function Version(major,minor,micro,special){this.major=major,this.minor=minor,this.micro=micro,this.special=special}function VersionBound(version,inclusive){this.version=version,this.inclusive=inclusive}function VersionRange(lowerBound,upperBound){this.lowerBound=lowerBound,this.upperBound=upperBound}function Runtime(name,versionRange){this.name=name,this.versionRange=versionRange}function Extension(id,name,mainPath,basePath,windowType,width,height,minWidth,minHeight,maxWidth,maxHeight,defaultExtensionDataXml,specialExtensionDataXml,requiredRuntimeList,isAutoVisible,isPluginExtension){this.id=id,this.name=name,this.mainPath=mainPath,this.basePath=basePath,this.windowType=windowType,this.width=width,this.height=height,this.minWidth=minWidth,this.minHeight=minHeight,this.maxWidth=maxWidth,this.maxHeight=maxHeight,this.defaultExtensionDataXml=defaultExtensionDataXml,this.specialExtensionDataXml=specialExtensionDataXml,this.requiredRuntimeList=requiredRuntimeList,this.isAutoVisible=isAutoVisible,this.isPluginExtension=isPluginExtension}function CSEvent(type,scope,appId,extensionId){this.type=type,this.scope=scope,this.appId=appId,this.extensionId=extensionId}function SystemPath(){}function ColorType(){}function RGBColor(red,green,blue,alpha){this.red=red,this.green=green,this.blue=blue,this.alpha=alpha}function Direction(x,y){this.x=x,this.y=y}function GradientStop(offset,rgbColor){this.offset=offset,this.rgbColor=rgbColor}function GradientColor(type,direction,numStops,arrGradientStop){this.type=type,this.direction=direction,this.numStops=numStops,this.arrGradientStop=arrGradientStop}function UIColor(type,antialiasLevel,color){this.type=type,this.antialiasLevel=antialiasLevel,this.color=color}function AppSkinInfo(baseFontFamily,baseFontSize,appBarBackgroundColor,panelBackgroundColor,appBarBackgroundColorSRGB,panelBackgroundColorSRGB,systemHighlightColor){this.baseFontFamily=baseFontFamily,this.baseFontSize=baseFontSize,this.appBarBackgroundColor=appBarBackgroundColor,this.panelBackgroundColor=panelBackgroundColor,this.appBarBackgroundColorSRGB=appBarBackgroundColorSRGB,this.panelBackgroundColorSRGB=panelBackgroundColorSRGB,this.systemHighlightColor=systemHighlightColor}function HostEnvironment(appName,appVersion,appLocale,appUILocale,appId,isAppOnline,appSkinInfo){this.appName=appName,this.appVersion=appVersion,this.appLocale=appLocale,this.appUILocale=appUILocale,this.appId=appId,this.isAppOnline=isAppOnline,this.appSkinInfo=appSkinInfo}function HostCapabilities(EXTENDED_PANEL_MENU,EXTENDED_PANEL_ICONS,DELEGATE_APE_ENGINE,SUPPORT_HTML_EXTENSIONS,DISABLE_FLASH_EXTENSIONS){this.EXTENDED_PANEL_MENU=EXTENDED_PANEL_MENU,this.EXTENDED_PANEL_ICONS=EXTENDED_PANEL_ICONS,this.DELEGATE_APE_ENGINE=DELEGATE_APE_ENGINE,this.SUPPORT_HTML_EXTENSIONS=SUPPORT_HTML_EXTENSIONS,this.DISABLE_FLASH_EXTENSIONS=DISABLE_FLASH_EXTENSIONS}function ApiVersion(major,minor,micro){this.major=major,this.minor=minor,this.micro=micro}function MenuItemStatus(menuItemLabel,enabled,checked){this.menuItemLabel=menuItemLabel,this.enabled=enabled,this.checked=checked}function ContextMenuItemStatus(menuItemID,enabled,checked){this.menuItemID=menuItemID,this.enabled=enabled,this.checked=checked}function CSInterface(){}CSXSWindowType._PANEL="Panel",CSXSWindowType._MODELESS="Modeless",CSXSWindowType._MODAL_DIALOG="ModalDialog",EvalScript_ErrMessage="EvalScript error.",Version.MAX_NUM=999999999,CSEvent.prototype.data="",SystemPath.USER_DATA="userData",SystemPath.COMMON_FILES="commonFiles",SystemPath.MY_DOCUMENTS="myDocuments",SystemPath.APPLICATION="application",SystemPath.EXTENSION="extension",SystemPath.HOST_APPLICATION="hostApplication",ColorType.RGB="rgb",ColorType.GRADIENT="gradient",ColorType.NONE="none",CSInterface.THEME_COLOR_CHANGED_EVENT="com.adobe.csxs.events.ThemeColorChanged",CSInterface.prototype.hostEnvironment=JSON.parse(window.__adobe_cep__.getHostEnvironment()),CSInterface.prototype.getHostEnvironment=function(){return this.hostEnvironment=JSON.parse(window.__adobe_cep__.getHostEnvironment()),this.hostEnvironment},CSInterface.prototype.closeExtension=function(){window.__adobe_cep__.closeExtension()},CSInterface.prototype.getSystemPath=function(pathType){var path=decodeURI(window.__adobe_cep__.getSystemPath(pathType)),OSVersion=this.getOSInformation();return OSVersion.indexOf("Windows")>=0?path=path.replace("file:///",""):OSVersion.indexOf("Mac")>=0&&(path=path.replace("file://","")),path},CSInterface.prototype.evalScript=function(script,callback){null!=callback&&void 0!=callback||(callback=function(result){}),window.__adobe_cep__.evalScript(script,callback)},CSInterface.prototype.getApplicationID=function(){var appId=this.hostEnvironment.appId;return appId},CSInterface.prototype.getHostCapabilities=function(){var hostCapabilities=JSON.parse(window.__adobe_cep__.getHostCapabilities());return hostCapabilities},CSInterface.prototype.dispatchEvent=function(event){"object"==typeof event.data&&(event.data=JSON.stringify(event.data)),window.__adobe_cep__.dispatchEvent(event)},CSInterface.prototype.addEventListener=function(type,listener,obj){window.__adobe_cep__.addEventListener(type,listener,obj)},CSInterface.prototype.removeEventListener=function(type,listener,obj){window.__adobe_cep__.removeEventListener(type,listener,obj)},CSInterface.prototype.requestOpenExtension=function(extensionId,params){window.__adobe_cep__.requestOpenExtension(extensionId,params)},CSInterface.prototype.getExtensions=function(extensionIds){var extensionIdsStr=JSON.stringify(extensionIds),extensionsStr=window.__adobe_cep__.getExtensions(extensionIdsStr),extensions=JSON.parse(extensionsStr);return extensions},CSInterface.prototype.getNetworkPreferences=function(){var result=window.__adobe_cep__.getNetworkPreferences(),networkPre=JSON.parse(result);return networkPre},CSInterface.prototype.initResourceBundle=function(){for(var resourceBundle=JSON.parse(window.__adobe_cep__.initResourceBundle()),resElms=document.querySelectorAll("[data-locale]"),n=0;n<resElms.length;n++){var resEl=resElms[n],resKey=resEl.getAttribute("data-locale");if(resKey)for(var key in resourceBundle)if(0==key.indexOf(resKey)){var resValue=resourceBundle[key];if(key.length==resKey.length)resEl.innerHTML=resValue;else if("."==key.charAt(resKey.length)){var attrKey=key.substring(resKey.length+1);resEl[attrKey]=resValue}}}return resourceBundle},CSInterface.prototype.dumpInstallationInfo=function(){return window.__adobe_cep__.dumpInstallationInfo()},CSInterface.prototype.getOSInformation=function(){var userAgent=navigator.userAgent;if("Win32"==navigator.platform||"Windows"==navigator.platform){var winVersion="Windows",winBit="";return userAgent.indexOf("Windows")>-1&&(userAgent.indexOf("Windows NT 5.0")>-1?winVersion="Windows 2000 ":userAgent.indexOf("Windows NT 5.1")>-1?winVersion="Windows XP ":userAgent.indexOf("Windows NT 5.2")>-1?winVersion="Windows Server 2003 ":userAgent.indexOf("Windows NT 6.0")>-1?winVersion="Windows Vista ":userAgent.indexOf("Windows NT 6.1")>-1?winVersion="Windows 7 ":userAgent.indexOf("Windows NT 6.2")>-1&&(winVersion="Windows 8 "),winBit=userAgent.indexOf("WOW64")>-1?"64-bit":"32-bit"),winVersion+winBit}if("MacIntel"==navigator.platform||"Macintosh"==navigator.platform){var result="Mac OS X",agentStr=new String;if(agentStr=userAgent,agentStr.indexOf("Mac OS X")>-1){var verLength=agentStr.indexOf(")")-agentStr.indexOf("Mac OS X"),verStr=agentStr.substr(agentStr.indexOf("Mac OS X"),verLength);result=verStr.replace("_","."),result=result.replace("_",".")}return result}return"Unknown Operation System"},CSInterface.prototype.openURLInDefaultBrowser=function(url){return cep.util.openURLInDefaultBrowser(url)},CSInterface.prototype.getExtensionID=function(){return window.__adobe_cep__.getExtensionId()},CSInterface.prototype.getScaleFactor=function(){return window.__adobe_cep__.getScaleFactor()},CSInterface.prototype.setScaleFactorChangedHandler=function(handler){window.__adobe_cep__.setScaleFactorChangedHandler(handler)},CSInterface.prototype.getCurrentApiVersion=function(){var apiVersion=JSON.parse(window.__adobe_cep__.getCurrentApiVersion());return apiVersion},CSInterface.prototype.setPanelFlyoutMenu=function(menu){"string"==typeof menu&&window.__adobe_cep__.invokeSync("setPanelFlyoutMenu",menu)},CSInterface.prototype.updatePanelMenuItem=function(menuItemLabel,enabled,checked){var ret=!1;if(this.getHostCapabilities().EXTENDED_PANEL_MENU){var itemStatus=new MenuItemStatus(menuItemLabel,enabled,checked);ret=window.__adobe_cep__.invokeSync("updatePanelMenuItem",JSON.stringify(itemStatus))}return ret},CSInterface.prototype.setContextMenu=function(menu,callback){"string"==typeof menu&&window.__adobe_cep__.invokeAsync("setContextMenu",menu,callback)},CSInterface.prototype.setContextMenuByJSON=function(menu,callback){"string"==typeof menu&&window.__adobe_cep__.invokeAsync("setContextMenuByJSON",menu,callback)},CSInterface.prototype.updateContextMenuItem=function(menuItemID,enabled,checked){var itemStatus=new ContextMenuItemStatus(menuItemID,enabled,checked);ret=window.__adobe_cep__.invokeSync("updateContextMenuItem",JSON.stringify(itemStatus))},CSInterface.prototype.isWindowVisible=function(){return window.__adobe_cep__.invokeSync("isWindowVisible","")},CSInterface.prototype.resizeContent=function(width,height){window.__adobe_cep__.resizeContent(width,height)};