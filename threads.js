const { isMainThread, workerData, Worker } = require('worker_threads');

if (isMainThread) {
    console.log(`New master created at ${process.pid}`);
    new Worker(__filename, {
        workerData: [4,3,5,7,8,1,2,47,6,54,65,4694,448648,6546,4]
    });
    new Worker(__filename, {
        workerData: [5456,34654,6,54,654,65465,46,46541,646,46546486,465464,864,648,646,54654]
    });
} else {
    console.log(`New worker created at ${process.pid}`);
    console.log(`${workerData} sorted is ${workerData.sort((a,b) => a-b)}`)
}
