import React from "react";
import './ListNotaries.css'

export default function ListNotaries({title,body}){
    return(
        <div className="notary">
            <div className="title">
                <table>
                    <tr>
                        <td className='left'>title</td>
                        <td className='right'>date</td>
                    </tr>
                </table>
            </div>
            <div className="body">
                <p>body</p>
            </div>
            <button>download</button>
        </div>
    )
}