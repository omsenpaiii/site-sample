'use client'

import { Canvas } from '@react-three/fiber'
import { ContactShadows, useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger)

type MacbookGLTF = {
  nodes: {
    Top: THREE.Mesh
    Bottom: THREE.Mesh
  }
}

function MacBookModel({ triggerId }: { triggerId?: string }) {
  const topModel = useGLTF('/assets/Macbook_Top.glb') as unknown as MacbookGLTF
  const bottomModel = useGLTF('/assets/Macbook_Bottom.glb') as unknown as MacbookGLTF
  const groupRef = useRef<THREE.Group>(null)
  const topRef = useRef<THREE.Mesh>(null)
  const bottomRef = useRef<THREE.Mesh>(null)

  useEffect(() => {
    if (!groupRef.current || !topRef.current || !bottomRef.current) return

    const triggerEl = (triggerId ? document.getElementById(triggerId) : null) ?? groupRef.current

    const ctx = gsap.context(() => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top bottom',
          end: 'top center',
          scrub: true,
        },
      })

      tl1
        .to(groupRef.current!.rotation, { x: 0.0, ease: 'power2.inOut' })
        .to(groupRef.current!.rotation, { y: Math.PI - 0.4, ease: 'power2.inOut' }, '>')
        .to(topRef.current!.rotation, { x: Math.PI / 2 + 0.1, ease: 'power2.inOut' }, '<')
        .to(groupRef.current!.position, { x: 1.0, ease: 'power2.inOut' }, '<')
        .to(groupRef.current!.scale, { x: 0.82, y: 0.82, z: 0.82, ease: 'power2.inOut' }, '<')

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: triggerEl,
          start: 'center center',
          end: 'bottom top',
          scrub: true,
        },
      })

      tl2.to(groupRef.current!.rotation, { y: Math.PI + 0.4, ease: 'power2.inOut' }).to(
        groupRef.current!.position,
        { x: -1.0, ease: 'power2.inOut' },
        '<',
      )
    })

    return () => ctx.revert()
  }, [triggerId])

  return (
    <group ref={groupRef} position={[0, -0.7, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1.2}>
      <mesh ref={topRef}>
        <primitive object={topModel.nodes.Top} />
      </mesh>
      <mesh ref={bottomRef}>
        <primitive object={bottomModel.nodes.Bottom} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/assets/Macbook_Top.glb')
useGLTF.preload('/assets/Macbook_Bottom.glb')

export function MacBookScene({ triggerId }: { triggerId?: string }) {
  return (
    <div className="relative h-full w-full">
      <Suspense fallback={<div className="h-full w-full bg-dark-900/40" />}>
        <Canvas camera={{ position: [0, 0.4, 4.8], fov: 55 }} className="rounded-2xl">
          <directionalLight intensity={5} position={[1, 3, 3]} />
          <MacBookModel triggerId={triggerId} />
          <ContactShadows opacity={0.28} position={[0, -0.9, 0]} blur={1.5} />
        </Canvas>
      </Suspense>
    </div>
  )
}

export default MacBookScene
