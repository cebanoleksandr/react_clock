(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),r=n(3),i=n(5),s=n(4),l=n(1),u=n.n(l),m=(n(12),n(0));function d(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var h=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={today:new Date,clockName:"Clock-0"},t.timerId=0,t.timerId2=0,t.setClockName=function(){t.setState({clockName:d()})},t.setTime=function(){t.setState({today:new Date})},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.timerId=window.setInterval(this.setClockName,3300),this.timerId2=window.setInterval(this.setTime,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId),clearInterval(this.timerId2)}},{key:"render",value:function(){var t=this.state,e=t.today,n=t.clockName;return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:n})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:e.toUTCString().slice(-12,-4)})]})}}]),n}(u.a.Component),k=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={hasClock:!0},t.toggleClock=function(e){e.preventDefault(),t.setState((function(t){return{hasClock:!t.hasClock}}))},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("contextmenu",this.toggleClock)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.toggleClock)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),this.state.hasClock&&Object(m.jsx)(h,{})]})}}]),n}(u.a.Component);a.a.render(Object(m.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b5314530.chunk.js.map