import PropTypes from "prop-types";
import { useEffect } from "react";
// import { Component } from "react";
import * as localStorage from "./../../storage";

function ContactList(props) {
  // componentDidUpdate() {
  //   localStorage.save("contacts", this.props.contacts);
  // }

  console.log("props-contacts: ", props.contacts);

  useEffect(() => {
    localStorage.save("contacts", props.contacts);
  }, [props.contacts]);

  return (
    <>
      <ul>
        {props.contacts.map((item) => {
          return (
            <li key={item.id}>
              {item.name}: {item.number}
              <button
                type="button"
                onClick={() => props.removeItem(item.id)}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );

  // return (
  //   <>
  //     <ul>
  //       {props.name.map((name, index) => {
  //         return (
  //           <li key={props.id[index]}>
  //             {name}: {props.number[index]}
  //             <button
  //               type="button"
  //               onClick={() => props.removeItem(props.id[index])}
  //             >
  //               Remove
  //             </button>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   </>
  // );
}

ContactList.propTypes = {
  state: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,

        number: PropTypes.string,
      }).isRequired,
    ),
    filter: PropTypes.string,
  }),
};

export default ContactList;
