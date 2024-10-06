
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Navbar from "./components/ui/Navbar";
import About from "./components/About";

export default function Home() {
  return (<>
    <main className="bg-thunder relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 text-twine">
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
    </main>
  </>);
}
