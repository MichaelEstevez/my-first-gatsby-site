//step 1: Import React 
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from '../components/Layout'

//step 2: define component 
const IndexPage = () => {
  return (
      <Layout pageTitle ="Home Page">
        <p>I'm making this by following the Gatbsy Tutorial.</p>
        <StaticImage
          alt="Pan-Seared Salmon"
          src="C:\Users\mikee\Desktop\my-first-gatsby-site\src\images\salmon.jpg"
        />
      </Layout>
  )
}

//step 3: export your component 
export default IndexPage