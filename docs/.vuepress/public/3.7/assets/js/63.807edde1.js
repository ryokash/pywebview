(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{462:function(t,a,e){"use strict";e.r(a);var s=e(58),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("h2",{attrs:{id:"basics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basics"}},[t._v("#")]),t._v(" Basics")]),t._v(" "),e("p",[t._v("The bare minimum to get "),e("em",[t._v("pywebview")]),t._v(" up and running is")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" webview\n\nwindow "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" webview"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Woah dude!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://pywebview.flowrl.com'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwebview"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("The "),e("code",[t._v("create_window")]),t._v(" function returns a window instance that provides a number of both window manipulation and DOM related functions. You may create as many windows as you wish. Windows created after the GUI loop is started are shown immediately. All the opened windows are stored as a list in "),e("code",[t._v("webview.windows")]),t._v(". The windows are stored in a creation order.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("create_window")]),t._v(" second argument "),e("code",[t._v("url")]),t._v(" can point to a remote or a local path. Alternatively, you can load HTML by setting the "),e("code",[t._v("html")]),t._v(" parameter.")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" webview\n\nwebview"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Woah dude!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" html"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<h1>Woah dude!<h1>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwebview"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Note that if both "),e("code",[t._v("url")]),t._v(" and "),e("code",[t._v("html")]),t._v(" are set, "),e("code",[t._v("html")]),t._v(" takes precedence.")]),t._v(" "),e("p",[e("em",[t._v("pywebview")]),t._v(" gives a choice of several web renderers. To change a web renderer, set the "),e("code",[t._v("gui")]),t._v(" parameter of the "),e("code",[t._v("start")]),t._v(" function to the desired value (e.g "),e("code",[t._v("cef")]),t._v(" or "),e("code",[t._v("qt")]),t._v("). See "),e("RouterLink",{attrs:{to:"/guide/renderer.html"}},[t._v("Renderer")]),t._v(" for details.")],1),t._v(" "),e("h2",{attrs:{id:"http-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-server"}},[t._v("#")]),t._v(" HTTP server")]),t._v(" "),e("p",[e("em",[t._v("pywebview")]),t._v(" provides a WSGI-compatible HTTP server. To start a HTTP server set the url to a local entry point (without a protocol schema) and set the "),e("code",[t._v("http_server")]),t._v(" parameter of the "),e("code",[t._v("start")]),t._v(" function to "),e("code",[t._v("True")])]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" webview\n\nwebview"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Woah dude!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index.html'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwebview"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http_server"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("If you wish to use an external WSGI compatible HTTP server with "),e("em",[t._v("pywebview")]),t._v(", you can pass a server object as an URL, ie. "),e("code",[t._v("http_server")]),t._v(" parameter does not need to be set in this case.")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" flask "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Flask\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" webview\n\nserver "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Flask"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__name__"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" static_folder"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./assets'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" template_folder"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./templates'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwebview"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Flask example'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" server"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwebview"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"threading-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#threading-model"}},[t._v("#")]),t._v(" Threading model")]),t._v(" "),e("p",[e("code",[t._v("webview.start")]),t._v(" starts a GUI loop and is a blocking function. With the GUI loop being blocking, you must execute your backend logic in a separate thread or a process. You may launch a thread or a process manually. Alternatively you can execute your code by passing your function as the first parameter "),e("code",[t._v("func")]),t._v(" to "),e("code",[t._v("start")]),t._v(". The second parameter sets the function's arguments. This approach starts a thread behind the scenes and is identical to starting a thread manually.")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" webview\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("custom_logic")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toggle_fullscreen"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("evaluate_js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'alert(\"Nice one brother\")'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nwindow "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" webview"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Woah dude!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" html"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<h1>Woah dude!<h1>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwebview"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("custom_logic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# anything below this line will be executed after program is finished executing")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n")])])]),e("h1",{attrs:{id:"make-python-and-javascript-talk-with-each-other"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#make-python-and-javascript-talk-with-each-other"}},[t._v("#")]),t._v(" Make Python and Javascript talk with each other")]),t._v(" "),e("p",[t._v("You can think of custom logic as a backend that communicates with frontend code in the HTML/JS realm. Now how would you make two to communicate with each other? "),e("em",[t._v("pywebview")]),t._v(" offers a two way JS-Python bridge that lets you both execute Javascript from Python (via "),e("code",[t._v("evaluate_js")]),t._v(") and Python code from Javascript (via "),e("code",[t._v("js_api")]),t._v(" and "),e("code",[t._v("expose")]),t._v("). See "),e("RouterLink",{attrs:{to:"/guide/interdomain.html"}},[t._v("interdomain communication")]),t._v(" for details. Another way is to run a Python web server (like Flask or Bottle) in custom logic and make frontend code make API calls to it. That would be identical to a typical web application. This approach is suitable, for example, for porting an existing web application to a desktop application. See "),e("RouterLink",{attrs:{to:"/guide/architecture.html"}},[t._v("Architecture")]),t._v(" for more information on both approaches.")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);
