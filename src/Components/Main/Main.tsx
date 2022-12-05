import React, { useState, useRef, useEffect } from 'react';
import styles from './Main.module.css';


function Main() {

    const [ lottoList, setLottoList ] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);    
    const [ obj, setObj ] = useState<object[]>([]);

    const onClick = () =>{

        if ( null === inputRef.current ) return;
        if ( 6 > inputRef.current.value.length ) return;

        setLottoList((prev)=>{
            if ( null !== inputRef.current ) {
                return [...prev, inputRef.current.value]
            }
            return prev
        })
    }

    useEffect(()=>{

        if ( 0 === lottoList.length ) return;

        type Obj = {
            [key: string]: number | string
        }

        const list : Obj[] = [];

        lottoList.forEach((data)=>{
            
            for ( let i = 0; i < data.length ; i++ ){
                
                if ( undefined === list[i] ){
                    list[i] = {}
                }
                list[i][data.substring(i,i+1)] = ( Number(list[i][data.substring(i,i+1)]) || 0 ) + 1;
            }

        });

        for ( let i = 0 ; i < 10 ; i++ ){

            

        }
        
        setObj(list);

        // const objA : Obj = {}
        // const objB : Obj = {}
        // const objC : Obj = {}
        // const objD : Obj = {}
        // const objE : Obj = {}
        // const objF : Obj = {}

        // lottoList.forEach((data)=>{
        //     objA[data.substring(0,1)] = ( Number(objA[data.substring(0,1)]) || 0 ) + 1;
        //     objB[data.substring(1,2)] = ( Number(objB[data.substring(1,2)]) || 0 ) + 1;
        //     objC[data.substring(2,3)] = ( Number(objC[data.substring(2,3)]) || 0 ) + 1;
        //     objD[data.substring(3,4)] = ( Number(objD[data.substring(3,4)]) || 0 ) + 1;
        //     objE[data.substring(4,5)] = ( Number(objE[data.substring(4,5)]) || 0 ) + 1;
        //     objF[data.substring(5,6)] = ( Number(objF[data.substring(5,6)]) || 0 ) + 1;

        // });

        // for ( let i = 0 ; i < 10 ; i++ ){
        //     if( objA[String(i)] ){
        //         objA[String(i)] = (Math.round(( Number(objA[String(i)]) / lottoList.length)*100))+"%"
        //     }
        //     if( objB[String(i)] ){
        //         objB[String(i)] = (Math.round(( Number(objB[String(i)]) / lottoList.length)*100))+"%"
        //     }
        //     if( objC[String(i)] ){
        //         objC[String(i)] = (Math.round(( Number(objC[String(i)]) / lottoList.length)*100))+"%"
        //     }
        //     if( objD[String(i)] ){
        //         objD[String(i)] = (Math.round(( Number(objD[String(i)]) / lottoList.length)*100))+"%"
        //     }
        //     if( objE[String(i)] ){
        //         objE[String(i)] = (Math.round(( Number(objE[String(i)]) / lottoList.length)*100))+"%"
        //     }
        //     if( objF[String(i)] ){
        //         objF[String(i)] = (Math.round(( Number(objF[String(i)]) / lottoList.length)*100))+"%"
        //     }
        // }
        
        //setObj([objA,objB,objC,objD,objE,objF]);

    },[lottoList])

    return(
        <>
            <div className={styles.div_1}>
                <input type="text" ref={inputRef} maxLength={6} />
                <button className={styles.btn_ok} onClick={onClick} >OK</button>
            </div>
            <div className={styles.div_3}>
                    { 
                    undefined !== obj ? 
                        obj.map((data, i)=>{
                            return (<div key={i}> {JSON.stringify(data)} </div>)
                        })
                        :
                        ""
                    }
            </div>
            <div className={styles.div_2}>
                <ul>
                    {
                        lottoList.map((data, i)=>{
                            return(
                                <li key={i}>{data}</li>
                            )
                        })
                    }
                </ul>
            </div>
            
        </>
    )
}

export default Main