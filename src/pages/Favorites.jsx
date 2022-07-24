import React from "react";
import Layout from '../components/Layout';
import { connect } from 'react-redux';


function Favorites(props){
        return(
            <div>
                <Layout>
                    <div 
                    className="container-fluid container-min-max-width" 
                    style={{background: "blue"}}
                    >
                    <h2>Favorites</h2>
                    </div>
                </Layout>
            </div>
        )
}

export default Favorites
