import './App.css'
import React from 'react'
import { useState, useEffect } from 'react';
import Description from './Descriprion/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification'


function App() {
 const initFeedback={ good: 0, neutral: 0, bad: 0 }
  const [userFeedback, setUserFeedback ] = useState(()=>{
    const feedback = window.localStorage.getItem("feedback");
    if (feedback !== null){
      return JSON.parse(feedback);
    }
    return  initFeedback;
  }
    
  );
  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(userFeedback));
  }, [userFeedback]);

  const updateFeedback = (option)=>{
  setUserFeedback(prev=>({
    ...prev,
    [option]: userFeedback[option]+1,
  }))
  }
  const totalFeedback= userFeedback?.good + userFeedback?.neutral + userFeedback?.bad;
  const resetFeedback = ()=>(
    setUserFeedback(()=>({
      good: 0,
      neutral: 0,
      bad: 0
    }))
  )
  const positiveFeedback= Math.round((userFeedback?.good / totalFeedback) * 100);
  return (
    <>
      <Description />
      <Options options={Object.keys(userFeedback)} updateFeedback={updateFeedback}/>
      {totalFeedback > 0 ? <button onClick={resetFeedback}>Reset</button>:<></>}
      {totalFeedback > 0 ? <Feedback userFeedback={userFeedback}/>:<Notification/>}
      {totalFeedback > 0 ? <p className='feedbackTotal'>Total Feedback: {totalFeedback}</p>:<></>}
      {totalFeedback > 0 ? <p>Positive Feedback: {positiveFeedback}%</p>:<></>}
    </>
  );
};

export default App;
