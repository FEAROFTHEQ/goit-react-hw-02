import s from "./Feedback.module.css"

const Feedback = ({userFeedback})=>{
    const {good, neutral, bad} = userFeedback;
    return(
        <div className={s.container}>
        <p className={s.text}>Good: {good}</p>  
        <p className={s.text}>Neutral: {neutral}</p> 
        <p className={s.text}>Bad: {bad}</p> 
        </div>)
}

export default Feedback