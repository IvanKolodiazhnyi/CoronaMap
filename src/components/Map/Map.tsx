import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactTooltip from "react-tooltip";
import { Container } from 'react-bootstrap';

import './Map.css';

import { MainMap } from '../MainMap';
import { Header } from '../Header';

export const Map:React.FC = () => {
  const [content, setContent] = useState('');
  const [covidInfo, setCovidInfo] = useState([]);

  useEffect(() => {
    axios.get('https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1')
      .then(response => setCovidInfo(response.data));
  });

  return (
    <>
      <Header content={content}/>
      <Container>
        <MainMap setTitleContent={setContent} infoCovid={covidInfo}/>
        <ReactTooltip>{content}</ReactTooltip>
      </Container>
    </>
  );
};
