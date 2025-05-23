import React, { useState, useEffect } from "react";
import { Project } from "../../types";
import { motion, AnimatePresence } from "framer-motion";


const projects: Project[] = [
  {
    id: 1,
    title: "Wedding Pavilion",
    category: "minimal",
    imageUrl:
      "https://res.cloudinary.com/djtgnaque/image/upload/v1747990414/IMG-20250401-WA0005_lvopoo.jpg",
    description:
      "A beautifully designed marriage pavilion that blends tradition with elegance, creating the perfect sacred space for timeless wedding rituals and unforgettable moments.",
    client: "Metropolis Living",
    year: "2024",
  },
  {
    id: 2,
    title: "Modern Coastal Retreat",
    category: "modern",
    imageUrl:
      "https://res.cloudinary.com/djtgnaque/image/upload/v1747990415/IMG-20250418-WA0001_u5voo6.jpg",
    description:
      "A modern beachfront property with panoramic ocean views and clean architectural lines.",
    client: "RB Garments",
    year: "2023",
  },
  {
    id: 3,
    title: "Industrial Warehouse Conversion",
    category: "industrial",
    imageUrl:
      "https://res.cloudinary.com/djtgnaque/image/upload/v1747990414/IMG-20250418-WA0028_il1whd.jpg",
    description:
      "A converted warehouse space that maintains industrial elements while adding modern comforts.",
    client: "Urban Revival",
    year: "2024",
  },
  {
    id: 4,
    title: "Scandinavian Apartment",
    category: "minimal",
    imageUrl:
      "https://res.cloudinary.com/djtgnaque/image/upload/v1747990414/IMG-20250418-WA0019_fcoqrz.jpg",
    description:
      "A bright Scandinavian-inspired apartment featuring natural materials and functional design.",
    client: "Nordic Living",
    year: "2023",
  },
  {
    id: 5,
    title: "Luxury Penthouse",
    category: "luxury",
    imageUrl:
      "https://res.cloudinary.com/djtgnaque/image/upload/v1747990414/IMG-20250418-WA0020_ilvjqa.jpg",
    description:
      "An opulent penthouse with panoramic city views and custom-designed furnishings.",
    client: "Elite Properties",
    year: "2024",
  },
  {
    id: 6,
    title: "Bohemian Studio",
    category: "eclectic",
    imageUrl:
      "https://res.cloudinary.com/djtgnaque/image/upload/v1747990417/IMG-20250405-WA0001_xuyctt.jpg",
    description:
      "A vibrant bohemian studio filled with eclectic textures, patterns, and global influences.",
    client: "Creative Spaces",
    year: "2022",
  },
  {
    id: 7,
    title: "Modern Luxury Lounge",
    category: "luxury",
    imageUrl: "https://res.cloudinary.com/djtgnaque/image/upload/v1747990414/IMG-20250401-WA0015_1_pl6xsd.jpg",
    description:
      "A sleek, dark-toned living space with ambient lighting, a textured TV wall, and minimal decor—exuding modern luxury and sophistication.",
    client: "Heritage Homes",
    year: "2023",
  },
  {
    id: 8,
    title: "Elegant Contemporary Restaurant",
    category: "minimal",
    imageUrl: "https://res.cloudinary.com/djtgnaque/image/upload/v1747990416/IMG-20250402-WA0008_ghbrof.jpg",
    description:
      "A thoughtfully designed restaurant space that combines aesthetic elegance with functional comfort, creating a welcoming atmosphere for memorable dining experiences.",
    client: "Shloka Restaurant",
    year: "2024",
  },
];

const categories = [
  { id: "all", name: "All Projects", icon: "✦" },
  { id: "minimal", name: "Minimal", icon: "◯" },
  { id: "modern", name: "Modern", icon: "◨" },
  { id: "industrial", name: "Industrial", icon: "◧" },
  { id: "luxury", name: "Luxury", icon: "✧" },
  { id: "eclectic", name: "Eclectic", icon: "✺" },
];

const PortfolioGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  // const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  useEffect(() => {
    setFilteredProjects(
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.category === activeFilter)
    );
  }, [activeFilter]);

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
  };

  return (
    <section id="portfolio" className="py-32 bg-white text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="inline-block px-5 py-1.5 rounded-full bg-gradient-to-r from-blue-200 to-pink-200 text-black text-sm font-semibold tracking-wider uppercase mb-5">
            Our Portfolio
          </span>
          <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
            Inspired Interiors
            <span className="block font-light italic mt-2">
              Designed for Living
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our curated collection of bespoke spaces—each crafted with
            meticulous attention to detail, honoring both aesthetic beauty and
            functional harmony.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="mb-20">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => handleFilterClick(category.id)}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`px-6 py-2.5 rounded-full font-medium tracking-wide relative overflow-hidden transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-blue-500 to-pink-500 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                <span className="relative z-10 flex items-center">
                  <span className="mr-2 opacity-70">{category.icon}</span>
                  {category.name}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
              exit: {
                opacity: 0,
                transition: { staggerChildren: 0.05, staggerDirection: -1 },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: (i) => ({
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: i * 0.1,
                      duration: 0.6,
                      ease: [0.215, 0.61, 0.355, 1],
                    },
                  }),
                  exit: { y: -20, opacity: 0, transition: { duration: 0.3 } },
                }}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="object-cover h-64 w-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                      <p className="text-white text-sm">
                        {project.description}
                      </p>
                      <div className="mt-2 flex justify-between text-sm text-white/80">
                        <span>{project.client}</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-1 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 uppercase tracking-wider">
                        {
                          categories.find((cat) => cat.id === project.category)
                            ?.name
                        }
                      </span>
                      {/* View Details button removed */}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <span>Start Your Project</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGallery;