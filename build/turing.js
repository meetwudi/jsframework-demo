!function(e){var n={VERSION:"0.0.0"};if(n._modules={},n.define=function(i,r,o){if(e.define)return e.define(i,r,o);var t,d=[];for(t=0;t<r.length;t++){if(!n._modules[r[t]])throw new Error("turing: dependency does not exists");d.push(n._modules[r[t]])}o.apply(void 0,d)},e.turing)throw new Error("turing: top-level turing object already exists!");e.turing=n}("undefined"==typeof window?this:window);