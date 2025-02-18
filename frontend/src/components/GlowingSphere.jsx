import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function WireframeSphere() {
  const meshRef = useRef(null)
  const nodesRef = useRef(null)

  const { positions, indices } = useMemo(() => {
    const icosahedronGeometry = new THREE.IcosahedronGeometry(1, 3)
    return {
      positions: icosahedronGeometry.attributes.position.array,
      indices: icosahedronGeometry.index?.array || new Uint16Array(),
    }
  }, [])

  const nodePositions = useMemo(() => {
    const uniquePositions = new Set()
    const nodes = []
    for (let i = 0; i < positions.length; i += 3) {
      const key = `${positions[i]},${positions[i + 1]},${positions[i + 2]}`
      if (!uniquePositions.has(key)) {
        uniquePositions.add(key)
        nodes.push(positions[i], positions[i + 1], positions[i + 2])
      }
    }
    return new Float32Array(nodes)
  }, [positions])

  // Rotate the sphere without affecting its position
  useFrame((state) => {
    if (meshRef.current && nodesRef.current) {
      meshRef.current.rotation.y += 0.006
      nodesRef.current.rotation.y += 0.006
    }
  })

  return (
    <group scale={[1.5, 1.5, 1.5]}> {/* Increased scale to make the sphere bigger */}
      <lineSegments ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          {indices.length > 0 && (
            <bufferAttribute
              attach="index"
              count={indices.length}
              array={indices}
              itemSize={1}
            />
          )}
        </bufferGeometry>
        <lineBasicMaterial color="#ffffff" />
      </lineSegments>
      <points ref={nodesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodePositions.length / 3}
            array={nodePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="#ffffff" size={0.05} sizeAttenuation={true} />
      </points>
    </group>
  )
}

export default function GlowingSphere() {
  return (
    <div className="absolute w-full h-screen -z-10 overflow-hidden">
      {/* Background Sphere */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <WireframeSphere />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </div>
  )
}
