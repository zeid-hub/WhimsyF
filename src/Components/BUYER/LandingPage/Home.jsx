import "./Home.css"
import Hero from "./Hero";
import TrendingProduct from "./Trending";
import Process from "./Process";
import Season from "./Season";
import Footer from "../Footer";
import Questions from "./Questions";

function Home () {
    return(
        <div className="div-home">
            <Hero/>
            <TrendingProduct/>
            <Process/>
            <Season/>
            <Questions/>
            <Footer/>
        </div>
    )
}

export default Home;