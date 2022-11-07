import React from 'react'
import Layout from '../../components/layout/Layout'
import FormContact from '../../components/contact/FormContact'
import OtherContact from '../../components/contact/OtherContact'

export default function Contact() {
  return (
    <div>
        <Layout title='contact'>
          <FormContact/>
          {/* <OtherContact/> */}
        </Layout>

    </div>
  )
}
