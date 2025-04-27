import React, { useEffect, useRef } from 'react';

const AnimatedCircuit: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Circuit nodes
    type Node = {
      x: number;
      y: number;
      connections: number[];
      size: number;
      pulse: number;
      pulseDirection: number;
    };

    // Create nodes
    const createNodes = (count: number): Node[] => {
      const nodes: Node[] = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          connections: [],
          size: Math.random() * 2 + 1,
          pulse: 0,
          pulseDirection: 1,
        });
      }
      
      // Create connections
      for (let i = 0; i < nodes.length; i++) {
        const connectionCount = Math.floor(Math.random() * 3) + 1;
        for (let j = 0; j < connectionCount; j++) {
          const target = Math.floor(Math.random() * nodes.length);
          if (target !== i && !nodes[i].connections.includes(target)) {
            nodes[i].connections.push(target);
          }
        }
      }
      
      return nodes;
    };

    const nodes = createNodes(50);
    
    // Animation
    const animateNodes = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        for (const connectionIndex of node.connections) {
          const target = nodes[connectionIndex];
          
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
      
      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        // Update pulse
        node.pulse += 0.01 * node.pulseDirection;
        if (node.pulse > 1 || node.pulse < 0) {
          node.pulseDirection *= -1;
        }
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size + node.pulse, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(139, 92, 246, 0.5)';
        ctx.fill();
      }
      
      requestAnimationFrame(animateNodes);
    };
    
    const animation = requestAnimationFrame(animateNodes);
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animation);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
    />
  );
};

export default AnimatedCircuit;