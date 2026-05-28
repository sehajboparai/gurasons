import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animFrame;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Floating particles / circuit nodes
    const nodes = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    // 3D rotating cube wireframe
    const cubeVertices = [
      [-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],
      [-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1],
    ];
    const cubeEdges = [
      [0,1],[1,2],[2,3],[3,0],
      [4,5],[5,6],[6,7],[7,4],
      [0,4],[1,5],[2,6],[3,7],
    ];

    function project3D(x, y, z, cx, cy, scale) {
      const fov = 300;
      const zOff = 5;
      const factor = fov / (z + zOff);
      return { x: cx + x * factor * scale, y: cy + y * factor * scale };
    }

    function drawCube(cx, cy, size, rotX, rotY, alpha) {
      const projected = cubeVertices.map(([x, y, z]) => {
        // Rotate Y
        const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
        const x2 = x * cosY - z * sinY;
        const z2 = x * sinY + z * cosY;
        // Rotate X
        const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
        const y2 = y * cosX - z2 * sinX;
        const z3 = y * sinX + z2 * cosX;
        return project3D(x2, y2, z3, cx, cy, size);
      });

      ctx.strokeStyle = `rgba(201,168,76,${alpha})`;
      ctx.lineWidth = 0.8;
      cubeEdges.forEach(([a, b]) => {
        ctx.beginPath();
        ctx.moveTo(projected[a].x, projected[a].y);
        ctx.lineTo(projected[b].x, projected[b].y);
        ctx.stroke();
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.008;

      // Move & draw particles
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0) n.x = canvas.width;
        if (n.x > canvas.width) n.x = 0;
        if (n.y < 0) n.y = canvas.height;
        if (n.y > canvas.height) n.y = 0;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${n.opacity})`;
        ctx.fill();
      });

      // Draw connections between close nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw rotating 3D cubes
      const w = canvas.width, h = canvas.height;
      drawCube(w * 0.82, h * 0.25, 45, time * 0.7, time, 0.25);
      drawCube(w * 0.1, h * 0.7, 30, time * 0.5, time * 1.3, 0.15);
      drawCube(w * 0.6, h * 0.8, 22, time * 1.1, time * 0.8, 0.12);

      // Orbit rings
      const cx = w * 0.85, cy = h * 0.3;
      [60, 90, 120].forEach((r, i) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(201,168,76,${0.06 - i * 0.015})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Orbiting dot
        const angle = time * (0.8 - i * 0.2);
        const dotX = cx + Math.cos(angle) * r;
        const dotY = cy + Math.sin(angle) * r * 0.4;
        ctx.beginPath();
        ctx.arc(dotX, dotY, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${0.5 - i * 0.1})`;
        ctx.fill();
      });

      // Grid lines (bottom-right quadrant)
      ctx.strokeStyle = 'rgba(255,255,255,0.03)';
      ctx.lineWidth = 0.5;
      for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      animFrame = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        display: 'block', pointerEvents: 'none',
      }}
    />
  );
}
