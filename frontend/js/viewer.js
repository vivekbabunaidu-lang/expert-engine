import * as THREE from "https://esm.sh/three";
import { GLTFLoader } from "https://esm.sh/three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://esm.sh/three/examples/jsm/controls/OrbitControls.js";

export function initViewer() {
  const viewer = document.getElementById("viewer");
  if (!viewer) return;

  /* ---------- SCENE & CAMERA ---------- */
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    60,
    viewer.clientWidth / viewer.clientHeight,
    0.1,
    1000
  );

  /* ---------- RENDERER ---------- */
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(viewer.clientWidth, viewer.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  viewer.appendChild(renderer.domElement);

  /* ---------- CONTROLS ---------- */
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = true; // Allow user to zoom in and out
  controls.enablePan = false;

  /* ---------- LIGHTING ---------- */
  scene.add(new THREE.AmbientLight(0xffffff, 0.8));
  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(10, 20, 10);
  scene.add(light);
  
  const backLight = new THREE.DirectionalLight(0x38bdf8, 1);
  backLight.position.set(-10, -10, -10);
  scene.add(backLight);

  /* ---------- MODEL & MAPPING CACHE ---------- */
  let engineModel;
  let activeTarget = "None";

  const loader = new GLTFLoader();

  loader.load("models/v8_engine.glb", (gltf) => {
    engineModel = gltf.scene;

    const box = new THREE.Box3().setFromObject(engineModel);
    const center = box.getCenter(new THREE.Vector3());
    engineModel.position.sub(center);

    engineModel.traverse((child) => {
      if (child.isMesh) {
        
        // Apply default sleek material
        if (!child.material.emissive) {
           child.material = new THREE.MeshStandardMaterial({
             color: child.material.color,
             metalness: 0.8,
             roughness: 0.2
           });
        }
      }
    });

    scene.add(engineModel);

    const size = box.getSize(new THREE.Vector3()).length();
    camera.position.set(size, size/2, size);
    controls.target.set(0, 0, 0);
  });

  /* ---------- ANIMATION LOOP ---------- */
  function animate() {
    requestAnimationFrame(animate);

    if (engineModel) {
      // Very slow cinematic spin to view all angles
      engineModel.rotation.y += 0.002;
    }

    controls.update();
    renderer.render(scene, camera);
  }
  
  animate();

  /* ---------- RESIZE HANDLING ---------- */
  window.addEventListener("resize", () => {
    // Viewer is strictly tied to sticky left side DOM container
    camera.aspect = viewer.clientWidth / viewer.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(viewer.clientWidth, viewer.clientHeight);
  });


  /* ---------- INTERSECTION OBSERVER (Scroll Spy) ---------- */
  
  const storyCards = document.querySelectorAll(".story-card");
  
  // Set up observer to track when text cards hit the middle of the screen
  const observerOptions = {
    root: null, // viewport
    rootMargin: "-40% 0px -40% 0px", // Trigger active state strictly in the middle 20% of screen
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        
        // Remove active class from all
        storyCards.forEach(card => card.classList.remove("active"));
        
        // Add to the intersecting one
        entry.target.classList.add("active");
        
        // Update the 3D target! (This updates the animate loop above)
        activeTarget = entry.target.getAttribute("data-highlight");
      }
    });
  }, observerOptions);

  storyCards.forEach(card => observer.observe(card));

}