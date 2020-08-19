webpackJsonp([1],{341:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function p(){return{x:null,y:null,swiping:!1,start:0}}function r(e){return"changedTouches"in e?{x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}:{x:e.clientX,y:e.clientY}}function u(e){return"touches"in e?{x:e.touches[0].clientX,y:e.touches[0].clientY}:{x:e.clientX,y:e.clientY}}function a(e,t){if(0===t)return e;var n=e.x,o=e.y,i=Math.PI/180*t;return{x:n*Math.cos(i)+o*Math.sin(i),y:o*Math.cos(i)-n*Math.sin(i)}}function l(e,t){var n=a(r(e),t.rotationAngle),o=n.x,i=n.y,s=t.x-o,p=t.y-i,u=Math.abs(s),l=Math.abs(p),c=Date.now()-t.start;return{deltaX:s,deltaY:p,absX:u,absY:l,velocity:Math.sqrt(u*u+l*l)/c}}var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},h=n(0),d=n(1),v=n(345).default,f=function(e){function t(n,s){o(this,t);var r=i(this,e.call(this,n,s));return r.swipeable=p(),r.eventStart=r.eventStart.bind(r),r.eventMove=r.eventMove.bind(r),r.eventEnd=r.eventEnd.bind(r),r.mouseDown=r.mouseDown.bind(r),r.mouseMove=r.mouseMove.bind(r),r.mouseUp=r.mouseUp.bind(r),r.cleanupMouseListeners=r.cleanupMouseListeners.bind(r),r.setupMouseListeners=r.setupMouseListeners.bind(r),r.elementRef=r.elementRef.bind(r),r.setupTouchmoveEvent=r.setupTouchmoveEvent.bind(r),r.cleanupTouchmoveEvent=r.cleanupTouchmoveEvent.bind(r),r.hasPassiveSupport=v.hasSupport,r}return s(t,e),t.prototype.componentDidMount=function(){this.props.preventDefaultTouchmoveEvent&&this.setupTouchmoveEvent()},t.prototype.componentDidUpdate=function(e){e.disabled!==this.props.disabled&&(this.cleanupMouseListeners(),this.swipeable=p()),e.preventDefaultTouchmoveEvent&&!this.props.preventDefaultTouchmoveEvent?this.cleanupTouchmoveEvent():!e.preventDefaultTouchmoveEvent&&this.props.preventDefaultTouchmoveEvent&&this.setupTouchmoveEvent()},t.prototype.componentWillUnmount=function(){this.cleanupMouseListeners()},t.prototype.setupTouchmoveEvent=function(){this.element&&this.hasPassiveSupport&&this.element.addEventListener("touchmove",this.eventMove,{passive:!1})},t.prototype.setupMouseListeners=function(){document.addEventListener("mousemove",this.mouseMove),document.addEventListener("mouseup",this.mouseUp)},t.prototype.cleanupTouchmoveEvent=function(){this.element&&this.hasPassiveSupport&&this.element.removeEventListener("touchmove",this.eventMove,{passive:!1})},t.prototype.cleanupMouseListeners=function(){document.removeEventListener("mousemove",this.mouseMove),document.removeEventListener("mouseup",this.mouseUp)},t.prototype.mouseDown=function(e){this.props.trackMouse&&"mousedown"===e.type&&("function"===typeof this.props.onMouseDown&&this.props.onMouseDown(e),this.setupMouseListeners(),this.eventStart(e))},t.prototype.mouseMove=function(e){this.eventMove(e)},t.prototype.mouseUp=function(e){this.cleanupMouseListeners(),this.eventEnd(e)},t.prototype.eventStart=function(e){if(!(e.touches&&e.touches.length>1)){var t=this.props.rotationAngle,n=a(u(e),t),o=n.x,i=n.y;this.props.stopPropagation&&e.stopPropagation(),this.swipeable={start:Date.now(),x:o,y:i,swiping:!1,rotationAngle:t}}},t.prototype.eventMove=function(e){var t=this.props,n=t.stopPropagation,o=t.delta,i=t.onSwiping,s=t.onSwiped,p=t.onSwipingLeft,r=t.onSwipedLeft,u=t.onSwipingRight,a=t.onSwipedRight,c=t.onSwipingUp,h=t.onSwipedUp,d=t.onSwipingDown,v=t.onSwipedDown,f=t.preventDefaultTouchmoveEvent;if(this.swipeable.x&&this.swipeable.y&&!(e.touches&&e.touches.length>1)){var w=l(e,this.swipeable);if(!(w.absX<o&&w.absY<o)||this.swipeable.swiping){n&&e.stopPropagation(),i&&i(e,w.deltaX,w.deltaY,w.absX,w.absY,w.velocity);var m=!1;(i||s)&&(m=!0),w.absX>w.absY?w.deltaX>0?(p||r)&&(p&&p(e,w.absX),m=!0):(u||a)&&(u&&u(e,w.absX),m=!0):w.deltaY>0?(c||h)&&(c&&c(e,w.absY),m=!0):(d||v)&&(d&&d(e,w.absY),m=!0),this.swipeable.swiping=!0,m&&f&&e.preventDefault()}}},t.prototype.eventEnd=function(e){var t=this.props,n=t.stopPropagation,o=t.flickThreshold,i=t.onSwiped,s=t.onSwipedLeft,r=t.onSwipedRight,u=t.onSwipedUp,a=t.onSwipedDown,c=t.onTap;if(this.swipeable.swiping){var h=l(e,this.swipeable);n&&e.stopPropagation();var d=h.velocity>o;i&&i(e,h.deltaX,h.deltaY,d,h.velocity),h.absX>h.absY?h.deltaX>0?s&&s(e,h.deltaX,d):r&&r(e,h.deltaX,d):h.deltaY>0?u&&u(e,h.deltaY,d):a&&a(e,h.deltaY,d)}else c&&c(e);this.swipeable=p()},t.prototype.elementRef=function(e){this.element=e,this.props.innerRef&&this.props.innerRef(e)},t.prototype.render=function(){var e=c({},this.props);return this.props.disabled||(e.onTouchStart=this.eventStart,this.props.preventDefaultTouchmoveEvent&&this.hasPassiveSupport||(e.onTouchMove=this.eventMove),e.onTouchEnd=this.eventEnd,e.onMouseDown=this.mouseDown),e.ref=this.elementRef,delete e.onSwiped,delete e.onSwiping,delete e.onSwipingUp,delete e.onSwipingRight,delete e.onSwipingDown,delete e.onSwipingLeft,delete e.onSwipedUp,delete e.onSwipedRight,delete e.onSwipedDown,delete e.onSwipedLeft,delete e.onTap,delete e.flickThreshold,delete e.delta,delete e.preventDefaultTouchmoveEvent,delete e.stopPropagation,delete e.nodeName,delete e.children,delete e.trackMouse,delete e.disabled,delete e.innerRef,delete e.rotationAngle,h.createElement(this.props.nodeName,e,this.props.children)},t}(h.Component);f.propTypes={onSwiped:d.func,onSwiping:d.func,onSwipingUp:d.func,onSwipingRight:d.func,onSwipingDown:d.func,onSwipingLeft:d.func,onSwipedUp:d.func,onSwipedRight:d.func,onSwipedDown:d.func,onSwipedLeft:d.func,onTap:d.func,flickThreshold:d.number,delta:d.number,preventDefaultTouchmoveEvent:d.bool,stopPropagation:d.bool,nodeName:d.string,trackMouse:d.bool,disabled:d.bool,innerRef:d.func,children:d.node,rotationAngle:d.number},f.defaultProps={flickThreshold:.6,delta:10,preventDefaultTouchmoveEvent:!1,stopPropagation:!1,nodeName:"div",disabled:!1,rotationAngle:0},e.exports=f},345:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={update:function(){if("undefined"!==typeof window&&"function"===typeof window.addEventListener){var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t),o.hasSupport=e}}};o.update(),t.default=o}});
//# sourceMappingURL=1.4d18db01.chunk.js.map