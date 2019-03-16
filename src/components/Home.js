import React, { Component } from 'react';
import { Header, Layout, Navigation, Drawer, Content } from 'react-mdl';
import Movies from './Movies';

class App extends Component {
 

  render() {
    
    return (
      <div >
            <div className="demo-big-content">
                <Layout>
                <Header title="Movie Hub" scroll>
                    <Navigation>
                        <a href="#">Popular Movies</a>
                        <a href="#">Latest Movies</a>
                        <a href="#">Top Rated</a>
                        <a href="#">Series</a>
                    </Navigation>
                </Header>
                <Drawer title="Movie Hub">
                    <Navigation>
                        <a href="#">Popular Movies</a>
                        <a href="#">Latest Movies</a>
                        <a href="#">Top Rated</a>
                        <a href="#">Series</a>
                      
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
