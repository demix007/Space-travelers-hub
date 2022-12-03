import React from 'react';
import {render} from '@testing-library/react';
import { Provider } from "react-redux";
import store from '../redux/configureStore';
import Mission from '../components/Missions/Mission'
import Missions from "../components/Missions/Missions";

describe('Missions',()=>{
    it('Mission component is rendered correctly',()=>{
        const mission = render(
            <Provider store={store}>
                <Mission/>
            </Provider>
        );
        expect(mission).toMatchSnapshot();
    });

   it('Rockets component rendered correctly',()=>{
    const missions = render(
        <Provider store={store}>
            <Missions/>
        </Provider>
    );
    expect(missions).toMatchSnapshot();
   });
})
