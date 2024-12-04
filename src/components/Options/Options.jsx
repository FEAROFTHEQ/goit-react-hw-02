import s from "./Options.module.css"

const Options = ({options, updateFeedback, totalFeedback, onReset})=>
{
    return(
        <div className={s.container}>
            {options.map(option=>(
                <button key={option} onClick={()=>updateFeedback(option)} className={s.btn}>
                    {option}
                </button>
            ))}
             {totalFeedback > 0 ? <button onClick={onReset}>Reset</button>:<></>}
        </div>
    )
}

export default Options