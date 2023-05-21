import React from "react";

const EventDetails = (props) => {
  return (
    <div className=" ">
      <div className="flex flex-row gap-4 rounded-xl border border-green-app">
        <img src={props.src} alt="img"  className=" rounded-l-xl"/>
        <div className="flx flex-col gap-5">
          <p>{props.date}</p>
          <p>{props.lieu}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Diam congue cras tortor, cras et enim vulputate scelerisque.{" "}
            <br />
            Mauris ornare duis euismod donec egestas.
          </p>
          <div className="flex justify-center m-4">
            <button
              className={` rounded-lg p-2  ${
                props.dispo ? " bg-green-500 " : " bg-red-400"
              }`}
            >
              
              {props.dispo ? "réserver ticket" : "Non disponible"}
            </button>
          </div>
        </div>
      </div>
      <div className=" mt-4 ">
        <h2 className=" text-2xl text-green-app font-bold">About this event</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id id<br/>
          velit condimentum. Nec euismod vel, hac amet. Velit, pharetra amet ac<br/>
          ante purus eu gravida. Convallis sollicitudin morbi neque leo duis et<br/>
          morbi dignissim. Posuere sapien maecenas nibh ullamcorper dignissim<br/>
          imperdiet et. Nibh ut in pretium fringilla dolor pellentesque blandit<br/>
          magna faucibus. Quam aliquam orci feugiat tincidunt rhoncus purus<br/>
          donec. Fames orci vulputate gravida lacus, massa nibh est et.<br/>
          Pellentesque volutpat purus eget tortor. Eget imperdiet purus nulla eu<br/>
          pharetra porttitor sociis. Rutrum sed nulla massa ipsum, pellentesque<br/>
          risus sed mollis nibh. Aliquam amet, amet condimentum tellus nisl,<br/>
          feugiat. Nisi vel platea etiam eget consectetur nisl, fermentum id.<br/>
          Sed duis massa elit massa at amet, mattis tincidunt
        </p>
      </div>
    </div>
  );
};

export default EventDetails;
