import React from 'react'

function LConst(props) {

    let engMarks =Number(props.engMarks);
    let telMarks =Number(props.telMarks);
    let sciMarks =Number(props.sciMarks);
    let socMarks =Number(props.socMarks);
    let mathMarks =props.mathMarks;
    let totalMarks = engMarks+telMarks+sciMarks+socMarks+Number(mathMarks);
  return (
    <div>
    <table>
    <caption>{props.StudentName}</caption>
        <thead>
       
            <tr>
            <th>Subject</th>
            <th>Max.Marks</th>
            <th>Marks Obtained</th>
            <th>Result</th>
            <th>Remarks</th>
            </tr>         
        </thead>
        <tbody>
            <tr>
                <td>English</td>
                <td>100</td>
                <td>{props.engMarks}</td>
                <td>pass</td>
                <td>Excellent</td>
            </tr>

            <tr>
                <td>Maths</td>
                <td>100</td>
                <td>{props.mathMarks}</td>
                <td>pass</td>
                <td>Excellent</td>
            </tr>

            <tr>
                <td>Social</td>
                <td>100</td>
                <td>{props.socMarks}</td>
                <td>pass</td>
                <td>Excellent</td>
            </tr>

            <tr>
                <td>Science</td>
                <td>100</td>
                <td>{props.sciMarks}</td>
                <td>pass</td>
                <td>Excellent</td>
            </tr>

            <tr>
                <td>Telugu</td>
                <td>100</td>
                <td>{props.telMarks}</td>
                <td>pass</td>
                <td>Excellent</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>Total Marks</td>
                <td>600</td>
                <td>{totalMarks}</td>
                <td>Pass</td>
                <td>Excellent</td>
            </tr>
        </tfoot>
       </table>
       </div>
  )
}

export default LConst