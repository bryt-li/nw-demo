/**
 * Created by BIM-20 on 2017/10/8.
 */

function ModelRead(name,url,png){

    this.position=new THREE.Vector3( 0, 0, 0 );
    this.scale=new THREE.Vector3(1,1,1);
    this.rotation=new THREE.Vector3(0,0,0);
    this.name=name;
    this.png=png;
    this.url=url+"/";
    this.location=url+name;
    this.pngLocation=url+name;
    this.load=function(){
        var that=this;
        console.log("读取中。。。")
        if(name&&name.indexOf("ds")!==-1||name&&name.indexOf("DS")!==-1){
            var onProgress = function ( xhr ) {
                if ( xhr.lengthComputable ) {
                    var percentCompvare = xhr.loaded / xhr.total * 100;
                    console.log( Math.round(percentCompvare, 2) + '% downloaded' );
                }
            };
            if(png){
                var texture = loader.load( this.pngLocation );
                var normal = loader.load( this.pngLocation );
            }

            var onError = function ( xhr ) { };
            var loader = new THREE.TDSLoader( );

            loader.load( that.location, function ( object ) {
                object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh&&png) {
                        child.material.map = texture;
                        child.material.normalMap = normal;
                    }
                } );
                object.scale.set(that.scale.x,that.scale.y,that.scale.z);
                object.position.set(that.position.x,that.position.y,that.position.z);
                object.rotation.set(that.rotation.x,that.rotation.y,that.rotation.z);
                scene.add(object);

                console.log("加载完毕");
            } ,onProgress, onError );
        }
        else if(name&&name.indexOf("json")!==-1){
            console.log("json文件读取中");
            var objectLoader = new THREE.ObjectLoader();
            objectLoader.load(that.location, function ( obj ) {
                obj.scale.set(that.scale.x,that.scale.y,that.scale.z);
                obj.position.set(that.position.x,that.position.y,that.position.z);
                obj.rotation.set(that.rotation.x,that.rotation.y,that.rotation.z);
                scene.add( obj );
                console.log("读取完成")
            } );
        }
        else if(name&&name.indexOf("obj")!==-1){
            var mater=that.name.replace(/obj/g, "mtl");//替换3ds，得到材质名字

            var onProgress = function ( xhr ) {
                if ( xhr.lengthComputable ) {
                    var percentCompvare = xhr.loaded / xhr.total * 100;
                    console.log( Math.round(percentCompvare, 2) + '% downloaded' );


                 }

            };

            var onError = function ( xhr ) { };

            THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );


            var mtlLoader = new THREE.MTLLoader();

            mtlLoader.setPath( that.url+"/" );//设置mtl文件路径

            mtlLoader.load( mater, function( materials ) {

                materials.preload();

                var objLoader = new THREE.OBJLoader();
                objLoader.setPath( that.url+"/");//设置obj文件所在目录

                objLoader.setMaterials( materials );//设置三维对象材质库

                objLoader.load( that.name, function ( object ) {

                    object.traverse(function(child) {
                        if (child instanceof THREE.Mesh) {
                            // child.material.side = THREE.DoubleSide;//设置贴图模式为双面贴图
                            // child.material.emissive.r=0;//设置rgb通道R通道颜色
                            // child.material.emissive.g=0.01;//设置rgb通道G通道颜色
                            // child.material.emissive.b=0.05;//设置rgb通道B通道颜色
                            // child.material.transparent=true;//材质允许透明
                            // //child.material.opacity=0;//材质默认透明度
                            // child.material.shading=THREE.SmoothShading;//平滑渲染
                        }
                    });
                    // object.emissive=0x00ffff;//自发光颜色
                    // object.ambient=0x00ffff;//环境光颜色

                    object.scale.set(that.scale.x,that.scale.y,that.scale.z);
                    object.position.set(that.position.x,that.position.y,that.position.z);
                    object.rotation.set(that.rotation.x,that.rotation.y,that.rotation.z);
                    scene.add(object)
                    console.log("读取完成");


                 //   var dis=document.getElementById("load");
                 //   dis.className+=" none";



                }, onProgress, onError );

            });
        }
    }
}







