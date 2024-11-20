const Feedback = ({userFeedback})=>{
    const {good, neutral, bad} = userFeedback;
    return(
        <div>
            Good:{good}
            Neutral:{neutral}
            Bad:{bad}
        </div>)
}

export default Feedback