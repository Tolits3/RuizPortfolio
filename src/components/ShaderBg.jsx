import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ShaderBg() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(2, 2);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2(mount.clientWidth, mount.clientHeight) },
        u_colorA: { value: new THREE.Color("#013220") }, // deep green
        u_colorB: { value: new THREE.Color("#0A3D2E") }, // darker
        u_gold: { value: new THREE.Color("#D4AF37") },   // gold tint
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;
        uniform vec2 u_resolution;
        uniform float u_time;
        uniform vec3 u_colorA;
        uniform vec3 u_colorB;
        uniform vec3 u_gold;

        // 2D noise
        float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p,p+45.32); return fract(p.x * p.y); }
        float noise(vec2 p){
          vec2 i = floor(p);
          vec2 f = fract(p);
          float a = hash(i);
          float b = hash(i + vec2(1.0,0.0));
          float c = hash(i + vec2(0.0,1.0));
          float d = hash(i + vec2(1.0,1.0));
          vec2 u = f*f*(3.0-2.0*f);
          return mix(a,b,u.x) + (c-a)*u.y*(1.0-u.x) + (d-b)*u.x*u.y;
        }

        void main(){
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;
          vec2 pos = uv * 2.0 - 1.0;
          float t = u_time * 0.08;

          // base gradient
          vec3 col = mix(u_colorA, u_colorB, uv.y);

          // layered noise ripple (gives subtle movement)
          float n = noise(uv * 3.0 + vec2(t * 0.5, -t * 0.2));
          float ripple = sin((uv.x+uv.y + n*1.5 + t) * 3.0) * 0.03;
          col += ripple * u_gold * 0.12;

          // vignette
          float vignette = smoothstep(0.8, 0.3, length(pos));
          col *= vignette;

          gl_FragColor = vec4(col, 1.0);
        }
      `,
      transparent: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let raf;
    const onResize = () => {
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      material.uniforms.u_resolution.value.set(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    const clock = new THREE.Clock();
    const animate = () => {
      material.uniforms.u_time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      material.dispose();
      geometry.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-10" />;
}
