import React,{FC} from 'react';
import styles from './title.module.scss';

type TitleProps = {
    style?:any
    title: string
    shadowTitle: string
    titleColor?: string
    shadowColor?: string
}

const Title:FC<TitleProps> = (props) => {
    const {style={marginTop: '5vh'} ,title, shadowTitle, titleColor='rgb(110, 99, 99);', shadowColor='rgb(179 179 179 / 27%);'} = props
    return (
        <div className={styles.titleSection} style={style}>
          <h1 className={styles.shadowText} style={{color:shadowColor}}>{title}</h1>
          <h1 className={styles.text} style={{color:titleColor}}>{shadowTitle}</h1>
        </div>
    );
};

export default Title;