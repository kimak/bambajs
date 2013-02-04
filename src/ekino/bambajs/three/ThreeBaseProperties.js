/**
 * Created by JetBrains WebStorm.
 * User: mickael
 * Date: 02/02/13
 * Time: 18:25
 * To change this template use File | Settings | File Templates.
 */
// namespace:
this.bambajs = this.bambajs||{};

(function() {

    /**
     *
     * @param fovCamera element where the threejs renderer is appendChild
     * @param properties ThreeSceneBasePropertie to initialise scene
     */
    var ThreeBaseProperties = function() {
        this._initialize();
    }

    var p = ThreeBaseProperties.prototype;

    /**
     * Three camera fov.
     * @property fov
     * @type Number
     * @default 70
     **/
    p.fov=70;

    /**
     * Three scene width. Used for calculate camera aspect width/height.
     * @property width
     * @type Number
     * @default window.innerWidth
     **/
    p.width=window.innerWidth;

    /**
     * Three scene height. Used for calculate camera aspect width/height.
     * @property height
     * @type Number
     * @default window.innerHeight
     **/
    p.height=window.innerHeight;


    /**
     * Three camera near.
     * @property near
     * @type Number
     * @default 1
     **/
    p.near=0.1;

    /**
     * Three camera far.
     * @property far
     * @type Number
     * @default 1000
     **/
    p.far=2000;

    /**
     * Three camera z position.
     * @property cameraZ
     * @type Number
     * @default 500
     **/
    p.cameraZ=1000;

    /**
     * Three WebGLRenderer antialias parameter.
     * @property antialias
     * @type Number
     * @default true
     **/
    p.antialias=true;

    /**
     * The threejs renderer.
     * @property renderer
     * @type Three.WebGLRenderer
     **/
    p.pixelPrecision = true;

    /**
     * Initialization method.
     * @method initialize
     * @protected
     **/
    p._initialize = function() {

    }


    bambajs.ThreeBaseProperties = ThreeBaseProperties;
}());