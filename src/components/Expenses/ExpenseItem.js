import React from "react";
import ExpenseDate from "./ExpenseDate";

import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [title, subtitle] = useState(props.title); // let title = props.title;

  // const clickResult = () => {
  //     //title = "Update";
  //     subtitle("Update !!!");
  // };

  // const expenseDate = new Date(2023, 3, 10);
  // const expenseTitle = "Buy New Car";
  // const expenseAmount = 90000;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* <h2>{props.title}</h2> */}
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>

      {/* <button onClick={() => {
                console.log("Clicked");
            }}>Change</button> */}

      {/* <button onClick={clickResult}>Change Title</button> */}

      {/* <div>10 - 3 - 2023</div>
            <div className="expense-item__description">
                <h2>Buy Car</h2>                
                <div className="expense-item__price">$500000</div>
            </div> */}

      {/* <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div> */}
    </Card>
  );
};

export default ExpenseItem;