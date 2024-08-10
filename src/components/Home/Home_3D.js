// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// const Home_3D = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ alpha: true });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     containerRef.current.appendChild(renderer.domElement);

//     const loader = new GLTFLoader();
//     let object; 
//     let mouseX = window.innerWidth / 2;
//     let mouseY = window.innerHeight / 2;
//     const objToRender = 'robotic_eye';

//     loader.load(

//       `/models/${objToRender}/scene.gltf`, // Correct the path to the GLTF file
//     //   public/models/robotic_eye
//       function (gltf) {
//         object = gltf.scene;
//         object.scale.set(1000, 1000, 1000);
//         scene.add(object);
//       },
//       function (xhr) {
//         console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//         console.log('yayyyy')
//       },
//       function (error) {
//         console.error(error);
//         console.log('ughhhhhh');
//       }
//     );

//     camera.position.z = objToRender === "dino" ? 25 : 500;

//     const topLight = new THREE.DirectionalLight(0xadd8e6, 10);
//     topLight.position.set(1000, 1000, 1000);
//     topLight.castShadow = true;
//     scene.add(topLight);

//     const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "dino" ? 10 : 2);
//     // const ambientLight = new THREE.AmbientLight(0xffffff, 3);
//     // objToRender === "dino" ? 10 : 2);
//     scene.add(ambientLight);

//     const bottomLight = new THREE.DirectionalLight(0xadd8e6, 5); // Light blue color
//     bottomLight.position.set(-1000, -1000, -1000);
//     scene.add(bottomLight);

//     const sideLight1 = new THREE.DirectionalLight(0xffffff, 5); // White light from the side
//     sideLight1.position.set(-1000, 0, 0);
//     scene.add(sideLight1);

//     const sideLight2 = new THREE.DirectionalLight(0xffffff, 5); // White light from the other side
//     sideLight2.position.set(1000, 0, 0);
//     scene.add(sideLight2);

//     if (objToRender === "dino") {
//       new OrbitControls(camera, renderer.domElement);
//     }

//     const animate = () => {
//       requestAnimationFrame(animate);

//       if (object && objToRender === "robotic_eye") {
//         object.rotation.y = -3 + mouseX / window.innerWidth * 3;
//         object.rotation.x = 4.5 + mouseY * 2.5 / window.innerHeight;
//       }

//       renderer.render(scene, camera);
//     };

//     animate();

//     const onResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', onResize);
//     document.onmousemove = (e) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//     };

//     return () => {
//       window.removeEventListener('resize', onResize);
//       document.removeEventListener('mousemove', (e) => {
//         mouseX = e.clientX;
//         mouseY = e.clientY;
//       });
//       containerRef.current.removeChild(renderer.domElement);
//     };
//   }, []);

// //   return <div ref={containerRef} />;
//     return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
// };

// export default Home_3D;

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // To allow for the camera to move around the scene; allows for rotation and size change

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // To allow for importing the .gltf file

const ThreeScene = () => {
  const containerRef = useRef(null); // Create a reference to attach the Three.js renderer to a DOM element

  useEffect(() => {
    // This effect runs after the component mounts

    
    // always need a scence object, camera, and render
    // scene object: like 3d space here so u would add ur 3d elements to this scene
    // camera: pov
    // render: puts everything together 
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement); // Attach the renderer to the DOM element

    const loader = new GLTFLoader();
    let object; // To store the loaded 3D model
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    const objToRender = 'sad_toaster';

    renderer.setClearColor(0xffffff); // Set background color to white
    renderer.setClearColor(0x000000); // Set background color to white



    loader.load(
        `/models/${objToRender}/scene.gltf`,
      function (gltf) {
        // This function runs when the model is successfully loaded
        object = gltf.scene;
        object.scale.set(300, 300, 300); // Adjust the scale of the model
        // object.scale.set(10, 10, 10); // Adjusted scale for visibility
        object.position.x = -700;
        object.position.y = -500;


        scene.add(object); // Add the model to the scene
      },
      function (xhr) {
        // This function runs to report loading progress
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      function (error) {
        // This function runs if there is an error loading the model
        console.error(error);
        console.log('ughhhhhh')
      }
    );

    // camera.position.z = objToRender === "sad_toaster" ? 25 : 100;
    camera.position.z = 1000;

    // Set up lights
    const topLight = new THREE.DirectionalLight(0xffffff, 2.5); // (color, intensity)
    topLight.position.set(500, 500, 500); //top-left-ish
    topLight.castShadow = true;
    scene.add(topLight);


    const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "dino" ? 10 : 2);
    scene.add(ambientLight);

    if (objToRender === "dino") {
      new OrbitControls(camera, renderer.domElement); // Add controls to the camera
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (object && objToRender === "sad_toaster") {
        object.rotation.y = -3 + mouseX / window.innerWidth * 3;
        object.rotation.x = -0.5 + mouseY * 2.5 / window.innerHeight;
      }

      renderer.render(scene, camera); // Render the scene from the perspective of the camera
    };

    animate();

    // Handle window resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);
    document.onmousemove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    return () => {
      // Cleanup when the component unmounts
      window.removeEventListener('resize', onResize);
      document.removeEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []); // The empty array ensures this effect runs only once, similar to componentDidMount

//   return <div ref={containerRef} />; // Render a div to attach the Three.js renderer
    return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeScene;
