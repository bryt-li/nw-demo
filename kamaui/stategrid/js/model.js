

var container, stats;

var camera, scene, renderer;

var mouseX = 0, mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var $carouselGeneric=$("#carousel-generic");



init();


var CamPointLight,  CamPointColor;
function init() {

    container = document.getElementById("need_canvas");


    //document.body.appendChild( container );

    camera = new THREE.PerspectiveCamera( 45,  $carouselGeneric.width() / $carouselGeneric.height(), 1, 2000 );
    camera.position.set(70.02678949542987, 17.168260649839837,-90.47283324820711);

    orbitControls = new THREE.OrbitControls(camera);



    orbitControls = new THREE.OrbitControls(camera);
    orbitControls .enablePan = true;
    orbitControls .enableZoom = false;
    orbitControls .enableDamping = true;
    orbitControls .minPolarAngle = 0.6;
    orbitControls .maxPolarAngle = 2.4;
    orbitControls .dampingFactor = 0.07;
    orbitControls .rotateSpeed = 0.005;
    orbitControls.userPanSpeed = 1;//禁止图形移动位置

    // scene



    scene = new THREE.Scene();


    function light() {
        var ambientColor = "#ffffff";
        var ambientLight = new THREE.AmbientLight(ambientColor);

        var PointColor = "#ffffff";
        var PointLight = new THREE.PointLight(PointColor);


        PointLight.position.set(10,10, 10);

        // scene.add(PointLight);

        var directionalLight1 = new THREE.DirectionalLight( 0xC0C090 );

        directionalLight1.position.set( -100, -50, 100 );
        var dir=new THREE.DirectionalLightHelper( directionalLight1);
        //  scene.add(dir)
        scene.add(directionalLight1)
        scene.add(ambientLight);

        CamPointColor = "#ffffff";
        CamPointLight= new THREE.SpotLight(CamPointColor);
        CamPointLight.intensity=0.5;
        CamPointLight.position.set(camera.position.x,camera.position.y,camera.position.z);
        scene.add(CamPointLight)

    }
    light();
// model



    //new ModelRead(name,url,png)   name模型名字(支持obj。json。3ds) url模型地址 png模型贴图
    var battery=new ModelRead('no.obj','model','');
    //设置模型的位置，大小，旋转角度
    battery.position=new THREE.Vector3( 0, 10, 0 );
    battery.scale=new THREE.Vector3( 1,1,1 );
    battery.rotation=new THREE.Vector3(0,0,0);
    /// 开始读取模型
    battery.load();



    renderer = new THREE.WebGLRenderer({
        antialias: true
    });

    renderer.setClearColor(0X191970);
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( $carouselGeneric.width(), $carouselGeneric.height() );
    container.appendChild( renderer.domElement );

    document.addEventListener( 'mousemove', onDocumentMouseMove, false );

    //

    window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

    windowHalfX = $carouselGeneric.width()  / 2;
    windowHalfY =  $carouselGeneric.height() / 2;

    camera.aspect = $carouselGeneric.width() / $carouselGeneric.height();
    camera.updateProjectionMatrix();

    renderer.setSize( $carouselGeneric.width(), 471 );

}

function onDocumentMouseMove( event ) {

    mouseX = ( event.clientX - windowHalfX ) / 2;
    mouseY = ( event.clientY - windowHalfY ) / 2;

}

//


function render() {

    CamPointLight.position.set(camera.position.x,camera.position.y,camera.position.z);

    requestAnimationFrame(render);
    renderer.render(scene, camera);

}
render();
