import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI Neural Accelerator',
    description: 'High-performance FPGA implementation for real-time edge inference in industrial automation.',
    technologies: ['VHDL', 'Python', 'PyTorch', 'Xilinx Vivado'],
    imageUrl: '/images/projects/ai-accelerator.webp',
    githubUrl: 'https://github.com/marti/neural-accelerator',
    category: 'IA',
    year: '2025'
  },
  {
    id: '2',
    title: '5.8GHz RF Transceiver',
    description: 'Compact transceiver module designed for robust industrial IoT communication in high-interference environments.',
    technologies: ['ADS', 'Altium Designer', 'C++', 'RF Simulation'],
    imageUrl: '/images/projects/rf-transceiver.webp',
    githubUrl: 'https://github.com/marti/rf-transceiver',
    category: 'RF',
    year: '2024'
  },
  {
    id: '3',
    title: 'Precision RF Positioning',
    description: 'Automated control system with sub-millimeter precision for antenna measurement chambers.',
    technologies: ['STM32', 'FreeRTOS', 'Rust', 'Control Systems'],
    imageUrl: '/images/projects/precision-positioning.webp',
    githubUrl: 'https://github.com/marti/precision-positioning',
    liveUrl: 'https://demo.marti.eng/positioning',
    category: 'Hardware',
    year: '2025'
  }
];
