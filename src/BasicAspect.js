/**
 * Created by Palash on 11/24/2016.
 */

var BasicAspect = {
    before: function (pointcut, before) {
        return function () {
            before();
            return pointcut.apply(this, arguments);
        }
    },

    around: function (pointcut, before, after) {
        return function () {
            before();
            var temp = pointcut.apply(this, arguments);
            after();
            return temp;
        }
    },

    after: function (pointcut, after) {
        return function () {
            var temp = pointcut.apply(this, arguments);
            after();
            return temp;
        }
    },

    afterThrowing: function (pointcut, after){
        return function () {
            try {
                return pointcut.apply(this, arguments)
            } catch (e) {
                after();
                throw e;
            }
        }
    }
};