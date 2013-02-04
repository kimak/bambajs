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
    var ThreeSkyBoxPlanes = function (width,height,depth,map) {
        this._initialize(width,height,depth,map);
    }

    var p = ThreeSkyBoxPlanes.prototype = new THREE.Object3D();

// public properties:


    p.front=null;
    p.back=null;
    p.left=null;
    p.right=null;
    p.bottom=null;
    p.top=null;

    p.skyMaterial=null;



    /**
     * Initialization method.
     * @method initialize
     * @protected
     **/
    p._initialize = function (width,height,depth,map) {

        var width = width || 1024;
        var height = height || 1024;
        var depth = depth || 1024;


        var offsetY=50;


        this.front=this._createPlane(width,height,true,map.image[0]);
        this.front.position.z=depth*0.5;
        this.front.position.y=offsetY;

        this.back=this._createPlane(width,height,true,map.image[4]);
        this.back.position.z=-depth*0.5;
        this.back.position.y=offsetY;
        this.back.rotation.y=-Math.PI;

        this.left=this._createPlane(width,height,true,map.image[2]);
        this.left.position.x=-width*0.5;
        this.left.position.y=offsetY;
        this.left.rotation.y=-Math.PI/2;

        this.right=this._createPlane(width,height,true,map.image[3]);
        this.right.position.x=width*0.5;
        this.right.position.y=offsetY;
        this.right.rotation.y=Math.PI/2;

        this.bottom=this._createPlane(width,height,true,map.image[5]);
        this.bottom.position.y=-90;
        //this.bottom.position.y=-50;
        this.bottom.rotation.x=Math.PI/2;
        this.bottom.doubleSided=true;

        this.top=this._createPlane(width,height,true,map.image[1]);
        this.top.position.y=height*0.5+offsetY;
        this.top.rotation.x=-Math.PI/2;

    }


    p._createPlane = function (width,height,flipSided,map) {
        var mesh=new THREE.Mesh(new THREE.PlaneGeometry(width, height),
                                //new THREE.MeshBasicMaterial({map:new THREE.Texture(map)}));
                                new THREE.MeshBasicMaterial({map:new THREE.ImageUtils.loadTexture('images/sun/pz.jpg')}));
        mesh.flipSided=flipSided;
        this.add(mesh);

        return mesh;
    };

    /**
     * Update texture with cubeMap method.
     * @param map
     * @method updateCubeMap
     **/
    p.updateCubeMap = function (map) {

        this.updateMap(this.front,map.image[0]);
        this.updateMap(this.left,map.image[4]);
        this.updateMap(this.top,map.image[2]);
        this.updateMap(this.bottom,map.image[3]);
        this.updateMap(this.right,map.image[5]);
        this.updateMap(this.back,map.image[1]);

    }

    p.updateMap = function (mesh,image) {
        mesh.material.map = new THREE.Texture(image);
        mesh.material.needsUpdate=true;
        mesh.needsUpdate=true;
        mesh.material.map.needsUpdate=true;

    };

    bambajs.ThreeSkyBoxPlanes = ThreeSkyBoxPlanes;
}());
