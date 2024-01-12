import React from "react";
import style from "@/styles/app.module.css";

export default function Box({ userData }) {
  return (
    <div className={style.second}>
      {userData.map((el) => (
        <div key={el.id}>
          <div className={style.box}>
            <img
              className={style.zurag}
              src={el.avatar}
              alt={`${el.first_name} ${el.last_name}'s Avatar`}
            />
            <div>
              <h3
                className={style.marginLeft20px}
              >{`${el.first_name} ${el.last_name}`}</h3>
              <div className={`${style.marginLeft20px} ${style.flexGap40} `}>
                <p className={`${style.flexWrap} ${style.huwi60} `}>
                  {el.employment.title}
                </p>
                <p className={`${style.flexWrap} ${style.huwi40} `}>
                  {el.gender}
                </p>
              </div>
              <p className={style.marginLeft20px}>Email: {el.email}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
