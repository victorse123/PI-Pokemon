/* eslint-disable no-unused-vars */
import React from "react";
import styles from './Card.module.css'
import { imageImg } from "../../Image/imageImg";
import { Link } from "react-router-dom";
import { imageTypes } from "../../Image/imageTypes";

const Card = (props) => {
    let imageDefault = '';
  
    !props.imageDefault
      ? (imageDefault = props.imageF)
      : (imageDefault = props.imageDefault);
  
    return (
      <>
        <Link to={`/detail/${props.id}`} className={styles.link}>
          <div className={styles.card}>
            <div className={styles.imgDefault}>
              {!imageDefault ? (
                <img src={imageImg.notImg} alt="" />
              ) : (
                <img src={imageDefault} alt="" />
              )}
            </div>
            <h2 className={styles.name}>
              <span>{props.name}</span>
            </h2>
  
            <div>
              <div className={styles.tipes}>
                <div className={styles.typeDiv}>
                  {props.types && props.types[0] ? (
                    <>
                      <img src={imageTypes[props.types[0]]} alt="" />
                      <span>{props.types[0].toUpperCase()}</span>
                    </>
                  ) : null}
                </div>
                {props.types && props.types[1] ? (
                  <div className={styles.typeDiv}>
                    <img src={imageTypes[props.types[1]]} alt="" />
                    <span>{props.types[1].toUpperCase()}</span>
                  </div>
                ) : null}
              </div>
  
              <div className={styles.progresDiv}>
                <progress value={props.stroke} max="250" />
                <p>ATTK</p>
              </div>
            </div>
          </div>
        </Link>
      </>
    );
  };
  
  export default Card;