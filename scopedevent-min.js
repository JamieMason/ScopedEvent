var scopedEvent=function(){function c(c,d){return c==="*"||d.search(new RegExp("^"+c.replace(a,"").replace(b,"\\$1")+"(\\.|:|$)"))!==-1}function d(a,b){return a[b]!==void 0}function e(a,b){a=a||[];var c,d=a.length,e;for(c=0;c<d;c++){e=b(a[c],c,a,d);if(typeof e=="boolean")return e}}function f(){this.data={}}function g(a){var b=a.indexOf(":")!==-1,c=a.split(":");return b?{type:c[0],scope:c[1]}:{type:a,scope:""}}function h(a){if(a!=="*"&&a.search(/^[a-z0-9\-\_]+:(\*|[a-z0-9\-\_]+\.?)+$/i)===-1)throw new TypeError('[scopedEvent] "'+a+'" is an invalid binding');return!0}function i(){this.model=new f}var a=/[\.:]?\*/,b=/([\.\]\[\-\}\{\?\+\*])/g;return f.prototype={each:function(a,b){return e(this.data[a],b)},add:function(a,b){var c=this,e=c.data;c.contains(a,b)||(d(e,a)||(e[a]=[]),e[a].push(b))},remove:function(a,b){var c=this,e=c.data;d(e,a)&&(e[a].length===1?delete e[a]:c.each(a,function(a,c,d,e){if(a===b)return d.splice(c,1),!1}))},get:function(a){var b=this,d,e=b.data,f=[];for(d in e)if(d===a||d.indexOf("*")!==-1&&c(d,a))f=f.concat(e[d]);return f.length>0?f:null},contains:function(a,b){return d(this.data,a)&&(this.each(a,function(a){if(a===b)return!0})||!1)}},i.prototype={bind:function(a,b,c){h(a)&&this.model.add(a,c?function(a){b.apply(c,[a])}:b)},unbind:function(a,b){h(a)&&e(this.model.get(a),function(a,c,d){if(b===a)return d.slice(c,1),!0})},trigger:function(a,b){h(a)&&e(this.model.get(a),function(c){c(b||{},g(a))})}},function(){return new i}}();
