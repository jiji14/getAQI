(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(62)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},51:function(e,t,a){},58:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(23),c=a.n(i),o=(a(32),a(7)),l=a(8),s=a(10),u=a(9),m=a(11),d=(a(33),a(25)),h=a.n(d),f=a(24),p=a.n(f),y=(a(34),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({city:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.city.trim();a._sendDate(t)},a._sendDate=function(e){a.props.onCreate(e),a.setState({city:""}),a.inputRef.focus()},a.state={city:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"findCity"},r.a.createElement("h3",{className:"text"},"Find air quality your area!"),r.a.createElement("form",{className:"schForm",onSubmit:this.handleSubmit},r.a.createElement(p.a.Control,{type:"text",value:this.state.city,onChange:this.handleChange,name:"city",placeholder:"city",ref:function(t){e.inputRef=t}}),r.a.createElement(h.a,{type:"submit",variant:"info",className:"schBtn"},"Search")))}}]),t}(n.PureComponent)),v=a(14),b=a.n(v),g=(a(51),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.city,t=this.props.airInfo;return r.a.createElement(r.a.Fragment,null,null!=e&&null!=t.airIndex?r.a.createElement("div",{className:"showResult"},r.a.createElement("div",{className:"resultBox"},r.a.createElement(b.a,{variant:"flush"},r.a.createElement(b.a.Item,null,"Location  :  ",e),r.a.createElement(b.a.Item,null,"Time of Measurement :  ",t.time),r.a.createElement(b.a.Item,null,"Air Quality  :  ",t.airIndex,"pm"))),r.a.createElement("div",{className:t.quality},"The air quality in ",e," is ",r.a.createElement("em",null,t.quality))):r.a.createElement("div",{className:"resultBox"},r.a.createElement("div",{className:"cityError"},"Please put correct city name."),r.a.createElement("div",{className:"default"},"Find if your city has good air quality!")))}}]),t}(n.Component)),w=a(26),E=a.n(w),j=(a(58),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r))))._airQualityImg=function(e){switch(e){case"None":return"https://media.tenor.com/images/d1c81eafdc947e7ad1989da43bc65f32/tenor.png";case"Good":return"http://vincenthills.info/wp-content/uploads/2009/08/iStock_000010003815Small.jpg";case"Moderate":return"https://www1.uwe.ac.uk/et/images/aqmrc_banner.jpg";case"Unhealthy for Sensitive Groups":return"http://img.hani.co.kr/imgdb/resize/2019/0115/154745436225_20190115.JPG";case"Unhealthy":return"https://images.theconversation.com/files/246971/original/file-20181123-149718-3nhrdw.jpg?ixlib=rb-1.1.0&rect=0%2C869%2C4054%2C1849&q=45&auto=format&w=1356&h=668&fit=crop";case"Hazardous":return"http://www.prior-scientific.co.uk/wp-content/uploads/2018/09/Photochemical-Smog.jpg";default:return"http://www.morpc.org/wordpress/wp-content/uploads/2017/12/AQi_Metered-Version_GR2-01-1024x550.png"}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.airInfo.quality,t=this._airQualityImg(e);return r.a.createElement(E.a,{className:"airImg",src:t,rounded:!0})}}]),t}(n.Component)),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e)))._callApi=function(e){return fetch("https://api.waqi.info/feed/".concat(e,"/?token=a52f054e9b618ef2f10a33155f2f3e4cd50ef1d7")).then(function(e){return e.json()}).then(function(e){"ok"===e.status?a._setAirState(e.data.iaqi.pm25.v,e.data.time.s):a._setAirState(null,null)},function(e){a.setState({isLoaded:!1}),console.log(e)})},a._setAirState=function(e,t){var n="";n=null==e?"None":e<=50?"Good":e<=100?"Moderate":e<=150?"Unhealthy for Sensitive Groups":e<=200?"Unhealthy":e<=250?"Very Unhealthy":"Hazardous",a.setState({isLoaded:!0,airInfo:{airIndex:e,time:t,quality:n}})},a.handleCreate=function(e){a.setState({city:e}),a._callApi(e)},a.state={isLoaded:!0,city:null,airInfo:{airIndex:null,time:null,quality:null}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.city,n=e.airInfo;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"leftBox"},r.a.createElement(y,{onCreate:this.handleCreate}),t?r.a.createElement(g,{city:a,airInfo:n}):r.a.createElement("div",{className:"errorMessage"},"Failed to load Data. Please try again.")),t?r.a.createElement("div",{className:"rightBox"},r.a.createElement(j,{airInfo:n})):null)}}]),t}(n.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(59),a(60);c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.4965eeb9.chunk.js.map