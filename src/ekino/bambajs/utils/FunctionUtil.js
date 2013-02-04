/**
 * Created by JetBrains WebStorm.
 * User: mickael
 * Date: 02/02/13
 * Time: 22:08
 * To change this template use File | Settings | File Templates.
 */
// namespace:
this.bambajs = this.bambajs || {};

(function () {

var FunctionUtil={};

FunctionUtil.delegate=function(object, method)
{
    var shim =  function()
    {
        return method.apply(object, arguments);
    }
    return shim;
}

bambajs.FunctionUtil=FunctionUtil;
}());