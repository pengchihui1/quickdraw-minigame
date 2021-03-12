(function(e){function t(t){for(var a,r,o=t[0],l=t[1],c=t[2],d=0,h=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(h.length)h.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},s=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/quickdraw-minigame/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},1:function(e,t){},1527:function(e,t,n){"use strict";var a=n("8711"),i=n.n(a);i.a},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("ul",[n("router-link",{staticClass:"link",attrs:{tag:"li",to:"/"}},[e._v("Discover QuickDraw")]),e._v("| "),n("router-link",{staticClass:"link",attrs:{tag:"li",to:"/train"}},[e._v("Train your CNN")])],1)]),n("router-view")],1)},s=[],r=(n("034f"),n("2877")),o={},l=Object(r["a"])(o,i,s,!1,null,null,null),c=l.exports,u=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("BaseModel")],1)},h=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("loading",{attrs:{active:!e.loadingModelOver,"can-cancel":!1,"is-full-page":!0,color:"#428bca"}}),n("h1",{staticClass:"header"},[e._v("Draw all "+e._s(e.getLengthNames)+" classes !")]),n("div",{staticClass:"main"},[n("label",[e._v("Select your difficulty")]),n("toggle-button",{staticClass:"toggle",attrs:{labels:{checked:"Big",unchecked:"Small"},width:70,color:"#428bca"},model:{value:e.toggleBigModel,callback:function(t){e.toggleBigModel=t},expression:"toggleBigModel"}})],1),n("main",{staticClass:"main"},[n("div",{staticClass:"main__content"},[e._m(0),n("div",{staticClass:"slider"},[n("div",{staticClass:"slider__label"},[e._v("Brush width")]),n("vue-slider",{staticClass:"slider__controls",attrs:{min:0,max:100,interval:1},model:{value:e.brushWidth,callback:function(t){e.brushWidth=t},expression:"brushWidth"}})],1)]),n("v-chart",{attrs:{options:e.getBar,autoresize:""}})],1),n("div",{staticClass:"buttons"},[n("button",{staticClass:"button__add",on:{click:function(t){return e.submitDrawing()}}},[e._v("Submit")]),n("button",{staticClass:"button__erase",on:{click:function(t){return e.clearCanvas()}}},[e._v("Clear")])]),n("div",{staticClass:"ranking"},[n("vue-good-table",{attrs:{columns:e.tableColumns,rows:e.tableRows(),"max-height":"400px","fixed-header":!0}})],1)],1)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main__canvas"},[n("canvas",{staticClass:"canvas",attrs:{id:"c",width:"400",height:"400"}})])}],p=(n("4160"),n("d81d"),n("4fad"),n("b64b"),n("d3b7"),n("3ca3"),n("159b"),n("ddb0"),n("7a94"),["sailboat","pliers","see saw","garden hose","cactus","eyeglasses","nose","stairs","envelope","bucket","fireplace","swing set","lantern","banana","spreadsheet","elephant","fish","helicopter","axe","cell phone"]),g=["sailboat","pliers","see saw","garden hose","cactus","eyeglasses","nose","stairs","envelope","bucket","fireplace","swing set","lantern","banana","spreadsheet","elephant","fish","helicopter","axe","cell phone","hammer","string bean","donut","star","radio","cat","diamond","frog","broom","coffee cup","speedboat","paper clip","bicycle","map","baseball","tennis racquet","line","dishwasher","paintbrush","fork","teddy - bear","The Mona Lisa","clarinet","flamingo","couch","rainbow","bed","lipstick","parrot","ladder","syringe","violin","megaphone","car","cookie","rollerskates","anvil","goatee","teapot","octagon","hospital","bridge","leg","skull","ear","mushroom","chandelier","pool","crown","apple","golf club","potato","calendar","book","trombone","stove","scorpion","blackberry","circle","sheep","sandwich","bird","bowtie","wine bottle","postcard","power outlet","chair","hedgehog","pants","bread","microwave","t - shirt","rabbit","guitar","dog","bulldozer","bus","light bulb","computer","hexagon","beach","skateboard","barn","jail","waterslide","cooler","traffic light","hand","harp","moon","toe","vase","cello","remote control","truck","microphone","underwear","rifle","drill","square","knee","giraffe","snail","camouflage","table","alarm clock","camel","shorts","lighthouse","suitcase","bottlecap","tractor","carrot","hockey puck","dumbbell","shoe","The Great Wall of China","campfire","foot","flip flops","monkey","helmet","bandage","bench","stethoscope","grass","mermaid","laptop","hot air balloon","floor lamp","cow","dolphin","asparagus","motorbike","skyscraper","strawberry","umbrella","brain","mouth","zebra","jacket","triangle","hurricane","bracelet","pineapple","rake","steak","baseball bat","arm","popsicle","flying saucer","mouse","horse","crab","piano","river","castle","compass","binoculars","ceiling fan","airplane","scissors","garden","bush","bathtub","clock","drums","lobster","flower","diving board","toothbrush","saw","sea turtle","squiggle","tooth","mountain","sword","aircraft carrier","necklace","cup","wine glass","lighter","elbow","blueberry","snowman","broccoli","sun","television","sock","pig","key","parachute","hot tub","shark","washing machine","hat","windmill","frying pan","fire hydrant","toothpaste","belt","beard","rhinoceros","headphones","matches","knife","snorkel","feather","duck","pond","paint can","firetruck","angel","bear","passport","cake","telephone","mosquito","hamburger","pencil","peas","ant","eye","mailbox","grapes","canoe","pillow","The Eiffel Tower","sink","backpack","octopus","finger","snowflake","tent","nail","submarine","wheel","church","toilet","purse","penguin","bee","streetlight","van","boomerang","train","peanut","stop sign","basket","wristwatch","ice cream","pizza","crocodile","lollipop","hockey stick","soccer ball","dragon","camera","cannon","zigzag","spoon","pickup truck","ocean","bat","stitches","shovel","palm tree","mug","hot dog","fan","sweater","cruise ship","cloud","whale","police car","saxophone","squirrel","smiley face","owl","house","school bus","yoga","spider","flashlight","tree","swan","panda","ambulance","calculator","pear","trumpet","lightning","animal migration","dresser","basketball","birthday cake","leaf","oven","house plant","keyboard","eraser","sleeping bag","moustache","door","hourglass","crayon","stereo","fence","roller coaster","onion","marker","tiger","screwdriver","watermelon","lion","butterfly","toaster","raccoon","picture frame","candle","face","kangaroo","snake","tornado","rain"],v=n("9ca8"),b=(n("94b1"),n("dac4"),n("f617")),_=n("4971"),y=n.n(_),w=(n("24df"),n("9062")),k=n.n(w),C=(n("e40d"),n("c975"),n("d4ec")),x=n("bee2"),M=n("ce1a"),D=(n("99af"),n("cb29"),n("fb6a"),n("3835")),O=n("5698"),j=n("75f0");n("4c53"),n("53ca");function T(e){return M["tidy"]((function(){var t=M["browser"].fromPixels(e,1),n=M["image"].resizeBilinear(t,[28,28],!0).toFloat(),a=M["scalar"](255),i=M["scalar"](1).sub(n.div(a)),s=i.expandDims(0);return s}))}function N(){var e=j["visor"]();e.isOpen()||e.toggle()}function A(){var e=["loss","val_loss","acc","val_acc"],t={tab:"Training",name:"Model Training",styles:{height:"1000px"}};return j["show"].fitCallbacks(t,e)}function B(e,t,n){j["metrics"].perClassAccuracy(e,t,n.length).then((function(e){var t={name:"Accuracy",tab:"Model Evaluation"};j["show"].perClassAccuracy(t,e,n)}))}function P(e,t,n){j["metrics"].confusionMatrix(e,t,n.length).then((function(e){var t={name:"Confusion Matrix",tab:"Model Evaluation"};j["render"].confusionMatrix(t,e,n)}))}function F(e){var t="Model Inspection",n={name:"Model Summary",tab:t,innerHTML:""},a={name:"Conv2D Details",tab:t,innerHTML:""},i={name:"Conv2D_2 Details",tab:t,innerHTML:""},s={name:"Dense_1 Details",tab:t,innerHTML:""};M["tidy"]((function(){j["show"].modelSummary(n,e),j["show"].layer(a,e.getLayer("conv2d_Conv2D1")),j["show"].layer(i,e.getLayer("conv2d_Conv2D2")),j["show"].layer(s,e.getLayer("dense_Dense1"))}))}function S(e){var t=j["visor"]().surface({name:"Latest drawings",tab:"Input Data"}),n=t.drawArea;n.innerHTML="";var a=e.map((function(e){return M["tidy"]((function(){return T(e["img"]).reshape([28,28,1])}))}));L(n,a.slice(-60))}function z(e,t){var n="Model Activations",a=j["visor"]().surface({name:"Conv2D Activations",tab:n,styles:{height:650}}),i=a.drawArea;a.innerHTML="";var s=j["visor"]().surface({name:"Conv2D_2 Activations",tab:n,styles:{width:1e3,height:650}}),r=s.drawArea;s.innerHTML="";var o=e.map((function(e){return M["tidy"]((function(){return T(e["img"]).reshape([28,28,1])}))})),l=M["tidy"]((function(){return $("conv2d_Conv2D1",t,o.slice(-8))})),c=Object(D["a"])(l,2),u=c[0],d=c[1],h=M["tidy"]((function(){return $("conv2d_Conv2D2",t,o.slice(-8))})),m=Object(D["a"])(h,2),f=m[0],p=m[1];E(i,u,d),E(r,f,p),M["dispose"](u),M["dispose"](d),M["dispose"](f),M["dispose"](p),M["dispose"](o)}function L(e,t){for(var n=function(n){var a=t[n],i=document.createElement("canvas");i.width=28,i.height=28,i.style="margin: 4px;",M["browser"].toPixels(a,i).then((function(){e.appendChild(i),a.dispose()}))},a=0;a<t.length;a++)n(a)}function I(e,t,n){var a=M["tidy"]((function(){return M["image"].resizeNearestNeighbor(t,[n.height,n.width]).clipByValue(0,1)})),i=e.querySelector("canvas")||document.createElement("canvas");i.width=n.width,i.height=n.height,i.style="margin: 4px; width:".concat(n.width,"px; height:").concat(n.height,"px"),e.appendChild(i),M["browser"].toPixels(a,i).then((function(){return a.dispose()}))}function E(e,t,n){var a=O["a"](e).select("table");0===a.size()&&(a=O["a"](e).append("table"),a.append("thead").append("tr"),a.append("tbody"));var i=a.select("thead").select("tr").selectAll("th").data(t),s=i.enter().append("th");i.merge(s).each((function(e,t,n){var a=n[t];"string"==typeof e?a.innerHTML=e:I(a,e,{width:25,height:25})}));var r=a.select("tbody").selectAll("tr").data(n),o=r.enter().append("tr"),l=r.merge(o).selectAll("td").data((function(e){return e})),c=l.enter().append("td");l.merge(c).each((function(e,t,n){var a=n[t];I(a,e,{width:40,height:40})})),l.exit().remove(),r.exit().remove()}function W(e,t,n){var a=M["model"]({inputs:t.input,outputs:n.output});return a.predict(e)}function $(e,t,n){var a=28,i=t.getLayer(e),s=M["tidy"]((function(){return i.kernel.val.transpose([3,0,1,2]).unstack()}));s[0].shape[2]>3&&(s=s.map((function(e,t){return"Filter ".concat(t+1)}))),s.unshift("Input");var r=M["tidy"]((function(){n=M["stack"](n);var e=n.shape[0];return n.reshape([e,a,a,1])})),o=M["tidy"]((function(){return W(r,t,i).unstack()})),l=o[0].shape[0],c=o[0].shape[2],u=o.map((function(e,t){var n=Array(c).fill(0).map((function(t,n){return e.slice([0,0,n],[l,l,1])})),i=M["tidy"]((function(){return r.slice([t],[1]).reshape([a,a,1])}));return n.unshift(i),n}));return[s,u]}var V=function(){function e(){Object(C["a"])(this,e),this.model=M["sequential"]()}return Object(x["a"])(e,[{key:"getModel",value:function(){return this.model}},{key:"resetModel",value:function(){M["dispose"](this.model),this.model=M["sequential"]()}},{key:"build_CNN",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:64,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5,i=28,s=28,r=1;this.model.add(M["layers"].conv2d({inputShape:[i,s,r],kernelSize:5,filters:e,strides:1,activation:"relu",kernelInitializer:"glorotNormal",name:"conv2d_Conv2D1"})),this.model.add(M["layers"].maxPooling2d({poolSize:[2,2],strides:[2,2]})),this.model.add(M["layers"].conv2d({kernelSize:5,filters:t,strides:1,activation:"relu",kernelInitializer:"glorotNormal",name:"conv2d_Conv2D2"})),this.model.add(M["layers"].maxPooling2d({poolSize:[2,2],strides:[2,2]})),this.model.add(M["layers"].flatten()),this.model.add(M["layers"].dense({units:n,activation:"relu",kernelInitializer:"glorotNormal",name:"intermediary_dense"})),this.model.add(M["layers"].dropout({rate:.4})),this.model.add(M["layers"].dense({units:a,kernelInitializer:"glorotNormal",activation:"softmax",name:"dense_Dense1"})),this.model.compile({optimizer:M["train"].adam(.001),loss:M["metrics"].categoricalCrossentropy,metrics:["accuracy"]}),this.model.predict(M["zeros"]([1,28,28,1])).dataSync()}},{key:"train_CNN",value:function(e,t){var n=this,a=16;function i(e){return M["tidy"]((function(){var t=e.map((function(e){return T(e["img"]).reshape([28,28,1])}));return M["stack"](t)}))}function s(e,t){return M["tidy"]((function(){var n=e.map((function(e){return M["oneHot"](t.indexOf(e["label"]),t.length)}));return M["stack"](n)}))}N();var r=i(e),o=s(e,t);return this.model.fit(r,o,{batchSize:a,validationData:[r,o],epochs:20,shuffle:!0,validationSplit:.2,callbacks:A()}).then((function(){M["tidy"]((function(){var e=n.model.predict(r).argMax([-1]),a=o.argMax([-1]);M["dispose"](r),M["dispose"](o),B(e,a,t),P(e,a,t)}))}))}},{key:"loadModel",value:function(e){var t=this;return M["loadLayersModel"](e).then((function(e){t.model=e,M["tidy"]((function(){return t.model.predict(M["zeros"]([1,28,28,1])).dataSync()}))}))}},{key:"predictClass",value:function(e){var t=this;return M["tidy"]((function(){var n=T(e);return t.model.predict(n).dataSync()}))}}]),e}();function q(){M["disposeVariables"]()}var H="./small_model/model.json",R="./big_model/model.json",G={name:"BaseModel",components:{"v-chart":v["a"],VueGoodTable:b["a"],VueSlider:y.a,Loading:k.a},data:function(){return{loadingModelOver:!1,raw_predictions:[],mousePressed:!1,coords:[],small_ranking:{},big_ranking:{},brushWidth:20,toggleBigModel:!1,tableColumns:[{label:"Class",field:"class"},{label:"Submitted",field:"submitted",type:"number"}]}},methods:{recordCoor:function(e){var t=this.canvas.getPointer(event.e),n=t.x,a=t.y;n>=0&&a>=0&&this.mousePressed&&this.coords.push(t)},getMinBox:function(){var e=this.coords.map((function(e){return e.x})),t=this.coords.map((function(e){return e.y})),n={x:Math.min.apply(null,e),y:Math.min.apply(null,t)},a={x:Math.max.apply(null,e),y:Math.max.apply(null,t)};return{min:n,max:a}},submitCanvas:function(){var e=this.getImageData();this.toggleBigModel?this.raw_predictions=this.big_model.predictClass(e):this.raw_predictions=this.small_model.predictClass(e)},submitDrawing:function(){var e=this.getTopClassNames[0];this.$toasted.show("Your submission for '"+e+"' has been taken"),this.toggleBigModel?this.big_ranking[e]=this.big_ranking[e]+1:this.small_ranking[e]=this.small_ranking[e]+1,this.clearCanvas()},clearCanvas:function(){this.canvas.clear(),this.canvas.backgroundColor="#FFFFFF",this.raw_predictions=[],this.coords=[]},getImageData:function(){var e=this.getMinBox(),t=window.devicePixelRatio,n=this.canvas.contextContainer.getImageData(e.min.x*t,e.min.y*t,(e.max.x-e.min.x)*t,(e.max.y-e.min.y)*t);return n},tableRows:function(){var e=this;return this.toggleBigModel?Object.keys(this.big_ranking).map((function(t){return{class:t,submitted:e.big_ranking[t]}})):Object.keys(this.small_ranking).map((function(t){return{class:t,submitted:e.small_ranking[t]}}))}},computed:{findIndicesOfMax:function(){for(var e=this,t=[],n=0;n<this.raw_predictions.length;n++)t.push(n),t.length>5&&function(){var n=e.raw_predictions;t.sort((function(e,t){return n[t]-n[e]})),t.pop()}();return t},findTopValues:function(){for(var e=[],t=this.findIndicesOfMax,n=0;n<t.length;n++)e[n]=this.raw_predictions[t[n]];return e},getTopClassNames:function(){for(var e=[],t=this.findIndicesOfMax,n=0;n<t.length;n++)e[n]=this.getClassNames[t[n]];return e},getBar:function(){return{xAxis:{type:"category",data:this.getTopClassNames,axisLabel:{rotate:45}},yAxis:{type:"value"},series:[{data:this.findTopValues,type:"bar"}]}},getClassNames:function(){return this.toggleBigModel?g:p},getLengthNames:function(){return this.getClassNames.length}},watch:{brushWidth:function(e){this.canvas.freeDrawingBrush.width=e}},mounted:function(){var e=this;this.loadingModelOver=!1,0===Object.entries(this.small_ranking).length&&p.forEach((function(t){return e.small_ranking[t]=0})),0===Object.entries(this.big_ranking).length&&g.forEach((function(t){return e.big_ranking[t]=0})),this.canvas=new fabric.Canvas("c",{isDrawingMode:!0}),this.canvas.backgroundColor="#FFFFFF",this.canvas.freeDrawingBrush.width=this.brushWidth,this.canvas.renderAll();var t=this;this.canvas.on("mouse:up",(function(e){t.submitCanvas(),t.mousePressed=!1})),this.canvas.on("mouse:down",(function(e){t.mousePressed=!0})),this.canvas.on("mouse:move",(function(e){t.recordCoor(e)})),this.small_model=new V,this.big_model=new V,Promise.all([this.small_model.loadModel(H),this.big_model.loadModel(R)]).then((function(){e.loadingModelOver=!0}))},beforeDestroy:function(){q()}},J=G,K=(n("5bd2"),Object(r["a"])(J,m,f,!1,null,"ee7e9d50",null)),Q=K.exports,Y={components:{BaseModel:Q}},U=Y,X=Object(r["a"])(U,d,h,!1,null,null,null),Z=X.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("LearnableModel")],1)},te=[],ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("loading",{attrs:{active:!e.loadingModelOver,"can-cancel":!1,"is-full-page":!0,color:"#428bca"}}),n("h1",{staticClass:"header"},[e._v("Can we learn to recognize doodles ?")]),n("main",{staticClass:"main"},[n("div",{staticClass:"main__content"},[e._m(0),n("div",{staticClass:"slider"},[n("div",{staticClass:"slider_label"},[e._v("Brush width")]),n("vue-slider",{staticClass:"slider__controls",attrs:{min:0,max:100,interval:1},model:{value:e.brushWidth,callback:function(t){e.brushWidth=t},expression:"brushWidth"}})],1)]),n("v-chart",{attrs:{options:e.getBar,autoresize:""}})],1),n("div",{staticClass:"buttons"},[n("button",{staticClass:"button__add",on:{click:function(t){return e.storeDrawing(e.class_names[0])}}},[e._v("Add "+e._s(e.class_names[0]))]),n("button",{staticClass:"button__add",on:{click:function(t){return e.storeDrawing(e.class_names[1])}}},[e._v("Add "+e._s(e.class_names[1]))]),n("button",{staticClass:"button__add",on:{click:function(t){return e.storeDrawing(e.class_names[2])}}},[e._v("Add "+e._s(e.class_names[2]))]),n("button",{staticClass:"button__add",on:{click:function(t){return e.storeDrawing(e.class_names[3])}}},[e._v("Add "+e._s(e.class_names[3]))]),n("button",{staticClass:"button__add",on:{click:function(t){return e.storeDrawing(e.class_names[4])}}},[e._v("Add "+e._s(e.class_names[4]))]),n("button",{staticClass:"button__erase",on:{click:function(t){return e.clearCanvas()}}},[e._v("Clear")])]),n("hr"),n("div",{staticClass:"trainer__controls"},[n("button",{staticClass:"button__train",on:{click:function(t){return e.trainModel()}}},[e._v("Train")]),n("button",{staticClass:"button__erase",on:{click:function(t){return e.showVisor()}}},[e._v("Visor")]),n("button",{staticClass:"button__erase",on:{click:function(t){return e.removeAllPhotos()}}},[e._v("Delete photos")])])],1)},ae=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main__canvas"},[n("canvas",{staticClass:"canvas",attrs:{id:"c",width:"400",height:"400"}})])}],ie=(n("96cf"),n("1da1")),se=n("3f4f"),re=function(){function e(t,n){var a=this;Object(C["a"])(this,e),this.db_name=t,this.store_name=n,Object(se["b"])(t,1,{upgrade:function(e){e.objectStoreNames.contains(n)||e.createObjectStore(n,{autoIncrement:!0})}}).then((function(e){return a.db=e}))}return Object(x["a"])(e,[{key:"add_photo",value:function(e,t){return this.db.add(this.store_name,{label:t,img:e})}},{key:"get_range_photos",value:function(e,t){return this.db.getAll(this.store_name,IDBKeyRange.bound(e,t))}},{key:"get_all_photos",value:function(){return this.db.getAll(this.store_name)}},{key:"count_photos",value:function(){return this.db.count(this.store_name)}},{key:"remove_all_items",value:function(){return this.db.clear(this.store_name)}},{key:"drop_database",value:function(){var e=Object(ie["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(se["a"])(this.db_name);case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),oe={name:"LearnableModel",components:{"v-chart":v["a"],VueSlider:y.a,Loading:k.a},data:function(){return{class_names:["apple","pear","banana","litchi","mango"],loadingModelOver:!1,raw_predictions:[],mousePressed:!1,coords:[],brushWidth:20,numConv1:8,numConv2:16,numDense:64,numEpochs:20}},methods:{recordCoor:function(e){var t=this.canvas.getPointer(event.e),n=t.x,a=t.y;n>=0&&a>=0&&this.mousePressed&&this.coords.push(t)},getMinBox:function(){var e=this.coords.map((function(e){return e.x})),t=this.coords.map((function(e){return e.y})),n={x:Math.min.apply(null,e),y:Math.min.apply(null,t)},a={x:Math.max.apply(null,e),y:Math.max.apply(null,t)};return{min:n,max:a}},submitCanvas:function(){this.raw_predictions=this.model.predictClass(this.getImageData())},clearCanvas:function(){this.canvas.clear(),this.canvas.backgroundColor="#FFFFFF",this.raw_predictions=[],this.coords=[]},trainModel:function(){var e=this;this.$toasted.show("A new training was launched"),this.db.get_all_photos().then((function(t){e.model.resetModel(),e.model.build_CNN(),e.model.train_CNN(t,e.class_names).then((function(){e.$toasted.show("Training over")}))}))},showVisor:function(){var e=this;N(),F(this.model.getModel()),this.db.count_photos().then((function(t){e.db.get_range_photos(t-60,t).then((function(t){S(t),z(t,e.model.getModel())}))}))},storeDrawing:function(e){var t=this,n=this.getImageData(),a=this;this.db.add_photo(n,e).then((function(){t.$toasted.show("Thanks for adding a '"+e+"'"),a.clearCanvas()}))},removeAllPhotos:function(){var e=this;this.db.remove_all_items().then((function(){return e.$toasted.show("Removed all photos")}))},getImageData:function(){var e=this.getMinBox(),t=window.devicePixelRatio,n=this.canvas.contextContainer.getImageData(e.min.x*t,e.min.y*t,(e.max.x-e.min.x)*t,(e.max.y-e.min.y)*t);return n}},computed:{findIndicesOfMax:function(){for(var e=this,t=[],n=0;n<this.raw_predictions.length;n++)t.push(n),t.length>5&&function(){var n=e.raw_predictions;t.sort((function(e,t){return n[t]-n[e]})),t.pop()}();return t},findTopValues:function(){for(var e=[],t=this.findIndicesOfMax,n=0;n<t.length;n++)e[n]=this.raw_predictions[t[n]];return e},getTopClassNames:function(){for(var e=[],t=this.findIndicesOfMax,n=0;n<t.length;n++)e[n]=this.class_names[t[n]];return e},getBar:function(){return{xAxis:{type:"category",data:this.getTopClassNames,axisLabel:{rotate:45}},yAxis:{type:"value"},series:[{data:this.findTopValues,type:"bar"}]}}},watch:{brushWidth:function(e){this.canvas.freeDrawingBrush.width=e}},mounted:function(){this.loadingModelOver=!1,this.canvas=new fabric.Canvas("c",{isDrawingMode:!1}),this.canvas.backgroundColor="#FFFFFF",this.canvas.freeDrawingBrush.width=this.brushWidth,this.canvas.renderAll();var e=this;this.canvas.on("mouse:up",(function(t){e.submitCanvas(),e.mousePressed=!1})),this.canvas.on("mouse:down",(function(t){e.mousePressed=!0})),this.canvas.on("mouse:move",(function(t){e.recordCoor(t)})),this.model=new V,this.model.build_CNN(),this.loadingModelOver=!0,this.canvas.isDrawingMode=!0,this.db=new re("quickdraw","photos")},beforeDestroy:function(){q(),this.db.drop_database()}},le=oe,ce=(n("1527"),Object(r["a"])(le,ne,ae,!1,null,"4dd02e2f",null)),ue=ce.exports,de={components:{LearnableModel:ue}},he=de,me=Object(r["a"])(he,ee,te,!1,null,null,null),fe=me.exports;a["default"].use(u["a"]);var pe=new u["a"]({routes:[{path:"/",name:"home",component:Z},{path:"/train",name:"train",component:fe}]}),ge=n("a65d"),ve=n.n(ge),be=n("f206"),_e=n.n(be);a["default"].use(ve.a,{position:"bottom-left",duration:8e3,className:["toast-css"]}),a["default"].use(_e.a),a["default"].config.productionTip=!1,new a["default"]({router:pe,render:function(e){return e(c)}}).$mount("#app")},"5bd2":function(e,t,n){"use strict";var a=n("ad92"),i=n.n(a);i.a},6:function(e,t){},7:function(e,t){},8:function(e,t){},"85ec":function(e,t,n){},8711:function(e,t,n){},ad92:function(e,t,n){}});
//# sourceMappingURL=app.d9ac6277.js.map