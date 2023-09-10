import React, { SVGProps } from "react";
import { motion } from "framer-motion";
import DefaultHammerImg from "../../images/ComponentSVGs/DefaultHammerSVG";
import styles from "./Card.module.css";

export interface CardProps {
  img?:               string | React.FunctionComponent<SVGProps<SVGSVGElement>>;
  title?:             string;
  shortDescription?:  string;
  linkURL?:           string;
}

function Card(props: CardProps): React.ReactElement {

  return (
    <motion.div className={styles.card} whileHover={{ scale: 1.075 }}>
      <div className={styles.cardContentFlexbox}>
        <div className={styles.cardImageContainer}>
          { typeof props.img === "string" && <img className={styles.cardImage} src={props.img} alt="Tool" /> }
          { typeof props.img === "function" && <props.img className={styles.cardImage} /> }
        </div>
        <div className={styles.cardDetailsContainer}>
          <div className={styles.cardTitle}>{props.title}</div>
          { props.shortDescription && <div className={styles.cardDescription}>{props.shortDescription}</div> }
          { 
            props.linkURL && 
            <a 
              className={styles.cardLinkURL} 
              href={props.linkURL} 
              target="_blank"
              onClick={ (event) => event.stopPropagation() }
            >
              {props.linkURL}
            </a>
          }
        </div>
      </div>
    </motion.div>
  );

}

Card.defaultProps = {
  title: "<Title>",
  img: DefaultHammerImg,
};

export default Card;