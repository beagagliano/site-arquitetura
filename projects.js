import heroOne from '../assets/img/hero-1.jpg'
import heroTwo from '../assets/img/hero-2.jpg'
import sample from '../assets/img/project-sample.jpg'
import dome from '../assets/img/project-dome.jpg'
import arena from '../assets/img/project-arena.jpg'
import towers from '../assets/img/project-towers.jpg'
import monument from '../assets/img/project-monument.jpg'
import about1 from '../assets/img/about-1.jpg'
import about2 from '../assets/img/about-2.jpg'
import about3 from '../assets/img/about-3.jpg'

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

// Projetos exibidos no mosaico, na página /projetos e em /projetos/:id
export const projects = [
  {
    id: 'sample-project',
    name: 'Sample Project',
    image: sample,
    cover: heroOne,
    category: 'Residential',
    year: 2021,
    location: 'Austin, TX',
    description: lorem,
  },
  {
    id: 'central-dome',
    name: 'Central Dome',
    image: dome,
    cover: dome,
    category: 'Cultural',
    year: 2020,
    location: 'Austin, TX',
    description: lorem,
  },
  {
    id: 'sports-arena',
    name: 'Sports Arena',
    image: arena,
    cover: arena,
    category: 'Sports',
    year: 2019,
    location: 'Dallas, TX',
    description: lorem,
  },
  {
    id: 'residential-towers',
    name: 'Residential Towers',
    image: towers,
    cover: towers,
    category: 'Residential',
    year: 2018,
    location: 'Houston, TX',
    description: lorem,
  },
  {
    id: 'monument-park',
    name: 'Monument Park',
    image: monument,
    cover: monument,
    category: 'Urban',
    year: 2017,
    location: 'San Antonio, TX',
    description: lorem,
  },
]

export function getProjectById(id) {
  return projects.find((p) => p.id === id)
}

// Slides do carrossel do hero ("PROJECT Lorum", 01 / 02)
export const heroSlides = [
  { name: 'Lorum', image: heroOne, projectId: 'sample-project' },
  { name: 'Ipsum', image: heroTwo, projectId: 'central-dome' },
]

// Imagens da página /galeria
export const galleryImages = [
  { src: heroOne, alt: 'White concrete building' },
  { src: heroTwo, alt: 'Glass tower' },
  { src: about1, alt: 'Glass facade' },
  { src: about2, alt: 'Black and white lines' },
  { src: about3, alt: 'Glass corner' },
  { src: sample, alt: 'Sample project' },
  { src: dome, alt: 'Central dome' },
  { src: arena, alt: 'Sports arena' },
  { src: towers, alt: 'Residential towers' },
  { src: monument, alt: 'Monument park' },
]

export const aboutImages = { one: about1, two: about2, three: about3 }
