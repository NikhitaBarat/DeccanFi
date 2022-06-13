import React from 'react'
import './historytable.styles.css';

const Historytable = () => {
  return (
    <div className='recent-history-section'>
        <table>
            <tr>
                <td>Event</td>
                <td>Object</td>
                <td>From/To</td>
                <td>Account</td>
                <td>Value</td>
                <td>Time</td>
                <td>Link</td>
            </tr>
            { [...Array(10)].map((key) => (
                <tr key={key}>
                    <td>Transfer</td>
                    <td >
                        <img className='history-preview-img' src={'https://s.yimg.com/os/creatr-uploaded-images/2022-04/61254c10-c4e2-11ec-b6eb-8947bb0d6d4e'} alt="" />
                    </td>
                    <td>💾 YOTI 😀 Daylight</td>
                    <td>2</td>
                    <td>2</td>
                    <td>4/5/2022</td>
                    <td>https://a.gashdss;la</td>
                </tr>
            ))}
        </table>
    </div>
  )
}

export default Historytable