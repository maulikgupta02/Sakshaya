import React from "react";
import './ListNotaries.css'

export default function ListNotaries({notary,hash,timestamp}){
    return(
        <div className="notary">
            <div className="title">
                <table>
                    <tr>
                        <td className='left'>Date & Time of Notarization</td>
                        <td className='right'>{timestamp}</td>
                    </tr>
                </table>
            </div>
            <div className="body">
                <p>This notary has been performed by government authorized notary public: {notary}. The stamp id is: {hash}.</p>
            </div>
            <button><a href={`https://ipfs.io/ipfs/${hash}`} target="_blank" rel="noopener noreferrer">download</a></button>
        </div>
    )
}