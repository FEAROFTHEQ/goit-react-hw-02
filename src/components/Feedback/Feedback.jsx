import s from "./Feedback.module.css"

const Feedback = ({userFeedback, total, positive})=>{
    const {good, neutral, bad} = userFeedback;
    return(
        <div className={s.container}>
        <p className={s.text}>Good: {good}</p>  
        <p className={s.text}>Neutral: {neutral}</p> 
        <p className={s.text}>Bad: {bad}</p> 
        {total > 0 ? <p className='feedbackTotal'>Total Feedback: {total}</p>:<></>}
        {total > 0 ? <p>Positive Feedback: {positive}%</p>:<></>}
        </div>)
}

export default Feedback