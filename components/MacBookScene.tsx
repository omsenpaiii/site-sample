'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, useGLTF, useTexture } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react'
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger)

type MacbookGLTF = {
  nodes: {
    Top: THREE.Object3D
    Bottom: THREE.Object3D
  }
}

type ScreenConfig = {
  size: [number, number]
  position: [number, number, number]
  rotation: [number, number, number]
}

function MacBookModel({
  triggerId,
  screenImage,
  screenImages,
}: {
  triggerId?: string
  screenImage?: string
  screenImages?: string[]
}) {
  const topModel = useGLTF('/assets/Macbook_Top.glb') as unknown as MacbookGLTF
  const bottomModel = useGLTF('/assets/Macbook_Bottom.glb') as unknown as MacbookGLTF
  const groupRef = useRef<THREE.Group>(null)
  const topRef = useRef<THREE.Group>(null)
  const bottomRef = useRef<THREE.Group>(null)
  const moveTween = useRef<gsap.core.Tween>()
  const baseRotation = useRef({ x: 0.15, y: Math.PI, z: 0 })
  const mouseOffset = useRef({ x: 0, y: 0 })
  const [screenConfig, setScreenConfig] = useState<ScreenConfig | null>(null)

  const screenTexture = useTexture(screenImage ?? '/images/slideshow1.png')
  const overlaySources = screenImages && screenImages.length ? screenImages : [screenImage ?? '/images/slideshow1.png']
  const overlayTextures = useTexture(overlaySources) as THREE.Texture[]
  const overlayList = screenImages && screenImages.length ? overlayTextures : []
  useEffect(() => {
    screenTexture.colorSpace = THREE.SRGBColorSpace
    screenTexture.flipY = false
    screenTexture.needsUpdate = true
    overlayList.forEach((texture) => {
      texture.colorSpace = THREE.SRGBColorSpace
      texture.flipY = false
      texture.needsUpdate = true
    })
  }, [screenTexture, overlayList])

  useLayoutEffect(() => {
    if (!topRef.current) return

    const topObject = topRef.current
    topObject.updateWorldMatrix(true, true)

    const box = new THREE.Box3().setFromObject(topObject)
    const size = new THREE.Vector3()
    const center = new THREE.Vector3()
    box.getSize(size)
    box.getCenter(center)
    topObject.worldToLocal(center)

    const dims = [size.x, size.y, size.z]
    const minIndex = dims.indexOf(Math.min(...dims))
    const width = minIndex === 0 ? size.y : size.x
    const height = minIndex === 2 ? size.y : size.z
    const rotation: [number, number, number] =
      minIndex === 0 ? [0, Math.PI / 2, 0] : minIndex === 1 ? [-Math.PI / 2, 0, 0] : [0, 0, 0]

    const position = center.clone()
    const offset = dims[minIndex] / 2 + 0.008
    if (minIndex === 0) position.x += offset
    if (minIndex === 1) position.y += offset
    if (minIndex === 2) position.z += offset

    setScreenConfig({
      size: [width * 0.78, height * 0.52],
      position: [position.x, position.y, position.z],
      rotation,
    })
  }, [topModel])

  useEffect(() => {
    if (!groupRef.current || !topRef.current || !bottomRef.current) return

    const triggerEl = (triggerId ? document.getElementById(triggerId) : null) ?? document.body
    const openAngle = 1.82
    const closedAngle = 0.35
    const base = baseRotation.current

    if (topRef.current) {
      topRef.current.rotation.x = openAngle
    }

    const ctx = gsap.context(() => {
      gsap.to(base, {
        x: 0.05,
        y: Math.PI,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      if (topRef.current) {
        gsap.to(topRef.current.rotation, {
          x: closedAngle,
          ease: 'none',
          scrollTrigger: {
            trigger: triggerEl,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      const handleMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth) * 2 - 1
        const y = (e.clientY / window.innerHeight) * 2 - 1
        moveTween.current?.kill()
        moveTween.current = gsap.to(mouseOffset.current, {
          x: x * 0.18,
          y: y * 0.1,
          duration: 0.4,
          ease: 'power2.out',
        })
      }

      window.addEventListener('mousemove', handleMove)
      ScrollTrigger.refresh()

      return () => {
        window.removeEventListener('mousemove', handleMove)
        moveTween.current?.kill()
      }
    })

    return () => ctx.revert()
  }, [triggerId])

  useFrame(() => {
    if (!groupRef.current) return
    groupRef.current.rotation.x = baseRotation.current.x + mouseOffset.current.y
    groupRef.current.rotation.y = baseRotation.current.y + mouseOffset.current.x
    groupRef.current.rotation.z = baseRotation.current.z
  })

  return (
    <group ref={groupRef} position={[0, -0.85, -0.35]} rotation={[0.12, Math.PI, 0]} scale={1.1}>
      <group ref={topRef}>
        <primitive object={topModel.nodes.Top} />
        {screenConfig ? (
          <mesh position={screenConfig.position} rotation={screenConfig.rotation}>
            <planeGeometry args={screenConfig.size} />
            <meshBasicMaterial map={screenTexture} toneMapped={false} side={THREE.DoubleSide} />
          </mesh>
        ) : null}
        {screenConfig
          ? overlayList.map((texture, idx) => (
              <mesh
                key={`overlay-${idx}`}
                position={screenConfig.position}
                rotation={screenConfig.rotation}
                renderOrder={10 + idx}
              >
                <planeGeometry args={screenConfig.size} />
                <meshBasicMaterial
                  map={texture}
                  toneMapped={false}
                  transparent
                  opacity={0.16}
                  depthWrite={false}
                  side={THREE.DoubleSide}
                  polygonOffset
                  polygonOffsetFactor={-1 - idx}
                  polygonOffsetUnits={-1}
                />
              </mesh>
            ))
          : null}
      </group>
      <group ref={bottomRef}>
        <primitive object={bottomModel.nodes.Bottom} />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/Macbook_Top.glb')
useGLTF.preload('/assets/Macbook_Bottom.glb')

export function MacBookScene({
  triggerId,
  screenImage,
  screenImages,
}: {
  triggerId?: string
  screenImage?: string
  screenImages?: string[]
}) {
  return (
    <div className="relative h-full w-full">
      <Suspense fallback={<div className="h-full w-full bg-dark-900/40" />}>
        <Canvas camera={{ position: [0, 0.1, 4.8], fov: 55 }} className="rounded-2xl">
          <ambientLight intensity={0.6} />
          <directionalLight intensity={5} position={[1, 3, 3]} />
          <MacBookModel triggerId={triggerId} screenImage={screenImage} screenImages={screenImages} />
          <ContactShadows opacity={0.28} position={[0, -0.9, 0]} blur={1.5} />
        </Canvas>
      </Suspense>
    </div>
  )
}

export default MacBookScene
