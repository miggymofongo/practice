/**
 * 
 * what should this library do?
 * 
 * 
 * this library will generate
 * formal and informal greetings in both english and spanish.
 * it will be resuable.
 * 
 * 
 * 
 * easy to type G$() structure
 * 
 * 
 * 
 * this should also return jquery
 * 
 * 
 * 
 * create a new execution context for the entire library
 * so that all var are safe and we are only exposing what we
 * want to the global context
 *
 * 
 */


(function(global, $) {

    var Saludadora = function(firstName, lastName, idioma) {
        
        return new Saludadora.init(firstName, lastName, idioma);

    } 

    var supportedLangs = ['en', 'es'];

    var saludos = {
        en: 'Wazgud widdit?',
        es: 'Dimelo, papi!'

    };

    var saludosFormales = {
        en: 'Greetings',
        es: 'Saludos'

    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'

    }
        

    Saludadora.prototype = {

        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.idioma) === -1) {
                throw "Invalida";
                
                }
        }, 

        Saludo: function() {
            return saludos[this.idioma] + ' ' + this.firstName + '!';
        },
        saludoFormal: function() {
            return saludosFormales[this.idioma] + ', ' + this.fullName();

        },

        saludar: function(formal) {
                var msg;

                    if (formal) {
                        msg = this.saludoFormal();
                    }
                    else {
                        msg = this.Saludo()
                    }

                    if (console) {
                        console.log(msg);
                    }

                    return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.idioma] + ': ' +
    this.fullName());

                
            }
            return this;
        }, 

        setLang: function(lang) {
            
            this.idioma = lang;

            this.validate();

            return this;
        },

        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'missing jquery selector';
            }

            var msg;
            if (formal) {
                msg = this.saludoFormal();
            }
            else {
                msg = this.Saludo();
            }

            $(selector).html(msg);

            return this;
        }

    };

    Saludadora.init = function(firstName, lastName, idioma) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.idioma = idioma || 'en';

        self.validate();
    }

    Saludadora.init.prototype = Saludadora.prototype;

    global.Saludadora = global.S$ = Saludadora



}(window, jQuery));