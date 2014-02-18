var fs = require("fs");

module.exports = function(dirname, io, tenant) {
    fs.watch(dirname, function (event, filename) {
        console.log('event is: ' + event);
        io.sockets.emit(tenant+'::::livereload', 'location.reload()');
    });
    
    fs.watch(dirname+'/js', function (event, filename) {
        console.log('event is: ' + event);
        io.sockets.emit(tenant+'::::livereload', 'location.reload()');
    });
    
    fs.watch(dirname+'/css', function (event, filename) {
        console.log('event is: ' + event);
        io.sockets.emit(tenant+'::::livereload', 'location.reload()');
    });
    
    fs.watch(dirname+'/partials', function (event, filename) {
        console.log('event is: ' + event);
        io.sockets.emit(tenant+'::::livereload', 'location.reload()');
    });
};