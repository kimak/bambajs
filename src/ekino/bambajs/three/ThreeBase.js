/**
 * Created by JetBrains WebStorm.
 * User: mickael
 * Date: 02/02/13
 * Time: 18:12
 * To change this template use File | Settings | File Templates.
 */
// namespace:
this.bambajs = this.bambajs || {};

(function () {

    /**
     * @param domElement element where the threejs renderer is appendChild
     * @param properties ThreeSceneBasePropertie to initialise scene
     */
    var ThreeBase = function (domElement, properties) {
        this._initialize(domElement, properties);
    }

    var p = ThreeBase.prototype;

// public properties:
    /**
     * The threejs camera.
     * @property camera
     * @type Three.PerspectiveCamera
     **/
    p.camera = null;

    /**
     * The threejs scene.
     * @property scene
     * @type Three.Scene
     **/
    p.scene = null;


    /**
     * The threejs renderer.
     * @property renderer
     * @type Three.WebGLRenderer
     **/
    p.renderer = null;

    /**
     * @property isRender
     * @type Boolean
     **/
    p.isRender = false;


    /**
     * @property _renderCallback
     * @type Function
     * @private
     **/
    p._renderCallback = null;


    /**
     * Initialization method.
     * @method initialize
     * @protected
     **/
    p._initialize = function (domElement, properties) {

        var baseProps = properties || new bambajs.ThreeBaseProperties();


        if(baseProps.pixelPrecision){

            var degree=2*Math.atan( baseProps.height / ( 2 * baseProps.cameraZ ) ) ;
            baseProps.fov=degree*180/Math.PI;

        }

        this.camera = new THREE.PerspectiveCamera(baseProps.fov, baseProps.width / baseProps.height, baseProps.near, baseProps.far);
        this.camera.position.z=baseProps.cameraZ;

        this.scene = new THREE.Scene();

        this.scene.add(this.camera);

        this.renderer = new THREE.WebGLRenderer({antialias:baseProps.antialias});
        this.renderer.setSize(baseProps.width, baseProps.height);

        domElement.appendChild(this.renderer.domElement);


    }

    /**
     * Render method.
     * @method render
     **/
    p.render = function () {
        if (this.renderer) this.renderer.render(this.scene, this.camera);
    }


    bambajs.ThreeBase = ThreeBase;
}());