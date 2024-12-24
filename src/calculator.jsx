import React , { useState } from "react";

function Calculator(){
    const [input,setInput]=useState("");
    const [result, setResult]=useState(null);

const handleClick=(value)=>{
    if(value==="="){
        try{
            const evaluatedResult = eval(input);
            setResult(evaluatedResult);
        }catch(error){
            setResult("Error");
        }
    }else if(value==="C"){
        setInput("");
        setResult(null);
    }else{
        setInput(input+value);
    }
};
return(
<div style={styles.container}>
    <div style={styles.title}>CASIO</div>
    <div style={styles.display}>
        <div style={styles.input}>{input}</div>
        <div style={styles.result}>{result !== null ? `= ${result}` : ""}</div>
    </div>
    <div style={styles.buttons}>
    {["7","8","9","/","4","5","6","*","1","2","3","-","C","0","=","+"].map((button)=>(
     <button onClick={()=>handleClick(button)} style={styles.button}
     >
        {button}
    </button>   
    ))}
</div>
</div>
)
}

export default Calculator;

const styles ={
    title:{
        paddingBottom: "15px",
        fontFamily:"sans-serif",
        color: "white",
    },
    container:{
        width: "200px",
        margin:"50px auto",
        padding: "20px",
        border: "2px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#3d3d3d",
        textAlign: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
    },
    display:{
        marginBottom:"20px",
        backgroundColor:"#e6e6e6",
        padding:"10px",
        borderRadius:"5px",
        textAlign:"right",
        fontSize:"24px",
        fontFamily:"sans-serif",
        color: "#333"
    },
    input:{
        minHeight:"30px"
    },
    result:{
        color:"green",
        fontWeight:"bold"
    },
    buttons:{
        display:"grid",
        gridTemplateColumns:"repeat(4,1fr)",
        gap:"10px",
    },
    button:{
        padding:"15px",
        fontSize:"18px",
        cursor:"pointer",
        backgroundColor:"#8b8b8b",
        color:"#fff",
        border:"none",
        borderRadius:"5px",
        transition:"background-color 0.3s",
    }
}