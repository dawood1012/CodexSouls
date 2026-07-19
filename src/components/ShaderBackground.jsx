import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// The GLSL Vertex Shader: simply passes UV coordinates to the fragment shader
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

// The GLSL Fragment Shader: generates continuous fluid noise
const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  varying vec2 vUv;

  // GLSL Simplex Noise function
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                       -0.577350269189626,  // -1.0 + 2.0 * C.x
                        0.024390243902439); // 1.0 / 41.0
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);

    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;

    i = mod289(i);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));

    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;

    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;

    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    // Generate large-scale, slow-moving organic noise
    float n1 = snoise(vUv * 0.8 + uTime * 0.04);
    float n2 = snoise(vUv * 1.2 - uTime * 0.03);
    
    // Create a very subtle, dark map
    float noise = (n1 + n2) * 0.5;
    noise = noise * 0.5 + 0.5;
    
    // Isolate the color to only the "peaks" of the noise, keeping the rest black
    float highlight1 = smoothstep(0.65, 1.0, noise);
    float highlight2 = smoothstep(0.4, 0.8, 1.0 - noise);
    
    // Start with a true black base
    vec3 baseColor = vec3(0.0, 0.0, 0.0);
    
    // Add very faint, premium neon auroras
    vec3 color = mix(baseColor, uColor2, highlight1 * 0.6); // Violet glow
    color = mix(color, uColor3, highlight2 * 0.4); // Pink subtle glow
    color += uColor1 * 0.15; // Extremely faint ambient deep purple
    
    gl_FragColor = vec4(color, 1.0);
  }
`

function ShaderPlane() {
  const meshRef = useRef()

  // Define uniforms: Time and very saturated brand colors
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color('#1a052b') }, // Ultra-dark purple
      uColor2: { value: new THREE.Color('#6E5BFF') }, // Vibrant Violet
      uColor3: { value: new THREE.Color('#FF52B7') }, // Pink accent
    }),
    []
  )

  // Update time uniform every frame (60fps)
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = state.clock.elapsedTime * 0.5;
    }
  })

  return (
    <mesh ref={meshRef}>
      {/* Plane spanning the entire screen */}
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
      />
    </mesh>
  )
}

export default function ShaderBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ alpha: true, antialias: false }} // Optimized for background rendering
      >
        <ShaderPlane />
      </Canvas>
    </div>
  )
}
