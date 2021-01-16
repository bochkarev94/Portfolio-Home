import React from "react"
import Layout from "../components/layout"
import About from "../components/modules/about"
import Footer from "../components/modules/footer"
import MyWorks from "../components/modules/my-works"
import Prime from "../components/modules/prime"
import Scills from "../components/modules/scills"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Prime/>
    <About/>
    <Scills/>
    <MyWorks/>
    <Footer/>
  </Layout>
)

export default IndexPage;
