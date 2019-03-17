import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Header, Layout, Navigation, Drawer, Content } from 'react-mdl';
import Movies from './Movies';

class App extends Component {
 

  render() {
    
    return (
      <div >
            <div className="demo-big-content">
                <Layout >
                <Header title="Movie Hub" >
                    <Navigation>
                        <Link to='/'>Home</Link>
                        <Link to='/Popular'>Popular Movies</Link>
                        <Link to='/Latest'>Latest Movies</Link>
                        <Link to='/Top'>Top Rated</Link>
                        <Link to='/Series'>Series</Link>
                    </Navigation>
                </Header>
                <Drawer title="Movie Hub">
                    <Navigation>
                        <Link to='/'>Home</Link>
                        <Link to='/Popular'>Popular Movies</Link>
                        <Link to='/Latest'>Latest Movies</Link>
                        <Link to='/Top'>Top Rated</Link>
                        <Link to='/Series'>Series</Link>
                      
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" >
                    
                        <Movies />
                        
                    </div>
                </Content>
            </Layout>
        </div> 
      </div>
    );
  }
}

export default App;
