(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(e,t,n){e.exports=n.p+"static/media/logo.c2b42dd0.png"},158:function(e,t,n){e.exports=n(366)},197:function(e,t,n){},206:function(e,t,n){},207:function(e,t,n){},208:function(e,t,n){},268:function(e,t,n){},338:function(e,t,n){},344:function(e,t,n){},353:function(e,t,n){},354:function(e,t,n){},355:function(e,t,n){},358:function(e,t,n){},359:function(e,t,n){},362:function(e,t,n){},363:function(e,t,n){},364:function(e,t,n){},365:function(e,t,n){},366:function(e,t,n){"use strict";n.r(t);n(159);var a=n(0),l=n.n(a),o=n(24),r=n.n(o),i=(n(196),n(45)),s=n(33),c=n(18),d=n(19),u=n(21),h=n(20),m=n(22),k=n(5),b=n(62),f=(n(197),function(e){var t=e.characters,n=e.url;return l.a.createElement(b.b,{to:n,className:"menuItem"},t)}),p=n(150),g=n.n(p),v=(n(206),function(){return l.a.createElement("img",{src:g.a,alt:"logo",className:"logo"})}),E=(n(207),function(){return l.a.createElement("header",{className:"appHeader"},l.a.createElement(v,null),l.a.createElement(f,{url:"/",characters:"Books"}),l.a.createElement(f,{url:"/config",characters:"Configuration"}))}),O=n(17),G=n.n(O),w=n(29),B=n.n(w),j=n(46),y=n.n(j),C=n(49),A=n.n(C),D=n(48),N=n.n(D),S=n(47),x=n.n(S),L=n(153),W=n.n(L),T=n(151),V=n.n(T),F=(n(208),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleDeleteGenre=n.handleDeleteGenre.bind(Object(k.a)(Object(k.a)(n))),n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"handleDeleteGenre",value:function(e){var t=this.props,n=t.handleDeleteGenre,a=t.selectBook,l=[];a.genres.map(function(t,n){return t!==e.target.id&&l.push(t),a}),n(a.id,l)}},{key:"render",value:function(){var e=this,t=this.props,n=t.selectBook,a=t.editOption;return l.a.createElement("div",{className:"genreListWrap"},l.a.createElement("span",{className:"listGenreTittle"},"Genres list: "),l.a.createElement("ul",{className:"genreList"},n.genres.map(function(t){return!0===a?l.a.createElement("li",{id:t,key:t,value:t,className:"genreListObject"},t,l.a.createElement(V.a,{id:t,style:{fontSize:15},className:"closeButton",onClick:e.handleDeleteGenre})):l.a.createElement("li",{id:t,key:t,value:t,className:"genreListObject"},t)})))}}]),t}(a.Component)),U=(n(268),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={visibleView:!1},n.handleAddGenre=n.handleAddGenre.bind(Object(k.a)(Object(k.a)(n))),n.showNewGenre=n.showNewGenre.bind(Object(k.a)(Object(k.a)(n))),n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"handleAddGenre",value:function(e){var t=this.props,n=t.handleAddGenre,a=t.selectBook;"Enter"===e.key&&(-1===this.isGenreExist(e.target.value)&&(e.preventDefault(),e.stopPropagation(),n(e.target.value,a.id)),this.hideNewGenre())}},{key:"isGenreExist",value:function(e){return this.props.selectBook.genres.indexOf(e)}},{key:"showNewGenre",value:function(){this.setState({visibleView:!0})}},{key:"hideNewGenre",value:function(){this.setState({visibleView:!1})}},{key:"render",value:function(){return l.a.createElement("ul",{className:"genreListWrap"},l.a.createElement("li",{className:"genreAddList"},!0===this.state.visibleView?l.a.createElement(B.a,{id:"newGenre",label:"New genre",name:"newGenre",onKeyDown:this.handleAddGenre,margin:"normal"}):l.a.createElement(G.a,{variant:"outlined",color:"primary",onClick:this.showNewGenre}," ","+"," ")))}}]),t}(a.Component)),R=(n(338),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={open:!1,genresValue:[],newBookData:{tittle:"",resume:"",price:"",genres:[]}},n.handleClickOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n.handleBookAdd=n.handleBookAdd.bind(Object(k.a)(Object(k.a)(n))),n.handleDeleteGenre=n.handleDeleteGenre.bind(Object(k.a)(Object(k.a)(n))),n.handleAddNewGenre=n.handleAddNewGenre.bind(Object(k.a)(Object(k.a)(n))),n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"handleBookAdd",value:function(e){(0,this.props.handleNewBook)(this.state.newBookData),this.handleClose()}},{key:"handleAddNewGenre",value:function(e){this.setState(function(t){return{newBookData:Object(s.a)({},t.newBookData,{genres:t.newBookData.genres.concat(e)})}})}},{key:"handleDeleteGenre",value:function(e,t){this.setState(function(e){return{newBookData:Object(s.a)({},e.newBookData,{genres:t})}})}},{key:"updateInputValue",value:function(e){var t=this.state.newBookData;this.setState({newBookData:Object(s.a)({},t,Object(i.a)({},e.target.name,e.target.value))})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(G.a,{variant:"contained",color:"primary",className:"addButton",onClick:this.handleClickOpen},"Add book",l.a.createElement(W.a,null)),l.a.createElement(y.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},l.a.createElement(x.a,{id:"form-dialog-title"},"Add new book"),l.a.createElement(N.a,null,l.a.createElement(B.a,{id:"tittle",label:"Tittle",name:"tittle",value:this.state.newBookData.tittle,onChange:function(t){return e.updateInputValue(t)},margin:"normal",fullWidth:!0}),l.a.createElement(B.a,{id:"price",label:"Price",name:"price",value:this.state.newBookData.value,onChange:function(t){return e.updateInputValue(t)},margin:"normal",fullWidth:!0}),l.a.createElement(B.a,{id:"resume",label:"Resume",name:"resume",value:this.state.newBookData.resume,onChange:function(t){return e.updateInputValue(t)},margin:"normal",fullWidth:!0}),l.a.createElement(F,{selectBook:this.state.newBookData,handleAddGenre:this.handleAddNewGenre,handleDeleteGenre:this.handleDeleteGenre,editOption:!0}),l.a.createElement(U,{selectBook:this.state.newBookData,handleAddGenre:this.handleAddNewGenre,genres:this.state.newBookData.genres})),l.a.createElement(A.a,null,l.a.createElement(G.a,{variant:"contained",color:"secondary",onClick:this.handleClose},"Cancel"),l.a.createElement(G.a,{variant:"contained",color:"primary",onClick:this.handleBookAdd},"Add"))))}}]),t}(a.Component)),I=n(154),M=n.n(I),P=n(155),q=n.n(P),z=(n(344),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).checkGenre=n.checkGenre.bind(Object(k.a)(Object(k.a)(n))),n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"checkGenre",value:function(e){(0,this.props.handleSelectGenre)(e.currentTarget)}},{key:"render",value:function(){var e=this.props,t=e.genre,n=e.genresFiltered;return l.a.createElement(M.a,{control:l.a.createElement(q.a,{checked:n.indexOf(t)>-1,onChange:this.checkGenre,value:t,color:"primary"}),label:t})}}]),t}(a.Component)),H=(n(353),function(e){var t=e.genresFiltered,n=e.genres,a=e.handleSelectGenre;return l.a.createElement("section",null,l.a.createElement("ul",null,n.map(function(e){return l.a.createElement("li",{key:e,className:"listGenres"},l.a.createElement(z,{key:e,genresFiltered:t,handleSelectGenre:a,genre:e}))})))}),J=n(72),Q=n.n(J),Y=(n(354),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={open:!1,visibleView:!1},n.handleClickOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n.onBookUpdate=n.onBookUpdate.bind(Object(k.a)(Object(k.a)(n))),n.deleteThisBook=n.deleteThisBook.bind(Object(k.a)(Object(k.a)(n))),n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"deleteThisBook",value:function(){var e=this.props;(0,e.deleteBook)(e.bookSelected.id)}},{key:"onBookUpdate",value:function(e){var t=this.props,n=t.bookSelected;(0,t.handleChangeEdit)(e.currentTarget.name,n,e.currentTarget.value)}},{key:"showNewGenre",value:function(){this.setState({visibleView:!0})}},{key:"hideNewGenre",value:function(){this.setState({visibleView:!1})}},{key:"render",value:function(){var e=this.props,t=e.bookSelected,n=e.handleDeleteGenre,a=e.handleAddGenre,o=e.genres;return l.a.createElement("div",{className:"editButton"},l.a.createElement(G.a,{variant:"contained",color:"primary",onClick:this.handleClickOpen},l.a.createElement(Q.a,null)),l.a.createElement(y.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},l.a.createElement(x.a,{id:"form-dialog-title"},"Modify Book"),l.a.createElement(N.a,null,l.a.createElement(B.a,{id:"tittle",label:"Tittle",name:"tittle",value:t.tittle,onChange:this.onBookUpdate,margin:"normal",fullWidth:!0}),l.a.createElement(B.a,{id:"price",label:"Price",name:"price",value:t.price,onChange:this.onBookUpdate,margin:"normal",fullWidth:!0}),l.a.createElement(B.a,{id:"resume",label:"Resume",name:"resume",value:t.resume,onChange:this.onBookUpdate,margin:"normal",fullWidth:!0}),l.a.createElement(F,{selectBook:t,handleDeleteGenre:n,handleAddGenre:a,editOption:!0}),l.a.createElement(U,{handleAddGenre:a,selectBook:t,genres:o})),l.a.createElement(A.a,null,l.a.createElement(G.a,{variant:"contained",color:"secondary",onClick:this.deleteThisBook,id:t.id},"Delete Book"),l.a.createElement(G.a,{variant:"contained",color:"primary",onClick:this.handleClose},"Accept"))))}}]),t}(a.Component)),_=n(51),K=n.n(_),$=(n(355),function(e){var t=e.book,n=e.handleChangeEdit,a=e.deleteBook,o=e.handleDeleteGenre,r=e.handleAddGenre,i=e.genres;return l.a.createElement("li",{key:t.id,className:"bookCard"},l.a.createElement(K.a,{container:!0,spacing:24},l.a.createElement(K.a,{item:!0,xs:12,className:"bookRightContainer"},l.a.createElement("h1",{className:"bookTittle"},t.price,"\u20ac - ",t.tittle),l.a.createElement("p",{className:"bookResume"},t.resume),l.a.createElement(F,{selectBook:t,handleDeleteGenre:o,editOption:!1}),l.a.createElement(Y,{deleteBook:a,bookSelected:t,handleAddGenre:r,handleChangeEdit:n,handleDeleteGenre:o,genres:i}))))}),X=(n(358),function(e){var t=e.books,n=e.genres,a=e.handleAddGenre,o=e.deleteBook,r=e.handleChangeEdit,i=e.handleDeleteGenre;return l.a.createElement("section",null,l.a.createElement("ul",null,t.map(function(e){return l.a.createElement($,{key:e.id,book:e,handleAddGenre:a,deleteBook:o,handleChangeEdit:r,handleDeleteGenre:i,genres:n})})))}),Z=n(156),ee=n.n(Z),te=(n(359),function(e){var t=e.isLoaded,n=e.books,a=e.genresFiltered,o=e.handleNewBook,r=e.genres,i=e.handleSelectGenre,s=e.deleteBook,c=e.handleChangeEdit,d=e.handleDeleteGenre,u=e.handleAddGenre;return l.a.createElement("section",null,!0===t?l.a.createElement("div",null,l.a.createElement(H,{genresFiltered:a,genres:r,handleSelectGenre:i}),l.a.createElement(X,{books:n,handleAddGenre:u,deleteBook:s,handleChangeEdit:c,handleDeleteGenre:d,genres:r}),l.a.createElement(R,{handleNewBook:o,handleDeleteGenre:d})):l.a.createElement(ee.a,{className:"loadDataSpiner",color:"secondary"}))}),ne=n(157),ae=n.n(ne),le=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={open:!1,visibleView:!1},n.handleClickOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n.deleteAllBook=n.deleteAllBook.bind(Object(k.a)(Object(k.a)(n))),n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"deleteAllBook",value:function(){var e=this.props.deleteAllBook;e(),this.handleClose()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("span",null,"Delete all boks: "),l.a.createElement(G.a,{variant:"contained",color:"primary",onClick:this.handleClickOpen},l.a.createElement("span",null,"Delete")," ",l.a.createElement(Q.a,null)),l.a.createElement(y.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},l.a.createElement(x.a,{id:"form-dialog-title"},"Delete all books"),l.a.createElement(N.a,null,l.a.createElement(ae.a,null,"Your books will be permanently deleted. You won't be able to retrieve anything you've added.")),l.a.createElement(A.a,null,l.a.createElement(G.a,{onClick:this.deleteAllBook,variant:"contained",color:"secondary"},"Delete"),l.a.createElement(G.a,{variant:"contained",color:"primary",onClick:this.handleClose},"Cancel"))))}}]),t}(l.a.Component),oe=(n(362),function(e){var t=e.deleteAllBook;return l.a.createElement(K.a,{container:!0},l.a.createElement(K.a,{item:!0,xs:12},l.a.createElement(le,{deleteAllBook:t})))}),re=n(37),ie=(n(363),function(e){var t=e.books,n=e.genres,a=e.genresFiltered,o=e.deleteBook,r=e.handleChangeEdit,i=e.handleNewBook,s=e.handleDeleteGenre,c=e.handleAddGenre,d=e.handleSelectGenre,u=e.deleteAllBook,h=e.isLoaded;return l.a.createElement("main",{className:"app__main"},l.a.createElement(re.c,null,l.a.createElement(re.a,{exact:!0,path:"/",render:function(){return l.a.createElement(te,{genresFiltered:a,books:t,genres:n,handleAddGenre:c,deleteBook:o,handleChangeEdit:r,handleDeleteGenre:s,handleSelectGenre:d,handleNewBook:i,isLoaded:h})}}),l.a.createElement(re.a,{path:"/config",render:function(){return l.a.createElement(oe,{deleteAllBook:u})}})))}),se=[{tittle:"Super Mario",resume:"its the me MAaaario",genres:["drama","suspense"],id:0,price:"20"},{tittle:"1984 del autor George Orwell",resume:"Era un d\xeda luminoso y fr\xedo de abril y los relojes daban las trece. Winston Smith, con la barbilla clavada en el pecho en su esfuerzo por burlar el molest\xedsimo viento, se desliz\xf3 r\xe1pidamente por entre las puertas de cristal de las Casas de la Victoria, aunque no con la suficiente rapidez para evitar que una r\xe1faga polvorienta se colara con \xe9l. El vest\xedbulo ol\xeda a legumbres cocidas y a esteras viejas. Al fondo, un cartel de colores, demasiado grande para ha\xacllarse en un interior, estaba pegado a la pared. Representaba s\xf3lo un enorme rostro de m\xe1s de un metro de anchura: la cara de un hombre de unos cuarenta y cinco a\xf1os con un gran bigote negro y facciones hermosas y endurecidas. ",genres:["drama","suspense"],id:1,price:"20"},{tittle:"Don Quijote de la Mancha",resume:"En su obra m\xe1s importante, Miguel de Cervantes, nos cuenta la historia de un hidalgo, Alonso Quijano, que, enloquecido por la lectura excesiva de libros de caballer\xeda donde se narran aventuras fant\xe1sticas de caballeros, princesas, magos y castillos encantados... decide emular a un caballero andante.",genres:["action","historico"],id:2,price:"20"},{tittle:"Historia de dos Ciudades",resume:"Historia de dos ciudades es una de las novelas m\xe1s vendida de todos los tiempos, desde su primera publicaci\xf3n en 1859, se han vendido m\xe1s de 200 millones de ejemplares. ",genres:["Hist\xf3rico","Pensamientos","Bestseller"],id:3,price:"20"}],ce=(n(364),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={books:se,genres:[],genresFiltered:[],isLoaded:!1},n.deleteBook=n.deleteBook.bind(Object(k.a)(Object(k.a)(n))),n.handleChangeEdit=n.handleChangeEdit.bind(Object(k.a)(Object(k.a)(n))),n.handleNewBook=n.handleNewBook.bind(Object(k.a)(Object(k.a)(n))),n.handleDeleteGenre=n.handleDeleteGenre.bind(Object(k.a)(Object(k.a)(n))),n.handleAddGenre=n.handleAddGenre.bind(Object(k.a)(Object(k.a)(n))),n.handleSelectGenre=n.handleSelectGenre.bind(Object(k.a)(Object(k.a)(n))),n.deleteAllBook=n.deleteAllBook.bind(Object(k.a)(Object(k.a)(n))),n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getGenres(),setTimeout(function(){this.setState(function(e){return{isLoaded:!0}})}.bind(this),2e3)}},{key:"getGenres",value:function(){var e=[];se.map(function(t){return t.genres.map(function(t){return-1===e.indexOf(t)&&e.push(t),e})}),this.setState(function(t){return{genres:e}})}},{key:"handleSelectGenre",value:function(e){var t=e.checked,n=e.value,a=this.state.genresFiltered;if(t)a.push(n);else{var l=a.indexOf(n);-1!==l&&a.splice(l,1)}this.setState(function(e){return{genresFiltered:a}})}},{key:"getBookList",value:function(){var e=this.state,t=e.books,n=e.genresFiltered,a=[],l=!0,o=!1,r=void 0;try{for(var i,s=t[Symbol.iterator]();!(l=(i=s.next()).done);l=!0){var c=i.value;!0===c.genres.some(function(e){return n.indexOf(e)>=0})&&a.push(c)}}catch(d){o=!0,r=d}finally{try{l||null==s.return||s.return()}finally{if(o)throw r}}return 0!==a.length?a:t}},{key:"deleteAllBook",value:function(){this.setState({books:[]})}},{key:"handleChangeEdit",value:function(e,t,n){this.setState(function(a){return{books:a.books.map(function(a,l){return a.id===t.id&&(a=Object(s.a)({},a,Object(i.a)({},e,n))),a})}})}},{key:"handleAddGenre",value:function(e,t){var n=this;this.setState(function(a){return{books:a.books.map(function(n,a){return n.id===t&&(n=Object(s.a)({},n,{genres:n.genres.concat(e)})),n}),genres:-1===n.isGenreExist(e)?a.genres.concat(e):a.genres}})}},{key:"isGenreExist",value:function(e){return this.state.genres.indexOf(e)}},{key:"handleNewBook",value:function(e){var t=this,n=this.state.genres;e.genres.map(function(e){return-1===t.isGenreExist(e)&&n.push(e),e}),e.id=0!==this.state.books.length?this.state.books[this.state.books.length-1].id+1:0,this.setState(function(t){return{books:t.books.concat(e),genres:n}})}},{key:"handleDeleteGenre",value:function(e,t){this.setState(function(n){return{books:n.books.map(function(n,a){return n.id===e&&(n=Object(s.a)({},n,{genres:t})),n})}})}},{key:"deleteBook",value:function(e){this.setState(function(t){return{books:t.books.filter(function(t){return t.id!==parseInt(e)})}})}},{key:"render",value:function(){var e=this.state,t=e.genres,n=e.genresFiltered,a=e.newBookData,o=e.isLoaded;return l.a.createElement("div",{className:"App"},l.a.createElement(E,null),l.a.createElement(ie,{books:this.getBookList(),genres:t,genresFiltered:n,newBookData:a,handleSelectGenre:this.handleSelectGenre,handleAddGenre:this.handleAddGenre,deleteBook:this.deleteBook,handleChangeEdit:this.handleChangeEdit,handleDeleteGenre:this.handleDeleteGenre,handleNewBook:this.handleNewBook,deleteAllBook:this.deleteAllBook,isLoaded:o}))}}]),t}(a.Component)),de=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(365);r.a.render(l.a.createElement(b.a,null,l.a.createElement(ce,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat(".","/service-worker.js");de?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ue(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ue(t,e)})}}()}},[[158,1,2]]]);
//# sourceMappingURL=main.231ed8ed.chunk.js.map