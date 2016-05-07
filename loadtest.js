var loadtest = require('loadtest');
var total_latency = 0;

function statusCallback(latency, result, error) {
    console.log('Current latency %j', latency.totalTimeSeconds / latency.totalRequests);
    // total_latency += parseFloat(latency);
    // console.log(latency);

    console.log('----');
    console.log('Request elapsed milliseconds: ', error ? error.requestElapsed : result.requestElapsed);
    console.log('Request index: ', error ? error.requestIndex : result.requestIndex);
    console.log('Request loadtest() instance index: ', error ? error.instanceIndex : result.instanceIndex);
    console.log("#################");
    // console.log(total_latency);
    // console.log(parseFloat(total_latency) / parseFloat(result.requestIndex));
}

var options = {
    url: 'http://localhost:3000/',
    maxRequests: 1000,
    statusCallback: statusCallback
};

loadtest.loadTest(options, function(error) {
    if (error) {
        return console.error('Got an error: %s', error);
    }
    console.log('Tests run successfully');

});
