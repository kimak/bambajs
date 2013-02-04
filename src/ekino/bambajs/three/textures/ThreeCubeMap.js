/**
 * User: mickael
 * Date: 02/02/13
 * Time: 19:40
 * To change this template use File | Settings | File Templates.
 */
// namespace:
this.bambajs = this.bambajs || {};

(function () {

    /**
     */
    var ThreeCubeMap = function (posXUrl, posYUrl,negXUrl,negYUrl,posZUrl,negZUrl,onLoad,onError) {
       return this._initialize(posXUrl, posYUrl,negXUrl,negYUrl,posZUrl,negZUrl,onLoad,onError);
    }

    var p = ThreeCubeMap.prototype;


    /**
     * Initialization method.
     * @method initialize
     * @protected
     **/
    p._initialize = function (posXUrl, posYUrl,negXUrl,negYUrl,posZUrl,negZUrl,onLoad,onError) {

        var urls=[posXUrl,negXUrl,posYUrl,negYUrl,posZUrl,negZUrl];

        var cubeMap = THREE.ImageUtils.loadTextureCube(urls,undefined,onLoad,onError);

        // set the format, likely RGB
        // unless you've gone crazy
        cubeMap.format = THREE.RGBFormat;

        return cubeMap;

    }

    bambajs.ThreeCubeMap = ThreeCubeMap;
}());
