// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());




//** Module pattern **//



// // 'Immediately invoked' function expression
// (function () {
//     console.log("Module: Code die onbereikbaar is buiten deze function expression.");
// })();
// 
// 
// // 'Namespaced' immediately invoked function expression
// var NamespacedModule = (function () {
//     console.log("NamespacedModule: Code die onbereikbaar is buiten deze function expression.");
// })();


// 'private' method
var PrivateModule = (function () {
    
    var _privateMethod = function () {
        console.log("PrivateModule: Doe dingen die het daglicht niet kunnen verdragen.");
    };
    
})();


// 'public' method
var PublicModule = (function () {
    
    // prive code
    
    return {
        // Publieke code
        publicMethod: function(){
            console.log("PublicModule: Code die gezien mag worden door je ouders.");
        }
    };
     
})();

// Anonymous Object Literal return
var LiteralReturnModule = (function(){
   
    var _privateMethod = function(){
       console.log("LiteralReturnModule: Ik ben hier niet.");
    };                                                                                  
    
    return {
        publicMethod: function(){
            _privateMethod();
        }
    };
    
})();

// Locally scoped Object Literal
var LocallyScopedObjectLiteralModule = (function(){
    
    // Locally scoped Object
    var myPublicObject = {};
    
    // Private
    var _privateMethod = function(){
       console.log("LiteralReturnModule: Ik ben hier niet.");
    };
    
    // Public
    myPublicObject.publicMethod = function(){
        console.log("Vanavond ga ik drinken wie me vindt mag me houden.");  
    };
    
    myPublicObject.publicProperty = "Gegroet";
    
    // Return ons lokale object
    return myPublicObject;
    
})();


// Stacked locally scoped Object Literal
var StackedObjectLiteralModule = (function(){
    
    // Private
    var _privateMethod = function(){};
    
    // Locally scoped Object
    var myStackedObject = {
        publicMethod: function(){
            console.log("Ik ben een open boek");  
        },
        publicProperty: "Present!"
    };
    
    // Return ons lokale object
    return myStackedObject;
    
})();



// Object literal
var person = {
    properties: { name: 'Mathijs', length: 185, age: 'too old' },
    logMe: function(){
        console.log(this.properties);
    }
};






//** Revealing pattern **//
var RevealingModule = (function(){
    
    var _privateMethod = function(){};
    
    var publicMethod1 = function(){};
    
    var publicMethod2 = function(){};
    
    return {
        publicMethod1: publicMethod1,
        publicMethod2: publicMethod2
    };
})();


//** Extending a module **//
var RevealingModuleExtension = (function(RevealingModule){
    
    // Access to Revealing Module and extend it
    RevealingModule.extension = function(){
        console.log("I am extended!");  
    };
    
    return RevealingModule;
    
})(RevealingModule || {}); // Pass in RevealingModule or an empty Object if it is undefined