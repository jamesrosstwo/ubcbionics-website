import React from 'react';
// import Navbar from "./components/Navbar/Navbar";
import './App.css';
import graspPic1 from './Photos/graspPic1.jpeg';
import nuanceControl from './Photos/nuanceControl.png';
import softMaterials from './Photos/softMaterials.png';
import costEffective from './Photos/costEffective.png';

import { Layout } from './components/Layout';

export const Grasp = () => {
    return(
        <Layout>
        <div class="py-3" />
        <div class="headerBlue text-center">GRASP PROJECT</div>
        <div class="py-3" />
        <div class="row">
            <div class="col">
                <p className="graspBold">What is Grasp?</p>
                <p className="graspDesc">
                    GRASP is UBC Bionics' first attempt at the creation of a smart <br />
                    prosthetic arm. Our current design of the arm features a variety <br />
                    of functionalities including:
                </p>
                <p className="graspDesc"> 
                    <ul>
                        <li>Object recognition via an onboard camera </li>
                        <li>Various hand and finger grips </li>
                        <li>Integration with machine learning</li>
                        <li>Incorporation fo an ergonomic design using a shoulder sling <br />
                        and consolidate electrical components </li>
                        <li>EMG signalling</li>
                    </ul>
                </p>
            </div>
            <div class="col">
                <img class="graspHand img-responsive center-block d-block mx-auto" src={ graspPic1 } />
            </div>
        </div>

        <div class="headerBlue text-center">FEATURES</div>
        <div class="py-3" />

        <div class="row">
            <div class="col-4">
                <img class= "graspIcons img-responsive center-block d-block mx-auto" src = {softMaterials} />
            </div>
            <div class="col-4">
                <img class= "graspIcons img-responsive center-block d-block mx-auto" src = {nuanceControl} />
            </ div>
            <div class="col-4"> 
                <img class= "graspIcons img-responsive center-block d-block mx-auto" src = {costEffective} />
            </div>
        </div>

        <div class="row">
            <div class="col-4">
                <p class="graspIcons text-center">
                    <p class="bold">Soft Materials</p>
                    The use of soft materials to create an anthropomorphic desing that reduces
                    social stigma and allows for more satisfying human-to-human interaction.
                </p>
            </div>
            <div class="col-4">
                <p class="graspIcons text-center">
                    <p class="bold">Nuanced Control</p>
                    The use of two levels of control, myoelectric and electromechanical, to 
                    bridge the gap between patient preferences and technological limitations.
                </p>
            </div>
            <div class="col-4"> 
                <p class="graspIcons text-center">
                    <p class="bold">Cost-Effective</p>
                    The use of 3-D pritning to reduce costs and allow for rapid manufacturing
                    of the hand
                </p>
            </div>
        </div>
    </Layout>
    );
}