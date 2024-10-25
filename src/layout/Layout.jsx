
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Routers from '../routers/routers';


const layout = () => {
  return (
    <>
    <Header/>
    <main>
        <Routers/>
    </main>
    <Footer/>
    </>
  )
}

export default layout
