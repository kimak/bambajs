/**
 * Created by JetBrains WebStorm.
 * User: mickael
 * Date: 03/02/13
 * Time: 13:58
 * To change this template use File | Settings | File Templates.
 */
/**
 * Created by JetBrains WebStorm.
 * User: mickael
 * Date: 02/02/13
 * Time: 21:36
 * To change this template use File | Settings | File Templates.
 */
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

    var BambaStats = function (domELement) {
        this._initialize(domELement);
    }

    var p = BambaStats.prototype;

    var _stats;

    /**
     * Initialization method.
     * @method initialize
     * @protected
     **/
    p._initialize = function (domElement) {

        _stats = new Stats();
        _stats.getDomElement().style.position = 'absolute';
        _stats.getDomElement().style.left = '0px';
        _stats.getDomElement().style.top = '0px';

        domElement.appendChild(_stats.getDomElement());
    }

    /**
     * Update method.
     * @method update
     **/
    p.update = function () {
        _stats.update();
    }


    bambajs.BambaStats = BambaStats;
}());