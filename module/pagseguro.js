var https = require('https');
var js2xmlparser = require("js2xmlparser");

module.exports = function(app, db, schema) {
	var pagseguro = {
		getCodeRedirect: function(data, callback) {
            
            var postRequest = {
                host: "ws.pagseguro.uol.com.br",
                path: "/v2/checkout",
                port: 80,
                method: "POST",
                headers: {
                    'Cookie': "cookie",
                    'Content-Type': 'application/xml; charset=ISO-8859-1',
                    'Content-Length': Buffer.byteLength(js2xmlparser("person", data))
                }
            };
            
            var req = https.request( postRequest, function( res )    {
               console.log("Status recebido do pagseguro ::: " + res.statusCode );
               var buffer = "";
               res.on( "data", function( data ) { buffer = buffer + data; } );
               res.on( "end", function( data ) { console.log( buffer ); } );
            
            });
            
            req.write( js2xmlparser("checkout", data) );
            req.end();
		}
	};
	return pagseguro;
};
