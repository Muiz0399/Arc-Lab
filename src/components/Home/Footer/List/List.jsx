import React from "react";
import "./List.css";
const List = ({ head, list1, list2, list3, list4 }) => {
  return (
    <div className="footer-comp">
      <h4>{head}</h4>
      <ul>
        <li>
          <span class="fa fa-chevron-right f-angle"></span>
          <a href=""> {list1}</a>
        </li>
        <li>
          <span class="fa fa-chevron-right f-angle"></span>
          <a href=""> {list2}</a>
        </li>
        <li>
          <span class="fa fa-chevron-right f-angle"></span>
          <a href=""> {list3}</a>
        </li>
        <li>
          <span class="fa fa-chevron-right f-angle"></span>
          <a href="">{list4} </a>
        </li>
      </ul>
    </div>
  );
};

export default List;
