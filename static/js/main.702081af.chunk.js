(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t.p+"static/media/logo.899cd5e1.png"},18:function(e,a,t){e.exports=t.p+"static/media/player.f45826a8.png"},20:function(e,a,t){e.exports=t(51)},26:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(15),s=t.n(l),o=(t(26),t(2)),i=t(3),r=t(5),m=t(4),u=t(6),d=t(16),g=t(7),h=t.n(g),p=(t(46),function(e){var a=e.children,t=e.customClass,n=e.show,l=e.closeCallback;return c.a.createElement("div",{className:"modal ".concat(t),style:{display:n?"block":"none"}},c.a.createElement("div",{className:"overlay",onClick:l}),c.a.createElement("div",{className:"modal_content"},a,c.a.createElement("button",{title:"Close",className:"close_modal",onClick:l},c.a.createElement("i",{className:"fas fa-times"}))))});p.defaultProps={children:c.a.createElement("div",null,"Empty Modal"),customClass:"",show:!1,closeCallback:function(){return!1}};var E=p,f=(t(47),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(r.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={showModal:!1},t.toggleModal=function(){t.setState({showModal:!t.state.showModal})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.images,n=a.index;return c.a.createElement("div",{className:"columns",key:n},t.map(function(a){return c.a.createElement("div",null,c.a.createElement("div",{className:"tag",key:a.id},c.a.createElement("a",{href:"#",onClick:e.toggleModal}," ",c.a.createElement("img",{className:"tagImage",src:a.webformatURL,alt:a.tags}))),c.a.createElement(E,{show:e.state.showModal,closeCallback:e.toggleModal,customClass:"custom_modal_class"},c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"modal-button"},c.a.createElement("i",{className:"fas fa-ellipsis-h icon-class"}),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"btn-modal m-r1"},"Enviar"),c.a.createElement("button",{className:"btn-modal"},"Tipo"),c.a.createElement("button",{className:"btn-modal"},"Guardar"))),c.a.createElement("div",{className:"modal-contenedor"},c.a.createElement("div",{className:"modal-image"},c.a.createElement("img",{key:a.id,alt:a.tag,src:a.largeImageURL})),c.a.createElement("div",{className:"modal-title"},c.a.createElement("h3",null,"Fotos y Comentarios"),c.a.createElement("button",{className:"btn-modal"},"Fotos"),c.a.createElement("p",null,"\xbfHas probado este Pin? A\xf1ade una foto para mostrar c\xf3mo ha ido"))))))}))}}]),a}(n.Component)),v=(t(48),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(r.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={showModal:!1},t.toggleModal=function(){t.setState({showModal:!t.state.showModal})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.props.image;return c.a.createElement("div",{className:"columns"},a.map(function(a){return c.a.createElement("div",null,c.a.createElement("div",{className:"tag",key:a.id},c.a.createElement("a",{href:"#",onClick:e.toggleModal}," ",c.a.createElement("img",{className:"tagImage",alt:a.tag,src:a.largeImageURL}))),c.a.createElement(E,{show:e.state.showModal,closeCallback:e.toggleModal,customClass:"custom_modal_class"},c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"modal-button"},c.a.createElement("i",{className:"fas fa-ellipsis-h icon-class"}),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"btn-modal m-r1"},"Enviar"),c.a.createElement("button",{className:"btn-modal"},"Tipo"),c.a.createElement("button",{className:"btn-modal"},"Guardar"))),c.a.createElement("div",{className:"modal-contenedor"},c.a.createElement("div",{className:"modal-image"},c.a.createElement("img",{key:a.id,alt:a.tag,src:a.largeImageURL})),c.a.createElement("div",{className:"modal-title"},c.a.createElement("h3",null,"Fotos y Comentarios"),c.a.createElement("button",{className:"btn-modal"},"Fotos"),c.a.createElement("p",null,"\xbfHas probado este Pin? A\xf1ade una foto para mostrar c\xf3mo ha ido"))))))}))}}]),a}(n.Component)),b=(t(49),t(17)),N=t.n(b),y=t(18),k=t.n(y),w=t(19),j=t.n(w),O=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(r.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={searchText:"",amount:20,apiUrl:"https://pixabay.com/api/",apiKey:"968305-23d6df71958191317ed0f09cd",images:[],image:[]},t.handleSubmit=function(e){t.setState(Object(d.a)({},e.target.name,e.target.value),function(){h.a.get("".concat(t.state.apiUrl,"/?key=").concat(t.state.apiKey,"&q=").concat(t.state.searchText,"&image_type=photo&page=1&per_page=20&safesearch=true&orientation=vertical")).then(function(e){return t.setState({images:e.data.hits})}).catch(function(e){return console.log(e)})}),document.getElementById("RandomImage").style.display="none"},t.fetchData=function(){var e=t.state.amount,a=t.state.amount+20;t.setState({amount:a}),console.log(e),h.a.get("".concat(t.state.apiUrl,"/?key=").concat(t.state.apiKey,"&image_type=photo&page=").concat(e/20,"&per_page=20&safesearch=true&orientation=vertical")).then(function(e){var a=e.data.hits;setTimeout(function(){t.setState({image:t.state.image.concat(a)})},2e3)}),h.a.get("".concat(t.state.apiUrl,"/?key=").concat(t.state.apiKey,"&q=").concat(t.state.searchText,"&image_type=photo&page=").concat(e/20,"&per_page=20&safesearch=true&orientation=vertical")).then(function(e){var a=e.data.hits;setTimeout(function(){t.setState({images:a.concat(t.state.images)})},2e3)})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("".concat(this.state.apiUrl,"/?key=").concat(this.state.apiKey,"&q=landscape&image_type=photo&page=1&per_page=20&safesearch=true&orientation=vertical")).then(function(a){return e.setState({image:a.data.hits})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("header",{className:"header-top"},c.a.createElement("div",{className:"input-box"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{alt:"logo",src:N.a})),c.a.createElement("input",{className:"input-search",name:"searchText",value:this.state.searchText,onChange:this.handleSubmit})),c.a.createElement("div",{className:"login-box"},c.a.createElement("h5",{className:"text-title"},"Inicio"),c.a.createElement("h5",{className:"text-title"},"Siguiendo"),c.a.createElement("div",{className:"user-box"},c.a.createElement("img",{alt:"user",src:k.a})),c.a.createElement("h5",{className:"text-title"},"Juan Nieve"),c.a.createElement("i",{className:"fas fa-comment-dots icon-class"}),c.a.createElement("i",{className:"fas fa-bell icon-class"}),c.a.createElement("i",{className:"fas fa-ellipsis-h icon-class"}))),c.a.createElement("div",{className:"container-img key={index}"},c.a.createElement(j.a,{dataLength:(this.state.image.length,this.state.images.length),next:this.fetchData,hasMore:!0,loader:c.a.createElement("div",{className:"loading-gif"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif",alt:"loading"}))},c.a.createElement("div",{id:"RandomImage"},c.a.createElement(v,{image:this.state.image})),c.a.createElement(f,{images:this.state.images}))))}}]),a}(n.Component),C=(t(50),function(e){function a(){return Object(o.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(O,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.702081af.chunk.js.map