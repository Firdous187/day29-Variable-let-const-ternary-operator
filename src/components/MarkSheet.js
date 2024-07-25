import React from 'react'

function MarkSheet(props) {
    
    let engMarks =Number(props.engMarks);
    let telMarks =Number(props.telMarks);
    let sciMarks =Number(props.sciMarks);
    let socMarks =Number(props.socMarks);
    let mathMarks =props.mathMarks;
    let totalMarks = engMarks+telMarks+sciMarks+socMarks+Number(mathMarks);

  return (
    
    <div>
        <p>This is how we use components and who we assgin props</p>
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
                <td>{engMarks >= 35 ? "Pass" : "Fail"}</td>
                <td>{engMarks >= 35 ? "Excellent" :"good"}</td>
            </tr>

            <tr>
                <td>Maths</td>
                <td>100</td>
                <td>{props.mathMarks}</td>
                <td>{mathMarks >= 35 ? "Pass" : "Fail"}</td>
                <td>{mathMarks >= 35 ? "Excellent" :"good"}</td>
            </tr>

            <tr>
                <td>Social</td>
                <td>100</td>
                <td>{props.socMarks}</td>
                <td>{socMarks >= 35 ? "Pass" : "Fail"}</td>
                <td>{socMarks >= 35 ? "Excellent" :"good"}</td>
            </tr>

            <tr>
                <td>Science</td>
                <td>100</td>
                <td>{props.sciMarks}</td>
                <td>{sciMarks >= 35 ? "Pass" : "Fail"}</td>
                <td>{sciMarks >= 35 ? "Excellent" :"good"}</td>
            </tr>

            <tr>
                <td>Telugu</td>
                <td>100</td>
                <td>{props.telMarks}</td>
                <td>{telMarks >= 35 ? "Pass" : "Fail"}</td>
                <td>{telMarks >= 35 ? "Excellent" :"good"}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>Total Marks</td>
                <td>600</td>
                <td>{totalMarks}</td> 
                <td>pass</td>
                <td>Excellent</td>
            </tr>
        </tfoot> 
       </table>
    </div>
  )
}

export default MarkSheet