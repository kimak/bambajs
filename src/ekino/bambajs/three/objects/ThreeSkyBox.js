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
     * @param domElement element where the threejs renderer is appendChild
     * @param properties ThreeSceneBasePropertie to initialise scene
     */
    var ThreeSkyBox = function (width,height,depth) {
        this._initialize(width,height,depth);
    }

    var p = ThreeSkyBox.prototype = new THREE.Object3D();

// public properties:

    /**
     * The threejs cubeMap
     * @property shader
     * @type T
     **/
    p.shader=null;
    p.mesh=null;
    p.skyMaterial=null;



    /**
     * Initialization method.
     * @method initialize
     * @protected
     **/
    p._initialize = function (width,height,depth) {

        var width = width || 1024;
        var height = height || 1024;
        var depth = depth || 1024;


        this.shader = THREE.ShaderUtils.lib[ "cube" ];

        this.skyMaterial = new THREE.ShaderMaterial({
            fragmentShader:this.shader.fragmentShader,
            vertexShader:this.shader.vertexShader,
            uniforms:this.shader.uniforms,
            depthWrite:false
        });


        this.mesh = new THREE.Mesh(new THREE.CubeGeometry(width, height, depth), this.skyMaterial);
        this.mesh.flipSided = true;
        this.add(this.mesh);
    }

    /**
     * Update texture with cubeMap method.
     * @param map
     * @method updateCubeMap
     **/
    p.updateCubeMap = function (map) {
        this.shader.uniforms[ "tCube" ].texture = map;


    }

    bambajs.ThreeSkyBox = ThreeSkyBox;
}());
