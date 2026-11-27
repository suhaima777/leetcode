/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = function(promise1, promise2) {
    return Promise.all([promise1, promise2])
        .then(([a, b]) => a + b);
};
