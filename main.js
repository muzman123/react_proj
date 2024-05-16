import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});
//renderer.setClearColor(0xF0F0F0);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const earthTexture = new THREE.TextureLoader().load('images/earthTexture.jpg');
const cam = new THREE.Mesh(
    new THREE.SphereGeometry(3, 24, 24),
    new THREE.MeshBasicMaterial( {
        color: 0xff0000,
    })
);
scene.add(cam);

const sunTexture = new THREE.TextureLoader().load('images/sun_texture.jpg');
const sun = new THREE.Mesh(
    new THREE.SphereGeometry(50,24,24),
    new THREE.MeshStandardMaterial( {
        map: sunTexture,
    })
)
scene.add(sun);
sun.position.set(0,0,-400);

const earth = new THREE.Mesh(
    new THREE.SphereGeometry(9,24,24),
    new THREE.MeshStandardMaterial( {
        map: earthTexture,
    })
)
scene.add(earth);
earth.position.set(200,0,-400);

const mercuryTexture = new THREE.TextureLoader().load('images/Mercury.jpg');
const mercury = new THREE.Mesh(
    new THREE.SphereGeometry(5,24,24),
    new THREE.MeshStandardMaterial( {
        map: mercuryTexture,
    })
)
scene.add(mercury);
mercury.position.set(100,0,-400);

const venusTexture = new THREE.TextureLoader().load('images/venus.jpg');
const venus = new THREE.Mesh(
    new THREE.SphereGeometry(8,24,24),
    new THREE.MeshStandardMaterial( {
        map: venusTexture,
    })
)
scene.add(venus);
venus.position.set(150,0,-400);

const marsTexture = new THREE.TextureLoader().load('images/mars.jpg');
const mars = new THREE.Mesh(
    new THREE.SphereGeometry(7,24,24),
    new THREE.MeshStandardMaterial( {
        map: marsTexture,
    })
)
scene.add(mars);
mars.position.set(250,0,-400);

const jupiterTexture = new THREE.TextureLoader().load('images/jupiter.jpg');
const jupiter = new THREE.Mesh(
    new THREE.SphereGeometry(20,24,24),
    new THREE.MeshStandardMaterial( {
        map: jupiterTexture,
    })
)
scene.add(jupiter);
jupiter.position.set(330,0,-400);

const saturnTexture = new THREE.TextureLoader().load('images/saturn.jpg');
const saturn = new THREE.Mesh(
    new THREE.SphereGeometry(17,24,24),
    new THREE.MeshStandardMaterial( {
        map: saturnTexture,
    })
)
scene.add(saturn);
saturn.position.set(420,0,-400);

const saturnRingTexture = new THREE.TextureLoader().load('images/saturnring.jpg');
const saturnRing = new THREE.Mesh(
    new THREE.TorusGeometry(24, 2, 25, 50),
    new THREE.MeshBasicMaterial( {
        color: 0x5C4033,
    })
)
scene.add(saturnRing)
saturnRing.position.set(420,0,-400);
saturnRing.rotateX( -70 );

const uranusTexture = new THREE.TextureLoader().load('images/uranus.jpg');
const uranus = new THREE.Mesh(
    new THREE.SphereGeometry(17,24,24),
    new THREE.MeshStandardMaterial( {
        map: uranusTexture,
    })
)
scene.add(uranus);
uranus.position.set(490,0,-400);

const neptuneTexture = new THREE.TextureLoader().load('images/neptune.jpg');
const neptune = new THREE.Mesh(
    new THREE.SphereGeometry(16,24,24),
    new THREE.MeshStandardMaterial( {
        map: neptuneTexture,
    })
)
scene.add(neptune);
neptune.position.set(580,0,-400);

const light = new THREE.PointLight(0xffffff,1000);
light.position.set(4,5,1)
scene.add(light);

const ambientLight = new THREE.AmbientLight(0xffffff,1);
scene.add(ambientLight);

camera.position.z = 10;

function animate() {
    window.addEventListener('scroll',() => {})

	requestAnimationFrame(animate);

	cam.rotation.x += 0.01;
	cam.rotation.y += 0.01;

    cam.position.x = camera.position.x;

	renderer.render( scene, camera );
}
document.body.onscroll = animate;
animate();

function updateCamera(ev) {
    const t = document.body.getBoundingClientRect().top;

    camera.position.x = t * -0.1; 
    camera.position.y = earth.position.y
    camera.position.z = earth.position.z + 100;

    //let div1 = document.getElementById("div1");
    
}

document.body.onscroll = updateCamera;
updateCamera();

function addStar() {
    const geometry = new THREE.SphereGeometry(0.25,24,24);
    const material = new THREE.MeshStandardMaterial({color: 0xffffff})
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(1000));

    star.position.set(x, y, z);
    scene.add(star)
}

Array(400).fill().forEach(addStar)