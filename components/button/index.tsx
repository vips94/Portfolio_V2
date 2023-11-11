import React,{FC} from 'react';
import styles from './button.module.scss';

type CustomButtonProps = {
    children:any
    containerClassName:string
    extraClassName: string
    maskClassName: string
    btnName: string
    currentImage: string
};

const CustomButton:FC<CustomButtonProps> = (props) => {
    const {children,containerClassName,extraClassName,btnName,maskClassName,currentImage} = props;
    return (
        <div className={`${styles["button-container"]} ${styles[containerClassName]}`}>
            <span className={`${styles.mask} ${styles[maskClassName]}`}>{btnName}</span>
            <button className={`${styles.btn} ${styles[extraClassName]}`}
                type="button" name="Hover">
                {children}
            </button>
        </div>
        
    );
};

export default CustomButton;