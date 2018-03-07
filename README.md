# Linkedin-Ninja
Bookmarklet for adding filtering &amp; sorting to LinkedIn's 'People you may know'

![Linkedin Filter controls](bookmarklet/linkedinfilter.jpg)

## Features
* Load 100+ profiles by clicking a button
* Filter results by keyword (name & job title)
* Sort by number of shared connections

## Bookmarklet code
Go to the [bookmarklet page](https://jasonday.github.io/Linkedin-Ninja/) to get a link to add to your bookmarks or create a new bookmark and copy/paste the code below.  

```javascript
javascript:(function(){function%20initLinkedIn(){(window.linkedinfilter=function(){window.console%26%26console.log(%22LinkedIn%20filter%20%26%20sort%20init%22),$(%22head%22).append(%22%3Cstyle%3E.linked-interest{padding:16px%2012px!important}.linked-interest%20.button{height:30px}%23li-load::after{content:'.';visibility:hidden;display:block;height:0;clear:both}.li-container{content:'';display:none;position:fixed;top:0;left:0;width:100%25;height:100%25;background-color:rgba(0,132,191,.8);z-index:9998}.li-group{height:0;width:0;position:absolute;line-height:16px;margin:auto;top:0;right:0;bottom:0;left:0}.big-square{position:relative;display:inline-block;width:40px;height:40px;margin:5px;overflow:hidden;-webkit-transform-origin:bottom%20left;transform-origin:bottom%20left;-webkit-animation:bigSqrShrink%201s%20linear%20infinite;animation:bigSqrShrink%201s%20linear%20infinite}.li-square{position:absolute;width:20px;height:20px;background:%23FFF}.li-first{left:0;top:20px}.li-second{left:20px;top:20px;-webkit-animation:drop2%201s%20linear%20infinite;animation:drop2%201s%20linear%20infinite}.li-third{left:0;top:0;-webkit-animation:drop3%201s%20linear%20infinite;animation:drop3%201s%20linear%20infinite}.li-fourth{left:20px;top:0;-webkit-animation:drop4%201s%20linear%20infinite;animation:drop4%201s%20linear%20infinite}.li-text{font-family:sans-serif;font-weight:400;color:%23FFF;display:block;margin:0%20auto}%40-webkit-keyframes%20bigSqrShrink{0%25,90%25{-webkit-transform:scale(1);transform:scale(1)}100%25{-webkit-transform:scale(.5);transform:scale(.5)}}%40keyframes%20bigSqrShrink{0%25,90%25{-webkit-transform:scale(1);transform:scale(1)}100%25{-webkit-transform:scale(.5);transform:scale(.5)}}%40-webkit-keyframes%20drop2{0%25{-webkit-transform:translateY(-50px);transform:translateY(-50px)}100%25,25%25{-webkit-transform:translate(0);transform:translate(0)}}%40keyframes%20drop2{0%25{-webkit-transform:translateY(-50px);transform:translateY(-50px)}100%25,25%25{-webkit-transform:translate(0);transform:translate(0)}}%40-webkit-keyframes%20drop3{0%25{-webkit-transform:translateY(-50px);transform:translateY(-50px)}100%25,50%25{-webkit-transform:translate(0);transform:translate(0)}}%40keyframes%20drop3{0%25{-webkit-transform:translateY(-50px);transform:translateY(-50px)}100%25,50%25{-webkit-transform:translate(0);transform:translate(0)}}%40-webkit-keyframes%20drop4{0%25{-webkit-transform:translateY(-50px);transform:translateY(-50px)}100%25,75%25{-webkit-transform:translate(0);transform:translate(0)}}%40keyframes%20drop4{0%25{-webkit-transform:translateY(-50px);transform:translateY(-50px)}100%25,75%25{-webkit-transform:translate(0);transform:translate(0)}}.li-clear{margin:0%2010px%200%20-35px;vertical-align:middle;padding:5px}.li-search{height:30px!important;max-width:185px!important;margin:0%2010px}.linked-interest%20.button.asc,.linked-interest%20.button.desc{padding:0%2012px}.linked-interest%20.button.asc::before{content:'\\25b4'}.linked-interest%20.button.desc::before{content:'\\25be'}.li-clear[disabled]{opacity:.3}%3C/style%3E%22);var%20container=%22%3Cdiv%20class='linked-interest%20container%20ph20'%20role='toolbar'%3E%3C/div%3E%22,loadMore=%22%3Cbutton%20id='li-load'%20class='button%20button-primary-small'%3ELoad%20100+%20profiles%3C/button%3E%22,heading=%22%3Ch4%20class='visually-hidden'%3EFilter%20%26%20Sort%3C/h4%3E%22,spinner=%22%3Cdiv%20class='li-container'%3E%3Cdiv%20class='li-group'%3E%3Cdiv%20class='big-square'%3E%3Cdiv%20class='li-square%20.li-group%20li-first'%3E%3C/div%3E%3Cdiv%20class='li-square%20li-second'%3E%3C/div%3E%3Cdiv%20class='li-square%20li-third'%3E%3C/div%3E%3Cdiv%20class='li-square%20li-fourth'%3E%3C/div%3E%3C/div%3E%3Cdiv%20class='li-text'%3Eloading%3C/div%3E%3C/div%3E%3C/div%3E%22,search=%22%3Cinput%20type='text'%20class='li-search%20search'%20placeholder='Filter%20by%20keyword'%20aria-label='filter%20by%20keyword'%20disabled='true'/%3E%3Cbutton%20class='li-clear'%20disabled='true'%3E%3Csvg%20width='12'%20height='12'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3EClear%20search%3C/title%3E%3Cline%20x1='1'%20y1='11'%20x2='11'%20y2='1'%20stroke='black'%20stroke-width='2'/%3E%3Cline%20x1='1'%20y1='1'%20x2='11'%20y2='11'%20stroke='black'%20stroke-width='2'/%3E%3C/svg%3E%3C/button%3E%22,connection=%22%3Cbutton%20class='li-connection%20sort%20button%20button-secondary-small'%20data-sort='li-connection-count'%20disabled='true'%3ESort%20by%20%23%20connections%3C/button%3E%22;$(container).insertBefore(%22.mn-pymk-list__cards%22),$(%22.linked-interest%22).append(heading,loadMore,search,connection),$(%22body%22).append(spinner);var%20List=function(modules){function%20__webpack_require__(moduleId){if(installedModules[moduleId])return%20installedModules[moduleId].exports;var%20module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return%20modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var%20installedModules={};return%20__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return%20value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var%20getter=module%26%26module.__esModule%3Ffunction(){return%20module[%22default%22]}:function(){return%20module};return%20__webpack_require__.d(getter,%22a%22,getter),getter},__webpack_require__.o=function(object,property){return%20Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p=%22%22,__webpack_require__(__webpack_require__.s=11)}([function(module,exports,__webpack_require__){function%20ClassList(el){if(!el||!el.nodeType)throw%20new%20Error(%22A%20DOM%20element%20reference%20is%20required%22);this.el=el,this.list=el.classList}{var%20index=__webpack_require__(4),re=/\s+/;Object.prototype.toString}module.exports=function(el){return%20new%20ClassList(el)},ClassList.prototype.add=function(name){if(this.list)return%20this.list.add(name),this;var%20arr=this.array(),i=index(arr,name);return~i||arr.push(name),this.el.className=arr.join(%22%20%22),this},ClassList.prototype.remove=function(name){if(this.list)return%20this.list.remove(name),this;var%20arr=this.array(),i=index(arr,name);return~i%26%26arr.splice(i,1),this.el.className=arr.join(%22%20%22),this},ClassList.prototype.toggle=function(name,force){return%20this.list%3F(%22undefined%22!=typeof%20force%3Fforce!==this.list.toggle(name,force)%26%26this.list.toggle(name):this.list.toggle(name),this):(%22undefined%22!=typeof%20force%3Fforce%3Fthis.add(name):this.remove(name):this.has(name)%3Fthis.remove(name):this.add(name),this)},ClassList.prototype.array=function(){var%20className=this.el.getAttribute(%22class%22)||%22%22,str=className.replace(/^\s+|\s+$/g,%22%22),arr=str.split(re);return%22%22===arr[0]%26%26arr.shift(),arr},ClassList.prototype.has=ClassList.prototype.contains=function(name){return%20this.list%3Fthis.list.contains(name):!!~index(this.array(),name)}},function(module,exports,__webpack_require__){var%20bind=window.addEventListener%3F%22addEventListener%22:%22attachEvent%22,unbind=window.removeEventListener%3F%22removeEventListener%22:%22detachEvent%22,prefix=%22addEventListener%22!==bind%3F%22on%22:%22%22,toArray=__webpack_require__(5);exports.bind=function(el,type,fn,capture){el=toArray(el);for(var%20i=0;i%3Cel.length;i++)el[i][bind](prefix+type,fn,capture||!1)},exports.unbind=function(el,type,fn,capture){el=toArray(el);for(var%20i=0;i%3Cel.length;i++)el[i][unbind](prefix+type,fn,capture||!1)}},function(module,exports){module.exports=function(list){return%20function(initValues,element,notCreate){var%20item=this;this._values={},this.found=!1,this.filtered=!1;var%20init=function(initValues,element,notCreate){if(void%200===element)notCreate%3Fitem.values(initValues,notCreate):item.values(initValues);else{item.elm=element;var%20values=list.templater.get(item,initValues);item.values(values)}};this.values=function(newValues,notCreate){if(void%200===newValues)return%20item._values;for(var%20name%20in%20newValues)item._values[name]=newValues[name];notCreate!==!0%26%26list.templater.set(item,item.values())},this.show=function(){list.templater.show(item)},this.hide=function(){list.templater.hide(item)},this.matching=function(){return%20list.filtered%26%26list.searched%26%26item.found%26%26item.filtered||list.filtered%26%26!list.searched%26%26item.filtered||!list.filtered%26%26list.searched%26%26item.found||!list.filtered%26%26!list.searched},this.visible=function(){return%20item.elm%26%26item.elm.parentNode==list.list%3F!0:!1},init(initValues,element,notCreate)}}},function(module,exports){var%20getElementsByClassName=function(container,className,single){return%20single%3Fcontainer.getElementsByClassName(className)[0]:container.getElementsByClassName(className)},querySelector=function(container,className,single){return%20className=%22.%22+className,single%3Fcontainer.querySelector(className):container.querySelectorAll(className)},polyfill=function(container,className,single){for(var%20classElements=[],tag=%22*%22,els=container.getElementsByTagName(tag),elsLen=els.length,pattern=new%20RegExp(%22(^|\\s)%22+className+%22(\\s|$)%22),i=0,j=0;elsLen%3Ei;i++)if(pattern.test(els[i].className)){if(single)return%20els[i];classElements[j]=els[i],j++}return%20classElements};module.exports=function(){return%20function(container,className,single,options){return%20options=options||{},options.test%26%26options.getElementsByClassName||!options.test%26%26document.getElementsByClassName%3FgetElementsByClassName(container,className,single):options.test%26%26options.querySelector||!options.test%26%26document.querySelector%3FquerySelector(container,className,single):polyfill(container,className,single)}}()},function(module,exports){var%20indexOf=[].indexOf;module.exports=function(arr,obj){if(indexOf)return%20arr.indexOf(obj);for(var%20i=0;i%3Carr.length;++i)if(arr[i]===obj)return%20i;return-1}},function(module,exports){function%20isArray(arr){return%22[object%20Array]%22===Object.prototype.toString.call(arr)}module.exports=function(collection){if(%22undefined%22==typeof%20collection)return[];if(null===collection)return[null];if(collection===window)return[window];if(%22string%22==typeof%20collection)return[collection];if(isArray(collection))return%20collection;if(%22number%22!=typeof%20collection.length)return[collection];if(%22function%22==typeof%20collection%26%26collection%20instanceof%20Function)return[collection];for(var%20arr=[],i=0;i%3Ccollection.length;i++)(Object.prototype.hasOwnProperty.call(collection,i)||i%20in%20collection)%26%26arr.push(collection[i]);return%20arr.length%3Farr:[]}},function(module,exports){module.exports=function(s){return%20s=void%200===s%3F%22%22:s,s=null===s%3F%22%22:s,s=s.toString()}},function(module,exports){module.exports=function(object){for(var%20source,args=Array.prototype.slice.call(arguments,1),i=0;source=args[i];i++)if(source)for(var%20property%20in%20source)object[property]=source[property];return%20object}},function(module,exports){module.exports=function(list){var%20addAsync=function(values,callback,items){var%20valuesToAdd=values.splice(0,50);items=items||[],items=items.concat(list.add(valuesToAdd)),values.length%3E0%3FsetTimeout(function(){addAsync(values,callback,items)},1):(list.update(),callback(items))};return%20addAsync}},function(module,exports){module.exports=function(list){return%20list.handlers.filterStart=list.handlers.filterStart||[],list.handlers.filterComplete=list.handlers.filterComplete||[],function(filterFunction){if(list.trigger(%22filterStart%22),list.i=1,list.reset.filter(),void%200===filterFunction)list.filtered=!1;else{list.filtered=!0;for(var%20is=list.items,i=0,il=is.length;il%3Ei;i++){var%20item=is[i];filterFunction(item)%3Fitem.filtered=!0:item.filtered=!1}}return%20list.update(),list.trigger(%22filterComplete%22),list.visibleItems}}},function(module,exports,__webpack_require__){var%20events=(__webpack_require__(0),__webpack_require__(1)),extend=__webpack_require__(7),toString=__webpack_require__(6),getByClass=__webpack_require__(3),fuzzy=__webpack_require__(19);module.exports=function(list,options){options=options||{},options=extend({location:0,distance:100,threshold:.4,multiSearch:!0,searchClass:%22fuzzy-search%22},options);var%20fuzzySearch={search:function(searchString,columns){for(var%20searchArguments=options.multiSearch%3FsearchString.replace(/%20+$/,%22%22).split(/%20+/):[searchString],k=0,kl=list.items.length;kl%3Ek;k++)fuzzySearch.item(list.items[k],columns,searchArguments)},item:function(item,columns,searchArguments){for(var%20found=!0,i=0;i%3CsearchArguments.length;i++){for(var%20foundArgument=!1,j=0,jl=columns.length;jl%3Ej;j++)fuzzySearch.values(item.values(),columns[j],searchArguments[i])%26%26(foundArgument=!0);foundArgument||(found=!1)}item.found=found},values:function(values,value,searchArgument){if(values.hasOwnProperty(value)){var%20text=toString(values[value]).toLowerCase();if(fuzzy(text,searchArgument,options))return!0}return!1}};return%20events.bind(getByClass(list.listContainer,options.searchClass),%22keyup%22,function(e){var%20target=e.target||e.srcElement;list.search(target.value,fuzzySearch.search)}),function(str,columns){list.search(str,columns,fuzzySearch.search)}}},function(module,exports,__webpack_require__){var%20naturalSort=__webpack_require__(18),getByClass=__webpack_require__(3),extend=__webpack_require__(7),indexOf=__webpack_require__(4),events=__webpack_require__(1),toString=__webpack_require__(6),classes=__webpack_require__(0),getAttribute=__webpack_require__(17),toArray=__webpack_require__(5);module.exports=function(id,options,values){var%20init,self=this,Item=__webpack_require__(2)(self),addAsync=__webpack_require__(8)(self),initPagination=__webpack_require__(12)(self);init={start:function(){self.listClass=%22list%22,self.searchClass=%22search%22,self.sortClass=%22sort%22,self.page=1e4,self.i=1,self.items=[],self.visibleItems=[],self.matchingItems=[],self.searched=!1,self.filtered=!1,self.searchColumns=void%200,self.handlers={updated:[]},self.valueNames=[],self.utils={getByClass:getByClass,extend:extend,indexOf:indexOf,events:events,toString:toString,naturalSort:naturalSort,classes:classes,getAttribute:getAttribute,toArray:toArray},self.utils.extend(self,options),self.listContainer=%22string%22==typeof%20id%3Fdocument.getElementById(id):id,self.listContainer%26%26(self.list=getByClass(self.listContainer,self.listClass,!0),self.parse=__webpack_require__(13)(self),self.templater=__webpack_require__(16)(self),self.search=__webpack_require__(14)(self),self.filter=__webpack_require__(9)(self),self.sort=__webpack_require__(15)(self),self.fuzzySearch=__webpack_require__(10)(self,options.fuzzySearch),this.handlers(),this.items(),this.pagination(),self.update())},handlers:function(){for(var%20handler%20in%20self.handlers)self[handler]%26%26self.on(handler,self[handler])},items:function(){self.parse(self.list),void%200!==values%26%26self.add(values)},pagination:function(){if(void%200!==options.pagination){options.pagination===!0%26%26(options.pagination=[{}]),void%200===options.pagination[0]%26%26(options.pagination=[options.pagination]);for(var%20i=0,il=options.pagination.length;il%3Ei;i++)initPagination(options.pagination[i])}}},this.reIndex=function(){self.items=[],self.visibleItems=[],self.matchingItems=[],self.searched=!1,self.filtered=!1,self.parse(self.list)},this.toJSON=function(){for(var%20json=[],i=0,il=self.items.length;il%3Ei;i++)json.push(self.items[i].values());return%20json},this.add=function(values,callback){if(0!==values.length){if(callback)return%20void%20addAsync(values,callback);var%20added=[],notCreate=!1;void%200===values[0]%26%26(values=[values]);for(var%20i=0,il=values.length;il%3Ei;i++){var%20item=null;notCreate=self.items.length%3Eself.page%3F!0:!1,item=new%20Item(values[i],void%200,notCreate),self.items.push(item),added.push(item)}return%20self.update(),added}},this.show=function(i,page){return%20this.i=i,this.page=page,self.update(),self},this.remove=function(valueName,value,options){for(var%20found=0,i=0,il=self.items.length;il%3Ei;i++)self.items[i].values()[valueName]==value%26%26(self.templater.remove(self.items[i],options),self.items.splice(i,1),il--,i--,found++);return%20self.update(),found},this.get=function(valueName,value){for(var%20matchedItems=[],i=0,il=self.items.length;il%3Ei;i++){var%20item=self.items[i];item.values()[valueName]==value%26%26matchedItems.push(item)}return%20matchedItems},this.size=function(){return%20self.items.length},this.clear=function(){return%20self.templater.clear(),self.items=[],self},this.on=function(event,callback){return%20self.handlers[event].push(callback),self},this.off=function(event,callback){var%20e=self.handlers[event],index=indexOf(e,callback);return%20index%3E-1%26%26e.splice(index,1),self},this.trigger=function(event){for(var%20i=self.handlers[event].length;i--;)self.handlers[event][i](self);return%20self},this.reset={filter:function(){for(var%20is=self.items,il=is.length;il--;)is[il].filtered=!1;return%20self},search:function(){for(var%20is=self.items,il=is.length;il--;)is[il].found=!1;return%20self}},this.update=function(){var%20is=self.items,il=is.length;self.visibleItems=[],self.matchingItems=[],self.templater.clear();for(var%20i=0;il%3Ei;i++)is[i].matching()%26%26self.matchingItems.length+1%3E=self.i%26%26self.visibleItems.length%3Cself.page%3F(is[i].show(),self.visibleItems.push(is[i]),self.matchingItems.push(is[i])):is[i].matching()%3F(self.matchingItems.push(is[i]),is[i].hide()):is[i].hide();return%20self.trigger(%22updated%22),self},init.start()}},function(module,exports,__webpack_require__){var%20classes=__webpack_require__(0),events=__webpack_require__(1),List=__webpack_require__(11);module.exports=function(list){var%20refresh=function(pagingList,options){var%20item,l=list.matchingItems.length,index=list.i,page=list.page,pages=Math.ceil(l/page),currentPage=Math.ceil(index/page),innerWindow=options.innerWindow||2,left=options.left||options.outerWindow||0,right=options.right||options.outerWindow||0;right=pages-right,pagingList.clear();for(var%20i=1;pages%3E=i;i++){var%20className=currentPage===i%3F%22active%22:%22%22;is.number(i,left,right,currentPage,innerWindow)%3F(item=pagingList.add({page:i,dotted:!1})[0],className%26%26classes(item.elm).add(className),addEvent(item.elm,i,page)):is.dotted(pagingList,i,left,right,currentPage,innerWindow,pagingList.size())%26%26(item=pagingList.add({page:%22...%22,dotted:!0})[0],classes(item.elm).add(%22disabled%22))}},is={number:function(i,left,right,currentPage,innerWindow){return%20this.left(i,left)||this.right(i,right)||this.innerWindow(i,currentPage,innerWindow)},left:function(i,left){return%20left%3E=i},right:function(i,right){return%20i%3Eright},innerWindow:function(i,currentPage,innerWindow){return%20i%3E=currentPage-innerWindow%26%26currentPage+innerWindow%3E=i},dotted:function(pagingList,i,left,right,currentPage,innerWindow,currentPageItem){return%20this.dottedLeft(pagingList,i,left,right,currentPage,innerWindow)||this.dottedRight(pagingList,i,left,right,currentPage,innerWindow,currentPageItem)},dottedLeft:function(pagingList,i,left,right,currentPage,innerWindow){return%20i==left+1%26%26!this.innerWindow(i,currentPage,innerWindow)%26%26!this.right(i,right)},dottedRight:function(pagingList,i,left,right,currentPage,innerWindow,currentPageItem){return%20pagingList.items[currentPageItem-1].values().dotted%3F!1:i==right%26%26!this.innerWindow(i,currentPage,innerWindow)%26%26!this.right(i,right)}},addEvent=function(elm,i,page){events.bind(elm,%22click%22,function(){list.show((i-1)*page+1,page)})};return%20function(options){var%20pagingList=new%20List(list.listContainer.id,{listClass:options.paginationClass||%22pagination%22,item:%22%3Cli%3E%3Ca%20class='page'%20href='javascript:function%20Z(){Z=\%22\%22}Z()'%3E%3C/a%3E%3C/li%3E%22,valueNames:[%22page%22,%22dotted%22],searchClass:%22pagination-search-that-is-not-supposed-to-exist%22,sortClass:%22pagination-sort-that-is-not-supposed-to-exist%22});list.on(%22updated%22,function(){refresh(pagingList,options)}),refresh(pagingList,options)}}},function(module,exports,__webpack_require__){module.exports=function(list){var%20Item=__webpack_require__(2)(list),getChildren=function(parent){for(var%20nodes=parent.childNodes,items=[],i=0,il=nodes.length;il%3Ei;i++)void%200===nodes[i].data%26%26items.push(nodes[i]);return%20items},parse=function(itemElements,valueNames){for(var%20i=0,il=itemElements.length;il%3Ei;i++)list.items.push(new%20Item(valueNames,itemElements[i]))},parseAsync=function(itemElements,valueNames){var%20itemsToIndex=itemElements.splice(0,50);parse(itemsToIndex,valueNames),itemElements.length%3E0%3FsetTimeout(function(){parseAsync(itemElements,valueNames)},1):(list.update(),list.trigger(%22parseComplete%22))};return%20list.handlers.parseComplete=list.handlers.parseComplete||[],function(){var%20itemsToIndex=getChildren(list.list),valueNames=list.valueNames;list.indexAsync%3FparseAsync(itemsToIndex,valueNames):parse(itemsToIndex,valueNames)}}},function(module,exports){module.exports=function(list){var%20text,columns,searchString,customSearch,prepare={resetList:function(){list.i=1,list.templater.clear(),customSearch=void%200},setOptions:function(args){2==args.length%26%26args[1]instanceof%20Array%3Fcolumns=args[1]:2==args.length%26%26%22function%22==typeof%20args[1]%3F(columns=void%200,customSearch=args[1]):3==args.length%3F(columns=args[1],customSearch=args[2]):columns=void%200},setColumns:function(){0!==list.items.length%26%26void%200===columns%26%26(columns=void%200===list.searchColumns%3Fprepare.toArray(list.items[0].values()):list.searchColumns)},setSearchString:function(s){s=list.utils.toString(s).toLowerCase(),s=s.replace(/[-[\]{}()*+%3F.,\\^$|%23]/g,%22\\$%26%22),searchString=s},toArray:function(values){var%20tmpColumn=[];for(var%20name%20in%20values)tmpColumn.push(name);return%20tmpColumn}},search={list:function(){for(var%20k=0,kl=list.items.length;kl%3Ek;k++)search.item(list.items[k])},item:function(item){item.found=!1;for(var%20j=0,jl=columns.length;jl%3Ej;j++)if(search.values(item.values(),columns[j]))return%20void(item.found=!0)},values:function(values,column){return%20values.hasOwnProperty(column)%26%26(text=list.utils.toString(values[column]).toLowerCase(),%22%22!==searchString%26%26text.search(searchString)%3E-1)%3F!0:!1},reset:function(){list.reset.search(),list.searched=!1}},searchMethod=function(str){return%20list.trigger(%22searchStart%22),prepare.resetList(),prepare.setSearchString(str),prepare.setOptions(arguments),prepare.setColumns(),%22%22===searchString%3Fsearch.reset():(list.searched=!0,customSearch%3FcustomSearch(searchString,columns):search.list()),list.update(),list.trigger(%22searchComplete%22),list.visibleItems};return%20list.handlers.searchStart=list.handlers.searchStart||[],list.handlers.searchComplete=list.handlers.searchComplete||[],list.utils.events.bind(list.utils.getByClass(list.listContainer,list.searchClass),%22keyup%22,function(e){var%20target=e.target||e.srcElement,alreadyCleared=%22%22===target.value%26%26!list.searched;alreadyCleared||searchMethod(target.value)}),list.utils.events.bind(list.utils.getByClass(list.listContainer,list.searchClass),%22input%22,function(e){var%20target=e.target||e.srcElement;%22%22===target.value%26%26searchMethod(%22%22)}),searchMethod}},function(module,exports){module.exports=function(list){var%20buttons={els:void%200,clear:function(){for(var%20i=0,il=buttons.els.length;il%3Ei;i++)list.utils.classes(buttons.els[i]).remove(%22asc%22),list.utils.classes(buttons.els[i]).remove(%22desc%22)},getOrder:function(btn){var%20predefinedOrder=list.utils.getAttribute(btn,%22data-order%22);return%22asc%22==predefinedOrder||%22desc%22==predefinedOrder%3FpredefinedOrder:list.utils.classes(btn).has(%22desc%22)%3F%22asc%22:list.utils.classes(btn).has(%22asc%22)%3F%22desc%22:%22asc%22},getInSensitive:function(btn,options){var%20insensitive=list.utils.getAttribute(btn,%22data-insensitive%22);%22false%22===insensitive%3Foptions.insensitive=!1:options.insensitive=!0},setOrder:function(options){for(var%20i=0,il=buttons.els.length;il%3Ei;i++){var%20btn=buttons.els[i];if(list.utils.getAttribute(btn,%22data-sort%22)===options.valueName){var%20predefinedOrder=list.utils.getAttribute(btn,%22data-order%22);%22asc%22==predefinedOrder||%22desc%22==predefinedOrder%3FpredefinedOrder==options.order%26%26list.utils.classes(btn).add(options.order):list.utils.classes(btn).add(options.order)}}}},sort=function(){list.trigger(%22sortStart%22);var%20options={},target=arguments[0].currentTarget||arguments[0].srcElement||void%200;target%3F(options.valueName=list.utils.getAttribute(target,%22data-sort%22),buttons.getInSensitive(target,options),options.order=buttons.getOrder(target)):(options=arguments[1]||options,options.valueName=arguments[0],options.order=options.order||%22asc%22,options.insensitive=%22undefined%22==typeof%20options.insensitive%3F!0:options.insensitive),buttons.clear(),buttons.setOrder(options);var%20sortFunction,customSortFunction=options.sortFunction||list.sortFunction||null,multi=%22desc%22===options.order%3F-1:1;sortFunction=customSortFunction%3Ffunction(itemA,itemB){return%20customSortFunction(itemA,itemB,options)*multi}:function(itemA,itemB){var%20sort=list.utils.naturalSort;return%20sort.alphabet=list.alphabet||options.alphabet||void%200,!sort.alphabet%26%26options.insensitive%26%26(sort=list.utils.naturalSort.caseInsensitive),sort(itemA.values()[options.valueName],itemB.values()[options.valueName])*multi},list.items.sort(sortFunction),list.update(),list.trigger(%22sortComplete%22)};return%20list.handlers.sortStart=list.handlers.sortStart||[],list.handlers.sortComplete=list.handlers.sortComplete||[],buttons.els=list.utils.getByClass(list.listContainer,list.sortClass),list.utils.events.bind(buttons.els,%22click%22,sort),list.on(%22searchStart%22,buttons.clear),list.on(%22filterStart%22,buttons.clear),sort}},function(module,exports){var%20Templater=function(list){var%20itemSource,templater=this,init=function(){itemSource=templater.getItemSource(list.item),itemSource%26%26(itemSource=templater.clearSourceItem(itemSource,list.valueNames))};this.clearSourceItem=function(el,valueNames){for(var%20i=0,il=valueNames.length;il%3Ei;i++){var%20elm;if(valueNames[i].data)for(var%20j=0,jl=valueNames[i].data.length;jl%3Ej;j++)el.setAttribute(%22data-%22+valueNames[i].data[j],%22%22);else%20valueNames[i].attr%26%26valueNames[i].name%3F(elm=list.utils.getByClass(el,valueNames[i].name,!0),elm%26%26elm.setAttribute(valueNames[i].attr,%22%22)):(elm=list.utils.getByClass(el,valueNames[i],!0),elm%26%26(elm.innerHTML=%22%22));elm=void%200}return%20el},this.getItemSource=function(item){if(void%200===item){for(var%20nodes=list.list.childNodes,i=0,il=nodes.length;il%3Ei;i++)if(void%200===nodes[i].data)return%20nodes[i].cloneNode(!0)}else{if(/%3Ctr[\s%3E]/g.exec(item)){var%20tbody=document.createElement(%22tbody%22);return%20tbody.innerHTML=item,tbody.firstChild}if(-1!==item.indexOf(%22%3C%22)){var%20div=document.createElement(%22div%22);return%20div.innerHTML=item,div.firstChild}var%20source=document.getElementById(list.item);if(source)return%20source}return%20void%200},this.get=function(item,valueNames){templater.create(item);for(var%20values={},i=0,il=valueNames.length;il%3Ei;i++){var%20elm;if(valueNames[i].data)for(var%20j=0,jl=valueNames[i].data.length;jl%3Ej;j++)values[valueNames[i].data[j]]=list.utils.getAttribute(item.elm,%22data-%22+valueNames[i].data[j]);else%20valueNames[i].attr%26%26valueNames[i].name%3F(elm=list.utils.getByClass(item.elm,valueNames[i].name,!0),values[valueNames[i].name]=elm%3Flist.utils.getAttribute(elm,valueNames[i].attr):%22%22):(elm=list.utils.getByClass(item.elm,valueNames[i],!0),values[valueNames[i]]=elm%3Felm.innerHTML:%22%22);elm=void%200}return%20values},this.set=function(item,values){var%20getValueName=function(name){for(var%20i=0,il=list.valueNames.length;il%3Ei;i++)if(list.valueNames[i].data){for(var%20data=list.valueNames[i].data,j=0,jl=data.length;jl%3Ej;j++)if(data[j]===name)return{data:name}}else{if(list.valueNames[i].attr%26%26list.valueNames[i].name%26%26list.valueNames[i].name==name)return%20list.valueNames[i];if(list.valueNames[i]===name)return%20name}},setValue=function(name,value){var%20elm,valueName=getValueName(name);valueName%26%26(valueName.data%3Fitem.elm.setAttribute(%22data-%22+valueName.data,value):valueName.attr%26%26valueName.name%3F(elm=list.utils.getByClass(item.elm,valueName.name,!0),elm%26%26elm.setAttribute(valueName.attr,value)):(elm=list.utils.getByClass(item.elm,valueName,!0),elm%26%26(elm.innerHTML=value)),elm=void%200)};if(!templater.create(item))for(var%20v%20in%20values)values.hasOwnProperty(v)%26%26setValue(v,values[v])},this.create=function(item){if(void%200!==item.elm)return!1;if(void%200===itemSource)throw%20new%20Error(%22The%20list%20need%20to%20have%20at%20list%20one%20item%20on%20init%20otherwise%20you'll%20have%20to%20add%20a%20template.%22);var%20newItem=itemSource.cloneNode(!0);return%20newItem.removeAttribute(%22id%22),item.elm=newItem,templater.set(item,item.values()),!0},this.remove=function(item){item.elm.parentNode===list.list%26%26list.list.removeChild(item.elm)},this.show=function(item){templater.create(item),list.list.appendChild(item.elm)},this.hide=function(item){void%200!==item.elm%26%26item.elm.parentNode===list.list%26%26list.list.removeChild(item.elm)},this.clear=function(){if(list.list.hasChildNodes())for(;list.list.childNodes.length%3E=1;)list.list.removeChild(list.list.firstChild)},init()};module.exports=function(list){return%20new%20Templater(list)}},function(module,exports){module.exports=function(el,attr){var%20result=el.getAttribute%26%26el.getAttribute(attr)||null;if(!result)for(var%20attrs=el.attributes,length=attrs.length,i=0;length%3Ei;i++)void%200!==attr[i]%26%26attr[i].nodeName===attr%26%26(result=attr[i].nodeValue);return%20result}},function(module,exports,__webpack_require__){%22use%20strict%22;function%20isNumberCode(code){return%20code%3E=48%26%2657%3E=code}function%20naturalCompare(a,b){for(var%20lengthA=(a+=%22%22).length,lengthB=(b+=%22%22).length,aIndex=0,bIndex=0;lengthA%3EaIndex%26%26lengthB%3EbIndex;){var%20charCodeA=a.charCodeAt(aIndex),charCodeB=b.charCodeAt(bIndex);if(isNumberCode(charCodeA)){if(!isNumberCode(charCodeB))return%20charCodeA-charCodeB;for(var%20numStartA=aIndex,numStartB=bIndex;48===charCodeA%26%26++numStartA%3ClengthA;)charCodeA=a.charCodeAt(numStartA);for(;48===charCodeB%26%26++numStartB%3ClengthB;)charCodeB=b.charCodeAt(numStartB);for(var%20numEndA=numStartA,numEndB=numStartB;lengthA%3EnumEndA%26%26isNumberCode(a.charCodeAt(numEndA));)++numEndA;for(;lengthB%3EnumEndB%26%26isNumberCode(b.charCodeAt(numEndB));)++numEndB;var%20difference=numEndA-numStartA-numEndB+numStartB;if(difference)return%20difference;for(;numEndA%3EnumStartA;)if(difference=a.charCodeAt(numStartA++)-b.charCodeAt(numStartB++))return%20difference;aIndex=numEndA,bIndex=numEndB}else{if(charCodeA!==charCodeB)return%20alphabetIndexMapLength%3EcharCodeA%26%26alphabetIndexMapLength%3EcharCodeB%26%26-1!==alphabetIndexMap[charCodeA]%26%26-1!==alphabetIndexMap[charCodeB]%3FalphabetIndexMap[charCodeA]-alphabetIndexMap[charCodeB]:charCodeA-charCodeB;++aIndex,++bIndex}}return%20lengthA-lengthB}var%20alphabet,alphabetIndexMap,alphabetIndexMapLength=0;naturalCompare.caseInsensitive=naturalCompare.i=function(a,b){return%20naturalCompare((%22%22+a).toLowerCase(),(%22%22+b).toLowerCase())},Object.defineProperties(naturalCompare,{alphabet:{get:function(){return%20alphabet},set:function(value){alphabet=value,alphabetIndexMap=[];var%20i=0;if(alphabet)for(;i%3Calphabet.length;i++)alphabetIndexMap[alphabet.charCodeAt(i)]=i;for(alphabetIndexMapLength=alphabetIndexMap.length,i=0;alphabetIndexMapLength%3Ei;i++)void%200===alphabetIndexMap[i]%26%26(alphabetIndexMap[i]=-1)}}}),module.exports=naturalCompare},function(module,exports){module.exports=function(text,pattern,options){function%20match_bitapScore_(e,x){var%20accuracy=e/pattern.length,proximity=Math.abs(loc-x);return%20Match_Distance%3Faccuracy+proximity/Match_Distance:proximity%3F1:accuracy}var%20Match_Location=options.location||0,Match_Distance=options.distance||100,Match_Threshold=options.threshold||.4;if(pattern===text)return!0;if(pattern.length%3E32)return!1;var%20loc=Match_Location,s=function(){var%20i,q={};for(i=0;i%3Cpattern.length;i++)q[pattern.charAt(i)]=0;for(i=0;i%3Cpattern.length;i++)q[pattern.charAt(i)]|=1%3C%3Cpattern.length-i-1;return%20q}(),score_threshold=Match_Threshold,best_loc=text.indexOf(pattern,loc);-1!=best_loc%26%26(score_threshold=Math.min(match_bitapScore_(0,best_loc),score_threshold),best_loc=text.lastIndexOf(pattern,loc+pattern.length),-1!=best_loc%26%26(score_threshold=Math.min(match_bitapScore_(0,best_loc),score_threshold)));var%20matchmask=1%3C%3Cpattern.length-1;best_loc=-1;for(var%20bin_min,bin_mid,last_rd,bin_max=pattern.length+text.length,d=0;d%3Cpattern.length;d++){for(bin_min=0,bin_mid=bin_max;bin_mid%3Ebin_min;)match_bitapScore_(d,loc+bin_mid)%3C=score_threshold%3Fbin_min=bin_mid:bin_max=bin_mid,bin_mid=Math.floor((bin_max-bin_min)/2+bin_min);bin_max=bin_mid;var%20start=Math.max(1,loc-bin_mid+1),finish=Math.min(loc+bin_mid,text.length)+pattern.length,rd=Array(finish+2);rd[finish+1]=(1%3C%3Cd)-1;for(var%20j=finish;j%3E=start;j--){var%20charMatch=s[text.charAt(j-1)];if(0===d%3Frd[j]=(rd[j+1]%3C%3C1|1)%26charMatch:rd[j]=(rd[j+1]%3C%3C1|1)%26charMatch|((last_rd[j+1]|last_rd[j])%3C%3C1|1)|last_rd[j+1],rd[j]%26matchmask){var%20score=match_bitapScore_(d,j-1);if(score_threshold%3E=score){if(score_threshold=score,best_loc=j-1,!(best_loc%3Eloc))break;start=Math.max(1,2*loc-best_loc)}}}if(match_bitapScore_(d+1,loc)%3Escore_threshold)break;last_rd=rd}return%200%3Ebest_loc%3F!1:!0}}]);!function(i){%22use%20strict%22;var%20t=function(i,t){this.selector=i,this.callback=t},e=[];e.initialize=function(e,n){var%20c=[],a=function(){-1==c.indexOf(this)%26%26(c.push(this),i(this).each(n))};i(e).each(a),this.push(new%20t(e,a))};var%20n=new%20MutationObserver(function(){for(var%20t=0;t%3Ce.length;t++)i(e[t].selector).each(e[t].callback)});n.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),i.fn.initialize=function(i){e.initialize(this.selector,i)},i.initialize=function(i,t){e.initialize(i,t)}}(jQuery),$(%22.mn-pymk-list%22).parent().attr(%22id%22,%22listjs-container%22);var%20options={valueNames:[%22li-connection-count%22,%22mn-person-info__name%22,%22mn-person-info__occupation%22],listClass:%22mn-pymk-list__cards%22},userList=new%20List(%22listjs-container%22,options);$.initialize(%22.mn-pymk-list__card%22,function(){var%20$this=$(this),$txt=$this.find(%22.member-insights__count%22).text(),num=$txt.replace(/[^0-9]/g,%22%22),$count=$this.find(%22li-count%22);$count.length||$(%22%3Cspan%20class='visually-hidden%20li-connection-count'%3E%22+num+%22%3C/span%3E%22).appendTo($this);var%20$search=$(%22.li-search%22).val();$search%26%26window.setTimeout(function(){userList.search($search)},500),userList.reIndex()}),$(%22%23li-load%22).on(%22click%22,function(){(function(count){if($(%22.li-container%22).show(),11%3Ecount){window.scrollTo(0,document.body.scrollHeight);var%20caller=arguments.callee;window.setTimeout(function(){caller(count+1)},500)}else%20window.scrollTo(0,0),$(%22.li-container%22).delay(1e3).fadeOut(),$(%22%23li-load%22).focus();$(%22.li-search,%20.li-connection,%20.li-clear%20%22).attr(%22disabled%22,!1)})(0),$(%22.li-search%22).val(%22%22),userList.search()}),$(%22.li-clear%22).on(%22click%22,function(){$(%22.li-search%22).val(%22%22),userList.search()})})()}var%20v=%221.6.4%22;if(void%200===window.jQuery||window.jQuery.fn.jquery%3Cv){var%20script=document.createElement(%22script%22);script.src=%22https://ajax.googleapis.com/ajax/libs/jquery/%22+v+%22/jquery.min.js%22,script.onload=script.onreadystatechange=function(){this.readyState%26%26%22loaded%22!=this.readyState%26%26%22complete%22!=this.readyState||initLinkedIn()},document.getElementsByTagName(%22head%22)[0].appendChild(script)}else%20initLinkedIn()})();
```


## Installation (choose one)

### Bookmarklet
Copy the code above. Add a new bookmark in your browser and paste this code into the url field.

### Chrome extension (beta)
Download the extension. Then in Chrome, open up chrome://extensions/ in your browser and click “Developer mode” in the top right. Now click “Load unpacked extension…” and select the 'ext' directory. You should now see LinkedIn Filter & Sort in the extension list and it will load automatically when you visit 'People you may know'. 

This code is in alpha and is subject to frequent changes and may need to be reloaded occasionally.

## Use
Load the features/enhancements by clicking on the bookmarklet when on the 'People you may know' page. 

## Shortcomings
* Due to linkedin's infinite scroll, "sort by connections" won't sort new results introduced by scrolling. Filtering by keyword will work when new results are injected when scrolling, however this is a bit buggy. Both examples are the reasoning behind forcing load of 100 profiles before filtering or sorting.
