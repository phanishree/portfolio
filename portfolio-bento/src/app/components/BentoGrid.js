"use client"
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, OrbitControls, Html } from '@react-three/drei';

const FloatingBox = ({ position, color, speed = 1, scale, title, description }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.1;
  });

  return (
    <Box
      ref={meshRef}
      position={position}
      args={[scale.x, scale.y, 0.2]}
    >
      <meshStandardMaterial
        color={color}
        roughness={0.3}
        metalness={0.7}
      />
      <Html
        center
        position={[0, 0, 0.2]}
        className="pointer-events-none"
        style={{
          width: `${scale.x * 100}px`,
        }}
        distanceFactor={15}
      >
        <div className="w-full text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2 whitespace-normal">
            {title}
          </h2>
          <p className="text-sm text-gray-200 whitespace-normal px-4">
            {description}
          </p>
        </div>
      </Html>
    </Box>
  );
};


const BentoGrid = () => {
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  const calculateLayout = () => {
    const width = window.innerWidth;
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    
    if (isMobile) {
      return [
        { id: 1, title: "Work Experience", description: "Senior Software Engineer with 5+ years of experience", color: "#E9B384", position: [0, 6, 0], scale: { x: 3, y: 2.5 }, speed: 1 },
        { id: 2, title: "Projects", description: "Check out my latest work", color: "#7EB09B", position: [0, 3, 0], scale: { x: 3, y: 2 }, speed: 1.2 },
        { id: 3, title: "Education", description: "Computer Science Graduate", color: "#A1CCD1", position: [0, 0, 0], scale: { x: 3, y: 2 }, speed: 0.8 },
        { id: 4, title: "Urvashi", description: "Creative Web Developer & Content Creator", color: "#F4E0B9", position: [0, -3, 0], scale: { x: 3, y: 2 }, speed: 0.9 },
        { id: 5, title: "Resume", description: "Download my CV", color: "#7EB09B", position: [0, -6, 0], scale: { x: 3, y: 2 }, speed: 1.1 },
        { id: 6, title: "Contact", description: "Let's connect!", color: "#A1CCD1", position: [0, -9, 0], scale: { x: 3, y: 2 }, speed: 1.2 },
        { id: 7, title: "Blog", description: "Read my latest articles", color: "#7EB09B", position: [0, -12, 0], scale: { x: 3, y: 2 }, speed: 0.9 }
      ];
    } else if (isTablet) {
      return [
        { id: 1, title: "Work Experience", description: "Senior Software Engineer with 5+ years of experience", color: "#E9B384", position: [-2.5, 2, 0], scale: { x: 2.5, y: 2.5 }, speed: 1 },
        { id: 2, title: "Projects", description: "Check out my latest work", color: "#7EB09B", position: [1, 2, 0], scale: { x: 2.5, y: 2 }, speed: 1.2 },
        { id: 3, title: "Education", description: "Computer Science Graduate", color: "#A1CCD1", position: [1, -0.5, 0], scale: { x: 2.5, y: 2 }, speed: 0.8 },
        { id: 4, title: "Urvashi", description: "Creative Web Developer & Content Creator", color: "#F4E0B9", position: [-2.5, -0.5, 0], scale: { x: 2.5, y: 2 }, speed: 0.9 },
        { id: 5, title: "Resume", description: "Download my CV", color: "#7EB09B", position: [-2.5, -3, 0], scale: { x: 2.5, y: 2 }, speed: 1.1 },
        { id: 6, title: "Contact", description: "Let's connect!", color: "#A1CCD1", position: [1, -3, 0], scale: { x: 2.5, y: 2 }, speed: 1.2 },
        { id: 7, title: "Blog", description: "Read my latest articles", color: "#7EB09B", position: [-2.5, -5.5, 0], scale: { x: 2.5, y: 2 }, speed: 0.9 }
      ];
    } else {
      return [
        { id: 1, title: "Work Experience", description: "Senior Software Engineer with 5+ years of experience", color: "#E9B384", position: [-5.5, 2, 0], scale: { x: 8, y: 6 }, speed: 1 },
        { id: 2, title: "Projects", description: "Check out my latest work", color: "#7EB09B", position: [6, 4, 0], scale: { x: 4, y: 3 }, speed: 1.2 },
        { id: 3, title: "Education", description: "Computer Science Graduate", color: "#A1CCD1", position: [1, 4, 0], scale: { x: 4, y: 3 }, speed: 0.8 },
        { id: 4, title: "Urvashi", description: "Creative Web Developer & Content Creator", color: "#F4E0B9", position: [0, -0.5, 0], scale: { x: 8, y: 2 }, speed: 0.9 },
        { id: 5, title: "Resume", description: "Download my CV", color: "#7EB09B", position: [-4.5, -2, 0], scale: { x: 2.8, y: 2 }, speed: 1.1 },
        { id: 6, title: "Contact", description: "Let's connect!", color: "#A1CCD1", position: [0, -3, 0], scale: { x: 4, y: 2 }, speed: 1.2 },
        { id: 7, title: "Blog", description: "Read my latest articles", color: "#7EB09B", position: [3.5, -2, 0], scale: { x: 2.8, y: 2 }, speed: 0.9 }
      ];
    }
  };

  React.useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCameraPosition = () => {
    const width = dimensions.width;
    if (width < 768) return [0, 0, 20];
    if (width < 1024) return [0, 0, 15];
    return [0, 0, 12];
  };

  const gridLayout = calculateLayout();

  return (
    <div className="h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800">
      <Canvas
        camera={{
          position: getCameraPosition(),
          fov: 50
        }}
        className="h-full w-full"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {gridLayout.map((item) => (
          <FloatingBox
            key={item.id}
            position={item.position}
            color={item.color}
            speed={item.speed}
            scale={item.scale}
            title={item.title}
            description={item.description}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default BentoGrid;