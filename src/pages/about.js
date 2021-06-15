//step 1: import component
import * as React from 'react'
import Layout from '../components/Layout'

//step 2: Define your component
const AboutPage = () => {
    return (
    <Layout pageTitle="About Me">
            <p>Hi there! I'm the proud creator of this, which I built with Gatsby.</p>
    </Layout>   
    )
}

//step 3: Export component
export default AboutPage 