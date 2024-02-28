import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Layout } from 'antd';
import AppHeader from './components/commons/AppHeader';
import Home from './views/Home';
import About from './views/About';
import Features from './views/Features';
import FAQs from './views/FAQs';
import Pricing from './views/Pricing';
import Contact from './views/Contact';
import AppFooter from './components/commons/AppFooter';
import { Footer } from 'antd/es/layout/layout';
import AppAlert from './components/commons/AppAlert';

const { Header, Content } = Layout;

function App() {

  return (
    <Router>
      <Layout>

        <Header className='header'>
          <AppHeader />
        </Header>

        <AppAlert />

        <Content>
          <Routes>
            <Route path='/' element={
              <Home />
            } />
            <Route path='/about' element={
              <About />
            } />
            <Route path='/features' element={
              <Features />
            } />
            <Route path='/faqs' element={
              <FAQs />
            } />
            <Route path='/pricing' element={
              <Pricing />
            } />
            <Route path='/contact' element={
              <Contact />
            } />
          </Routes>
        </Content>

        <Footer className='footer py-8 w-full !h-[40vh]'>
          <AppFooter />
        </Footer>

      </Layout>
    </Router>
  )
}

export default App
