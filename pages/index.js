import Head from 'next/head'
import Banner from '../components/banner/banner'
import Discover from '../components/discover/discover'
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/navbar'
import Splitter from '../components/splitter/splitter'

export default function Home() {
  return (
  <div>
    <Head>
        <title>ISCAE Advisors</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
    </Head>
    <Navbar/>
    <Banner/>
    <Discover/>
    <Splitter/>
    <Footer/>
    <script src="/js/jquery.min.js"></script>
    <script src="/js/jquery-migrate-3.0.1.min.js"></script>
    <script src="/js/popper.min.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/jquery.easing.1.3.js"></script>
    <script src="/js/jquery.waypoints.min.js"></script>
    <script src="/js/jquery.stellar.min.js"></script>
    <script src="/js/owl.carousel.min.js"></script>
    <script src="/js/jquery.magnific-popup.min.js"></script>
    <script src="/js/aos.js"></script>
    <script src="/js/jquery.animateNumber.min.js"></script>
    <script src="/js/bootstrap-datepicker.js"></script>
    <script src="/js/jquery.timepicker.min.js"></script>
    <script src="/js/scrollax.min.js"></script>
    <script src="/js/main.js"></script>
  </div>
    
  )
}
