import { calculateInvestmentResults } from "../util/investment";

import {formatter} from "../util/investment"

export default function Result({ labels, VALUES, result }) {
  console.log("RESULT VALUES FROM RESULT>JSX", result);
  let totalInterest = 0;

  return (
    <table id="result">
      <thead>
        <tr>
          {labels.map((label) => (
            <th key={label}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {result.map((row, index) => {
            totalInterest+= row.interest;
          return (
            <tr key={index}>
              <td>{row.year}</td>
              <td>{ formatter.format(row.valueEndOfYear.toFixed(2))}</td>
              <td>{formatter.format(row.interest.toFixed(2))}</td>
              <td>{formatter.format((totalInterest).toFixed(2))}</td>
              <td>{formatter.format((row.valueEndOfYear - row.interest).toFixed(2))}</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}
