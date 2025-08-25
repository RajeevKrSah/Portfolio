import About from "@/components/Home/about"
import Hero from "@/components/Home/hero"
import Stats from "@/components/Home/stats"

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Stats />
    </div>
  )
}
export default Home